import * as S from "./styled";

export function TransactionTable() {
  return (
    <S.Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="title">desenvolvimento web site</td>
            <td className="deposit">R$ 12000,00</td>
            <td>desenvolvimento</td>
            <td>20/02/2021</td>
          </tr>
          <tr>
            <td className="title">Aluguel</td>
            <td className="withdraw">R$ -800,00</td>
            <td>casa</td>
            <td>20/02/2021</td>
          </tr>
        </tbody>
      </table>
    </S.Container>
  );
}
