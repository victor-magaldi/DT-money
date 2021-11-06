import LogoImg from "../../assets/logo.svg";
import { Container, Content } from "./styled";

export function Header() {
  return (
    <Container>
      <Content>
        <img src={LogoImg} alt="Dt Money" />
        <button type="button">Nova transação</button>
      </Content>
    </Container>
  );
}
