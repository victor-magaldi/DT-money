import { useState } from "react";
import { Dashboard } from "./components/Dashboard/Index";
import { Header } from "./components/Header";
import { NewTrasactionModal } from "./components/NewTrasactionModal";
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
    <>
      <Header handleOpenTrasactionModal={handleOpenTrasactionModal} />
      <GlobalStyle />
      <NewTrasactionModal
        isOpen={isNewTrasactionModalOpen}
        onRequestClose={handleCloseTrasactionModal}
      />

      <Dashboard />
    </>
  );
}
