import { Page, Locator } from '@playwright/test';

export class MenuPage {
  readonly page: Page;
  readonly homeLink: Locator;
  readonly profileLink: Locator;
  readonly overallRatingLink: Locator;
  readonly loginLink: Locator;
  readonly registerLink: Locator;

  constructor(page: Page) {
    this.page = page;

    this.homeLink = page.getByRole('link', { name: /^home$/i });
    this.profileLink = page.getByRole('link', { name: /profile/i });
    this.overallRatingLink = page.getByRole('link', { name: /overall rating/i });
    this.loginLink = page.getByRole('link', { name: /login/i });
    this.registerLink = page.getByRole('link', { name: /register/i });
  }

  async goHome() {
    await this.homeLink.click();
  }

  async goProfile() {
    await this.profileLink.click();
  }

  async goOverallRating() {
    await this.overallRatingLink.click();
  }

  async goLogin() {
    await this.loginLink.click();
  }

  async goRegister() {
    await this.registerLink.click();
  }
}