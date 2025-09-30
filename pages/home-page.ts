import { Page, Locator, expect } from "@playwright/test";
import { BasePage } from "./base-page";

export class HomePage extends BasePage {
    private homePageTitle: Locator;
 

    constructor(page: Page) {
        super(page);
        this.homePageTitle = page.getByRole("link", {
            name: "Website for automation",
        });
    }
  

    async validateHomePageTitle(): Promise<void> {
        await expect(this.homePageTitle).toBeVisible();
    }
}
