
const puppeteer = require('puppeteer');

test('E2E: Contact form can send messages', async() => {
  const browser = await puppeteer.launch({headless: true,});
  const page = await browser.newPage();
  await page.setDefaultNavigationTimeout(0); 
  await page.setViewport({width:1535, height:756});
  page.goto('http:///localhost:3000/');
  await page.waitFor('#contact-form');
  const name= await page.waitForXPath("//input[1]");
  await name.type("testing");
  const email= await page.waitForXPath("//input[@type='email']");
  await email.type("test@PPP.com");
  const message= await page.waitForXPath("//textarea");
  await message.type("Regular testing the contacts page with puppeteer");
  await page.waitFor(2000);
  const button = await page.waitForXPath("//button");
  await button.click();
  await page.waitFor(2000);
  await browser.close();
 }, 1000000);
