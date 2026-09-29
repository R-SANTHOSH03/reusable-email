export interface EmailAttachment {
  filename: string;
  path?: string;
  content?: Buffer | string;
  contentType?: string;
}

export interface SendEmailOptions {
  to: string | string[];

  cc?: string | string[];

  bcc?: string | string[];

  subject: string;

  html?: string;

  text?: string;

  template?: string;

  variables?: Record<string, unknown>;

  attachments?: EmailAttachment[];
}