import express, { Request, Response } from "express";
import { memberController } from "./member_table.controllers";
import validateRequest from "../middlewares/validateRequest";
import { memberValidationSchema } from "./member_table_validationSchema";

const router = express.Router();

router.post(
  "/",
  validateRequest(memberValidationSchema.memberSchema),
  memberController.createMember
);
router.get("/", memberController.getAllMembers);
router.get("/:memberId", memberController.getSingleMember);
router.patch("/:memberId", memberController.updateMember);
router.delete("/:memberId", memberController.deleteMember);

export const membersRoutes = router;
