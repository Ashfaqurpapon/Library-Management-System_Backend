import { z } from "zod";

const memberSchema = z.object({
  body: z.object({
    name: z
      .string()
      .min(1, "Name is required")
      .max(100, "Name must not exceed 100 characters"), // Validates name
    email: z.string().email("Invalid email address"), // Ensures a valid email format
    phone: z
      .string()
      .regex(
        /^\d{3}-\d{3}-\d{4}$/,
        "Phone number must be in the format XXX-XXX-XXXX"
      ), // Validates phone number format
    membershipDate: z
      .string()
      .refine(
        (date) => !isNaN(new Date(date).getTime()),
        "Invalid membership date format"
      ), // Ensures membershipDate is a valid date string
  }),
});
export const memberValidationSchema = {
  memberSchema,
};
