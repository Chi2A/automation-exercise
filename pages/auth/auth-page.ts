import { Locator, Page, expect } from "@playwright/test";
import { BasePage } from "../common/base-page";

/**
 * Authentication page class
 * Handles user authentication, registration, and account management
 */
export class AuthPage extends BasePage {
  // Login form elements
  private loginToYourAccountTitle!: Locator;
  private loginEmail!: Locator;
  private loginPassword!: Locator;
  private loginButton!: Locator;
  private loginErrorMessage!: Locator;
  private loggedAsAnUser!: Locator;

  // Registration form elements
  private signUpTitle!: Locator;
  private signUpName!: Locator;
  private signUpEmail!: Locator;
  private signUpButton!: Locator;

  constructor(page: Page) {
    super(page);
    this.initializeAuthLocators();
  }

  private initializeAuthLocators(): void {
    // Login elements
    this.loginToYourAccountTitle = this.page.locator(
      "div[class='login-form'] h2"
    );
    this.loginEmail = this.page.locator('input[data-qa="login-email"]');
    this.loginPassword = this.page.locator('input[data-qa="login-password"]');
    this.loginButton = this.page.locator('button[data-qa="login-button"]');
    this.loginErrorMessage = this.page.locator("div[class='login-form'] p");
    this.loggedAsAnUser = this.page
      .getByText("Logged in as test12345q");

    // Registration elements
    this.signUpTitle = this.page.locator("div[class='signup-form'] h2");
    this.signUpName = this.page.locator('input[data-qa="signup-name"]');
    this.signUpEmail = this.page.locator('input[data-qa="signup-email"]');
    this.signUpButton = this.page.locator('button[data-qa="signup-button"]');
  }

  // Login Methods
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

  async verifyUserIsLoggedIn(userName: string): Promise<void> {
    await expect(this.loggedAsAnUser).toBeVisible();
    await expect(this.loggedAsAnUser).toHaveText(`Logged in as ${userName}`);
  }

  /**
   * Verify that login error message is displayed with correct text
   */
  async verifyLoginErrorMessage(): Promise<void> {
    await expect(this.loginErrorMessage).toBeVisible();
    await expect(this.loginErrorMessage).toHaveText(
      "Your email or password is incorrect!"
    );
  }

  // Registration Methods
  /**
   * Verify that the signup form title is visible
   */
  async verifySignUpTitle(): Promise<void> {
    await expect(this.signUpTitle).toBeVisible();
    await expect(this.signUpTitle).toHaveText("New User Signup!");
  }

  /**
   * Fill signup form with provided information
   * @param name - User's full name
   * @param email - User's email address
   */
  async signUp(name: string, email: string): Promise<void> {
    await this.signUpName.fill(name);
    await this.signUpEmail.fill(email);
    await this.signUpButton.click();
  }
}
