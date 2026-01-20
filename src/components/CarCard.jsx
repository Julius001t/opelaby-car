import useFavorites from "../hooks/useFavorites";

const CarCard = ({ car }) => {
  const { toggleFavorite, isFavorite } = useFavorites();

  // ✅ Prevent rendering if car is not ready
  if (!car) return null;

  const phoneNumber = "2348073972855";
  const message = encodeURIComponent(
    `Hello, I'm interested in the ${car.name}. Please share more details.`
  );
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden relative">
      {/* Favorite */}
      <button
        onClick={() => toggleFavorite(car)}
        className="absolute top-3 right-3 text-2xl z-10"
      >
        {isFavorite(car.id) ? "❤️" : "🤍"}
      </button>

      {/* Image (safe check) */}
      {car.image && (
        <img
          src={car.image}
          alt={car.name}
          className="h-48 w-full object-cover"
        />
      )}

      <div className="p-4">
        <h3 className="font-bold text-lg">{car.name}</h3>

        <p className="text-red-600 font-semibold mt-1">
          ₦ {Number(car.price).toLocaleString()}
        </p>

        <p className="text-sm text-gray-600 mt-1">
          {car.city}, {car.location}
        </p>

        <p className="text-xs text-gray-500 mt-2">
          {car.year} • {Number(car.mileage).toLocaleString()} km
        </p>

        {/* WhatsApp Button */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-medium"
        >
          💬 Contact on WhatsApp
        </a>
      </div>
    </div>
  );
};

export default CarCard;
