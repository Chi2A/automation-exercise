import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./base-page";
import { faker} from "@faker-js/faker";



export class ProductsPage extends BasePage {
  private allProductsTitle: Locator;
  private searchBar: Locator;
  private searchButton: Locator;
  private searchedProductsTitle: Locator;

  constructor(page: Page) {
    super(page);
    this.allProductsTitle = page.locator("h2:has-text('All Products')");
    this.searchBar = page.locator("input[name='search']");
    this.searchButton = page.locator("button[id='submit_search']");
    this.searchedProductsTitle = page.locator("h2:has-text('Searched Products')");
  }
  async verifyAllProductsTitle(): Promise<void> {
    await expect(this.allProductsTitle).toBeVisible();
  }
  async searchProductsTitleIsVisible(): Promise<void> {
    await expect(this.searchedProductsTitle).toBeVisible();
  }
  async searchForProduct(): Promise<void> {
    const randomProduct = faker.commerce.productName();
    await this.searchBar.fill(randomProduct);
    await this.searchButton.click();
  }


  
}

  
   

 
