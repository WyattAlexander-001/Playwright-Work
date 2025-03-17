// This a great example of a page model
import { type Locator, type Page } from '@playwright/test'; 

// This is the class that will be used to interact with the page
export class LandingPageModel { // This is the class name
  readonly page: Page; // This is the readonly field that will be used to interact with the page
  readonly getStartedLink: Locator; 
  readonly pomLink: Locator;
  readonly tocList: Locator;

  constructor(page: Page) { 
    this.page = page; // This is the constructor that will be used to interact with the page
    this.getStartedLink = page.locator('a', { hasText: 'Get started' }); 
    this.pomLink = page.locator('li', {
      hasText: 'Guides',
    }).locator('a', {
      hasText: 'Page Object Model',
    });
    this.tocList = page.locator('article div.markdown ul > li > a');
  }

  async goto() {
    await this.page.goto('https://playwright.dev');
  }

  async getStarted() {
    await this.getStartedLink.first().click();
  }

}