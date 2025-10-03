import { expect, Locator, Page } from "@playwright/test";

/**
 * Base page class containing common functionality shared across all pages
 * Includes navigation, footer interactions, and newsletter subscription
 */
export class BasePage {
  protected page: Page;
  private topNavigationLocators!: Locator;
  private footerText!: Locator;
  private emailAddressField!: Locator;
  private arrowButton!: Locator;
  private successMessage!: Locator;

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
  }

  /**
   * Navigate to a specific page using the top navigation menu
   * @param linkText - The text of the navigation link to click
   */
  async clickOnNavLink(linkText: string): Promise<void> {
    await this.topNavigationLocators.getByText(linkText).click();
  }

  /**
   * Scroll to the footer section of the page
   */
  async scrollToFooter(): Promise<void> {
    await this.footerText.scrollIntoViewIfNeeded();
  }

  /**
   * Verify that the footer subscription section is visible and has correct text
   */
  async verifyFooterTextIsVisible(): Promise<void> {
    await expect(this.footerText).toBeVisible();
    await expect(this.footerText).toHaveText("Subscription");
  }

  /**
   * Enter email address in the newsletter subscription field and submit
   * @param email - Email address to subscribe with
   */
  async enterEmailAddress(email: string): Promise<void> {
    await this.emailAddressField.fill(email);
    await this.arrowButton.click();
  }

  /**
   * Verify that the subscription success message is displayed
   */
  async verifySuccessMessage(): Promise<void> {
    await expect(this.successMessage).toBeVisible();
    await expect(this.successMessage).toHaveText(
      "You have been successfully subscribed!"
    );
  }
}
