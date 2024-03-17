// import express from "express";
// import mustacheExpress from "mustache-express";
// import data from "./data.json" assert { type: "json" };

const express = require("express");
const mustacheExpress = require("mustache-express");
const data = require("./data.json");

const port = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static("public"));

// Set up mustache as the view engine
app.engine(".mustache", mustacheExpress());
app.set("views", "./views");
app.set("view engine", "mustache");
// ---

app.get("/", (req, res) => {
	res.render("index", data);
});

app.listen(port, () => {
	console.log("Server is running on port 3000");
});

// export default app;
module.exports = app;
