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
    await use( new LandingPageModel(page));
  },
  aboutPageModel: async ({ page }, use) => {
    await use(new AboutPageModel(page));
  },
  smogonHomeModel: async ({ page }, use) => {
    await use(new SmogonHomeModel(page));
  },
});

export { expect } from "@playwright/test";
