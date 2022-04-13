const puppeteer = require("puppeteer")

;(async () => {
  const browser = await puppeteer.launch({ headless: false })
   page = await browser.newPage()
  await page.goto("https://remoteok.io/remote-javascript-jobs")

  const data = await page.evaluate(() => {
    const list = []
    const items = document.querySelectorAll("tr.job")

    for (const item of items) {
      list.push({
        company: item.querySelector(".company h3").innerHTML,
        position: item.querySelector(".company h2").innerHTML,
        link: "https://remoteok.io" + item.getAttribute("data-href"),
      })
    }

    return list
  })

  console.log(data)
  await browser.close()
})()
