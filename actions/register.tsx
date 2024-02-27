"use server";

import { RegisterSchema } from "@/schemas";
import * as z from "zod";

export const registrer = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid Fields" };
  }

  return { success: "Email Sent!" };
};