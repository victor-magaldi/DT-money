import { useContext, useState } from "react";

import { TransactionContext } from "../../context/TransactionContext";
import Modal from "react-modal";

import closeImg from "../../assets/close.svg";
import outcomeImg from "../../assets/outcome.svg";
import incomeImg from "../../assets/income.svg";

import * as S from "./styled";

Modal.setAppElement("#root");

interface NewTrasactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTrasactionModal({
  isOpen,
  onRequestClose,
}: NewTrasactionModalProps) {
  const { createTransaction } = useContext(TransactionContext);
  const [dataNewTransaction, setDataNewTransaction] = useState({
    title: "",
    amount: 0,
    type: "deposit",
    category: "",
  });

  async function handleCreateNewTrasaction(evt: React.FormEvent) {
    evt.preventDefault();

    const data = dataNewTransaction;
    await createTransaction(data);
    onRequestClose();
    setDataNewTransaction({
      title: "",
      amount: 0,
      type: "deposit",
      category: "",
    });
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
          required
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
          required
          value={dataNewTransaction.amount}
          onChange={(e) => {
            setDataNewTransaction({
              ...dataNewTransaction,
              amount: Number(e.target.value),
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
          required
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
