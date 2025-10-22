import { test } from "@playwright/test";
import { HomePage } from "../../pages/home-page";


test.describe("User Authentication", () => {
  let homePage: HomePage;

  test.beforeEach("Setup authentication page", async ({ page }) => {
    homePage = new HomePage(page);

    await page.goto("/");
    await homePage.validateHomePageTitle();
  });

  test("Login with invalid credentials", async ({ page }) => {
    await homePage.clickOnSignUpLoginLink();
    await homePage.verifyLoginTitle();
    await homePage.login("sarah21@gmail.com", "Sarah124567345@");
    await homePage.verifyErrorMessage();
  });

  test("Login with valid credentials", async ({ page }) => {
    await homePage.clickOnSignUpLoginLink();
    await homePage.verifyLoginTitle();
    const EMAIL = process.env.EMAIL!;
    const PASSWORD = process.env.PASSWORD!;
    await homePage.login(EMAIL, PASSWORD);

  });
  test("Signing up with existing user", async ({ page }) => {
    await homePage.clickOnSignUpLoginLink();
    await homePage.verifyNewUserSignUpForm();
    const EMAIL = process.env.EMAIL!;
    const USER_NAME = process.env.USER_NAME!;
    await homePage.signUp(USER_NAME, EMAIL);
    await homePage.verifyExistingUserLoginMessage();
  });
});