import "../styles/style.less";

import * as React from "react";
import * as ReactDOM from "react-dom";

import { Processor } from "./components/processor";

ReactDOM.render(
    <Processor />,
    document.getElementById("processor-container")
);