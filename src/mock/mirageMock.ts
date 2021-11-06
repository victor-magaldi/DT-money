import { createServer } from "miragejs";

export function startMock() {

    createServer({
        routes() {
            this.namespace = "api";
            this.get("/transactions", () => [
                {
                    id: 1,
                    title: "transaction 1",
                    amount: 400,
                    type: "deposit",
                    category: "food",
                    createdAt: new Date(),
                },
                {
                    id: 2,
                    title: "transaction 1",
                    amount: 400,
                    type: "deposit",
                    category: "food",
                    createdAt: new Date(),
                },
                {
                    id: 3,
                    title: "transaction 1",
                    amount: 400,
                    type: "deposit",
                    category: "food",
                    createdAt: new Date(),
                },
            ]);
        },
    });

}
