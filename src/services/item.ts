import ItemModels from "../models/item";
import { Car } from "../types/car.interface";

/* [POST] service*/
export const insertCars = async (item: Car) => {
  const respondeInsert = await ItemModels.create(item);
  return respondeInsert;
};

/* [GET]s service*/
export const getCars = async () => {
  const items = await ItemModels.find();
  return items;
};

/* [GET] service*/
export const getCar = async (id: string) => {
  const item = await ItemModels.findById({ _id: id });
  return item;
};

/* [PUT] service*/
export const updateCar = async (id: string, data: Partial<Car>) => {
  const updatedItem = await ItemModels.findByIdAndUpdate({ _id: id }, data, { new: true });
  return updatedItem;
};

/* [DELETE] service*/
export const deleteCar = async (id: string) => {
  const deletedItem = await ItemModels.findByIdAndDelete({ _id: id });
  return deletedItem;
};
