import Modal from "react-modal";
import closeImg from "../../assets/close.svg";
import outcomeImg from "../../assets/outcome.svg";
import incomeImg from "../../assets/income.svg";

import * as S from "./styled";
import { useState } from "react";
import { api } from "../../services/api";

Modal.setAppElement("#root");

interface NewTrasactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTrasactionModal({
  isOpen,
  onRequestClose,
}: NewTrasactionModalProps) {
  const [dataNewTransaction, setDataNewTransaction] = useState({
    title: "",
    value: 0,
    type: "deposit",
    category: "",
  });

  function handleCreateNewTrasaction(evt: React.FormEvent) {
    evt.preventDefault();

    const data = dataNewTransaction;
    api.post("/transactions", data);
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="icon-modal-close"
      >
        <img src={closeImg} alt="fechar modal" />
      </button>
      <S.Container onSubmit={handleCreateNewTrasaction}>
        <h2>Cadastrar Transação</h2>

        <input
          type="text"
          placeholder="titulo"
          value={dataNewTransaction.title}
          onChange={(e) => {
            setDataNewTransaction({
              ...dataNewTransaction,
              title: e.target.value,
            });
          }}
        />
        <input
          type="number"
          placeholder="valor"
          value={dataNewTransaction.value}
          onChange={(e) => {
            setDataNewTransaction({
              ...dataNewTransaction,
              value: Number(e.target.value),
            });
          }}
        />
        <S.TransactionTypeContainer>
          <S.RadioBox
            type="button"
            className={dataNewTransaction.type === "deposit" ? "active" : ""}
            onClick={() => {
              setDataNewTransaction({
                ...dataNewTransaction,
                type: "deposit",
              });
            }}
            isActive={dataNewTransaction.type === "deposit"}
            activeColor={"green"}
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </S.RadioBox>

          <S.RadioBox
            type="button"
            onClick={() => {
              setDataNewTransaction({
                ...dataNewTransaction,
                type: "withdraw",
              });
            }}
            isActive={dataNewTransaction.type === "withdraw"}
            activeColor={"red"}
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </S.RadioBox>
        </S.TransactionTypeContainer>
        <input
          type="text"
          placeholder="categoria"
          value={dataNewTransaction.category}
          onChange={(e) => {
            setDataNewTransaction({
              ...dataNewTransaction,
              category: e.target.value,
            });
          }}
        />
        <button type="submit">Cadastrar</button>
      </S.Container>
    </Modal>
  );
}
