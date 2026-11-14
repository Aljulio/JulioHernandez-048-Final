
import { Page, Locator, expect } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;
  readonly overallRatingLink: Locator;
  readonly carLinks: Locator;

  constructor(page: Page) {
    this.page = page;

    this.overallRatingLink = page.locator('a[href="/overall"]');
    this.carLinks = page.locator('a[href*="/model/"]');
  }

  async navigate() {
    await this.page.goto('/');
  }

  async goToOverallRatings() {
    await expect(this.overallRatingLink).toBeVisible();
    await this.overallRatingLink.click();
  }

  async expectCarsVisible() {
    await expect(this.carLinks.first()).toBeVisible();
  }

  async openFirstCar() {
    await this.carLinks.first().click();
  }

  async expectLoginRequiredMessage() {
    await expect(
      this.page.getByText(/log in|login|sign in/i).last()
    ).toBeVisible();
  }
}
