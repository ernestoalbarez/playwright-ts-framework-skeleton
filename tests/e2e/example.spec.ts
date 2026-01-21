import { test, expect } from '../../fixtures/testFixtures';

test.describe('Example test', () => {
  test('example test using fixture', async ({ homePage }) => {
    await homePage.open();
    expect(await homePage.page.title()).toBe('');
  });
});
