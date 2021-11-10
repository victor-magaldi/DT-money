import { useContext } from "react";
import { TransactionContext } from "../../context/TransactionContext";

import * as S from "./styled";

export function TransactionTable() {
  const transactions = useContext(TransactionContext);

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
          {transactions.map((transaction) => {
            return (
              <tr key={transaction.id}>
                <td className={transaction.title}>{transaction.title}</td>
                <td className={transaction.type}>
                  {transaction.type === "withdraw" ? "-" : ""}
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(transaction.amount)}
                </td>
                <td>{transaction.category}</td>
                <td>
                  {new Intl.DateTimeFormat("pt-BR").format(
                    new Date(transaction.createdAt)
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </S.Container>
  );
}
