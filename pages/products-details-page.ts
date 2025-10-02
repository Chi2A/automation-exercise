
import { Locator, Page, expect } from "@playwright/test";
import { BasePage } from "./base-page";

export class ProductsDetailsPage extends BasePage {
  private productInfo: Locator;
  private productName: Locator;
  private category: Locator;
  private price: Locator;
  private availability: Locator;
  private condition: Locator;
  private brand: Locator;
    private writeYourReviewTitle: Locator;
    private yourNameField: Locator;
    private emailAddress: Locator;
    private addReviewTextArea: Locator;
    private submitButton: Locator;
    private reviewSubmissionMessage: Locator;



  constructor(page: Page) {
    super(page);
    this.productInfo = page.locator('div[class="view-product"] img');
    this.productName = page.getByRole("heading", { name: "Blue Top" });
    this.category = page.getByText("Category: Women > Tops");
    this.price = page.getByText("Rs.");
    this.availability = page.getByText("Availability:");
    this.condition = page.getByText("Condition:");
    this.brand = page.getByText("Brand:");
      this.writeYourReviewTitle = page.locator('a[href="#reviews"]');
      this.yourNameField = page.locator('input[id="name"]');  
      this.emailAddress = page.locator('input[id="email"]');
      this.addReviewTextArea = page.locator('textarea[id="review"]');
      this.submitButton = page.locator('button[id="button-review"]');
      this.reviewSubmissionMessage = page.locator("div[class='alert-success alert'] span");
  }

  async verifyProductDetails(): Promise<void> {
    await expect(this.productInfo).toBeVisible();
    await expect(this.productName).toBeVisible();
    await expect(this.category).toBeVisible();
    await expect(this.price).toBeVisible();
    await expect(this.availability).toBeVisible();
    await expect(this.condition).toBeVisible();
    await expect(this.brand).toBeVisible();
  }
  async verifyWriteYourReviewTitle(): Promise<void> {
    await expect(this.writeYourReviewTitle).toBeVisible();
  }
    async reviewSubmission(name: string, email: string, review: string): Promise<void> {
      await this.yourNameField.fill(name);
      await this.emailAddress.fill(email);
      await this.addReviewTextArea.fill(review);
      await this.submitButton.click();
    }
    async verifyReviewSubmissionMessage(): Promise<void> {
      await expect(this.reviewSubmissionMessage).toBeVisible();
    }
}