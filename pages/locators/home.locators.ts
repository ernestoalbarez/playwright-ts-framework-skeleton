import { Page, Locator } from '@playwright/test';

export class HomeLocators {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  get acceptCookiesButton(): Locator {
    return this.page.locator('button.accept-cookies-button');
  }
}
