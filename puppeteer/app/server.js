const http = require("http");
const puppeteer = require('puppeteer');
const server = http.createServer(function (req, res) {
    const urlObj = new URL('http://localhost:3000' + req.url)
    // console.log(urlObj)
    let url = urlObj.searchParams.get('url');
    if (null !== url && url.length > 0) {
        if (urlObj.pathname === '/ks/video') {
            (async () => {
                const browser = await puppeteer.launch({
                    args:['--no-sandbox', '--disable-setuid-sandbox'],
                });
                const page = await browser.newPage();
                // 设置浏览器信息
                await page.emulate(puppeteer.devices['iPhone X']);
                await page.goto(url);
                let video = await page.$eval('#video-player', el => el.src);
                console.log(video)

                res.writeHead(200, {"Content-Type": "application/json"});
                let json = JSON.stringify({'url': video });
                res.end(json);

                await browser.close();
            })();
        }
    }else res.end();

});

server.listen(3000);