import express from "express";
import UserService from "../../../domain/account/user/UserService";
import UserController from "./UserController";
import { authenticateByJwt } from "../../../auth/auth.services";

const router = express.Router();

router.get("/", authenticateByJwt, UserController.getAll);
router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.get("/id/:id", authenticateByJwt, UserController.getOne);
router.get("/email", authenticateByJwt, UserController.getOneByEmail);

router.put("/:id", authenticateByJwt, async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  const response = await UserService.update(id, data);

  return res.status(response.statusCode).json(response);
});

export default router;
