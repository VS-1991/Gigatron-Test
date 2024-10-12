const { test, expect } = require('@playwright/test');



test.describe("Gigatron", () => {

    test('TEST NAME HERE', async ({ page }) => { CODE HERE })
    
})


// Opener = const { test, expect } = require('@playwright/test');
// Template = test('TEST NAME HERE', async ({ page }) => { CODE HERE })
// To run = npx playwright test
// To show the browser = npx playwright test --headed
// To change browser = npx playwright test --browser=firefox
// To use all browsers = npx playwright test --browser=all

// To Pause = await page.pause();
// To click on element =  await page.locator("text=XXXXXXXX").click(); or await.page.click("text=XXXXXXXX");

// To run just single test = test.only
// To skip single test = test.skip
// To skip single test on a specific browser = test('TEST NAME HERE', async ({ page, browserName }) => { test.skip(browserName === 'firefox', 'Working on a fix'); CODE HERE }
// To tag tests and run only tagged tests = test('TEST NAME HERE @TAG Here', async ({ page }) => { CODE HERE } , to run npx playwright test --grap @TAG here , to exclude a tag --grep--invert@TAGtobeexcluded
// To group tests = test.describe('GROUP NAME'),() => { TESTS HERE }

// To take screenshot or to turn off, will be in test resoults folder = use: {screenshot: "off",}, OR use: {screenshot: "on",},
// To preform an action before each test = test.beforeEach(async ({page}) => { Command here })
// To preform an action after each test = test.afterEach(async ({page}) => { Command here })

// To make scripts,go to package.json , in scripts = "Name": "SCRIPT" , to use npm run "Name"

// To run parallel mode, make a test suite = test.describe.parallel

// To run tests in reporter = npx playwright test -- reporter=HTML LIST etc, npx playwright show-report to get HTML report

// To generate a code its : npx playwright codegen SITE LINK

// To emulate a device to run a test : npx playwright test --device="DEVICE HERE"

// To use local configuration and not global = test.use({})