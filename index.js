// import express from "express";
// import mustacheExpress from "mustache-express";
// import path from "path";
// import data from "./data.json" assert { type: "json" };

const express = require("express");
const mustacheExpress = require("mustache-express");
const data = require("./data.json");

const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static("public"));

// Set up the public directory
app.use("/public", express.static("public"));
app.use(express.static(__dirname + "/public"));
// ---

// Set up mustache as the view engine
app.engine("mustache", mustacheExpress());
app.set("view engine", "mustache");
app.set("views", __dirname + "/views");
// ---

app.get("/", (req, res) => {
	res.render("index", data);
});

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});

// export default app;
module.exports = app;
