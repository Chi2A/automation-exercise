import { test } from '@playwright/test';
import { Page,Locator,expect } from '@playwright/test'; 
import { BasePage } from '../../pages/common/base-page';



test.describe("Scroll Up and Down", () => {
    let basePage: BasePage;
   

    test.beforeEach(async ({ page }) => {
        basePage = new BasePage(page);
        
        await page.goto(process.env.baseUrl!);
    
    });
    test("Verify Scroll Up using 'Arrow' button and Scroll Down functionality", async ({ page }) => {
        await basePage.scrollToFooter();
        await basePage.verifyFooterTextIsVisible();
        await basePage.verifySubscriptionTextIsVisible();
    
        await basePage.scrollToTop();
        await basePage.verifySubUpperTextIsVisible();

    });
});