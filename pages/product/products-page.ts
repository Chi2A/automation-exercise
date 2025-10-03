import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "../common/base-page";

/**
 * Products listing page class
 * Handles product search, filtering, and navigation to product details
 */
export class ProductsPage extends BasePage {
  private allProductsTitle!: Locator;
  private searchBar!: Locator;
  private searchButton!: Locator;
  private searchedProductsTitle!: Locator;
  private allProducts!: Locator;
  private viewProductLink!: Locator;

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
  }

  /**
   * Verify that the "All Products" title is visible
   */
  async verifyAllProductsTitle(): Promise<void> {
    await expect(this.allProductsTitle).toBeVisible();
  }

  /**
   * Verify that the "Searched Products" title is visible
   */
  async searchProductsTitleIsVisible(): Promise<void> {
    await expect(this.searchedProductsTitle).toBeVisible();
  }

  /**
   * Search for products using the search functionality
   * @param searchText - Text to search for
   */
  async searchForProduct(searchText: string): Promise<void> {
    await this.searchBar.fill(searchText);
    await this.searchButton.click();
  }

  /**
   * Verify that products are visible in the results
   * Checks that at least one product is displayed and all visible products are actually visible
   */
  async verifyProductsAreVisible(): Promise<void> {
    const productCount = await this.allProducts.count();
    expect(productCount).toBeGreaterThan(0);

    for (let i = 0; i < productCount; i++) {
      await expect(this.allProducts.nth(i)).toBeVisible();
    }
  }

  /**
   * Click on the first product's "View Product" link to navigate to product details
   */
  async viewFirstProductDetails(): Promise<void> {
    await this.viewProductLink.click();
  }
}
