import { z } from "zod";

// Zod schema for the Book model
const bookSchema = z.object({
  body: z.object({
    title: z.string().min(1, "Title is required").max(255, "Title is too long"), // Validates title
    genre: z.string().min(1, "Genre is required").max(100, "Genre is too long"), // Validates genre
    publishedYear: z
      .number()
      .int("Published year must be an integer")
      .gte(0, "Published year must be a valid year")
      .lte(new Date().getFullYear(), "Published year cannot be in the future"), // Validates publishedYear
    totalCopies: z
      .number()
      .int("Total copies must be an integer")
      .min(1, "Total copies must be at least 1"), // Ensures totalCopies is at least 1
    availableCopies: z
      .number()
      .int("Available copies must be an integer")
      .min(0, "Available copies cannot be negative"), // Basic validation, further checks below
  }),
});

export const bookValidationSchema = {
  bookSchema,
};
