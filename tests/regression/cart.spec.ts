import { test } from "@playwright/test";
import { HomePage } from "../../pages/home-page";
import { ProductsPage } from "../../pages/product/products-page";
import { ProductsDetailsPage } from "../../pages/products-details-page";
import { CartsPage } from "../../pages/navigation/cart-page";

test.describe("Product Search and Viewing", () => {
    let homePage: HomePage;
    let productsPage: ProductsPage;
    let productsDetailsPage: ProductsDetailsPage;
    let cartPage: CartsPage;
 

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        productsPage = new ProductsPage(page);
        productsDetailsPage = new ProductsDetailsPage(page);
        cartPage = new CartsPage(page);
    
        await page.goto(process.env.baseUrl!);
        await homePage.validateHomePageTitle();
        await homePage.clickOnNavLink("Products");
        await productsPage.verifyAllProductsTitle();
    });
    test("Verify Product quantity in Cart", async ({ page }) => {
        await productsPage.viewFirstProductDetails();
        await productsDetailsPage.verifyProductDetails()
        await productsPage.changeProductQuantity("4");
        await productsDetailsPage.addToCart();
        await productsDetailsPage.clickOnCart();
    

    });

    test("Remove Products From Cart", async ({ page }) => {
        await productsPage.add10ItemsToCart(10);
        await productsDetailsPage.clickOnCart();
        await cartPage.verifyCartPageTitle();
        await cartPage.deleteAllProductsFromCart();
        await cartPage.verifyProductsInCart();
    });

});






