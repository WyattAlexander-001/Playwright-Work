import { test as base, expect } from "@playwright/test";
import { LandingPageModel } from "./landingPageModel";
import { AboutPageModel } from "./aboutPageModel";
import { SmogonHomeModel } from "./smogonHomeModel";

type MyFixtures = {
  landingPageModel: LandingPageModel;
  aboutPageModel: AboutPageModel;
  smogonHomeModel: SmogonHomeModel;
};

export const test = base.extend<MyFixtures>({
  landingPageModel: async ({ page }, use) => {
    const landingPageModel = new LandingPageModel(page);
    await use(landingPageModel);
  },
  aboutPageModel: async ({ page }, use) => {
    const aboutPageModel = new AboutPageModel(page);
    await use(aboutPageModel);
  },
  smogonHomeModel: async ({ page }, use) => {
    const smogonHomeModel = new SmogonHomeModel(page);
    await use(smogonHomeModel);
  },
});

export { expect } from "@playwright/test";
