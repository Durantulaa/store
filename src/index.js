import React from "react";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { ProductsProvider } from "./context/products_context";
import { FilterProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { UserProvider } from "./context/user_context";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

const container = document.getElementById("root");
const root = createRoot(container);
const app = (
    <ProductsProvider>
      <FilterProvider>
        <App />
      </FilterProvider>
    </ProductsProvider>
);

root.render(app);

//<StrictMode>