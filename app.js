const express = require('express');
const app = express();
const axios = require('axios');
var cors = require('cors')
var convert = require('xml-js');

const port = 3000 || process.env.PORT;
app.use(cors())
app.get('/cron', async (req, res) => {
    await res.send("Hello CRON")
})
app.get('/', async (req, res) => {
    await axios.get("https://news.google.com/rss/search?q=entertainment&hl=en-IN&gl=IN&ceid=IN:en", {
        headers: {"User-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36"}
    })
    .then(async data => {
        const result = await convert.xml2json(data.data, {compact: true});
        const parsed = JSON.parse(result);
        let i;
        for (i = 0; i < 40; i++) {
            parsed.rss.channel.item.pop()
        }
        parsed.rss.channel.item.forEach(it => {
            it.description = null;
            it.guid = null;
            it.source._attributes = null
        })
        const final = parsed.rss.channel.item;
        await res.json({ final });
    }).catch(e => {
        res.send(e)
    })
        // await axios.post('https://us-central1-xenon-4dfeb.cloudfunctions.net/server', final, {
        //     headers: {"pswd": "ujjwalkumaris110%awesome"}
        // }).then(r => {
        //     return console.log(r.data)
        //     res.end();
        // }).catch(e => {
        //     console.log(e)
        // })
});


app.listen(process.env.PORT, () => {
    console.log('Example app listening on port port!');
});
