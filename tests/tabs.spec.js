const {test} = require('playwright/test')
test('Invoke browser', async ({browser}) => {
   const context = await  browser.newContext();
   const page = await context.newPage();
   await page.goto("https://the-internet.herokuapp.com/windows");
   await page.locator("//a[normalize-space()='Click Here']").click();
   const [newPage] = await Promise.all([
       context.waitForEvent('page'),
   ])
   await newPage.waitForLoadState();  
console.log('Title of the Tab', await newPage.title());
await browser.close();
});