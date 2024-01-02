const express = require("express");

const routes = require("./routes");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");

  next();
});
//Or we can use middleware npm i cors
//const cors = require('cors');
//app.use(cors());
app.get("/", (req, res) => {
  res.send("RESTful service");
});

app.use(routes);

app.listen(3030, () => console.log("Server is listening on port 3030..."));
