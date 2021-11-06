import Modal from "react-modal";
import closeImg from "../../assets/close.svg";

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
        <input type="text" placeholder="categoria" />
        <button type="submit">Cadastrar</button>
      </S.Container>
    </Modal>
  );
}
