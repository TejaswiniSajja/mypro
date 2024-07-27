import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const rootElement = document.getElementById('root');
const rootRef = ReactDOM.createRoot(rootElement);
rootRef.render(<App />); // use the CardListUI component
//GlobalContext.js
//import { createContext } from "react";

//const globalContext = createContext();

//export default globalContext;