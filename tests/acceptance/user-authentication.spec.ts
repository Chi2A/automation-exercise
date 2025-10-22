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
    const email = process.env.EMAIL!;
    const password = process.env.PASSWORD!;
    await homePage.login(email!, password!);
  
  });
  test("Signing up with existing user", async ({ page }) => {
    await homePage.clickOnSignUpLoginLink();
    await homePage.verifyNewUserSignUpForm();
    const email = process.env.EMAIL!;
    const userName = process.env.USER_NAME!;
    await homePage.signUp(userName!, email!);
    await homePage.verifyExistingUserLoginMessage();
  });
});