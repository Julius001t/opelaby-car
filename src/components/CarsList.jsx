import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { fetchCars } from "../api/fetchCars";
import CarCard from "./CarCard";
import CarSkeleton from "./CarSkeleton";

const CARS_PER_PAGE = 16;

const CarsList = ({ filters }) => {
  const { data: cars = [], isLoading } = useQuery({
    queryKey: ["cars"],
    queryFn: fetchCars,
  });

  const [currentPage, setCurrentPage] = useState(1);

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [filters]);

  if (isLoading) {
    return (
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <CarSkeleton key={i} />
          ))}
        </div>
      </section>
    );
  }

  const filteredCars = cars.filter((car) => {
    const searchMatch = car.name
      .toLowerCase()
      .includes(filters.search.toLowerCase());

    const cityMatch = !filters.city || car.city === filters.city;
    const brandMatch = !filters.brand || car.brand === filters.brand;

    const priceMatch = (() => {
      if (!filters.price) return true;
      if (filters.price === "lt2") return car.price < 2000000;
      if (filters.price === "2-3")
        return car.price >= 2000000 && car.price <= 3000000;
      if (filters.price === "3-4")
        return car.price >= 3000000 && car.price <= 4000000;
      if (filters.price === "gt4") return car.price > 4000000;
      return true;
    })();

    return searchMatch && cityMatch && brandMatch && priceMatch;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredCars.length / CARS_PER_PAGE);
  const start = (currentPage - 1) * CARS_PER_PAGE;
  const paginatedCars = filteredCars.slice(
    start,
    start + CARS_PER_PAGE
  );

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      {/* Cars Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {paginatedCars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>

      {filteredCars.length === 0 && (
        <p className="text-center text-gray-500 mt-10">
          No cars found.
        </p>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-10">
          {Array.from({ length: totalPages }).map((_, i) => {
            const page = i + 1;
            return (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-4 py-2 rounded-lg border text-sm font-medium ${
                  currentPage === page
                    ? "bg-red-600 text-white"
                    : "bg-white hover:bg-gray-100"
                }`}
              >
                {page}
              </button>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default CarsList;
