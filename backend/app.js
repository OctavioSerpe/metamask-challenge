const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// const mongoDb = require("./mongodb");

app.use(bodyParser.json());

app.post("/address-data", async (req, res, next) => {

    try {

        const { address, amount } = req.body;
        const data = { address, amount };

        await db.collection("metamask").insertOne(data);

        res.json(data);
    } catch (err) {
        next(err);
    }
});

app.use((req, res, next) => {
    const error = new Error("Endpoint does not exist");
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    const status = error.status || 500;
    const message = error.message || "Internal server error";
    res.status(status).json({ message });
});

// mongoDb.connect();

const port = 5000;

app.listen(port, () => {
    console.log(`SERVER LISTENING ON PORT ${port}`);
});