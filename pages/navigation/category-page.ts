import { Locator, Page, expect } from "@playwright/test";
import { BasePage } from "../common/base-page";

/**
 * Category page class
 * Handles category-specific product filtering and navigation
 */
export class CategoryPage extends BasePage {
  private productsTitle!: Locator;
  private menCategory!: Locator;
  private tshirtLink!: Locator;

  constructor(page: Page) {
    super(page);
    this.initializeCategoryLocators();
  }

  private initializeCategoryLocators(): void {
    this.productsTitle = this.page.locator('h2[class="title text-center"]');
    this.menCategory = this.page.getByRole("link", { name: " Men" });
    this.tshirtLink = this.page.getByRole("link", { name: "Tshirts" });
  }

 
  async verifyProductsTitle(expectedTitle: string): Promise<void> {
    await expect(this.productsTitle).toBeVisible();
    await expect(this.productsTitle).toHaveText(expectedTitle);
  }

  async menCategorySelection(): Promise<void> {
    await this.menCategory.click();
  }

 
  async tshirtLinkSelection(): Promise<void> {
    await this.tshirtLink.click();
  }

  
  async navigateToSubcategory(
    categoryName: string,
    subcategoryName: string
  ): Promise<void> {
    const categoryLink = this.page.getByRole("link", {
      name: ` ${categoryName}`,
    });
    await categoryLink.click();

    const subcategoryLink = this.page.getByRole("link", {
      name: subcategoryName,
    });
    await subcategoryLink.click();
  }
}
