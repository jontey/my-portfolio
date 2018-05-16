import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import Portfolio from "./containers/Portfolio";
import ReactGA from "react-ga";

import "./styles.scss";

/* Mini.css imports */
import "mini.css/dist/mini-default.css";

ReactGA.initialize("UA-119342735-1");
ReactGA.pageview(window.location.pathname + window.location.search);

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById("root")
  );
};

render(Portfolio);

/* HMR settings */
if (module.hot) {
  module.hot.accept("./containers/Portfolio", () => {
    const Portfolio = require("./containers/Portfolio").default;
    render(Portfolio);
  });
}
