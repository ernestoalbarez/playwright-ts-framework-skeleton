import { Page, Locator } from '@playwright/test';

export class HomeLocators {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Note: Always prefer data-testid for locators in a professional framework.
   * This is a placeholder for the skeleton.
   */
  get acceptCookiesButton(): Locator {
    return this.page.getByRole('button', { name: /accept|cookies/i });
  }
}
