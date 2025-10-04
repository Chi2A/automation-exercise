import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "../common/base-page";
import { ProductsDetailsPage } from "../products-details-page";


export class CartsPage extends BasePage {
  private cartProducts: Locator;
  private cartPageTitle: Locator;
  private deleteIcon: Locator;
  private emptyCartMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.cartProducts = page.locator("tbody tr");
    this.cartPageTitle = page.locator("ol[class='breadcrumb']")
    this.deleteIcon = page.locator("a[class='cart_quantity_delete']");
    this.emptyCartMessage = page.locator("span[id='empty_cart']");
  }

  async verifyCartPageTitle(): Promise<void> {
    await expect(this.cartPageTitle).toBeVisible();
    await expect(this.cartPageTitle).toHaveText("Shopping Cart");
  }

  async verifyCartProductsVisible(): Promise<void> {
    for (let i = 0; i < (await this.cartProducts.count()); i++) {
      await expect(this.cartProducts.nth(i)).toBeVisible();
    }
  }
  async deleteAllProductsFromCart(): Promise<void> {
    while (await this.deleteIcon.count() > 0) {
      await this.deleteIcon.first().click({ delay: 500 });
    }
    }

  async verifyProductsInCart(): Promise<void> { 
  await expect(this.emptyCartMessage).toBeVisible();
  await expect(this.emptyCartMessage).toHaveText("Cart is empty!");
  } 
  


  
}