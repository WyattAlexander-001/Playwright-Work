// This a great example of a page model
import { type Locator, type Page } from '@playwright/test'; 

// This is the class that will be used to interact with the page
export class SmogonHomeModel { // This is the class name
  readonly page: Page; // This is the readonly field that will be used to interact with the page
  readonly getStartedLink: Locator; 
  readonly introText: Locator;


  constructor(page: Page) { 
    this.page = page; // This is the constructor that will be used to interact with the page
    this.getStartedLink = page.locator('a', { hasText: 'Bulbapedia' }); 
    this.introText = page.locator('#mw-content-text');
  }

  async goto() {
    await this.page.goto('https://bulbapedia.bulbagarden.net/wiki/Smogon');
  }

  async getStarted() {
    await this.getStartedLink.first().click();
  }

  async getIntroTextContent(): Promise<string> {
    return await this.introText.textContent();
  }
}