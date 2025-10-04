import { test } from "@playwright/test";
import { HomePage } from "../../pages/home-page";
import { ProductsPage } from "../../pages/products-page";
import { ProductsDetailsPage } from "../../pages/products-details-page";
import { CartsPage } from "../../pages/navigation/cart-page";
import { AuthPage } from "../../pages";

test.describe("Product Search and Viewing", () => {
  let homePage: HomePage;
  let productsPage: ProductsPage;
  let productsDetailsPage: ProductsDetailsPage;
  let cartPage: CartsPage;
  let authPage: AuthPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    productsPage = new ProductsPage(page);
    productsDetailsPage = new ProductsDetailsPage(page);
    cartPage = new CartsPage(page);
    authPage = new AuthPage(page);

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

  test("Search Products and Verify Cart After Login", async ({ page }) => {
    await page.goto(process.env.baseUrl!);
    await homePage.clickOnNavLink("Products");
    await productsPage.verifyAllProductsTitle();
    await productsPage.searchForProduct("top");
    await productsPage.verifyProductsAreVisible();
    await productsPage.addAllProductsToCart();
    await homePage.clickOnNavLink("Signup / Login");
    await authPage.login("test@example.com", "password123");
    await homePage.clickOnNavLink("Cart");
    await cartPage.verifyCartProductsVisible();
  });
});
