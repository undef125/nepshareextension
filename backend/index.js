const express = require('express');
const bodyParser = require('body-parser');
const { scrapeData } = require('./scrapper/app.js');
const cors = require('cors');

const app = express();

app.use(cors())
app.use(bodyParser.json())

app.post('/scrapeshare', async(req,res) => {
    const result = await scrapeData(req.body.symbol);
    res.status(200).send(result)
})
app.get('/', (req,res) => {
    res.send("server is up!")
})

app.listen(process.env.PORT || 4000, () => {
    console.log('server is up!');
})