// import { test } from "@playwright/test";
// import { HomePage } from "../../pages/home-page";
// import { ProductsPage } from "../../pages/products-page";
// import { BasePage } from "../../pages/base-page";

// test.describe("Critical Path Tests", () => {
//   let homePage: HomePage;
//   let productsPage: ProductsPage;
//   let basePage: BasePage;

//   test.beforeEach("Setup critical path test", async ({ page }) => {
//     homePage = new HomePage(page);
//     productsPage = new ProductsPage(page);
//     basePage = new BasePage(page);

//      await page.goto("/");
//     await homePage.validateHomePageTitle();
//   });

//   test("should complete full user journey - browse to subscribe", async ({
//     page,
//   }) => {
//     // Navigate to products
//     await homePage.clickOnNavLink("Products");
//     await productsPage.verifyAllProductsTitle();

//     // Search for a product
//     await productsPage.searchForProduct("top");
//     await productsPage.searchProductsTitleIsVisible();
//     await productsPage.verifyProductsAreVisible();

//     // Navigate to home and subscribe
//     await homePage.clickOnNavLink("Home");
//     await basePage.scrollToFooter();
//     await basePage.verifyFooterTextIsVisible();
//     await basePage.enterEmailAddress("journey-test@example.com");
//     await basePage.verifySuccessMessage();
//   });
// });
