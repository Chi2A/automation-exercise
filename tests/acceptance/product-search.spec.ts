import { test } from "@playwright/test";
import { HomePage } from "../../pages/home-page";
import { ProductsPage } from "../../pages/products-page";
import { ProductsDetailsPage } from "../../pages/products-details-page";

test.describe("Product Search and Viewing", () => {
  let homePage: HomePage;
  let productsPage: ProductsPage;
  let productsDetailsPage: ProductsDetailsPage;

  test.beforeEach("Navigate to products page", async ({ page }) => {
    homePage = new HomePage(page);
    productsPage = new ProductsPage(page);
    productsDetailsPage = new ProductsDetailsPage(page);

    await page.goto(process.env.baseUrl!);
    await homePage.validateHomePageTitle();
    await homePage.clickOnNavLink("Products");
    await productsPage.verifyAllProductsTitle();
  });

  test("should search for products successfully", async ({ page }) => {
    await productsPage.searchForProduct("top");
    await productsPage.searchProductsTitleIsVisible();
    await productsPage.verifyProductsAreVisible();
  });

  test("should view product details successfully", async ({ page }) => {
    await productsPage.viewFirstProductDetails();
    await productsDetailsPage.verifyProductDetails();
  });
});
