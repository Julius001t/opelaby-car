import { useEffect, useState } from "react";

const STORAGE_KEY = "favorite_cars";

const useFavorites = () => {
  const [favorites, setFavorites] = useState(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (car) => {
    setFavorites((prev) => {
      const exists = prev.find((item) => item.id === car.id);
      if (exists) {
        return prev.filter((item) => item.id !== car.id);
      }
      return [...prev, car];
    });
  };

  const isFavorite = (id) => {
    return favorites.some((car) => car.id === id);
  };

  return {
    favorites,
    toggleFavorite,
    isFavorite,
  };
};

export default useFavorites;
