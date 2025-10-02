import { Page, Locator, expect } from "@playwright/test";
import { BasePage } from "./base-page";

export class HomePage extends BasePage {
    private homePageTitle: Locator;
    private categoryTitle: Locator;
    private womenCategory: Locator;
    private dressItemLink: Locator;
    private brandsTitle: Locator;
    private brandsNames: Locator;


    constructor(page: Page) {
        super(page);
        this.homePageTitle = page.getByRole("link", { name: "Website for automation" });
        this.categoryTitle = page.getByRole('heading', { name: 'Category' });
        this.womenCategory = page.getByRole('link', { name: ' Women' })
        this.dressItemLink = page.getByRole("link", { name: "Dress" });
        this.brandsTitle = page.locator('div[class="brands_products"] h2');
        this.brandsNames = page.locator("ul[class='nav nav-pills nav-stacked'] li");
    }


    async validateHomePageTitle(): Promise<void> {
        await expect(this.homePageTitle).toBeVisible();
    }
    async validateCategoryTitle(): Promise<void> {
        await expect(this.categoryTitle).toBeVisible();
    }

    async womenCategorySelection(): Promise<void> {
        await this.womenCategory.click();
    }
    async dressItemSelection(): Promise<void> {
        await this.dressItemLink.click();
    }
    async verifyBrandsTitle(): Promise<void> {
        await expect(this.brandsTitle).toBeVisible();
        await expect(this.brandsTitle).toHaveText("Brands");
    }
    async brandSelection(brandName: string): Promise<void> {
        await this.brandsNames.getByText(brandName).click();

    }

}

