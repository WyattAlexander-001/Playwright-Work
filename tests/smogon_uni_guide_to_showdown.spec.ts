import { test, expect } from "@playwright/test";

const INDEX_ITEMS = [
  "Introduction and Background",
  "Settings",
  "Commands",
  "Teambuilder",
  "Battling",
  "Community",
  "Rooms",
  "Resources and Links",
];

// Global setup for all suites in this file
test.beforeEach(async ({ page }) => {
  await page.goto("https://www.smogon.com/sim/ps_guide");
});

// Suite 1: Static Text Verification
test.describe("Static Text Tests", () => {
  test("should display the correct number of <li> items in the Index", async ({
    page,
  }) => {
    const indexOl = page.locator('h3:has-text("Index") + ol');
    await expect(indexOl.locator("li")).toHaveCount(INDEX_ITEMS.length);
  });

  test('should have each item in the correct order', async ({ page }) => {
    const indexOl = page.locator('h3:has-text("Index") + ol');

    // We iterate through each expected item and verify the <li> text
    for (const [i, text] of INDEX_ITEMS.entries()) {
      const li = indexOl.locator('li').nth(i);
      await expect(li).toContainText(text);
    }
  });
});

// Suite 2: Dropdown Tests
test.describe("Dropdown Tests", () => {
  test("should expand dropdown on click", async ({ page }) => {

  });
});

// Suite 3: Link Tests
// test.describe("Link Tests", () => {
//   test("should navigate to correct page on link click", async ({ page }) => {
//     await page.click('a[href="/docs"]');
//     await expect(page).toHaveURL(/.*\/docs$/);
//   });
// });

// Suite 4: Responsiveness Tests
test.describe("Responsiveness Tests", () => {
  test("should display mobile layout at 375px width", async ({ page }) => {

  });
});
