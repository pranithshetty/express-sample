const express = require("express");
const users = require("./data.json");
const userRouter = require("./routes/user.routes");
const { connectMongoDb } = require("./connection");
const { logReqRes } = require("./middlewares");

const app = express();

connectMongoDb("mongodb://127.0.0.1:27017/node-practice");

//middle ware
app.use(express.urlencoded({ extended: false }));
app.use(express.json({ extended: false }));

//custom middleware
app.use(logReqRes("./log.txt"));

app.get("/", (req, res) => {
	return res.send("home");
});

app.use("/api/users", userRouter);

app.listen(3000, () => {
	console.log("running...");
});
