import express, { request, response } from "express";

import "./database";

const app = express();

app.get("/", (request, response) => {
    return response.json({
        message: "Hello World",
    });
});

app.post("/", (request, response) => {
    return response.json({
        message: "Usuário salvo com sucesso",
    })
})

app.listen(3333, () => console.log("Server is running on port 3333"));