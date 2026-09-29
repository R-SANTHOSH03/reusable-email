import { createEmailTransport } from "./email.transport";

import { getEmailConfig } from "./email.config";

import {
  SendEmailOptions,
} from "../types/email.types";

export class EmailService {
  private readonly transporter;

  private readonly config;

  constructor() {
    this.config = getEmailConfig();

    this.transporter =
      createEmailTransport();
  }

  async send(
    options: SendEmailOptions,
  ) {
    const result =
      await this.transporter.sendMail({
        from: {
          name: this.config.SMTP_FROM_NAME,

          address:
            this.config.SMTP_FROM_EMAIL,
        },

        to: options.to,

        cc: options.cc,

        bcc: options.bcc,

        subject: options.subject,

        html: options.html,

        text: options.text,

        attachments:
          options.attachments,
      });

    return {
      success: true,

      messageId: result.messageId,
    };
  }

  async verifyConnection() {
    await this.transporter.verify();

    return {
      success: true,

      message:
        "SMTP connection successful",
    };
  }
}