const express = require('express');
const app = express();
const axios = require('axios');
const port = 3000 || process.env.PORT
app.get('/', async (req, res) => {
    await axios.get("https://news.google.com/rss", {
        headers: {"host": "example.com"}
    })
    .then(data => {
        res.send(req.headers)
    }).catch(e => {
        res.send(e)
    })
});

app.listen(process.env.PORT, () => {
    console.log('Example app listening on port port!');
});

//Run app, then load http://localhost:port in a browser to see the output.