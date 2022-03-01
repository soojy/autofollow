const puppeteer = require('puppeteer')
const fs = require('fs')

let count = 0
let accounts = [
    'https://tiktok.com/@washingtonpost',
  'https://tiktok.com/@team10offcial', 
  'https://tiktok.com/@charlidamelio', 
  'https://tiktok.com/@bellapoarch',   
  'https://tiktok.com/@addisonre',     
  'https://tiktok.com/@zachking',      
  'https://tiktok.com/@willsmith',     
  'https://tiktok.com/@dixiedamelio',  
  'https://tiktok.com/@spencerx',      
  'https://tiktok.com/@lorengray',     
  'https://tiktok.com/@justmaiko',     
  'https://tiktok.com/@jasonderulo',   
  'https://tiktok.com/@therock',
  'https://tiktok.com/@brentrivera',
  'https://tiktok.com/@avani',
  'https://tiktok.com/@joealbanese',
  'https://tiktok.com/@kyliejenner',
  'https://tiktok.com/@itsjojosiwa',
  'https://tiktok.com/@selenagomez',
  'https://tiktok.com/@jamescharles',
  'https://tiktok.com/@babyariel',
  'https://tiktok.com/@dobretwins',
  'https://tiktok.com/@lilhuddy',
  'https://tiktok.com/@noahbeck',
  'https://tiktok.com/@stokestwins',
  'https://tiktok.com/@wigofellas',
  'https://tiktok.com/@lizzza',
  'https://tiktok.com/@qpark',
  'https://tiktok.com/@savv.labrant',
  'https://tiktok.com/@kodyantle',
  'https://tiktok.com/@flighthouse',
  'https://tiktok.com/@miakhalifa',
  'https://tiktok.com/@topperguild',
  'https://tiktok.com/@kirakosarin',
  'https://tiktok.com/@arianagrande',
  'https://tiktok.com/@imkevinhart',
  'https://tiktok.com/@itsnastynaz',
  'https://tiktok.com/@hannahstocking',
  'https://tiktok.com/@larrayeeee',
  'https://tiktok.com/@kristenhancher',
  'https://tiktok.com/@jacobsartorius',
  'https://tiktok.com/@justinbieber',
  'https://tiktok.com/@marshmellomusic',
  'https://tiktok.com/@daniel.labelle',
  'https://tiktok.com/@tonylopez',
  'https://tiktok.com/@foodies',
  'https://tiktok.com/@ondreazlopez',
  'https://tiktok.com/@zoelaverne',
  'https://tiktok.com/@mackenzieziegler',
  'https://tiktok.com/@laurengodwin',
  'https://tiktok.com/@jasoncoffee',
  'https://tiktok.com/@thesupercole',
  'https://tiktok.com/@lance210',
  'https://tiktok.com/@brycehall',
  'https://tiktok.com/@jiffpom',
  'https://tiktok.com/@lizzo',
  'https://tiktok.com/@seandoesmagic',
  'https://tiktok.com/@thehypehouse',
  'https://tiktok.com/@rominagafur',
  'https://tiktok.com/@rosssmith',
  'https://tiktok.com/@alex.stemp',
  'https://tiktok.com/@daniellecohn',
  'https://tiktok.com/@samuellopez_',
  'https://tiktok.com/@joeyklaasen',
  'https://tiktok.com/@officialsalicerose',
  'https://tiktok.com/@camerondallas',
  'https://tiktok.com/@cashbaker',
  'https://tiktok.com/@jonklaasen',
  'https://tiktok.com/@manu',
  'https://tiktok.com/@rebeccazamolo',
  'https://tiktok.com/@wren.eleanor',
  'https://tiktok.com/@thecardguy',
  'https://tiktok.com/@mmmjoemele',
  'https://tiktok.com/@beasteater',
  'https://tiktok.com/@jayprehistoricpets',
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

        page.waitForSelector('.e143oaad5')

        page.click('.e143oaad5')
        console.log(page.$(`button[data-e2e="follow-button"]`))
        sleep(10000)
    })
    sleep(999999)
    // setTimeout( async () => {await browser.close()},200000)
})()
