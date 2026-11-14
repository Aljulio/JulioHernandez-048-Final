
import { test as base, expect } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';
import { MenuPage } from '../pages/MenuPage';
import { InventoryPage } from '../pages/InventoryPage';
import { RegisterPage } from '../pages/RegisterPage';

type AppFixtures = {
  loginPage: LoginPage;
  menuPage: MenuPage;
  inventoryPage: InventoryPage;
  registerPage: RegisterPage;
};

export const test = base.extend<AppFixtures>({

  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  menuPage: async ({ page }, use) => {
    await use(new MenuPage(page));
  },

  inventoryPage: async ({ page }, use) => {
    await use(new InventoryPage(page));
  },

  registerPage: async ({ page }, use) => {
    await use(new RegisterPage(page));
  }

});

export { expect };
