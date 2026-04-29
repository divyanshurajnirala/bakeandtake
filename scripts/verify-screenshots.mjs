import { chromium } from "playwright-core";

const browser = await chromium.launch({
  executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  headless: true,
});

const viewports = [
  { name: "desktop-real", width: 1440, height: 1100 },
  { name: "mobile-real", width: 390, height: 920 },
];

const results = [];

for (const viewport of viewports) {
  const page = await browser.newPage({
    viewport: { width: viewport.width, height: viewport.height },
    deviceScaleFactor: 1,
  });
  const consoleErrors = [];

  page.on("console", (message) => {
    if (message.type() === "error") {
      consoleErrors.push(message.text());
    }
  });

  await page.goto(`http://127.0.0.1:5173/?verify=${viewport.name}`, {
    waitUntil: "networkidle",
  });

  await page.screenshot({
    path: `${viewport.name}.png`,
    fullPage: false,
  });

  const metrics = await page.evaluate(() => ({
    title: document.title,
    viewportWidth: innerWidth,
    viewportHeight: innerHeight,
    clientWidth: document.documentElement.clientWidth,
    scrollWidth: document.documentElement.scrollWidth,
  }));

  results.push({ viewport: viewport.name, metrics, consoleErrors });
  await page.close();
}

await browser.close();
console.log(JSON.stringify(results, null, 2));
