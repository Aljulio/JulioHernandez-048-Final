
import { Page, Locator, expect } from '@playwright/test';

export class RegisterPage {
  readonly page: Page;
  readonly loginInput: Locator;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly passwordInput: Locator;
  readonly confirmPasswordInput: Locator;
  readonly registerButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.loginInput = page.getByLabel('Login', { exact: true });
    this.firstNameInput = page.getByLabel('First Name', { exact: true });
    this.lastNameInput = page.getByLabel('Last Name', { exact: true });
    this.passwordInput = page.getByLabel('Password', { exact: true });
    this.confirmPasswordInput = page.getByLabel('Confirm Password', { exact: true });
    this.registerButton = page.getByRole('button', { name: /register/i });
  }

  async navigate() {
    await this.page.goto('/register');
  }

  async fillRegistration(
    login: string,
    firstName: string,
    lastName: string,
    password: string,
    confirmPassword: string
  ) {
    await this.loginInput.fill(login);
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.passwordInput.fill(password);
    await this.confirmPasswordInput.fill(confirmPassword);
  }

  async register() {
    await this.registerButton.click();
  }

  async expectPasswordMismatch() {
    await expect(this.page.getByText(/passwords do not match/i)).toBeVisible();
  }

  async expectRegistrationSuccessful() {
    await expect(
      this.page.getByText(/registration is successful/i)
    ).toBeVisible();
  }
}
