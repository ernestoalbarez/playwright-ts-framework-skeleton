import { test, expect } from '../../fixtures/testFixtures';

test.describe('Example test', () => {
  test('example test using fixture', async ({ homePage }) => {
    await homePage.open();
    const title = await homePage.browserPage.title();
    expect(title).toBeTruthy();
  });
});
