import express from "express";
import UserService from "../../../domain/account/user/UserService";
import UserController from "./UserController";

const router = express.Router();

router.get("/", UserController.getAll);
router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.get("/id/:id", UserController.getOne);
router.get("/email", UserController.getOneByEmail);

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  const response = await UserService.update(id, data);

  return res.status(response.statusCode).json(response);
});

export default router;
