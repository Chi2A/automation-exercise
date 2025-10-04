import { Page,Locator, expect } from "@playwright/test";
import { BasePage } from "../common/base-page";

export class CheckoutPage extends BasePage {
    checkoutAddressDetails: Locator;
    commentsTextArea: Locator;
    placeOrderButton: Locator;
    nameOnCardInput: Locator;
    cardNumberInput: Locator;
    cvcInput: Locator;
    expirationMonthInput: Locator;
    expirationYearInput: Locator;
    payAndConfirmOrderButton: Locator;
    orderPlacedMessage: Locator;
  

    constructor(page: Page) {
        super(page);
        this.checkoutAddressDetails = page.getByText(
          "Your delivery address . qwe"
        );
        this.commentsTextArea = page.locator("textarea[class='form-control']");
        this.placeOrderButton = page.locator("a[href='/payment']");
        this.nameOnCardInput = page.locator("input[name='name_on_card']");
        this.cardNumberInput = page.locator("input[name='card_number']");
        this.cvcInput = page.locator("input[name='cvc']");
        this.expirationMonthInput = page.locator("input[name='expiry_month']");
        this.expirationYearInput = page.locator("input[name='expiry_year']");
        this.payAndConfirmOrderButton = page.locator("button[id='submit']");
        this.orderPlacedMessage = page.locator("div[class='col-md-12 form-group'] div[class='alert-success alert']");
        
    }

    async verifyCheckoutAddressDetails(): Promise<void> {
        await expect(this.checkoutAddressDetails).not.toBeEmpty();
        
    }
    async enterComments(comments: string): Promise<void> {
        await this.commentsTextArea.fill(comments);
    }
    async placeOrder(): Promise<void> {
        await this.placeOrderButton.click();
    }
    async enterCardDetails(name: string, cardNumber: string, cvc: string, expMonth: string, expYear: string): Promise<void> {
        await this.nameOnCardInput.fill(name);
        await this.cardNumberInput.fill(cardNumber);
        await this.cvcInput.fill(cvc);
        await this.expirationMonthInput.fill(expMonth);
        await this.expirationYearInput.fill(expYear);
        await this.payAndConfirmOrderButton.click();

    }
    async verifyOrderPlacedMessage(): Promise<void> {
        await expect(this.orderPlacedMessage).toBeVisible();
        await expect(this.orderPlacedMessage).toHaveText("Your order has been placed successfully!");
    }
}
