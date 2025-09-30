import { test, expect } from "@playwright/test";

test.describe("Basic Browser Tests", () => {
  test("should load Google homepage", async ({ page }) => {
    await page.goto("https://www.google.com");
    await expect(page).toHaveTitle(/Google/);

    // Check if search input is visible
    const searchInput = page.locator('input[name="q"]');
    await expect(searchInput).toBeVisible();
  });

  test("should perform a Google search", async ({ page }) => {
    await page.goto("https://www.google.com");

    // Accept cookies if present (for EU users)
    const acceptCookies = page.locator(
      'button:has-text("Accept all"), button:has-text("I agree")'
    );
    if (await acceptCookies.isVisible()) {
      await acceptCookies.click();
    }

    const searchInput = page.locator('input[name="q"]');
    await searchInput.fill("Playwright testing");
    await searchInput.press("Enter");

    // Wait for search results
    await page.waitForSelector("#search");

    // Check if results are displayed
    const results = page.locator("#search .g");
    await expect(results.first()).toBeVisible();
  });

  test("should navigate to Playwright documentation", async ({ page }) => {
    await page.goto("https://playwright.dev");
    await expect(page).toHaveTitle(/Playwright/);

    // Check if main navigation is present
    const getStartedButton = page.locator('a:has-text("Get started")');
    if (await getStartedButton.isVisible()) {
      await getStartedButton.click();
      await page.waitForLoadState("networkidle");
      expect(page.url()).toContain("intro");
    }
  });

  test("should test viewport and responsive design", async ({ page }) => {
    await page.goto("https://playwright.dev");

    // Test desktop viewport
    await page.setViewportSize({ width: 1200, height: 800 });
    await page.screenshot({ path: "test-results/desktop-view.png" });

    // Test mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.screenshot({ path: "test-results/mobile-view.png" });

    // Verify page is still functional
    await expect(page.locator("nav")).toBeVisible();
  });

  test("should test browser console errors", async ({ page }) => {
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
