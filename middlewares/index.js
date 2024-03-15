const fs = require("fs");

function logReqRes(fileName) {
	return (req, res, next) => {
		{
			console.log(req.method);
			//res.send("middlware response");
			req.myproperty = "hey"; //custom properties
			//next();
			fs.appendFile(
				fileName,
				`${Date.now()} ${req.ip} ${req.method} ${req.url}\n`,
				(err, data) => next()
			);
		}
	};
}

module.exports = { logReqRes };
