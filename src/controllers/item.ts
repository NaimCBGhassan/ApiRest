import { Request, Response } from "express";
import ItemModels from "../models/item";
import { handleHttp } from "../utils/error.handle";
import { insertCars, getCars, getCar, updateCar, deleteCar } from "../services/item";

/* [GET]s ITEMS */
export const getItems = async (req: Request, res: Response) => {
  try {
    const items = await getCars();
    return res.send(items);
  } catch (e) {
    handleHttp(res, "ERROR_GET_ITEMS", e);
  }
};

/* [GET] ITEM */
export const getItem = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const item = await getCar(id);
    if (!item) {
      return res.status(404).send({ message: "NOT_FOUND" });
    }
    return res.send(item);
  } catch (e) {
    handleHttp(res, "ERROR_GET_ITEM", e);
  }
};

/* [PUT] ITEM */
export const updateItem = async ({ params, body }: Request, res: Response) => {
  try {
    const { id } = params;
    const item = await updateCar(id, body);
    if (!item) {
      return res.status(404).send({ message: "NOT_FOUND" });
    }
    return res.send(item);
  } catch (e) {
    handleHttp(res, "ERROR_UPDATE_ITEM", e);
  }
};

/* [POST] ITEM */
export const postItem = async ({ body }: Request, res: Response) => {
  try {
    const newItem = await insertCars(body);
    res.json(newItem);
  } catch (e) {
    handleHttp(res, "ERROR_CREATE_ITEM", e);
  }
};

/* [DELETE] ITEM */
export const deleteItem = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const item = await deleteCar(id);
    if (!item) {
      return res.status(404).send({ message: "NOT_FOUND" });
    }
    return res.send(item);
  } catch (e) {
    handleHttp(res, "ERROR_DELETE_ITEM", e);
  }
};
