import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createBorrowRecordFromDB = async (data: any) => {
  try {
    const findBook = await prisma.book.findFirst({
      where: {
        bookId: data.bookId,
      },
    });

    if (!findBook) {
      throw new Error("Book not found");
    }

    if (findBook.availableCopies <= 0) {
      throw new Error("No available copies of the book to borrow");
    }

    const findMember = await prisma.member.findFirst({
      where: {
        memberId: data.memberId,
      },
    });

    if (!findMember) {
      throw new Error("Member not found");
    }

    const result = await prisma.borrowRecord.create({
      data,
    });

    await prisma.book.update({
      where: { bookId: data.bookId },
      data: { availableCopies: findBook.availableCopies - 1 },
    });

    return result;
  } catch (error) {
    console.error("Error creating borrow record:", error);
    throw error;
  }
};

const returnBorrowRecordFromDB = async (data: any) => {
  try {
    const findBrrow = await prisma.borrowRecord.findFirst({
      where: {
        borrowId: data.borrowId,
      },
    });
    //console.log(findBrrow);

    if (!findBrrow) {
      throw new Error("Borrow Record not found");
    }
    const findBook = await prisma.book.findFirst({
      where: {
        bookId: findBrrow.bookId,
      },
    });
    if (!findBook) {
      throw new Error("Book not found");
    }
    await prisma.borrowRecord.delete({
      where: { borrowId: data.borrowId },
    });

    const result = await prisma.book.update({
      where: { bookId: findBook.bookId },
      data: { availableCopies: findBook.availableCopies + 1 },
    });

    return result;
  } catch (err: any) {
    throw new Error(err);
  }
};

const overDueBookFromDB = async (data: any) => {
  const overdueDate = new Date();
  overdueDate.setDate(overdueDate.getDate() - 14);

  const overdueBorrowRecords = await prisma.borrowRecord.findMany({
    where: {
      returnDate: null,
      borrowDate: { lte: overdueDate },
    },
    include: {
      book: true,
      member: true,
    },
  });

  const dataOver = overdueBorrowRecords.map((record) => {
    const overdueDays =
      Math.ceil(
        (new Date().getTime() - new Date(record.borrowDate).getTime()) /
          (1000 * 60 * 60 * 24)
      ) - 14;

    return {
      borrowId: record.borrowId,
      bookTitle: record.book.title,
      borrowerName: record.member.name,
      overdueDays,
    };
  });
  return dataOver;
};

export const borrowRecordService = {
  createBorrowRecordFromDB,
  returnBorrowRecordFromDB,
  overDueBookFromDB,
};
