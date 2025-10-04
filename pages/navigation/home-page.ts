import { Page, Locator, expect } from "@playwright/test";
import { BasePage } from "../common/base-page";

/**
 * Home page class containing main page functionality
 * Handles navigation, categories, brands, and authentication
 */
export class HomePage extends BasePage {
  // Page validation locators
  private homePageTitle!: Locator;

  // Category section locators
  private categoryTitle!: Locator;
  private womenCategory!: Locator;
  private dressItemLink!: Locator;

  // Brands section locators
  private brandsTitle!: Locator;
  private brandsNames!: Locator;

  // Authentication locators
  private signUpLoginLink!: Locator;
  private loginToYourAccountTitle!: Locator;
  private loginEmail!: Locator;
  private loginPassword!: Locator;
  private loginButton!: Locator;
  private errorMessage!: Locator;

  private recommendedItemsTitle!: Locator;
  private recommendedItems!: Locator;

  constructor(page: Page) {
    super(page);
    this.initializeHomePageLocators();
  }

  private initializeHomePageLocators(): void {
    // Page validation
    this.homePageTitle = this.page.getByRole("link", {
      name: "Website for automation",
    });

    // Category section
    this.categoryTitle = this.page.getByRole("heading", { name: "Category" });
    this.womenCategory = this.page.getByRole("link", { name: " Women" });
    this.dressItemLink = this.page.getByRole("link", { name: "Dress" });

    // Brands section
    this.brandsTitle = this.page.locator('div[class="brands_products"] h2');
    this.brandsNames = this.page.locator(
      "ul[class='nav nav-pills nav-stacked'] li"
    );

    // Authentication
    this.signUpLoginLink = this.page.locator('a[href="/login"]');
    this.loginToYourAccountTitle = this.page.locator(
      "div[class='login-form'] h2"
    );
    this.loginEmail = this.page.locator('input[data-qa="login-email"]');
    this.loginPassword = this.page.locator('input[data-qa="login-password"]');
    this.loginButton = this.page.locator('button[data-qa="login-button"]');
    this.errorMessage = this.page.locator("div[class='login-form'] p");

    this.recommendedItemsTitle = this.page.getByRole("heading", {
      name: "Recommended items",
    });
    this.recommendedItems = this.page.locator(
      'a[class="btn btn-default add-to-cart"]'
    );
  }

  // Page Validation Methods
  /**
   * Verify that the home page title is visible
   */
  async validateHomePageTitle(): Promise<void> {
    await expect(this.homePageTitle).toBeVisible();
  }

  // Category Navigation Methods
  /**
   * Verify that the category section title is visible
   */
  async validateCategoryTitle(): Promise<void> {
    await expect(this.categoryTitle).toBeVisible();
  }

  /**
   * Click on the Women category
   */
  async womenCategorySelection(): Promise<void> {
    await this.womenCategory.click();
  }

  /**
   * Click on the Dress item under Women category
   */
  async dressItemSelection(): Promise<void> {
    await this.dressItemLink.click();
  }

  // Brand Navigation Methods
  /**
   * Verify that the brands section title is visible and has correct text
   */
  async verifyBrandsTitle(): Promise<void> {
    await expect(this.brandsTitle).toBeVisible();
    await expect(this.brandsTitle).toHaveText("Brands");
  }

  /**
   * Select a specific brand from the brands list
   * @param brandName - Name of the brand to select
   */
  async brandSelection(brandName: string): Promise<void> {
    await this.brandsNames.getByText(brandName).click();
  }

  // Authentication Methods
  /**
   * Click on the Sign Up / Login link
   */
  async clickOnSignUpLoginLink(): Promise<void> {
    await this.signUpLoginLink.click();
  }

  /**
   * Verify that the login form title is visible and has correct text
   */
  async verifyLoginTitle(): Promise<void> {
    await expect(this.loginToYourAccountTitle).toBeVisible();
    await expect(this.loginToYourAccountTitle).toHaveText(
      "Login to your account"
    );
  }

  /**
   * Perform login with provided credentials
   * @param email - User email address
   * @param password - User password
   */
  async login(email: string, password: string): Promise<void> {
    await this.loginEmail.fill(email);
    await this.loginPassword.fill(password);
    await this.loginButton.click();
  }

  /**
   * Verify that login error message is displayed with correct text
   */
  async verifyErrorMessage(): Promise<void> {
    await expect(this.errorMessage).toBeVisible();
    await expect(this.errorMessage).toHaveText(
      "Your email or password is incorrect!"
    );
  }

  async verifyRecommendedItemsTitle(): Promise<void> {
    await expect(this.recommendedItemsTitle).toBeVisible();
    await expect(this.recommendedItemsTitle).toHaveText("recommended items");
  }
  async addRecommendedItemsToCart(amountOfItems: number): Promise<void> {
    for (let i = 0; i < amountOfItems; i++) {
      await this.recommendedItems.nth(i).first().click();
    }
  }
}
