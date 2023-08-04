import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import  store  from "./store";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
      <ChakraProvider>
         <BrowserRouter>
            <App />
         </BrowserRouter>
      </ChakraProvider>
   </Provider>,
  document.querySelector("#root")
);
