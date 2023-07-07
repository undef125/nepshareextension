const axios = require('axios')
const cheerio = require('cheerio')
const fs = require('fs')

const scrapeData = async(symbol) => {
    const resToRet = {};
    const { data } = await axios.get(`https://merolagani.com/CompanyDetail.aspx?symbol=${symbol}`);
    const $ = await cheerio.load(data)

    $('tr > td').each((i,e) => {
        i == 0 ? resToRet.sector = $(e).text().trim() : 
        i == 1 ? resToRet.shareOutstanding = $(e).text().trim() : 
        i == 2 ? resToRet.marketValue = $(e).text().trim() : 
        i == 3 ? resToRet.perChange = $(e).text().trim() : 
        i == 9 ? resToRet.eps = $(e).text().trim() : 
        i == 10 ? resToRet.peRatio = $(e).text().trim() : 
        i == 11 ? resToRet.bookValue = $(e).text().trim() : ""
    })
    // const mp = $('#ctl00_ContentPlaceHolder1_CompanyDetail1_lblMarketPrice').contents()
    // const change = $('#ctl00_ContentPlaceHolder1_CompanyDetail1_lblChange').contents()
    // resToRet.market_price = mp['0'].data;
    // resToRet.per_change = change['0'].data;
    console.log(resToRet)
    return resToRet;
}
module.exports = { scrapeData }

