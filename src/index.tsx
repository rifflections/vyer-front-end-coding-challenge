import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./app";

const container = document.getElementById("app");
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  container
);
