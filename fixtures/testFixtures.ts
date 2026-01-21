import { test as base, Page } from '@playwright/test';

export const customTest = base.extend<{ blankPage: Page }>({
  blankPage: async ({ page }, use) => {
    await page.goto('about:blank');
    await use(page);
  },
});

export { expect } from '@playwright/test';
