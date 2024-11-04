import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";

import "./demos/ipc";
import { Provider } from "./components/ui/provider";
// If you want use Node.js, the`nodeIntegration` needs to be enabled in the Main process.
// import './demos/node'

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>
);

postMessage({ payload: "removeLoading" }, "*");
