import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./common/base-page";

export class ContactUsFormPage extends BasePage {
    private getInTouchTitle: Locator;
    private nameFiled: Locator;
    private emailField: Locator;
    private subjectField: Locator;
    private messageField: Locator;      
    private uploadFileField: Locator;
    private submitButton: Locator;
    private contactSuccessMessage: Locator;
    private homeButton: Locator;



    constructor(page: Page) {
        super(page);
        this.getInTouchTitle = page.getByRole('heading', { name: 'Get In Touch' });
        this.nameFiled = page.locator('input[name="name"]');
        this.emailField = page.locator('input[name="email"]');
        this.subjectField = page.locator('input[name="subject"]');
        this.messageField = page.locator('textarea[name="message"]');
        this.uploadFileField = page.locator('input[name="upload_file"]');
        this.submitButton = page.locator('input[name="submit"]');
        this.contactSuccessMessage = page.locator(
          'div[class="status alert alert-success"]'
        );
        this.homeButton = page.locator('a[class="btn btn-success"]');
    }



    async verifyGetInTouchTitleIsVisible(): Promise<void> {
        await expect(this.getInTouchTitle).toBeVisible();
    }
    async fillContactUsForm(name: string, email: string, subject: string, message: string, filePath: string): Promise<void> {
        await this.nameFiled.fill(name);
        await this.emailField.fill(email);
        await this.subjectField.fill(subject);
        await this.messageField.fill(message);
        // await this.uploadFileField.setInputFiles(filePath);
        await this.submitButton.click();

    }
   
    async verifySuccessMessage(): Promise<void> {
        await expect(this.contactSuccessMessage).toBeVisible();
        await expect(this.contactSuccessMessage).toHaveText("Success! Your details have been submitted successfully.");
    }
    async clickOnHomeButton(): Promise<void> {
        await this.homeButton.click();
    }
}