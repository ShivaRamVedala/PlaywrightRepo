const { test } = require('@playwright/test');

test('File Download', async({browser}) => {

    const context = await browser.newContext();

    const page = await context.newPage();

    await page.goto("https://the-internet.herokuapp.com/download");
    await page.locator("a[href='download/file.json']").click();
    
    //const fs = require('fs');
    const filePath = "C://Users//shiva.vedala//Downloads//";
    const fileName = 'file.json';

    function checkFileExists(filePath, fileName){

        const filePath1 = path.join(filePath, fileName);

        if(fs.existsSync(filePath1)){
            console.log("File exists in the folder")
        }
        else{
            console.log("File do not exist in the folder")
        }
    }


    await page.waitForTimeout(3000);
    await page.close();
    await context.close();

});
