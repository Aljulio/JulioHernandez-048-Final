# Examen Final – Aseguramiento de la Calidad del Software

## Proyecto: Buggy Cars Rating

### 1. Descripción

Este proyecto contiene las pruebas de aseguramiento de calidad realizadas sobre la aplicación web **Buggy Cars Rating**, utilizando Playwright con TypeScript.

Se desarrollaron cinco casos de prueba: tres automatizados y dos manuales, basados en las historias de usuario proporcionadas para el examen final.

### 2. Tecnologías utilizadas

- **Playwright:** automatización de pruebas.
- **TypeScript:** lenguaje utilizado para los scripts.
- **Node.js y npm:** entorno de ejecución y administración de dependencias.
- **Chromium:** navegador utilizado para ejecutar las pruebas.
- **Visual Studio Code:** editor de código.

### 3. Requisitos previos

Antes de ejecutar el proyecto, es necesario tener instalado:

- Node.js (versión LTS recomendada).
- npm.
- Visual Studio Code (opcional, para editar el proyecto).

### 4. Instalación

Clonar o descargar el repositorio y abrir la carpeta del proyecto en una terminal.

Instalar las dependencias:

```bash
npm install
```

Instalar el navegador Chromium de Playwright:

```bash
npx playwright install chromium
```

### 5. Ejecución de las pruebas

Ejecutar todos los casos automatizados:

```bash
npx playwright test
```

Ejecutar las pruebas con interfaz gráfica:

```bash
npx playwright test --ui
```

Ejecutar las pruebas mostrando el navegador:

```bash
npx playwright test --headed
```

### 6. Reporte de resultados

Para consultar el reporte HTML generado por Playwright:

```bash
npx playwright show-report
```

El proyecto utiliza los siguientes mecanismos de evidencia:

- Capturas de pantalla.
- Trazas de ejecución cuando ocurre un fallo.
- Reporte HTML de Playwright.
- Registro de resultados de los casos manuales y automatizados en Excel.

### 7. Casos de prueba incluidos

| Código | Tipo | Descripción |
|---|---|---|
| AUT-01 | Automatizada | Verificar que el sistema impida el registro cuando las contraseñas no coinciden. |
| AUT-02 | Automatizada | Verificar el registro con una contraseña de 6 caracteres que cumple HU-1 C2. |
| AUT-03 | Automatizada | Verificar el mensaje informativo al intentar votar sin iniciar sesión. |
| MAN-01 | Manual | Verificar el cambio de contraseña utilizando una clave de 8 caracteres. |
| MAN-02 | Manual | Verificar que el sistema impida guardar el perfil con el nombre vacío. |

**Nota:** AUT-02 presentó un resultado diferente al esperado según HU-1 C2. Este comportamiento fue registrado como un defecto y no se modificó la prueba para forzar su aprobación.

### 8. Estructura del proyecto

```text
qa-examen-final/
│
├── casos-de-prueba/
├── Documentos/
├── evidencias/
├── fixtures/
├── helpers/
├── pages/
├── reportes/
├── tests/
│
├── playwright.config.ts
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

### 9. Entregables del examen

Los documentos y archivos de evidencia del examen se encuentran disponibles en la siguiente carpeta de Google Drive:

**Carpeta de entregables:**

https://drive.google.com/drive/folders/1nvpM-qhdNAry8NGZ1eBBstkaP882VJEH?usp=sharing

En esta carpeta se almacenarán los casos de prueba ejecutados, los reportes de errores, las evidencias y demás documentos correspondientes al examen final.

### 10. Sitio web probado

https://buggy.justtestit.org/

---

**Examen Final – Aseguramiento de la Calidad del Software**  
Proyecto de pruebas: Buggy Cars Rating