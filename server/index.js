const express = require("express");

const routes = require("./routes");

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', '*')

  next();
})

app.get("/", (req, res) => {
  res.send("RESTful service");
});

app.use(routes);

app.listen(3030, () => console.log("Server is listening on port 3030..."));
