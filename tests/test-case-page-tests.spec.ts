import { test } from "@playwright/test";
import { HomePage } from "../pages/home-page";
import { ProductsPage } from "../pages/products-page";

test.describe("Search Page Tests", () => {
  let homePage: HomePage;
  let productsPage: ProductsPage;
  
  test.beforeEach("Setting up preconditions", async ({ page }) => {
    homePage = new HomePage(page);
    productsPage = new ProductsPage(page);

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
      })
});
