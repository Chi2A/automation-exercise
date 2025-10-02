import { Locator, Page, expect } from "@playwright/test";
import { BasePage } from "./base-page";

export class BrandsPage extends BasePage {
  private brandsProductsTitle: Locator;

  constructor(page: Page) {
    super(page);
    this.brandsProductsTitle = page.locator('h2[class="title text-center"]');
  }
  async verifyBrandsProductsTitle(expectedTitle: string): Promise<void> {
    await expect(this.brandsProductsTitle).toBeVisible();
    await expect(this.brandsProductsTitle).toHaveText(expectedTitle);
  }
}
