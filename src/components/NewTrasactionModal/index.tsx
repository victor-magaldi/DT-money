import Modal from "react-modal";
import closeImg from "../../assets/close.svg";
import outcomeImg from "../../assets/outcome.svg";
import incomeImg from "../../assets/income.svg";

import * as S from "./styled";
import { useState } from "react";

Modal.setAppElement("#root");

interface NewTrasactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTrasactionModal({
  isOpen,
  onRequestClose,
}: NewTrasactionModalProps) {
  const [type, setType] = useState("deposit");

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
      <S.Container>
        <h2>Cadastrar Transação</h2>

        <input type="text" placeholder="titulo" />
        <input type="number" placeholder="valor" />
        <S.TransactionTypeContainer>
          <S.RadioBox
            type="button"
            className={type === "deposit" ? "active" : ""}
            onClick={() => {
              setType("deposit");
            }}
            isActive={type === "deposit"}
            activeColor={"green"}
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </S.RadioBox>

          <S.RadioBox
            type="button"
            onClick={() => {
              setType("withdraw");
            }}
            isActive={type === "withdraw"}
            activeColor={"red"}
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </S.RadioBox>
        </S.TransactionTypeContainer>
        <input type="text" placeholder="categoria" />
        <button type="submit">Cadastrar</button>
      </S.Container>
    </Modal>
  );
}
