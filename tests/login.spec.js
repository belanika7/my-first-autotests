const { test, expect } = require('@playwright/test');

const cases = [
  { username: 'tomsmith', password: 'SuperSecretPassword!', expected: 'success', name: 'успешный логин' },
  { username: 'wronguser', password: 'SuperSecretPassword!', expected: 'error', name: 'неправильный логин' },
  { username: 'tomsmith', password: 'wrongpassword', expected: 'error', name: 'неправильный пароль' },
  { username: '', password: '', expected: 'error', name: 'пустые поля' },
];

for (const c of cases) {
  test(c.name, async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/login');
    await page.fill('#username', c.username);
    await page.fill('#password', c.password);
    await page.click('button[type="submit"]');
    await expect(page.locator(`.flash.${c.expected}`)).toBeVisible();
  });
}

/*const { test, expect } = require('@playwright/test');

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

test('неуспешный логин, успешный пароль', async ({ page }) => {
await page.goto('https://the-internet.herokuapp.com/login');
await page.fill('#username', 'WrongUser');
await page.fill('#password', 'SuperSecretPassword!');
await page.click('button[type="submit"]');
await expect(page.locator('.flash.error')).toBeVisible();
});

test('пустые поля', async ({ page }) => {
await page.goto('https://the-internet.herokuapp.com/login');
await page.click('button[type="submit"]');
await expect(page.locator('.flash.error')).toBeVisible();
});*/