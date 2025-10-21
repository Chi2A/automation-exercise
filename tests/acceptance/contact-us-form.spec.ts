import { test } from "@playwright/test"; 
import { BasePage } from "../../pages/common/base-page";
import { HomePage } from "../../pages/home-page";
import { ContactUsFormPage } from "../../pages/contact-us-form";

test.describe("Contact Us Form", () => {
    let basePage: BasePage;
    let contactUsFormPage: ContactUsFormPage;
    let homePage: HomePage;

    test.beforeEach(async ({ page }) => {
        basePage = new BasePage(page);
        contactUsFormPage = new ContactUsFormPage(page);
        homePage = new HomePage(page);
        await page.goto(process.env.baseURL!);
        await homePage.validateHomePageTitle();
    });

    test("Submit Contact Us Form Successfully", async ({ page }) => {
        await basePage.clickOnContactUsLink();
        await contactUsFormPage.verifyGetInTouchTitleIsVisible();
        await contactUsFormPage.fillContactUsForm(
          "lullabyby",
          "lullaby22@gmail.com",
          "Order issue",
          "Items wasnt delivered",
          "/Users/alinamaksymiuk/Desktop/learning/automation-exercise/pages/navigation/home-page.ts"
        );
        await basePage.verifyAlertIsVisible();
        await basePage.clickOnAlert();
        await contactUsFormPage.verifySuccessMessage();
        await contactUsFormPage.clickOnHomeButton();
    
       
    });
});