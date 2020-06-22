const express = require('express');
const app = express();
const axios = require('axios');
var cors = require('cors')
var convert = require('xml-js');

app.use(cors())
app.get('/cron', async (req, res) => {
    await res.send("Hello CRON")
})
app.get('/search/:id', async (req, res) => {
    await axios.get("https://news.google.com/rss/search?q="+ req.params.id, {
        headers: {"User-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36"}
    })
    .then(async data => {
        const result = await convert.xml2json(data.data, {compact: true});
        const parsed = JSON.parse(result);
        parsed.rss.channel.item.map(it => {
            it.description = null;
            it.guid = null;
            it.source._attributes = null;
        })
        const final = parsed.rss.channel.item;
        await res.json({final});
    }).catch(e => {
        res.send(e)
    })
});

app.get('/tech', async (req, res) => {
    await axios.get("https://news.google.com/rss/topics/CAAqJggKIiBDQkFTRWdvSUwyMHZNRGRqTVhZU0FtVnVHZ0pKVGlnQVAB?hl=en-IN&gl=IN&ceid=IN%3Aen", {
        headers: {"User-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36"}
    })
    .then(async data => {
        const result = await convert.xml2json(data.data, {compact: true});
        const parsed = JSON.parse(result);
        parsed.rss.channel.item.map(it => {
            it.description = null;
            it.guid = null;
            it.source._attributes = null;
        })
        const final = parsed.rss.channel.item;
        await res.json({ final });
    }).catch(e => {
        res.send(e)
    })
});

app.get('/health', async (req, res) => {
    await axios.get("https://news.google.com/rss/topics/CAAqIQgKIhtDQkFTRGdvSUwyMHZNR3QwTlRFU0FtVnVLQUFQAQ?hl=en-IN&gl=IN&ceid=IN%3Aen", {
        headers: {"User-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36"}
    })
    .then(async data => {
        const result = await convert.xml2json(data.data, {compact: true});
        const parsed = JSON.parse(result);
        parsed.rss.channel.item.map(it => {
            it.description = null;
            it.guid = null;
            it.source._attributes = null;
        })
        const final = parsed.rss.channel.item;
        await res.json({ final });
    }).catch(e => {
        res.send(e)
    })
});



app.get('/science', async (req, res) => {
    await axios.get("https://news.google.com/rss/topics/CAAqJggKIiBDQkFTRWdvSUwyMHZNRFp0Y1RjU0FtVnVHZ0pKVGlnQVAB?hl=en-IN&gl=IN&ceid=IN%3Aen", {
        headers: {"User-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36"}
    })
    .then(async data => {
        const result = await convert.xml2json(data.data, {compact: true});
        const parsed = JSON.parse(result);
        parsed.rss.channel.item.map(it => {
            it.description = null;
            it.guid = null;
            it.source._attributes = null;
        })
        const final = parsed.rss.channel.item;
        await res.json({ final });
    }).catch(e => {
        res.send(e)
    })
});


app.get('/sports', async (req, res) => {
    await axios.get("https://news.google.com/rss/topics/CAAqJggKIiBDQkFTRWdvSUwyMHZNRFp1ZEdvU0FtVnVHZ0pKVGlnQVAB?hl=en-IN&gl=IN&ceid=IN%3Aen", {
        headers: {"User-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36"}
    })
    .then(async data => {
        const result = await convert.xml2json(data.data, {compact: true});
        const parsed = JSON.parse(result);
        parsed.rss.channel.item.map(it => {
            it.description = null;
            it.guid = null;
            it.source._attributes = null;
        })
        const final = parsed.rss.channel.item;
        await res.json({ final });
    }).catch(e => {
        res.send(e)
    })
});


app.get('/entertainment', async (req, res) => {
    await axios.get("https://news.google.com/rss/topics/CAAqJggKIiBDQkFTRWdvSUwyMHZNREpxYW5RU0FtVnVHZ0pKVGlnQVAB?hl=en-IN&gl=IN&ceid=IN%3Aen", {
        headers: {"User-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36"}
    })
    .then(async data => {
        const result = await convert.xml2json(data.data, {compact: true});
        const parsed = JSON.parse(result);
        parsed.rss.channel.item.map(it => {
            it.description = null;
            it.guid = null;
            it.source._attributes = null;
        })
        const final = parsed.rss.channel.item;
        await res.json({ final });
    }).catch(e => {
        res.send(e)
    })
});



app.get('/india', async (req, res) => {
    await axios.get("https://news.google.com/rss/topics/CAAqIQgKIhtDQkFTRGdvSUwyMHZNRE55YXpBU0FtVnVLQUFQAQ?hl=en-IN&gl=IN&ceid=IN%3Aen", {
        headers: {"User-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36"}
    })
    .then(async data => {
        const result = await convert.xml2json(data.data, {compact: true});
        const parsed = JSON.parse(result);
        parsed.rss.channel.item.map(it => {
            it.description = null;
            it.guid = null;
            it.source._attributes = null;
        })
        const final = parsed.rss.channel.item;
        await res.json({ final });
    }).catch(e => {
        res.send(e)
    })
});



app.listen(process.env.PORT, () => {
    console.log('Example app listening on port port!');
});
 

// INDIA https://news.google.com/rss/topics/CAAqIQgKIhtDQkFTRGdvSUwyMHZNRE55YXpBU0FtVnVLQUFQAQ?hl=en-IN&gl=IN&ceid=IN%3Aen
// TECH  https://news.google.com/rss/topics/CAAqJggKIiBDQkFTRWdvSUwyMHZNRGRqTVhZU0FtVnVHZ0pKVGlnQVAB?hl=en-IN&gl=IN&ceid=IN%3Aen
// ENTERTAINMENt https://news.google.com/rss/topics/CAAqJggKIiBDQkFTRWdvSUwyMHZNREpxYW5RU0FtVnVHZ0pKVGlnQVAB?hl=en-IN&gl=IN&ceid=IN%3Aen
//  SPORTS https://news.google.com/rss/topics/CAAqJggKIiBDQkFTRWdvSUwyMHZNRFp1ZEdvU0FtVnVHZ0pKVGlnQVAB?hl=en-IN&gl=IN&ceid=IN%3Aen
// SCIENCE https://news.google.com/rss/topics/CAAqJggKIiBDQkFTRWdvSUwyMHZNRFp0Y1RjU0FtVnVHZ0pKVGlnQVAB?hl=en-IN&gl=IN&ceid=IN%3Aen
// health https://news.google.com/rss/topics/CAAqIQgKIhtDQkFTRGdvSUwyMHZNR3QwTlRFU0FtVnVLQUFQAQ?hl=en-IN&gl=IN&ceid=IN%3Aen
