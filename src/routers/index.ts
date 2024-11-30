import { Router } from "express";
import { booksRoutes } from "../Book_Table/book_table.route";
import { membersRoutes } from "../Member_table/member_table.route";
import { borrowRecordRoutes } from "../BorrowRecord/borrowRecord.route";
import { returnRoutes } from "../BorrowRecord/return_route.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/books",
    route: booksRoutes,
  },
  {
    path: "/members",
    route: membersRoutes,
  },
  {
    path: "/borrow",
    route: borrowRecordRoutes,
  },
  {
    path: "",
    route: returnRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
