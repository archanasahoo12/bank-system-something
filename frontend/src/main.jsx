import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import App from "./App";
import Transactions from "./components/TransactionPage";
import TransactionForm from "./components/TransactionForm";
import CustomerList from "./components/CustomerList";
import "./index.css";

const root = createRoot(document.getElementById("root"));

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/transactions" element={<Transactions />} />
      <Route path="/customers" element={<CustomerList />} />
      <Route path="/send-money" element={<TransactionForm />} />
    </Routes>
  </Router>,
);
