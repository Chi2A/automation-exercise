import { Locator, Page, expect } from "@playwright/test";
import { BasePage } from "./base-page";

export class CategoryPage extends BasePage {
    private productsTitle!: Locator;
    private menCategory: Locator;
    private tshirtLink: Locator;
    
    
    constructor(page: Page) {
        super(page);
        this.productsTitle = page.locator('h2[class="title text-center"]');
        this.menCategory = page.getByRole("link", { name: " Men" });
        this.tshirtLink = page.getByRole("link", { name: "Tshirts" });
       
    }
    async verifyProductsTitle(): Promise<void> {
        await expect(this.productsTitle).toBeVisible();
        await expect(this.productsTitle).toHaveText('Women - Dress Products');
         await expect(this.productsTitle).toHaveText(
           "Men - TSHIRTS PRODUCTS"
         );
    }
    async menCategorySelection(): Promise<void> {
        await this.menCategory.click();
    }
    async tshirtLinkSelection(): Promise<void> {
        await this.tshirtLink.click();
    }
  
}