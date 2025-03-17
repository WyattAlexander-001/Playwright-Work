import { test, expect } from "../page_object_models/fixtures";

test("getting started should contain table of contents", async ({ landingPageModel }) => {
  await landingPageModel.goto(); // every async function needs to be awaited because as a promise it returns the page, a promise is basically a function that returns a promise
  await landingPageModel.getStarted();
  await expect(landingPageModel.tocList).toHaveText([
    `How to install Playwright`,
    `What's Installed`,
    `How to run the example test`,
    `How to open the HTML test report`,
    `Write tests using web first assertions, page fixtures and locators`,
    `Run single test, multiple tests, headed mode`,
    `Generate tests with Codegen`,
    `See a trace of your tests`,
  ]);
});

test("should show Page Object Model article", async ({ landingPageModel }) => {
  await landingPageModel.goto(); // This function was basically overridden in the page model since it returns the page
  await landingPageModel.getStarted(); // This is a good function since I'm not using a field
  await landingPageModel.pomLink.click(); // I personally think using the field is worse than using a locator or a function
});
