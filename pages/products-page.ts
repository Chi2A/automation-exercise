import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./base-page";

export class ProductsPage extends BasePage {
  
  
  private allProductsTitle: Locator;
  private searchBar: Locator;
  private searchButton: Locator;
  private searchedProductsTitle: Locator;
  private allProducts: Locator;
  private viewProductLink: Locator;
  private addToCartButtons: Locator;
  private continueShoppingButton: Locator;

  constructor(page: Page) {
    super(page);
    this.allProductsTitle = page.locator("h2:has-text('All Products')");
    this.searchBar = page.locator("input[name='search']");
    this.searchButton = page.locator("button[id='submit_search']");
    this.searchedProductsTitle = page.locator(
      "h2:has-text('Searched Products')"
    );
    this.allProducts = page.locator(
      'div[class="features_items"] div[class="single-products"]'
    );
    this.viewProductLink = page
      .locator(".nav.nav-pills.nav-justified > li > a")
      .first();
    this.addToCartButtons = page.locator('a[data-product-id]');
    this.continueShoppingButton = page.locator('button:has-text("Continue Shopping")');
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
    const productCount = await this.allProducts.count();
    
    for (let i = 0; i < productCount; i++) {
      const addToCartButton = this.allProducts.nth(i).locator('a[data-product-id]');
      await addToCartButton.click();
      
     
        
      }
    }
  }
