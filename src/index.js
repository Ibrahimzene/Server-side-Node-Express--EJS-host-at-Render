import express from 'express';
 
const app = express();
const port = 1724;
 
app.get('/', (req, res) => {
    res.send(`
<html>
    <head>
        <title>Backend Website</title>
    </head>
    <body>
        <h1>Server side Node Express EJS host at Render</h1>
        <p>Welcome to this site Build in TSX JS Host id Render</p>
    </body>
</html>
    `);
});
 
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});