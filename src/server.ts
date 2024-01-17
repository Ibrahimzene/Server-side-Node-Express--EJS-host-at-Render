import express from 'express';

const app = express();
const port = 4115;

app.get('/', (req, res) => {
	const siteTitle = 'The Info Site';
	res.send(`
<html>
	<head>
		<title>${siteTitle}</title>
		<link rel="stylesheet" href="/css/main.css">
	</head>
	<body>
		<h1>${siteTitle}</h1>
		<p>Welcome to this site.</p>
	</body>
</html>
	`);
});

app.get('/css/main.css', (req, res) => {
	res.send(`
body {
	color: red;
}
	`)
})


app.listen(port, () => {
	console.log(`Listening at http://localhost:${port}`);
});