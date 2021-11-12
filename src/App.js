import React from "react";
import "./App.css";
import { Header } from "./compoments/Header";
import { Balance } from "./compoments/Balance";
import { IncomeExpenses } from "./compoments/IncomeExpenses";
import { TransactionList } from "./compoments/TransactionList";
import { AddTransaction } from "./compoments/AddTransaction";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
