const express = require("express");
const app = express();

app.get("/api/status", (req, res) => {
	res.status(200).send("API online!");
});

module.exports = app;
