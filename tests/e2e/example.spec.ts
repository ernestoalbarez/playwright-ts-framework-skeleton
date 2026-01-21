import { customTest as test } from '../../fixtures/testFixtures';
import { expect } from '@playwright/test';

test.describe('Example test', () => {
  test('example test using fixture', async ({ blankPage }) => {
    expect(await blankPage.title()).toBe('');
  });
});
