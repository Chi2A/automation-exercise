import { test, Locator, Page, expect } from "@playwright/test";
import { BasePage } from "../pages/base-page";
import { HomePage } from "../pages/home-page";
import { TestCasesPage } from "../pages/test-cases-page";
test.describe('Test Case Page Tests' , () => {
    let homePage: HomePage;
    let testCasesPage: TestCasesPage;
    let basePage: BasePage;

    test.beforeEach("Setting up preconditions", async ({ page }) => {
        homePage = new HomePage(page);
        testCasesPage = new TestCasesPage(page);
        basePage = new BasePage(page);
        await page.goto("https://automationexercise.com/");
    });

    test("Test Cases Page validation", async ({ page }) => {
        await homePage.validateHomePageTitle();
        await testCasesPage.clickOnNavLink("Test Cases");
        await testCasesPage.verifyTestCasesTitle();
    });
});
