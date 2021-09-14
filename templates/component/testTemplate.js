export default (componentName) => {
  return `
import React from "react";
import { createTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import ReactDOM from "react-dom";
import { IntlProvider } from "react-intl";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import intlConfig from "translations/react-intl-config";
import ${componentName} from "./${componentName}";

const mockStore = configureMockStore();

const store = mockStore();

const baseTheme = createTheme();

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Provider store={store}>
      <ThemeProvider theme={baseTheme}>
        <IntlProvider {...intlConfig}>
          <${componentName} />
        </IntlProvider>
      </ThemeProvider>
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
`;
};
