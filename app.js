const express = require('express');
const app = express();
const axios = require('axios');
var cors = require('cors')
var convert = require('xml-js');

const port = 3000 || process.env.PORT;
app.use(cors())
app.get('/', async (req, res) => {
    await axios.get("https://news.google.com/rss/search?q=technology", {
        headers: {"User-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36"}
    })
    .then(async data => {

        var result = await convert.xml2json(data.data, {compact: true});
        const entity = {
            title: "Hello from Heroku !",
            body: "LOL"
        }
        await axios.post('https://us-central1-xenon-4dfeb.cloudfunctions.net/server', {entity}, {
            headers: {"pswd": "ujjwalkumaris110%awesome"}
        }).then(res => {
            return
        })
        console.log("CRONNNED")
        res.end();
    }).catch(e => {
        res.send(e)
    })
});

app.listen(process.env.PORT, () => {
    console.log('Example app listening on port port!');
});
