import { useState } from "react";
import { Dashboard } from "./components/Dashboard/Index";
import { Header } from "./components/Header";
import { NewTrasactionModal } from "./components/NewTrasactionModal";
import { TransactionProvider } from "./hooks/useTransactions";
import { GlobalStyle } from "./styles/global";

export function App() {
  const [isNewTrasactionModalOpen, setIsNewTrasactionModalOpen] =
    useState(false);

  const handleOpenTrasactionModal = () => {
    setIsNewTrasactionModalOpen(true);
  };
  const handleCloseTrasactionModal = () => {
    setIsNewTrasactionModalOpen(false);
  };

  return (
    <TransactionProvider>
      <Header handleOpenTrasactionModal={handleOpenTrasactionModal} />
      <GlobalStyle />
      <NewTrasactionModal
        isOpen={isNewTrasactionModalOpen}
        onRequestClose={handleCloseTrasactionModal}
      />

      <Dashboard />
    </TransactionProvider>
  );
}
