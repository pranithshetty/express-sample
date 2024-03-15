const User = require("../model/user.model");

async function handleGetAllUsers(req, res) {
	const allUsers = await User.find({});
	return res.json(allUsers);
}

async function handleAddNewUser(req, res) {
	const user = req.body;
	if (!user.name || !user.email || user.isActive === undefined) {
		return res.status(400).json({ status: "bad data" });
	}

	// users.push({ ...user, id: users.length + 1 });

	// fs.writeFile("./data.json", JSON.stringify(users), (err) => {
	// 	if (err) {
	// 		console.error("Error writing to file:", err);
	// 		return res
	// 			.status(500)
	// 			.json({ status: "error", message: "Failed to write to file" });
	// 	}
	// 	console.log("Data written to file");
	// 	return res.status(201).json({ status: "user added" });
	// });
	const result = await User.create({
		name: user.name,
		email: user.email,
		isActive: user.isActive,
	});
	console.log(result);
	return res.status(201).json({ status: "user added" });
}

async function handleGetUserById(req, res) {
	const user = await User.findById(req.params.id);
	// const id = Number(req.params.id);
	// const user = users.find((user) => user.id == id);
	//console.log(user);
	return res.json(user);
}

async function handleUpdateUserById(req, res) {
	const user = await User.findByIdAndUpdate(req.params.id, {
		email: req.body.email,
		name: req.body.name,
		isActive: req.body.isActive,
	});
	return res.json({ status: `user ${user.name} updated` });
	// const id = Number(req.params.id);
	// const body = req.body;
	// let updatedUsers = users.map((user) => {
	// 	if (user.id === id) {
	// 		return { ...body, id: id };
	// 	} else {
	// 		return user;
	// 	}
	// });
	// //console.log(updatedUsers);
	// fs.writeFile("./data.json", JSON.stringify(updatedUsers), (err, data) => {
	// 	return res.json({ status: `user ${body.name} updated` });
	// });
}

async function handleDeleteuserById(req, res) {
	const user = await User.findByIdAndDelete(req.params.id);
	return res.json({ status: `deleted user ${user?.name}` });
	// const id = Number(req.params.id);
	// let updatedUsers = users.filter((user) => {
	// 	return user.id !== id;
	// });
	// console.log(updatedUsers);
	// fs.writeFile("./data.json", JSON.stringify(updatedUsers), (err, data) => {
	// 	return res.json({ status: `user ${body.name} deleted` });
	// });
}

module.exports = {
	handleGetAllUsers,
	handleAddNewUser,
	handleGetUserById,
	handleUpdateUserById,
	handleDeleteuserById,
};
