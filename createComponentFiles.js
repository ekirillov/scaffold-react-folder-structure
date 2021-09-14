import fs from "fs";
import componentTemplates from "./templates/component/templates.js";

const writeFile = (path, file, content) => {
  const filePath = `${path}/${file}`;

  fs.writeFile(filePath, content, (err) => {
    if (err) throw err;
    console.log("Created file: ", filePath);
    return true;
  });
};

export default (path, componentName) => {
  console.log(`Creating new component: ${componentName}, ${path}`);

  Object.values(componentTemplates(componentName)).forEach(
    ({ fileName, template }) => {
      writeFile(path, fileName, template);
    }
  );
};
