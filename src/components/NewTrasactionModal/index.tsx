import Modal from "react-modal";

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
