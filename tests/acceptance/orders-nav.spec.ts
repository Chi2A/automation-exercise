import { test} from "@playwright/test";
import { Page, Locator, expect } from "@playwright/test";
import { BasePage } from "../../pages/common/base-page";
import { HomePage } from "../../pages/home-page";
import { AuthPage } from "../../pages/auth/auth-page";
import { ProductsPage } from "../../pages";
import { CartsPage } from "../../pages/navigation/cart-page";
import { OrdersPage } from "../../pages/navigation/orders-page";
import { CheckoutPage } from "../../pages/navigation/checkout-page";

test.describe("Orders Verification", () => {
  let basePage: BasePage;
    let authPage: AuthPage;
    let homePage: HomePage;
  let productsPage: ProductsPage;
  let cartsPage: CartsPage;
  let checkoutPage: CheckoutPage;
  let ordersPage: OrdersPage;

  test.beforeEach(async ({ page }) => {
    basePage = new BasePage(page);
      authPage = new AuthPage(page);
      productsPage = new ProductsPage(page);
      cartsPage = new CartsPage(page);
        homePage = new HomePage(page);
      ordersPage = new OrdersPage(page);
        checkoutPage = new CheckoutPage(page);
        await page.goto("/");
  });

    test("Place Order: Login before Checkout", async ({ page }) => {
        await basePage.clickOnNavLink("Signup / Login");

        const email = process.env.email!;
        const password = process.env.password!;
        await homePage.login(email, password);
        await authPage.verifyUserIsLoggedIn(process.env.userName!);
        await productsPage.addItemsToCart(1);
        await basePage.clickOnNavLink("Cart");              
        
        
        await cartsPage.proceedToCheckout(); 
        await checkoutPage.verifyCheckoutAddressDetails();
        await checkoutPage.enterComments("Please deliver between 5-6 PM"); 
        await checkoutPage.placeOrder(); 
        await checkoutPage.enterCardDetails("John Doe", "4111111111111111", "123", "12", "25");

   });

});