import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

// express method to render public folder on client side
app.use(express.static("public"));

// middleware for form data
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});
app.post("/submit", (req, res) => {
  const birthYearInput = req.body["birthYear"];
  const currentYear = new Date().getFullYear();
  const age = currentYear - birthYearInput;
  res.render("index.ejs", { age: age });
});
app.listen(port, (req, res) => {
  console.log(`Listening server on the ${port}`);
});
