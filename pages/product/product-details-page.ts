import { Locator, Page, expect } from "@playwright/test";
import { BasePage } from "../common/base-page";

/**
 * Product details page class
 * Handles verification of individual product information and details
 */
export class ProductDetailsPage extends BasePage {
  private productInfo!: Locator;
  private productName!: Locator;
  private category!: Locator;
  private price!: Locator;
  private availability!: Locator;
  private condition!: Locator;
  private brand!: Locator;

  constructor(page: Page) {
    super(page);
    this.initializeProductDetailsLocators();
  }

  private initializeProductDetailsLocators(): void {
    this.productInfo = this.page.locator('div[class="view-product"] img');
    this.productName = this.page.getByRole("heading", { name: "Blue Top" });
    this.category = this.page.getByText("Category: Women > Tops");
    this.price = this.page.getByText("Rs.");
    this.availability = this.page.getByText("Availability:");
    this.condition = this.page.getByText("Condition:");
    this.brand = this.page.getByText("Brand:");
  }

  /**
   * Verify that all product details are visible on the product details page
   * Includes: product image, name, category, price, availability, condition, and brand
   */
  async verifyProductDetails(): Promise<void> {
    await expect(this.productInfo).toBeVisible();
    await expect(this.productName).toBeVisible();
    await expect(this.category).toBeVisible();
    await expect(this.price).toBeVisible();
    await expect(this.availability).toBeVisible();
    await expect(this.condition).toBeVisible();
    await expect(this.brand).toBeVisible();
  }

  /**
   * Verify specific product name is displayed
   * @param expectedName - Expected product name
   */
  async verifyProductName(expectedName: string): Promise<void> {
    await expect(this.productName).toHaveText(expectedName);
  }

  /**
   * Verify product category information
   * @param expectedCategory - Expected category text
   */
  async verifyProductCategory(expectedCategory: string): Promise<void> {
    await expect(this.category).toHaveText(expectedCategory);
  }
}
