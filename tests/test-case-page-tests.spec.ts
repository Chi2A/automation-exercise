import { test } from "@playwright/test";
import { HomePage } from "../pages/home-page";
import { ProductsPage } from "../pages/products-page";
import { BasePage } from "../pages/base-page";
import { ProductsDetailsPage } from "../pages/products-details-page";


test.describe("Search Page Tests", () => {
  let homePage: HomePage;
  let productsPage: ProductsPage;
    let productsDetailsPage: ProductsDetailsPage;
    let basePage: BasePage;
  
  test.beforeEach("Setting up preconditions", async ({ page }) => {
    homePage = new HomePage(page);
    productsPage = new ProductsPage(page);
    productsDetailsPage = new ProductsDetailsPage(page);
    basePage = new BasePage(page);

      await page.goto(process.env.baseUrl!);
      await homePage.validateHomePageTitle();
      await homePage.clickOnNavLink("Products");
      await productsPage.verifyAllProductsTitle();
  });

  test("Verify All Products and Search Products", async ({ page }) => {
    await productsPage.searchForProduct("top");
    await productsPage.searchProductsTitleIsVisible();
    await productsPage.verifyProductsAreVisible();
  });
    test('View Product Details', async ({ page }) => {
        
        await productsPage.viewFirstProductDetails();
        await productsDetailsPage.verifyProductDetails();
    })
    test('Cart Functionality', async ({ page }) => {
        await homePage.clickOnNavLink("Cart");
        await basePage.scrollToFooter();
        await basePage.verifyFooterTextIsVisible();
        await basePage.enterEmailAddress("test@example.com");
        await basePage.verifySuccessMessage();
    })
    test("Home Page Subscription Verification", async ({ page }) => {
        await homePage.clickOnNavLink("Home");
        await basePage.scrollToFooter();
        await basePage.verifyFooterTextIsVisible();
        await basePage.enterEmailAddress("test@example.com");
        await basePage.verifySuccessMessage();
    });
});
