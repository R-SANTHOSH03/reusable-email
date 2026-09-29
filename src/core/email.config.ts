import { z } from "zod";

const emailConfigSchema = z.object({
  SMTP_HOST: z.string().min(1),

  SMTP_PORT: z.coerce.number(),

  SMTP_SECURE: z
    .string()
    .transform((value) => value === "true"),

  SMTP_USER: z.string().email(),

  SMTP_PASSWORD: z.string().min(1),

  SMTP_FROM_NAME: z.string().min(1),

  SMTP_FROM_EMAIL: z.string().email(),
});

export function getEmailConfig() {
  return emailConfigSchema.parse({
    SMTP_HOST: process.env.SMTP_HOST,

    SMTP_PORT: process.env.SMTP_PORT,

    SMTP_SECURE: process.env.SMTP_SECURE,

    SMTP_USER: process.env.SMTP_USER,

    SMTP_PASSWORD: process.env.SMTP_PASSWORD,

    SMTP_FROM_NAME: process.env.SMTP_FROM_NAME,

    SMTP_FROM_EMAIL: process.env.SMTP_FROM_EMAIL,
  });
}