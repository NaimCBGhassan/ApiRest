import { Router } from "express";
import { readdirSync } from "fs";

const PATH_ROUTER = `${__dirname}`;
console.log(PATH_ROUTER);

const router = Router();

/* 
input : index.ts item.ts
output: index, item
*/
const cleanFileName = (fileName: string) => {
  const file = fileName.split(".").shift();
  return file;
};

readdirSync(PATH_ROUTER).filter((fileName) => {
  console.log(cleanFileName(fileName));
});

export { router };
