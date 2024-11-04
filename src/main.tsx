import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";

import "./demos/ipc";
import { Provider as ChakraProvider } from "./components/ui/provider";
import { ColorModeProvider } from "./components/ui/color-mode";
// If you want use Node.js, the`nodeIntegration` needs to be enabled in the Main process.
// import './demos/node'

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <ColorModeProvider>
        <App />
      </ColorModeProvider>
    </ChakraProvider>
  </React.StrictMode>
);

postMessage({ payload: "removeLoading" }, "*");
