import { test, expect } from "@playwright/test";

test.describe("Smoke Tests", () => {
  test("should verify application is accessible", async ({ page }) => {
    await page.goto(process.env.BASE_URL!);
    await expect(page).toHaveTitle(/Automation Exercise/);
  });

  test("should verify main navigation links are present", async ({ page }) => {
    await page.goto(process.env.BASE_URL!);

    // Check main navigation elements
    await expect(page.locator('a:has-text("Home")')).toBeVisible();
    await expect(page.locator('a:has-text("Products")')).toBeVisible();
    await expect(page.locator('a:has-text("Cart")')).toBeVisible();
    await expect(page.locator('a:has-text("Signup / Login")')).toBeVisible();
  });

  test("should verify footer is present", async ({ page }) => {
    await page.goto(process.env.BASE_URL!);

    // Scroll to footer
    await page.keyboard.press("End");

    // Verify footer elements
    await expect(page.locator("footer")).toBeVisible();
    await expect(page.locator("text=SUBSCRIPTION")).toBeVisible();
  });
});
