import { test, expect } from "@playwright/test";

test.describe("Browser Functionality Tests", () => {
  test("should verify viewport functionality", async ({ page }) => {
    await page.goto("https://playwright.dev");

    // Test desktop viewport
    await page.setViewportSize({ width: 1200, height: 800 });
    await expect(page.locator("nav")).toBeVisible();

    // Test mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await expect(page.locator("nav")).toBeVisible();
  });

  test("should verify no console errors on page load", async ({ page }) => {
    const consoleErrors: string[] = [];

    page.on("console", (msg) => {
      if (msg.type() === "error") {
        consoleErrors.push(msg.text());
      }
    });

    await page.goto("https://playwright.dev");
    await page.waitForLoadState("networkidle");

    // Check if there are any console errors
    expect(consoleErrors.length).toBe(0);
  });
});
