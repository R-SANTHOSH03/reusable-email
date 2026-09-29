const fs = require("fs");
const path = require("path");

const source = path.join(__dirname, "..", "src", "templates");
const destination = path.join(__dirname, "..", "dist", "templates");

fs.mkdirSync(destination, { recursive: true });

for (const file of fs.readdirSync(source)) {
  if (file.endsWith(".hbs")) {
    fs.copyFileSync(
      path.join(source, file),
      path.join(destination, file)
    );
  }
}

console.log("Email templates copied successfully.");