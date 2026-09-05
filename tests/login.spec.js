const { test, expect } = require('@playwright/test');

test('успешный логин', async ({ page }) => {
await page.goto('https://the-internet.herokuapp.com/login');
await page.fill('#username', 'tomsmith');
await page.fill('#password', 'SuperSecretPassword!');
await page.click('button[type="submit"]');
await expect(page.locator('.flash.success')).toBeVisible();
});

test('неуспешный логин', async ({ page }) => {
await page.goto('https://the-internet.herokuapp.com/login');
await page.fill('#username', 'tomsmith');
await page.fill('#password', 'WrongPassword!');
await page.click('button[type="submit"]');
await expect(page.locator('.flash.error')).toBeVisible();
});