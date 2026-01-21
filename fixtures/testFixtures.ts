import { test as base } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

type PagesFixture = {
  homePage: HomePage;
};

export const test = base.extend<PagesFixture>({
    homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
});

export { expect } from '@playwright/test';
