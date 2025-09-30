import { Locator, Page, expect } from "@playwright/test";
import { BasePage } from "./base-page";

export class TestCasesPage extends BasePage {
  private testCasesTitle: Locator;

  constructor(page: Page) {
    super(page);
    this.testCasesTitle = page.locator('h2[class="title text-center"] b');
  }
  async verifyTestCasesTitle(): Promise<void> {
    await expect(this.testCasesTitle).toBeVisible();
  }
}
