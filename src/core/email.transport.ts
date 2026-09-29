import nodemailer, {
  Transporter,
} from "nodemailer";

import { getEmailConfig } from "./email.config";

export function createEmailTransport(): Transporter {
  const config = getEmailConfig();

  return nodemailer.createTransport({
    host: config.SMTP_HOST,

    port: config.SMTP_PORT,

    secure: config.SMTP_SECURE,

    auth: {
      user: config.SMTP_USER,

      pass: config.SMTP_PASSWORD,
    },
  });
}