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
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <h2>cadastrar transação</h2>
      <S.Container />
    </Modal>
  );
}
