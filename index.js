import express from "express";
import mustacheExpress from "mustache-express";
import path from "path";
import data from "./data.json" assert { type: "json" };

const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set up the public directory
app.use(
	"/public",
	express.static(
		path.join(path.dirname(new URL(import.meta.url).pathname), "public")
	)
);

// Set up mustache as the view engine
app.engine("mustache", mustacheExpress());
app.set("view engine", "mustache");
app.set(
	"views",
	path.join(path.dirname(new URL(import.meta.url).pathname), "views")
);

app.get("/", (req, res) => {
	res.render("index", data);
});

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});

export default app;
