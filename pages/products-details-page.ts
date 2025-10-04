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
  private addToCartButton: Locator;
  private cartIcon: Locator;
  private allProducts: Locator;
  private continueShoppingButton: Locator;
  constructor(page: Page) {
    super(page);
    this.productInfo = page.locator('div[class="view-product"] img');
    this.productName = page.getByRole("heading", { name: "Blue Top" });
    this.category = page.getByText("Category: Women > Tops");
    this.price = page.getByText("Rs.");
    this.availability = page.getByText("Availability:");
    this.condition = page.getByText("Condition:");
    this.brand = page.getByText("Brand:");
    this.addToCartButton = page.locator('button[class="btn btn-default cart"]');
    this.cartIcon = page.locator('a[href="/view_cart"] i');
    this.allProducts = page.locator(
      'div[class="features_items"] div[class="single-products"]'
    );
    this.continueShoppingButton = page.locator(
      'button[class="btn btn-success close-modal btn-block"]'
    );
  }

  async checkAllItemsVisible(): Promise<void> {
    const productCount = await this.allProducts.count();
    expect(productCount).toBeGreaterThan(0);

    for (let i = 0; i < productCount; i++) {
      await expect(this.allProducts.nth(i)).toBeVisible();
    }
  }

  async addAllItemsToCart(): Promise<void> {
    const productCount = await this.allProducts.count();

    const count = await this.addToCartButton.count();

    for (let i = 0; i < count; i++) {
      await this.allProducts.nth(i).hover();
      await this.addToCartButton.nth(i).click();
      await this.continueShoppingButton.click();
    }
  }
  async addToCart(): Promise<void> {
    await this.addToCartButton.click();
  }

  async clickOnCart(): Promise<void> {
    await this.cartIcon.click();
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
