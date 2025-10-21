import { expect, Locator, Page } from "@playwright/test";

export class BasePage {
  protected page: Page;
  private topNavigationLocators!: Locator;
  private footerText!: Locator;
  private emailAddressField!: Locator;
  private arrowButton!: Locator;
  private successMessage!: Locator;
  private contactUsLink!: Locator;
  private alert!: Locator;
  private subscriptionText!: Locator;
  private scrollUpArrowButton!: Locator;
  private subUpperText!: Locator;

  constructor(page: Page) {
    this.page = page;
    this.initializeLocators();
  }

  private initializeLocators(): void {
    this.topNavigationLocators = this.page.locator(
      `ul[class="nav navbar-nav"] li`
    );
    this.footerText = this.page.getByRole("heading", { name: "Subscription" });
    this.emailAddressField = this.page.getByRole("textbox", {
      name: "Your email address",
    });
    this.arrowButton = this.page.getByRole("button", { name: "" });
    this.successMessage = this.page.locator('div[class="alert-success alert"]');
    this.contactUsLink = this.page.locator('a[href="/contact_us"] i');
    this.alert = this.page.locator('div[class="status alert alert-success"]');
    this.subscriptionText = this.page.locator('div[class="single-widget"]');
    this.scrollUpArrowButton = this.page.locator('a[id="scrollUp"]');
    this.subUpperText = this.page.locator(
      'div[class="item active"] div[class="col-sm-6"] h2'
    );
  }

  async clickOnNavLink(linkText: string): Promise<void> {
    await this.topNavigationLocators.getByText(linkText).click();
  }

  async scrollTo(): Promise<void> {
    await this.footerText.scrollIntoViewIfNeeded();
  }

  async verifyFooterTextIsVisible(): Promise<void> {
    await expect(this.footerText).toBeVisible();
    await expect(this.footerText).toHaveText("Subscription");
  }

  async enterEmailAddress(email: string): Promise<void> {
    await this.emailAddressField.fill(email);
    await this.arrowButton.click();
  }

  async verifySuccessMessage(): Promise<void> {
    await expect(this.successMessage).toBeVisible();
    await expect(this.successMessage).toHaveText(
      "You have been successfully subscribed!"
    );
  }
  async clickOnContactUsLink(): Promise<void> {
    await this.contactUsLink.click();
  }
  async verifyAlertIsVisible(): Promise<void> {
    await expect(this.alert).toBeVisible();
  }
  async clickOnAlert(): Promise<void> {
    this.page.once("dialog", async (dialog) => await dialog.accept());
    await this.alert.click();
  }
  async verifySubscriptionTextIsVisible(): Promise<void> {
    await expect(this.subscriptionText).toBeVisible();
  }
  async scrollToTop(): Promise<void> {
    await this.scrollUpArrowButton.click();
  }
  async verifySubUpperTextIsVisible(): Promise<void> {
    await expect(this.subUpperText).toBeVisible();
  }
}
