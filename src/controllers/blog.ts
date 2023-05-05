import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";

/* [GET] BlogS */
export const getBlogs = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, "ERROR_GET_BLOGS");
  }
};

/* [GET] Blog */
export const getBlog = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, "ERROR_GET_BLOG");
  }
};

/* [PUT] Blog */
export const updateBlog = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, "ERROR_UPDATE_BLOG");
  }
};

/* [POST] Blog */
export const postBlog = ({ body }: Request, res: Response) => {
  try {
    res.send(body);
  } catch (e) {
    handleHttp(res, "ERROR_CREATE_BLOG");
  }
};

/* [DELETE] Blog */
export const deleteBlog = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, "ERROR_DELETE_BLOG");
  }
};
