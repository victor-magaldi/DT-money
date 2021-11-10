import * as S from "./styled";
import IncomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";

export function Summary() {
  return (
    <S.Container>
      <div>
        <header>
          <p>Entrada</p>
          <img src={IncomeImg} alt="Entradas" />
        </header>
        <strong>R$ 1000,00</strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Entradas" />
        </header>
        <strong>R$ -500,00</strong>
      </div>

      <div className="highlight-bg">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Entradas" />
        </header>
        <strong>R$ 1000,00</strong>
      </div>
    </S.Container>
  );
}
