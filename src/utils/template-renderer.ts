import Handlebars from "handlebars";
import fs from "node:fs";
import path from "node:path";

export function renderTemplate(
  templateName: string,
  variables: Record<string, unknown> = {},
): string {
  const templatePath = path.join(
    __dirname,
    "../templates",
    `${templateName}.hbs`,
  );

  if (!fs.existsSync(templatePath)) {
    throw new Error(
      `Email template not found: ${templateName}`,
    );
  }

  const templateContent = fs.readFileSync(
    templatePath,
    "utf-8",
  );

  const template = Handlebars.compile(templateContent);

  return template(variables);
}