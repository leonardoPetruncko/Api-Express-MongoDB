import e from "express";

const app = e();

app.get("/", (req , res) => {
    res.status(200).send("Curso de Node.js");
});

export default app;