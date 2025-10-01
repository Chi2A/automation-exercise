import { expect, Locator, Page } from "@playwright/test";
import { threadCpuUsage } from "process";

export class BasePage {
  page: Page;
  private topNavigationLocators: Locator;
  private footerText: Locator;
  private emailAddressField: Locator;
  private arrowButton: Locator;
  private successMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.topNavigationLocators = page.locator(`ul[class="nav navbar-nav"] li`); // all nav locators
    this.footerText = page.getByRole("heading", { name: "Subscription" });
    this.emailAddressField = page.getByRole("textbox", {
      name: "Your email address",
    });
    this.arrowButton = page.getByRole("button", { name: "" });
    this.successMessage = page.locator('div[class="alert-success alert"]');
  }

  async clickOnNavLink(linkText: string) {
    await this.topNavigationLocators.getByText(linkText).click();
  }
  async scrollToFooter(): Promise<void> {
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
}
