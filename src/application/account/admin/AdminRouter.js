import express from "express";
import AdminController from "./AdminController";

const router = express.Router();

router.get("/", AdminController.getAll);
router.post("/register", AdminController.register);
router.post("/login", AdminController.login);

export default router;