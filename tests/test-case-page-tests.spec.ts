import { test } from "@playwright/test";
import { HomePage } from "../pages/home-page";
import { ProductsPage } from "../pages/products-page";
import { BasePage } from "../pages/base-page";
import { ProductsDetailsPage } from "../pages/products-details-page";
import { CategoryPage } from "../pages/category-page";
import { BrandsPage } from "../pages/brands-page";

test.describe("Search Page Tests", () => {
  let homePage: HomePage;
  let productsPage: ProductsPage;
  let productsDetailsPage: ProductsDetailsPage;
  let basePage: BasePage;
  let categoryPage: CategoryPage;
  let brandsPage: BrandsPage;

  test.beforeEach("Setting up preconditions", async ({ page }) => {
    homePage = new HomePage(page);
    productsPage = new ProductsPage(page);
    productsDetailsPage = new ProductsDetailsPage(page);
    basePage = new BasePage(page);
    categoryPage = new CategoryPage(page);
    brandsPage = new BrandsPage(page);

    await page.goto(process.env.baseUrl!);
    await page.goto("https://automationexercise.com/products");
    await page.getByRole("heading", { name: "Category" }).click();
    await homePage.validateHomePageTitle();
    await homePage.clickOnNavLink("Products");
    await productsPage.verifyAllProductsTitle();
  });

  test("Verify All Products and Search Products", async ({ page }) => {
    await productsPage.searchForProduct("top");
    await productsPage.searchProductsTitleIsVisible();
    await productsPage.verifyProductsAreVisible();
  });
  test("View Product Details", async ({ page }) => {
    await productsPage.viewFirstProductDetails();
    await productsDetailsPage.verifyProductDetails();
  });
  test("Cart Functionality", async ({ page }) => {
    await homePage.clickOnNavLink("Cart");
    await basePage.scrollToFooter();
    await basePage.verifyFooterTextIsVisible();
    await basePage.enterEmailAddress("test@example.com");
    await basePage.verifySuccessMessage();
  });
  test("Home Page Subscription Verification", async ({ page }) => {
    await homePage.clickOnNavLink("Home");
    await basePage.scrollToFooter();
    await basePage.verifyFooterTextIsVisible();
    await basePage.enterEmailAddress("test@example.com");
    await basePage.verifySuccessMessage();
  });
  test("Category Page Validation", async ({ page }) => {
    await homePage.validateCategoryTitle();
    await homePage.womenCategorySelection();
    await homePage.dressItemSelection();
    await categoryPage.verifyProductsTitle("Women - Dress Products");
    await categoryPage.menCategorySelection();
    await categoryPage.tshirtLinkSelection();
    await categoryPage.verifyProductsTitle("Men - Tshirts Products");
  });
  test("Brands Page Validation", async ({ page }) => {
    await homePage.verifyBrandsTitle();
    await homePage.brandSelection("Polo");
    await brandsPage.verifyBrandsProductsTitle("Brand - Polo Products");
    await homePage.brandSelection("H&M");
    await brandsPage.verifyBrandsProductsTitle("Brand - H&M Products");
  });
});
