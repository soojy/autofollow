const puppeteer = require('puppeteer')
const fs = require('fs')

let count = 0
let accounts = [
    'https://www.tiktok.com/@jojder',
    'https://www.tiktok.com/@jojder',
    'https://www.tiktok.com/@jojder',
    'https://www.tiktok.com/@jojder',
    'https://www.tiktok.com/@jojder',
    'https://www.tiktok.com/@jojder',
    'https://www.tiktok.com/@jojder',
    'https://www.tiktok.com/@jojder',
    'https://www.tiktok.com/@jojder',
    'https://www.tiktok.com/@jojder',
]

const loadCookies = async (page) => {
    if (fs.existsSync('cookies.json')) {
        console.log('Loading cookies...')
        const cookiesString = await fs.readFileSync('./cookies.json')
        const cookies = JSON.parse(cookiesString)
        await page.setCookie(...cookies)
        console.log('Cookies loaded')
        console.log('Reloading page')
        await page.reload()
    } else {
        console.log('Cookies not found')
    }
}


const sleep = (delay) => {
        var start = new Date().getTime()
        while (new Date().getTime() < start + delay){}
    }


;(async () => {



    // init puppeteer
    const browser = await puppeteer.launch({
        headless: false,
    })

    // load new tab and open tiktok.com
    const page = await browser.newPage()
    await page.setDefaultTimeout(200000)
    await page.setViewport({ width: 1366, height: 768 })
    console.log('Opening tiktok.com...')
    await page.goto('https://www.tiktok.com/')

    // load cookies and save screenshot
    await loadCookies(page)
    console.log('Opening following page')

    accounts.forEach( (item) => {
        page.goto(item)

        page.waitForSelector('button[data-e2e="data-e2e="follow-button"]')

        page.click('button[data-e2e="follow-button"]')
        console.log(page.$(`button[data-e2e="follow-button"]`))
        sleep(10000)
    })
    sleep(999999)
    // setTimeout( async () => {await browser.close()},200000)
})()
