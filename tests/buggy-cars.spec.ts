
import { test, expect } from '../fixtures';

test.describe('Pruebas automatizadas - Buggy Cars Rating', () => {

 
test('AUT-01 - HU-1 C4: No permitir contraseñas diferentes', async ({
  page,
  registerPage
}) => {

  await test.step('Abrir formulario de registro', async () => {
    await registerPage.navigate();
  });

  await test.step('Completar formulario con contraseñas diferentes', async () => {
    await registerPage.fillRegistration(
      'qa_diferente27',
      'QA',
      'Automatizado',
      'Qa123!',
      'Qa456!'
    );
  });

  await test.step('Verificar que el sitio impide el registro', async () => {
    await registerPage.expectPasswordMismatch();

    await expect(registerPage.registerButton).toBeDisabled();

    await page.screenshot({
      path: 'evidencias/AUT-01_passwords_diferentes.png',
      fullPage: true
    });
  });

});


  test('AUT-02 - HU-1 C2: Registrar usuario con contraseña válida', async ({
    page,
    registerPage
  }) => {

    const loginUnico = `qa_auto_${Date.now()}`;

    await test.step('Abrir formulario de registro', async () => {
      await registerPage.navigate();
    });

    await test.step('Completar registro con contraseña de seis caracteres', async () => {
      await registerPage.fillRegistration(
        loginUnico,
        'QA',
        'Automatizado',
        'Qa123!',
        'Qa123!'
      );
    });

    await test.step('Registrar usuario', async () => {
      await registerPage.register();
    });

    await test.step('Verificar resultado del registro', async () => {
      await registerPage.expectRegistrationSuccessful();

      await page.screenshot({
        path: 'evidencias/AUT-02_registro_usuario.png',
        fullPage: true
      });
    });

  });

  test('AUT-03 - HU-3 C4: Informar que debe iniciar sesión para votar', async ({
    page,
    inventoryPage
  }) => {

    await test.step('Ingresar al listado de Overall Ratings', async () => {
      await inventoryPage.navigate();
      await inventoryPage.goToOverallRatings();
    });

    await test.step('Verificar que existen vehículos', async () => {
      await inventoryPage.expectCarsVisible();
    });

    await test.step('Abrir el primer automóvil', async () => {
      await inventoryPage.openFirstCar();
    });

    await test.step('Verificar mensaje para iniciar sesión', async () => {
      await inventoryPage.expectLoginRequiredMessage();

      await page.screenshot({
        path: 'evidencias/AUT-03_login_requerido.png',
        fullPage: true
      });
    });

  });

});
