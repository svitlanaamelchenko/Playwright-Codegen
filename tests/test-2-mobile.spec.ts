import { test, expect, devices } from '@playwright/test';

test.use({
    ...devices['iPhone 13'],
});

test('test-mobile-viewport', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
});