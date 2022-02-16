const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const mongoDb = require("./mongodb");

app.use(bodyParser.json());

const corsOptions = {
    origin: "http://localhost:3000",
};

app.use(cors(corsOptions));

app.post("/address-data", async (req, res, next) => {

    try {

        const { address, balance } = req.body;
        const data = { address, balance };

        const db = mongoDb.getDb();
        await db.collection("addresses").insertOne(data);

        res.status(201).json(data);
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

mongoDb.connect();

const port = 5000;

app.listen(port, () => {
    console.log(`SERVER LISTENING ON PORT ${port}`);
});