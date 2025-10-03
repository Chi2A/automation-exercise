import { test } from "@playwright/test";
import { HomePage } from "../../pages/home-page";
import { BrandsPage } from "../../pages/brands-page";

test.describe("Brand Navigation", () => {
  let homePage: HomePage;
  let brandsPage: BrandsPage;

  test.beforeEach("Setup brands page", async ({ page }) => {
    homePage = new HomePage(page);
    brandsPage = new BrandsPage(page);

    await page.goto(process.env.baseUrl!);
    await homePage.validateHomePageTitle();
    await homePage.clickOnNavLink("Products");
  });

  test("should navigate to Polo brand products", async ({ page }) => {
    await homePage.verifyBrandsTitle();
    await homePage.brandSelection("Polo");
    await brandsPage.verifyBrandsProductsTitle("Brand - Polo Products");
  });

  test("should navigate to H&M brand products", async ({ page }) => {
    await homePage.verifyBrandsTitle();
    await homePage.brandSelection("H&M");
    await brandsPage.verifyBrandsProductsTitle("Brand - H&M Products");
  });
});
