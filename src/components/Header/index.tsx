import LogoImg from "../../assets/logo.svg";
import { Container, Content } from "./styled";

interface HeaderProps {
  handleOpenTrasactionModal: () => void;
}
export function Header({ handleOpenTrasactionModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={LogoImg} alt="Dt Money" />
        <button type="button" onClick={handleOpenTrasactionModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
}
