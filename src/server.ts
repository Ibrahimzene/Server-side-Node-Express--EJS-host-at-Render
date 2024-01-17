import express from "express";

const app = express();
const port = 1724;

app.get("/", (req, res) => {
	const siteTitle = "Node Express Site with EJS Hosted on Render";
	res.send(`
<html>
	<head>
		<title>${siteTitle}</title>
		<link rel="stylesheet" href="/css/main.css">
	</head>
	<body>
		<h1>${siteTitle}</h1>
		<p>Declare the server-side build process for a Node Express site by incorporating EJS, and specify the hosting platform as Render. This involves setting up the necessary configurations, dependencies, and deploying the application to Render for public access.</p>
	</body>
</html>
	`);
});

app.get("/css/main.css", (req, res) => {
	res.send(`
body {
	color: #545454;
}
	`);
});

app.listen(port, () => {
	console.log(`Listening at http://localhost:${port}`);
});
