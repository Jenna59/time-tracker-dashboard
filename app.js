require("dotenv").config();
const express = require("express");
const app = express();
const DEV_PORT = process.env.PORT

app.get("/", (req, res) => {
  res.sendFile("index.html", {root: __dirname});
}) 

app.use(express.static("public"))

app.listen(DEV_PORT, () => {
  console.log(`Server running at http://localhost:${DEV_PORT}/`)
})

