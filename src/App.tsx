import { useState } from "react";
import Modal from "react-modal";
import { Dashboard } from "./components/Dashboard/Index";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";

Modal.setAppElement("#root");
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
      <Modal
        isOpen={isNewTrasactionModalOpen}
        onRequestClose={handleCloseTrasactionModal}
      >
        <h2>cadastrar transação</h2>
      </Modal>
      <Dashboard />
    </>
  );
}
