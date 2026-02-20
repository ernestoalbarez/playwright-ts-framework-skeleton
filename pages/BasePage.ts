import { Page, Locator } from '@playwright/test';

export abstract class BasePage {
  protected readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Get the Playwright page instance.
   */
  get browserPage(): Page {
    return this.page;
  }

  /**
   * Navigate to a path.
   */
  async open(path: string = '/'): Promise<void> {
    await this.page.goto(path);
  }

  /**
   * Wait for an element to be visible and click it.
   */
  async clickElement(locator: Locator): Promise<void> {
    await locator.waitFor({ state: 'visible' });
    await locator.click();
  }

  /**
   * Wait for an element to be visible and type text into it.
   */
  async typeText(locator: Locator, text: string): Promise<void> {
    await locator.waitFor({ state: 'visible' });
    await locator.fill(text);
  }

  /**
   * Check if an element is visible within a timeout.
   */
  async isElementVisible(locator: Locator, timeout: number = 5000): Promise<boolean> {
    try {
      await locator.waitFor({ state: 'visible', timeout });
      return true;
    } catch {
      return false;
    }
  }
}
