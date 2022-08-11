const express = require("express");
const app = express();
const login = require("./login");
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    methods: ["GET", "POST", "OPTIONS"],
  })
);

app.get("/", function (req, res) {
  res.send("home");
});
app.get("/login", (req, res) => {
  res.send("login");
});
app.post("/login", login.post);

const PORT = 4000;
function handleListen() {
  console.log(`Listen on ${PORT} port`);
}
app.listen(PORT, handleListen);
