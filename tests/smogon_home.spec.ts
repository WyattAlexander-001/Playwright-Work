import { test, expect } from "../page_object_models/fixtures";


test.describe("Smogon Home Page Static Text Tests", () => {
  test("Display Correct Intro Text", async ({ smogonHomeModel }) => {
    await smogonHomeModel.goto();
    const desiredText = "Smogon University, commonly shortened to Smogon, is a website whose content encompasses competitive Pokémon battling. It offers guides on battling strategies for people of different Pokémon knowledge backgrounds. The website was founded by 'chaos' (one of the developers of NetBattle) and is a considerably well-known website, visited by competitive Pokémon battling enthusiasts. Its mascot is Koffing, with the site being named after Koffing's German name. Members of the Smogon forum typically identify themselves as \"Smogonites\" or \"Smogoners.\"";
    const introText = await smogonHomeModel.getIntroTextContent();
    const normalizedText = introText.replace(/\s+/g, " ").trim();
    expect(normalizedText).toContain(desiredText); //toBe is for an exact match, toContain is for a substring match
  });

  test('should have each item in the correct order', async ({ page }) => {

  });
});

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
