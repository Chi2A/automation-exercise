import { Page, Locator, expect } from "@playwright/test";
import { BasePage } from "./base-page";

export class HomePage extends BasePage {
  private homePageTitle: Locator;
  private categoryTitle: Locator;
  private womenCategory: Locator;
  private dressItemLink: Locator;
  private brandsTitle: Locator;
  private brandsNames: Locator;
  private signUpLoginLink: Locator;
  private loginToYourAccountTitle: Locator;
  private loginEmail: Locator;
  private loginPassword: Locator
  private loginButton: Locator;
  private errorMessage: Locator
  private successfulLoginMessage: Locator;
  private deleteAccountLink: Locator;
  private accountDeletedMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.homePageTitle = page.getByRole("link", {
      name: "Website for automation",
    });
    this.categoryTitle = page.getByRole("heading", { name: "Category" });
    this.womenCategory = page.getByRole("link", { name: " Women" });
    this.dressItemLink = page.getByRole("link", { name: "Dress" });
    this.brandsTitle = page.locator('div[class="brands_products"] h2');
    this.brandsNames = page.locator("ul[class='nav nav-pills nav-stacked'] li");
    this.signUpLoginLink = page.locator('a[href="/login"]');
    this.loginToYourAccountTitle = page.locator("div[class='login-form'] h2");
    this.loginEmail = page.locator('input[data-qa="login-email"]')
    this.loginPassword = page.locator('input[data-qa="login-password"]')
    this.loginButton = page.locator('button[data-qa="login-button"]')
    this.errorMessage = page.locator("div[class='login-form'] p");
    this.successfulLoginMessage = page.locator('i[class="fa fa-user"]')
    this.deleteAccountLink = page.locator('a[href="/delete_account"]')
    this.accountDeletedMessage = page.locator("div[class='col-sm-9 col-sm-offset-1'] b")
  }

  async validateHomePageTitle(): Promise<void> {
    await expect(this.homePageTitle).toBeVisible();
  }
  async validateCategoryTitle(): Promise<void> {
    await expect(this.categoryTitle).toBeVisible();
  }

  async womenCategorySelection(): Promise<void> {
    await this.womenCategory.click();
  }
  async dressItemSelection(): Promise<void> {
    await this.dressItemLink.click();
  }
  async verifyBrandsTitle(): Promise<void> {
    await expect(this.brandsTitle).toBeVisible();
    await expect(this.brandsTitle).toHaveText("Brands");
  }
  async brandSelection(brandName: string): Promise<void> {
    await this.brandsNames.getByText(brandName).click();
  }
  async clickOnSignUpLoginLink(): Promise<void> {
    await this.signUpLoginLink.click();
  }
  async verifyLoginTitle(): Promise<void> {
    await expect(this.loginToYourAccountTitle).toBeVisible();
    await expect(this.loginToYourAccountTitle).toHaveText("Login to your account");
  }
  async login(email: string, password: string): Promise<void> {
    await this.loginEmail.fill(email);
    await this.loginPassword.fill(password);
    await this.loginButton.click();
  }
  async verifyErrorMessage(): Promise<void> {
    await expect(this.errorMessage).toBeVisible();
    await expect(this.errorMessage).toHaveText("Your email or password is incorrect!");
  }
  async verifySuccessfulLogin(userName:string): Promise<void> {
    expect(this.topNavigationLocators.last());
  }
  async deleteAccount(): Promise<void> {
    await this.deleteAccountLink.click();
  }
  async verifyAccountDeletedMessage(): Promise<void> {
    await expect(this.accountDeletedMessage).toBeVisible();
    await expect(this.accountDeletedMessage).toHaveText("Account Deleted!");
  }

}
