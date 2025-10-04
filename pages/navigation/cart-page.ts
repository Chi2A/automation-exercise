import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "../common/base-page";


export class CartsPage extends BasePage {
  private cartProducts: Locator;

  constructor(page: Page) {
    super(page);
    this.cartProducts = page.locator("tbody tr");
  }

  async verifyCartProductsVisible(): Promise<void> {
    for (let i = 0; i < (await this.cartProducts.count()); i++) {
      await expect(this.cartProducts.nth(i)).toBeVisible();
    }
  }
}
