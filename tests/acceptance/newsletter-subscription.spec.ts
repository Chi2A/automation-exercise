// import { test } from "@playwright/test";
// import { HomePage } from "../../pages/home-page";
// import { BasePage } from "../../pages/base-page";

// test.describe("Newsletter Subscription", () => {
//   let homePage: HomePage;
//   let basePage: BasePage;

//   test.beforeEach("Setup page", async ({ page }) => {
//     homePage = new HomePage(page);
//     basePage = new BasePage(page);

//     await page.goto('/');
//     await homePage.validateHomePageTitle();
//   });

//   test("should subscribe to newsletter from home page", async ({ page }) => {
//     await homePage.clickOnNavLink("Home");
//     await basePage.scrollToFooter();
//     await basePage.verifyFooterTextIsVisible();
//     await basePage.enterEmailAddress("test@example.com");
//     await basePage.verifySuccessMessage();
//   });

//   test("should subscribe to newsletter from cart page", async ({ page }) => {
//     await homePage.clickOnNavLink("Cart");
//     await basePage.scrollToFooter();
//     await basePage.verifyFooterTextIsVisible();
//     await basePage.enterEmailAddress("test@example.com");
//     await basePage.verifySuccessMessage();
//   });
// });
