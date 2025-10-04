import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "../common/base-page";

export class ProductsPage extends BasePage {
  private allProductsTitle!: Locator;
  private searchBar!: Locator;
  private searchButton!: Locator;
  private searchedProductsTitle!: Locator;
  private allProducts!: Locator;
  private viewProductLink!: Locator;
  private allAddToCartButtons!: Locator;
  private continueShoppingButton!: Locator;
  private quantityInput!  : Locator;

  constructor(page: Page) {
    super(page);
    this.initializeProductsLocators();
  }

  private initializeProductsLocators(): void {
    this.allProductsTitle = this.page.locator("h2:has-text('All Products')");
    this.searchBar = this.page.locator("input[name='search']");
    this.searchButton = this.page.locator("button[id='submit_search']");
    this.searchedProductsTitle = this.page.locator(
      "h2:has-text('Searched Products')"
    );
    this.allProducts = this.page.locator(
      'div[class="features_items"] div[class="single-products"]'
    );
    this.viewProductLink = this.page
      .locator(".nav.nav-pills.nav-justified > li > a")
      .first();
    this.allAddToCartButtons = this.page.locator(
      'div[class="productinfo text-center"] a'
    );
    this.continueShoppingButton = this.page.locator(
      'button[class="btn btn-success close-modal btn-block"]'
    );
    this.quantityInput = this.page.locator('input[name="quantity"]')
  }

  async verifyAllProductsTitle(): Promise<void> {
    await expect(this.allProductsTitle).toBeVisible();
  }

  async searchProductsTitleIsVisible(): Promise<void> {
    await expect(this.searchedProductsTitle).toBeVisible();
  }

  async searchForProduct(searchText: string): Promise<void> {
    await this.searchBar.fill(searchText);
    await this.searchButton.click();
  }

  async verifyProductsAreVisible(): Promise<void> {
    const productCount = await this.allProducts.count();
    expect(productCount).toBeGreaterThan(0);

    for (let i = 0; i < productCount; i++) {
      await expect(this.allProducts.nth(i)).toBeVisible();
    }
  }

  async viewFirstProductDetails(): Promise<void> {
    await this.viewProductLink.click();
  }
  async addAllProductsToCart(): Promise<void> {
    for (let i = 0; i < (await this.allAddToCartButtons.count()); i++) {
      await this.allAddToCartButtons.nth(i).click();
      await this.continueShoppingButton.click();
    }
  }

  async changeProductQuantity(quantity: string): Promise<void> {
    await this.quantityInput.fill(quantity);
  }


}

