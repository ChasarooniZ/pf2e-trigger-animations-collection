import fs from "node:fs";

const filePath = "./animations.json";
fs.writeFileSync(filePath, "[]", { encoding: "utf8" });
