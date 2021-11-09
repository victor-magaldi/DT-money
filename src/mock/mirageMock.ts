import { createServer, Model } from "miragejs";


export function startMock() {

    createServer({
        //model define um mini banco de dados do mirage
        models: {
            transaction: Model
        },
        seeds(server) {
            server.db.loadData({
                transactions: [
                    {
                        id: 1,
                        title: "freelance website",
                        type: "deposit",
                        amount: 6000,
                        category: "desenvolvimento",
                        createdAt: new Date('2021-03-10 08:00:00')
                    },
                    {
                        id: 2,
                        title: "aluguel",
                        type: "withdraw",
                        amount: 1100,
                        category: "casa",
                        createdAt: new Date('2021-03-10 08:00:00')
                    },

                ]
            }
            )
        },
        routes() {
            this.namespace = "api";
            this.get("/transactions", () => {
                return this.schema.all("transaction")

            });
            this.post("/transactions", (schema, request) => {
                const data = JSON.parse(request.requestBody);

                //nome da model
                return schema.create("transaction", data)
            })
        },
    });

}
