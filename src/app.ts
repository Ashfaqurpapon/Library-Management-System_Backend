import express, { Application, Request, Response } from "express";
import cors from "cors";
import { booksRoutes } from "./Book_Table/book_table.route";
import { membersRoutes } from "./Member_table/member_table.route";
import { borrowRecordRoutes } from "./BorrowRecord/borrowRecord.route";
import router from "./routers";
import AppError from "./errors/AppError";
import globalErrorHandler from "./middlewares/globalErrorhandler";

const app: Application = express();
app.use(cors());

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.get("/", (req: Request, res: Response) => {
//   res.send({
//     Message: "",
//   });
// });

app.use("/api", router);
app.use("/", (req, res) => {
  if (req.path === "/") {
    res.status(200).send("Welcome to Library Management System");
  } else {
    throw new AppError(404, "This routes is not found");
  }
});

app.use(globalErrorHandler);

//Not Found

export default app;
