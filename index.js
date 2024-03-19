const express = require("express");
const mustacheExpress = require("mustache-express");
const data = require("./data.json");

const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set up the public directory
app.use("/public", express.static("public"));
app.use(express.static(__dirname + "/public"));
// ---

// Set images folder as static
app.use("/images", express.static("images"));
app.use(express.static(__dirname + "/images"));
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

module.exports = app;
