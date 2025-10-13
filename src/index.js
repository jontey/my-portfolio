import React from "react";
import { createRoot } from "react-dom/client";
import Portfolio from "./containers/Portfolio";
import ReactGA from "react-ga";

/* Tailwind CSS */
import "./tailwind.css";

ReactGA.initialize("UA-119342735-1");
ReactGA.pageview(window.location.pathname + window.location.search);

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<Portfolio />);
