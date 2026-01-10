import { cars } from "../data/cars";

export const fetchCars = async () => {
  // simulate API delay
  await new Promise((res) => setTimeout(res, 800));
  return cars;
};
