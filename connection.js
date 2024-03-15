//connect mongo
const mongoose = require("mongoose");
async function connectMongoDb(url) {
	return mongoose
		.connect(url)
		.then(() => console.log("mongo connected"))
		.catch((err) => console.log(`mongo err`, err));
}

module.exports = { connectMongoDb };
