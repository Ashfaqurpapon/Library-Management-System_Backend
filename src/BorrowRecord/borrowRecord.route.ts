import express, { Request, Response } from "express";
import { borrowRecordController } from "./borrowRecord.controllers";

const router = express.Router();

router.post("/", borrowRecordController.createBorrowRecord);
router.get("/return", borrowRecordController.returnBorrowRecord);
router.get("/overdue", borrowRecordController.overDueBook);

export const borrowRecordRoutes = router;
