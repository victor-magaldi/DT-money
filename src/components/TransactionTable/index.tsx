import { useEffect, useState } from "react";
import { api } from "../../services/api";
import * as S from "./styled";

interface Transaction {
  id: number;
  title: string;
  type: string;
  category: string;
  amount: number;
  createdAt: Date;
}
export function TransactionTable() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  useEffect(() => {
    api.get("/transactions").then((r) => setTransactions(r.data.transactions));
  }, []);

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
                <td className="deposit">R$ {String(transaction.amount)}</td>
                <td>{transaction.category}</td>
                <td>{transaction.createdAt}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </S.Container>
  );
}
