import { test } from "@playwright/test";
import { HomePage } from "../../pages/home-page";

test.describe("User Authentication", () => {
  let homePage: HomePage;

  test.beforeEach("Setup authentication page", async ({ page }) => {
    homePage = new HomePage(page);

    await page.goto(process.env.baseUrl!);
    await homePage.validateHomePageTitle();
  });

  test("should handle invalid login credentials", async ({ page }) => {
    await homePage.clickOnSignUpLoginLink();
    await homePage.verifyLoginTitle();
    await homePage.login("sarah21@gmail.com", "Sarah124567345@");
    await homePage.verifyErrorMessage();
  });
});
