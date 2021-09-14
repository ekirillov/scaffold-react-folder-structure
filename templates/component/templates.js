import indexTemplate from "./indexTemplate.js";
import componentTemplate from "./componentTemplate.js";
import stylesTemplate from "./stylesTemplate.js";
import testTemplate from "./testTemplate.js";

export default (componentName) => ({
  index: {
    fileName: "index.js",
    template: indexTemplate(componentName),
  },
  component: {
    fileName: `${componentName}.js`,
    template: componentTemplate(componentName),
  },
  styles: {
    fileName: `${componentName}.styles.js`,
    template: stylesTemplate,
  },
  test: {
    fileName: `${componentName}.test.js`,
    template: testTemplate(componentName),
  },
});
