import express from "express";

const app = express();
const port = 3333
app.use(express.json())

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}, SERVER ON`);
});

export { app };
