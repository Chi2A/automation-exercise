import { test } from "@playwright/test";
import { HomePage } from "../../pages/home-page";
import { CategoryPage } from "../../pages/category-page";

test.describe("Category Navigation", () => {
  let homePage: HomePage;
  let categoryPage: CategoryPage;

  test.beforeEach("Setup category page", async ({ page }) => {
    homePage = new HomePage(page);
    categoryPage = new CategoryPage(page);

    await page.goto(process.env.BASE_URL!);
    await homePage.validateHomePageTitle();
    await homePage.clickOnNavLink("Products");
  });

  test("should navigate through women category successfully", async ({
    page,
  }) => {
    await homePage.validateCategoryTitle();
    await homePage.womenCategorySelection();
    await homePage.dressItemSelection();
    await categoryPage.verifyProductsTitle("Women - Dress Products");
  });

  test("should navigate through men category successfully", async ({
    page,
  }) => {
    await homePage.validateCategoryTitle();
    await categoryPage.menCategorySelection();
    await categoryPage.tshirtLinkSelection();
    await categoryPage.verifyProductsTitle("Men - Tshirts Products");
  });
});
