import fs from "node:fs";
import path from "node:path";

export class Log {
  /**
   * Log a general message.
   * @param message
   */
  static info = (message = "", annotation) => {
    if (process.env.GITHUB_ACTIONS && annotation)
      return core.notice(message, annotation);
    return console.log(message);
  };

  /**
   * Log a warning.
   * @param message
   */
  static warning = (message, annotation) => {
    if (process.env.GITHUB_ACTIONS) return core.warning(message, annotation);
    return console.warn(message);
  };

  /**
   * Log an error and set the exit code to 1.
   * @param message
   */
  static error = (message = "", annotation) => {
    process.exitCode = 1;
    if (process.env.GITHUB_ACTIONS) return core.error(message, annotation);
    return console.error(message);
  };

  /**
   * Log a block of information. In GitHub Actions' logs, this block is automatically collapsed into the `title`.
   * @param data
   * @param data.level The message type to log at (default = "info").
   * @param data.title A short header for the section (default = "Details").
   * @param data.messages The list of messages.
   */
  static details = (data) => {
    data.level = data.level ?? "info";
    data.title = data.title ?? "Details";

    if (process.env.GITHUB_ACTIONS) {
      core.startGroup(data.title);
      for (const message of data.messages) {
        this.detailsMessage(message, data.level);
      }
      core.endGroup();
    } else {
      console.group(data.title);
      for (const message of data.messages) {
        this.detailsMessage(message, data.level);
      }
      console.groupEnd();
    }
  };

  static detailsMessage = (message, level = "info") => {
    if (typeof message === "string") return Log[level](message);
    if ("annotation" in message)
      return Log[level](message.message, message.annotation);
    return this.details({
      level,
      title: message.title ?? "Details",
      messages: message.messages,
    });
  };

  /**
   * Prints new lines to the log.
   * @param count The number of new lines to print (default = 1).
   */
  static newLine = (count = 1) => {
    console.log("\n".repeat(count - 1));
  };

  /**
   * Joins two strings together with some whitespace padding to create consistent columns.
   * @param leftString The string for the left-hand column.
   * @param rightString The string for the right-hand column.
   * @returns A single string composed of `leftString` and `rightString`, plus an appropriate amount of whitespace padding.
   */
  static padToColumn = (leftString, rightString) => {
    const MIN_COLUMN_WIDTH = 55;
    const MIN_COLUMN_SEPARATION = 3;

    const columnSeparation = Math.max(
      MIN_COLUMN_WIDTH - leftString.length,
      MIN_COLUMN_SEPARATION,
    );

    return `${leftString}${" ".repeat(columnSeparation)}${rightString}`;
  };
}

export function getFilesRecursively(targetPath) {
  let fileList = [];
  try {
    fs.readdirSync(targetPath).forEach((file) => {
      const filePath = path.join(targetPath, file);
      if (fs.statSync(filePath).isDirectory()) {
        fileList = fileList.concat(getFilesRecursively(filePath));
      } else {
        fileList.push(filePath);
      }
    });
    return fileList;
  } catch (e) {
    if (fs.existsSync(targetPath)) return [targetPath];
    throw e;
  }
}

export function safeJSONParse(input) {
  try {
    return {
      success: true,
      data: JSON.parse(input),
    };
  } catch {
    return { success: false };
  }
}

/**
 * Recursively get all JSON files from a directory
 * @param {string} dir - Directory to search
 * @returns {string[]} Array of file paths
 */
export function getAllJsonFiles(dir) {
  if (!fs.existsSync(dir)) {
    console.log(`Directory ${dir} not found, skipping trigger combination`);
    return [];
  }

  const files = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...getAllJsonFiles(fullPath));
    } else if (
      entry.isFile() &&
      entry.name.endsWith(".json") &&
      !entry.name.endsWith("triggers.json")
    ) {
      files.push(fullPath);
    }
  }

  return files;
}

// Stolen from the pf2e system
export function sluggify(text2, { camel = null } = {}) {
  if (typeof text2 != "string")
    return (console.warn("Non-string argument passed to `sluggify`"), "");
  if (text2 === "-") return text2;
  switch (camel) {
    case null:
      return text2
        .replace(lowerCaseThenUpperCaseRE, "$1-$2")
        .toLowerCase()
        .replace(/['’]/g, "")
        .replace(nonWordCharacterRE, " ")
        .trim()
        .replace(/[-\s]+/g, "-");
    case "bactrian": {
      const dromedary = sluggify(text2, { camel: "dromedary" });
      return dromedary.charAt(0).toUpperCase() + dromedary.slice(1);
    }
    case "dromedary":
      return text2
        .replace(nonWordCharacterHyphenOrSpaceRE, "")
        .replace(/[-_]+/g, " ")
        .replace(upperOrWordBoundariedLowerRE, (part, index2) =>
          index2 === 0 ? part.toLowerCase() : part.toUpperCase(),
        )
        .replace(/\s+/g, "");
    default:
      throw ErrorPF2e("I don't think that's a real camel.");
  }
}
