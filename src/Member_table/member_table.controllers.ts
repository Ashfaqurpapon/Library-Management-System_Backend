import { Request, Response } from "express";
import sendResponse from "../shared/sendResponse";
import catchAsync from "../shared/catchAsync";
import { memberService } from "./member_table.services";

const createMember = catchAsync(async (req: Request, res: Response) => {
  //console.log(req.body);
  const result = await memberService.createMemberFromDB(req.body);
  console.log("dd");

  console.log(result);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Member Created successfully!",
    data: result,
  });
});
const getAllMembers = catchAsync(async (req: Request, res: Response) => {
  const result = await memberService.getAllMemberFromDB(req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Members retrieved successfully",
    data: result,
  });
});
const getSingleMember = catchAsync(async (req: Request, res: Response) => {
  const { bookId } = req.params;
  const result = await memberService.getSingleMemberFromDB(bookId);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Member retrieved successfully",
    data: result,
  });
});
const updateMember = catchAsync(async (req: Request, res: Response) => {
  const { memberId } = req.params;

  const result = await memberService.updateMemberFromDB(memberId, req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Member updated successfully",
    data: result,
  });
});
const deleteMember = catchAsync(async (req: Request, res: Response) => {
  const { memberId } = req.params;
  const result = await memberService.deleteMemberFromDB(memberId);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Member delete successfully",
    data: null,
  });
});

export const memberController = {
  createMember,
  getAllMembers,
  getSingleMember,
  updateMember,
  deleteMember,
};
