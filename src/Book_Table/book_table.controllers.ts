import { NextFunction, Request, Response } from "express";
import { userService } from "./book_table.services";
import sendResponse from "../shared/sendResponse";
import catchAsync from "../shared/catchAsync";

const createBook = catchAsync(async (req: Request, res: Response) => {
  //console.log(req.body);
  const result = await userService.createBookFromDB(req.body);
  //console.log(result);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Book Created successfully!",
    data: result,
  });
});
const getAllBooks = catchAsync(async (req: Request, res: Response) => {
  const result = await userService.getAllBookFromDB(req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Books retrieved successfully",
    data: result,
  });
});
const getSingleBook = catchAsync(async (req: Request, res: Response) => {
  const { bookId } = req.params;

  const result = await userService.getSingleBookFromDB(bookId);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Book retrieved successfully",
    data: result,
  });
});
const updateBook = catchAsync(async (req: Request, res: Response) => {
  const { bookId } = req.params;
  const result = await userService.updateBookFromDB(bookId, req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Book updated successfully",
    data: result,
  });
});
const deleteBook = catchAsync(async (req: Request, res: Response) => {
  const { bookId } = req.params;
  const result = await userService.deleteBookFromDB(bookId);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Book delete successfully",
    data: null,
  });
});

export const bookController = {
  createBook,
  getAllBooks,
  getSingleBook,
  updateBook,
  deleteBook,
};
