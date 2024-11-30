import { PrismaClient } from "@prisma/client";
import AppError from "../errors/AppError";

const prisma = new PrismaClient();

const createBookFromDB = async (data: any) => {
  try {
    const check = await prisma.book.findFirst({
      where: { title: data.title },
    });

    if (check) {
      throw new Error("This book is already created");
    }
    const result = await prisma.book.create({
      data,
    });
    return result;
  } catch (err: any) {
    throw new Error(err);
  }
};
const getAllBookFromDB = async (data: any) => {
  const result = await prisma.book.findMany();
  return result;
};

const getSingleBookFromDB = async (data: string) => {
  // console.log(data);

  try {
    const result = await prisma.book.findFirst({
      where: {
        bookId: data,
      },
    });
    if (!result) {
      throw new AppError(500, "invalid book id");
    }
    return result;
  } catch (err: any) {
    throw new Error(err);
  }
  //console.log(result);
};
const updateBookFromDB = async (data: string, updateData: any) => {
  // console.log(data);

  const result = await prisma.book.update({
    where: {
      bookId: data,
    },
    data: updateData,
  });
  //console.log(result);

  return result;
};
const deleteBookFromDB = async (data: string) => {
  // console.log(data);
  try {
    const findRecordInBorrow = await prisma.borrowRecord.findFirst({
      where: {
        bookId: data,
      },
    });
    if (findRecordInBorrow) {
      throw new AppError(500, "This Book is in Borrow");
    }
    const result = await prisma.book.delete({
      where: {
        bookId: data,
      },
    });
    return result;
  } catch (err: any) {
    throw new Error(err);
  }
  //console.log(result);
};

export const userService = {
  createBookFromDB,
  getAllBookFromDB,
  getSingleBookFromDB,
  updateBookFromDB,
  deleteBookFromDB,
};
