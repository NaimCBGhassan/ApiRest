import { Router } from "express";
import { loginCtrl, registerCtrl } from "../controllers/auth";

const router = Router();

/* http://localhost:5000/api/auth */

router.post("/register", registerCtrl); // [POST] register
router.post("/login", loginCtrl); // [POST] login

export { router };
