import express from "express";
import AdminController from "./AdminController";
import AdminService from "../../../domain/account/admin/AdminService";
import { authenticateByJwt } from "../../../auth/auth.services";

const router = express.Router();

router.post("/register", AdminController.register);
router.post("/login", AdminController.login);
router.get("/:id", authenticateByJwt, AdminController.getOne);
router.post("/new/email", AdminController.createFromEmail);
router.put("/:id", authenticateByJwt, async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  const response = await AdminService.update(id, data);

  return res.status(response.statusCode).json(response);
});

router.post("/invite-admins", authenticateByJwt, async (req, res) => {
  const { emails } = req.body;
  const result = await AdminService.inviteAdmins(emails);

  res.status(result.statusCode).json(result);
});

export default router;
