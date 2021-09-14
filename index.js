import { config } from "dotenv";
import chokidar from "chokidar";
import createComponentFiles from "./createComponentFiles.js";

config();

const log = console.log.bind(console);

const getExcludeSubFoldersRegex = (path) =>
  // https://stackoverflow.com/questions/40967445/javascript-regex-to-ignore-sub-directories-for-chokidar
  new RegExp(
    `${process.env.COMPONENTS_FOLDER_PATH.split("/").join("\\/")}.*[\/].*$`
  );

const componentsWatcher = chokidar
  .watch(process.env.COMPONENTS_FOLDER_PATH, {
    ignored: [
      /node_modules/,
      getExcludeSubFoldersRegex(process.env.COMPONENTS_FOLDER_PATH),
    ],
    ignoreInitial: true,
  })
  .on("ready", () => log("Initial scan complete. Ready for changes"))
  .on("error", (error) => log(`Watcher error: ${error}`))
  .on("addDir", (path) => {
    const componentName = path.replace(/.*\/components\//, "");

    if (!componentName.includes("/") && componentName !== "components") {
      createComponentFiles(path, componentName);
    }
  });
