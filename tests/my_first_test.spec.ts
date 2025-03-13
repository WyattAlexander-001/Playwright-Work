import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
  await page.goto('https://www.tomatotimers.com/');

  // Grab the button element using its data-target attribute
  const customTimerButton = page.locator('button[data-target="#custom-timer"]');

  // You can now perform actions on the button, such as clicking it
  await customTimerButton.click();

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Pomodoro Timer/); 
});

