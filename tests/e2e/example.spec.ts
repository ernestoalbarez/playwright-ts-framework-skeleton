import { test, expect } from '../../fixtures/testFixtures';

test('example test using fixture', async ({ page }) => {
  expect(await page.title()).toBe('');

  // Example of navigating to a URL and checking it
  // await page.goto('https://example.com');
  // await expect(page).toHaveURL(/example\.com/);
});
