# Examen Final – Aseguramiento de la Calidad del Software

## Estructura inicial

Este repositorio contiene únicamente la configuración base de Playwright y las carpetas para organizar el trabajo del examen. **No incluye pruebas automatizadas desarrolladas**, de acuerdo con las indicaciones del ingeniero.

## Requisitos

- Node.js y npm instalados.
- Visual Studio Code (o editor equivalente).
- Git instalado.
- Cuenta de GitHub.

## Preparar el proyecto

```bash
npm install
npx playwright install chromium
```

## Configurar la URL del sitio

En PowerShell, antes de ejecutar las pruebas:

```powershell
$env:BASE_URL="https://URL-DEL-SITIO"
```

También puedes colocar la URL directamente en `playwright.config.ts` si así lo prefieres durante el examen.

## Ejecutar las pruebas

```bash
npx playwright test
```

Abrir el reporte HTML:

```bash
npx playwright show-report
```

## Organización del examen

- `tests/`: aquí se crearán durante el examen las 3 pruebas automatizadas.
- `evidencias/automaticas/`: capturas y trazas relacionadas con las pruebas automatizadas.
- `evidencias/manuales/`: capturas de las 2 pruebas exploratorias manuales.
- `casos-de-prueba/`: documentación de los casos de prueba.
- `Documentos/`: documentos de apoyo o plantillas indicadas por el ingeniero.
- `reportes/`: documentación de defectos e incidencias.
- `playwright.config.ts`: configuración inicial de Playwright.
- `.github/workflows/`: configuración opcional de ejecución en GitHub Actions.

## Recordatorio de entrega

Según las indicaciones del examen, se debe entregar el repositorio con las pruebas automáticas y compartir un enlace de Google Drive que contenga el Excel y el Word solicitados. Los errores reportados deben coincidir entre la documentación y GitHub Issues.

**Importante:** no registrar como defecto algo que no se haya reproducido y verificado. Completar los casos, evidencias, reportes y GitHub Issues durante el examen.
