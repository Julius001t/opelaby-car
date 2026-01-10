export const getFavorites = () =>
  JSON.parse(localStorage.getItem("favorites")) || [];

export const toggleFavorite = (car) => {
  const favorites = getFavorites();
  const exists = favorites.find((c) => c.id === car.id);

  const updated = exists
    ? favorites.filter((c) => c.id !== car.id)
    : [...favorites, car];

  localStorage.setItem("favorites", JSON.stringify(updated));
};
