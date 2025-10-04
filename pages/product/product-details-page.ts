import { Locator, Page, expect } from "@playwright/test";
import { BasePage } from "../common/base-page";

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

  async verifyProductDetails(): Promise<void> {
    await expect(this.productInfo).toBeVisible();
    await expect(this.productName).toBeVisible();
    await expect(this.category).toBeVisible();
    await expect(this.price).toBeVisible();
    await expect(this.availability).toBeVisible();
    await expect(this.condition).toBeVisible();
    await expect(this.brand).toBeVisible();
  }

  async verifyProductName(expectedName: string): Promise<void> {
    await expect(this.productName).toHaveText(expectedName);
  }

  async verifyProductCategory(expectedCategory: string): Promise<void> {
    await expect(this.category).toHaveText(expectedCategory);
  }
  
}
