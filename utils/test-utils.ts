/**
 * Test Utilities
 */

export const TestUtils = {
  /**
   * Generate a random string of a given length.
   */
  generateRandomString(length: number = 8): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  },

  /**
   * Generate a random email address.
   */
  generateRandomEmail(): string {
    return `test-${this.generateRandomString(5)}@example.com`;
  },

  /**
   * Pause execution for a given number of milliseconds.
   * Note: Use sparingly, prefer Playwright's auto-waiting.
   */
  async delay(ms: number): Promise<void> {
    return new Promise((resolve) => {
      global.setTimeout(resolve, ms);
    });
  },

  /**
   * Get the current date in ISO format.
   */
  getCurrentISODate(): string {
    return new Date().toISOString();
  },
};
