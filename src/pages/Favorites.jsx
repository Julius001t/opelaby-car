import useFavorites from "../hooks/useFavorites";
import CarCard from "../components/CarCard";

const Favorites = () => {
  const { favorites } = useFavorites();

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold mb-8">My Favorites ❤️</h2>

      {favorites.length === 0 ? (
        <p className="text-gray-500">No favorite cars yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {favorites.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Favorites;
