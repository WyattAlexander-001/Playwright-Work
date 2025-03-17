import { test as base, expect } from "@playwright/test";
import { LandingPageModel } from "./landingPageModel";
import { AboutPageModel } from "./aboutPageModel";

type MyFixtures = {
  landingPageModel: LandingPageModel;
  aboutPageModel: AboutPageModel;
};

export const test = base.extend<MyFixtures>({
  landingPageModel: async ({ page }, use) => {
    // Set up the fixture.
    const landingPageModel = new LandingPageModel(page);
    await use(landingPageModel);
  },
  aboutPageModel: async ({ page }, use) => {
    // Set up the fixture.
    const aboutPageModel = new AboutPageModel(page);
    await use(aboutPageModel);
  },
});
export { expect } from "@playwright/test";
