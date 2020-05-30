const express = require('express');
const app = express();
const axios = require('axios');
const port = 3000 || process.env.PORT
app.get('/', async (req, res) => {
    const arr = ['4', '4', '4','4', '4', '4','4', '4', '4','4', '4', '4','4', '4', '4','4', '4', '4','4', '4', '4','4', '4', '4','4', '4', '4']
    arr.forEach(event => {
        await axios.get("https://news.google.com/rss/search?q=technology", {
            headers: {"User-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36"},
        })
        .then(data => {
            res.send(data.data)
        }).catch(e => {
            res.send(e)
        })
    })
});

app.listen(process.env.PORT, () => {
    console.log('Example app listening on port port!');
});

//Run app, then load http://localhost:port in a browser to see the output.