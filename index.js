import express from "express";
import mustacheExpress from "mustache-express";
import data from "./data.json" assert { type: "json" };

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set up mustache as the view engine
app.engine(".mustache", mustacheExpress());
app.set("view engine", "mustache");
// ---

app.get("/", (req, res) => {
	res.render("index", data);
});

app.listen(3000, () => {
	console.log("Server is running on port 3000");
});
