
import { Locator, Page, expect } from "@playwright/test";
import { BasePage } from "./base-page";

export class ProductsDetailsPage extends BasePage {
    private productInfo: Locator;
    private productName: Locator;
    private category: Locator;
    private price: Locator;
    private availability: Locator;
    private condition: Locator;
    private brand: Locator;
    constructor(page: Page) {
        super(page);
        this.productInfo = page.locator('div[class="view-product"] img');
        this.productName = page.getByRole("heading", { name: "Blue Top" })
        this.category = page.getByText("Category: Women > Tops");
        this.price = page.getByText("Rs.");
        this.availability = page.getByText("Availability:");
        this.condition = page.getByText("Condition:");
        this.brand = page.getByText("Brand:");
    }

    async verifyProductDetails(): Promise<void> {
        await expect(this.productInfo).toBeVisible();
        await expect(this.productName).toBeVisible();
        await expect(this.category).toBeVisible();
        await expect(this.price).toBeVisible();
        await expect(this.availability).toBeVisible();
        await expect(this.condition).toBeVisible();
        await expect(this.brand).toBeVisible();
    }
}