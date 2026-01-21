import { test as base, Page } from '@playwright/test';

type MyFixtures = {
  page: Page;
};

export const test = base.extend<MyFixtures>({
  page: async ({ page }, use) => {
    await page.goto('about:blank');
    await use(page);
  },
});

export { expect } from '@playwright/test';