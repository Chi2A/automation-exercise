import { Locator, Page, expect } from "@playwright/test";
import { BasePage } from "../common/base-page";

/**
 * Brands page class
 * Handles brand-specific product filtering and verification
 */
export class BrandsPage extends BasePage {
  private brandsProductsTitle!: Locator;

  constructor(page: Page) {
    super(page);
    this.initializeBrandsLocators();
  }

  private initializeBrandsLocators(): void {
    this.brandsProductsTitle = this.page.locator(
      'h2[class="title text-center"]'
    );
  }

  /**
   * Verify that the brand products title matches the expected brand title
   * @param expectedTitle - Expected title text for the brand (e.g., "Brand - Polo Products")
   */
  async verifyBrandsProductsTitle(expectedTitle: string): Promise<void> {
    await expect(this.brandsProductsTitle).toBeVisible();
    await expect(this.brandsProductsTitle).toHaveText(expectedTitle);
  }

  /**
   * Generic method to verify any brand page title
   * @param brandName - Name of the brand
   */
  async verifyBrandPageTitle(brandName: string): Promise<void> {
    const expectedTitle = `Brand - ${brandName} Products`;
    await this.verifyBrandsProductsTitle(expectedTitle);
  }
}
