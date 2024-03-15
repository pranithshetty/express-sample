const express = require("express");
const router = express.Router();
const {
	handleGetAllUsers,
	handleAddNewUser,
	handleDeleteuserById,
	handleUpdateUserById,
	handleGetUserById,
} = require("../controllers/user.controller");

// router.get("/users", async (req, res) => {
// 	console.log(req.myproperty);
// 	const allUsers = await User.find({});
// 	const html = `${allUsers.map((user) => `<li>${user.name}</li>`).join("")}`;
// 	return res.send(html);
// });

router.route("/").get(handleGetAllUsers).post(handleAddNewUser);

router
	.route("/:id")
	.get(handleGetUserById)
	.patch(handleUpdateUserById)
	.delete(handleDeleteuserById);

module.exports = router;
