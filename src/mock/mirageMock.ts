import { createServer, Model } from "miragejs";

export function startMock() {

    createServer({
        //model define um mini banco de dados do mirage
        models: {
            transaction: Model
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
