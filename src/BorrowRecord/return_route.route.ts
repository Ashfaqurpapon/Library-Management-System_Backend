import express, { Request, Response } from "express";
import { borrowRecordController } from "./borrowRecord.controllers";

const router = express.Router();

router.get("/return", borrowRecordController.returnBorrowRecord);

export const returnRoutes = router;
