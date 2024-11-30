import { Request, Response } from "express";
import sendResponse from "../shared/sendResponse";
import catchAsync from "../shared/catchAsync";
import { borrowRecordService } from "./borrowRecord.services";
import { log } from "console";

const createBorrowRecord = catchAsync(async (req: Request, res: Response) => {
  //console.log(req.body);
  const result = await borrowRecordService.createBorrowRecordFromDB(req.body);
  //console.log(result);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Book borrowed successfully!",
    data: result,
  });
});
const returnBorrowRecord = catchAsync(async (req: Request, res: Response) => {
  const result = await borrowRecordService.returnBorrowRecordFromDB(req.body);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Book returned successfully!",
    data: null,
  });
});
const overDueBook = catchAsync(async (req: Request, res: Response) => {
  const result = await borrowRecordService.overDueBookFromDB(req.body);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Overdue borrow list fetched!",
    data: result,
  });
});

export const borrowRecordController = {
  createBorrowRecord,
  returnBorrowRecord,
  overDueBook,
};
