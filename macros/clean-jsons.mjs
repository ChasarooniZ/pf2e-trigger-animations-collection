/*
    Sourced from https://github.com/MrVauxs/pf2e-graphics/blob/v1-alpha/scripts/cleanJSONs.ts (@Spappz)
*/
import fs from "node:fs";
import p from "picocolors";
import {
  Log,
  getAllJsonFiles,
  safeJSONParse,
} from "./helpers.mjs";

const JSON_PATH = process.argv[2] || "./animations";

const files = getAllJsonFiles(JSON_PATH);
console.log(files.length);
function cleanFiles(files) {
  let cleaned = 0;
  const failed = new Set();

  files.forEach(async (filePath) => {
    const file = fs.readFileSync(filePath, { encoding: "utf8" });
    const json = safeJSONParse(file);
    if (json.success) {
      const cleanFile = `${JSON.stringify(json.data, undefined, "\t")}\n`;
      if (cleanFile !== file) {
        cleaned++;
        fs.writeFileSync(filePath, cleanFile, { encoding: "utf8" });
      }
    } else {
      failed.add(filePath);
    }
  });

  return {
    cleaned,
    failed,
  };
}

const summary = cleanFiles(files);

if (summary.cleaned)
  Log.info(
    p.green(
      `Cleaned ${p.bold(summary.cleaned)} file${summary.cleaned === 1 ? "" : "s"}.`,
    ),
  );
if (summary.failed.size) {
  Log.details({
    level: "warning",
    title: p.yellow(
      `Failed to clean ${p.bold(summary.failed.size)} file${summary.failed.size === 1 ? "" : "s"}.`,
    ),
    messages: Array.from(summary.failed),
  });
}
if (!summary.cleaned && !summary.failed.size)
  Log.info(p.blue("No files needed cleaning."));
