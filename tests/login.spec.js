// @ts-check
const { test } = require("@playwright/test");
const playwright = require("@playwright/test");

test("Verify ChatGPT Generated Code for Login Page", async ({ page }) => {
  const browser = await playwright.chromium.launch();

  await page.goto("https://www.saucedemo.com/");

  // Enter the username and password
  await page.fill("#user-name", "standard_user");
  await page.fill("#password", "secret_sauce");

  // Click the login button
  await page.click('[type="submit"]');

  // Close the browser
  await browser.close();
});