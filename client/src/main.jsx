// Import core React dependencies
import React from "react";
import ReactDOM from "react-dom";

// Import main App component and context
import App from "./App";
import { TransactionsProvider } from "./context/TransactionContext";

// Import global styles
import "./index.css";

// Render the app wrapped in TransactionsProvider for global state management
ReactDOM.render(
  <TransactionsProvider>
    <App />
  </TransactionsProvider>,
  document.getElementById("root"),
);
