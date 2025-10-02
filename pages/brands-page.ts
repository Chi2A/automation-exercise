import { Locator,Page,expect}from "@playwright/test";
// This is a placeholder file to create a new page object if needed in the future.

export class BrandsPage {
    private page: Page;
    private brandsProducts: Locator;
    

    constructor(page: Page) {
        this.page = page;
        this.brandsProducts = page.locator('h2[class="title text-center"]');
    }

    async verifyBrandTitle(): Promise<void> {
        await expect(this.brandsProducts).toBeVisible();
    }
    async selectBrand(brandName: string): Promise<void> {
        await this.brandsProducts.getByText(brandName).click();
        await expect(this.brandsProducts).toHaveText(brandName);
    }
   
}
