import { PrismaClient } from "@prisma/client";
import AppError from "../errors/AppError";

const prisma = new PrismaClient();

const createMemberFromDB = async (data: any) => {
  console.log(data.email);

  try {
    const check = await prisma.member.findFirst({
      where: { email: data.email },
    });

    if (check) {
      throw new Error("This Email is already registered");
    }
    const result = await prisma.member.create({
      data,
    });
    return result;
  } catch (err: any) {
    throw new Error(err);
  }
};
const getAllMemberFromDB = async (data: any) => {
  const result = await prisma.member.findMany();
  return result;
};

const getSingleMemberFromDB = async (data: string) => {
  // console.log(data);
  try {
    const result = await prisma.member.findFirst({
      where: {
        memberId: data,
      },
    });
    //console.log(result);
    if (!result) {
      throw new AppError(500, "invalid Member id");
    }

    return result;
  } catch (err: any) {
    throw new Error(err);
  }
};
const updateMemberFromDB = async (data: string, updateData: any) => {
  const result = await prisma.member.update({
    where: {
      memberId: data,
    },
    data: updateData,
  });
  //console.log(result);

  return result;
};
const deleteMemberFromDB = async (data: string) => {
  // console.log(data);
  try {
    const findRecordInBorrow = await prisma.borrowRecord.findFirst({
      where: {
        memberId: data,
      },
    });
    if (findRecordInBorrow) {
      throw new AppError(500, "This Member is in Borrow");
    }
    const result = await prisma.member.delete({
      where: {
        memberId: data,
      },
    });
    return result;
  } catch (err: any) {
    throw new Error(err);
  }
  //console.log(result);
};

export const memberService = {
  createMemberFromDB,
  getAllMemberFromDB,
  getSingleMemberFromDB,
  updateMemberFromDB,
  deleteMemberFromDB,
};
