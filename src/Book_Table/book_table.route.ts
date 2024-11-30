import express, { Request, Response } from "express";
import { bookController } from "./book_table.controllers";
import validateRequest from "../middlewares/validateRequest";
import { bookValidationSchema } from "./book_table.validationScema";

const router = express.Router();

router.post(
  "/",
  validateRequest(bookValidationSchema.bookSchema),

  bookController.createBook
);
router.get("/", bookController.getAllBooks);
router.get("/:bookId", bookController.getSingleBook);
router.patch("/:bookId", bookController.updateBook);
router.delete("/:bookId", bookController.deleteBook);

export const booksRoutes = router;
