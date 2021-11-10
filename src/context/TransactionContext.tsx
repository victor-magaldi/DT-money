import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";

interface Transaction {
  id: number;
  title: string;
  type: string;
  category: string;
  amount: number;
  createdAt: Date;
}
type DataNewTransaction = Omit<Transaction, "id" | "createdAt">;
// type DataNewTransaction = Pick<
//   Transaction,
//   "title" | "type" | "category" | "amount"
// >;

interface TransactionProviderProps {
  children: React.ReactNode;
}

interface TransactionDataContext {
  transactions: Transaction[];
  createTransaction: (transaction: DataNewTransaction) => Promise<void>;
}
export const TransactionContext = createContext<TransactionDataContext>(
  {} as TransactionDataContext
);

export const TransactionProvider = ({ children }: TransactionProviderProps) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get("/transactions").then((r) => setTransactions(r.data.transactions));
  }, []);

  async function createTransaction(transactionInput: DataNewTransaction) {
    const reponse = await api.post("/transactions", {
      ...transactionInput,
      createdAt: new Date(),
    });
    const { transaction } = reponse?.data;

    setTransactions([...transactions, transaction]);
  }
  return (
    <TransactionContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionContext.Provider>
  );
};