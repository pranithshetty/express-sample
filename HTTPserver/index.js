const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
	//console.log(req.headers);

	const log = `${Date.now()} ${req.url} \n`;
	fs.appendFile("log.txt", log, (err, data) => {
		res.writeHead(200, { "Content-Type": "application/json" });
		switch (req.url) {
			case "/about":
				res.end(
					JSON.stringify({
						data: "About page",
					})
				);
				break;
			case "/contact":
				res.end(
					JSON.stringify({
						data: "contact World!",
					})
				);
				break;
			default:
				res.end(
					JSON.stringify({
						data: "404 page",
					})
				);
		}
	});
});

server.listen(3000, () => {
	console.log("running");
});
