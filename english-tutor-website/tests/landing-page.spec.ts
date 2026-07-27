import { test, expect } from '@playwright/test';

test.describe('Landing Page', () => {
  test.beforeEach(async ({ page }) => {
    // Intercetta errori JS in console
    const errors: string[] = [];
    page.on('pageerror', (exception) => errors.push(exception.message));
    
    await page.goto('/');
    
    expect(errors.length).toBe(0);
  });

  test('Caricamento pagina e elementi principali', async ({ page }) => {
    // Un solo H1
    const h1s = await page.locator('h1').count();
    expect(h1s).toBe(1);
    
    // Titolo h1 visibile
    await expect(page.locator('h1')).toBeVisible();

    // CTA principale presente (Prenota una prova gratuita)
    const cta = page.getByRole('button', { name: 'Prenota una prova gratuita' }).first();
    await expect(cta).toBeVisible();

    // Nessuno scroll orizzontale
    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
    expect(scrollWidth).toBe(clientWidth);
  });

  test('Navigazione interna', async ({ page }) => {
    const discoverBtn = page.getByRole('link', { name: 'Scopri i percorsi' });
    await discoverBtn.click();

    // Verifica che la pagina scrolli (URL include #percorsi)
    await expect(page).toHaveURL(/.*#percorsi/);
    
    // Il titolo della sezione percorsi è visibile
    await expect(page.getByText('Trova il percorso adatto a te')).toBeInViewport();
  });

  test('Apertura dialog e campi obbligatori', async ({ page }) => {
    // Scroll alla sezione percorsi
    await page.goto('/#percorsi');
    
    // Clic su "Scegli questo percorso" per Scuole superiori
    const cardHighSchool = page.locator('.MuiCard-root').filter({ hasText: 'Scuole superiori' });
    await cardHighSchool.scrollIntoViewIfNeeded();
    await cardHighSchool.getByRole('button', { name: 'Scegli questo percorso' }).click();

    // Dialog visibile
    const dialog = page.getByRole('dialog');
    await expect(dialog).toBeVisible();

    // Categoria precompilata mostrata
    await expect(dialog.getByText('Scuole superiori')).toBeVisible();

    // Campi obbligatori presenti
    await expect(dialog.getByLabel(/Classe o livello \*/)).toBeVisible();
    await expect(dialog.getByLabel(/Necessità principale \*/)).toBeVisible();
    await expect(dialog.getByLabel(/Modalità preferita \*/)).toBeVisible();
  });

  test('Validazione dialog senza campi obbligatori', async ({ page }) => {
    await page.goto('/#percorsi');
    const card = page.locator('.MuiCard-root').filter({ hasText: 'Scuole superiori' });
    await card.scrollIntoViewIfNeeded();
    await card.getByRole('button', { name: 'Scegli questo percorso' }).click();

    const dialog = page.getByRole('dialog');
    await expect(dialog).toBeVisible();
    await dialog.getByRole('button', { name: 'Invia su WhatsApp' }).click();

    // Verifica che gli errori siano visibili (helperText di MUI)
    const errors = await dialog.getByText('Campo obbligatorio').count();
    expect(errors).toBe(3); // 3 campi obbligatori vuoti
  });

  test('Generazione URL WhatsApp', async ({ page, context }) => {
    await page.goto('/#percorsi');
    const card = page.locator('.MuiCard-root').filter({ hasText: 'Scuole superiori' });
    await card.scrollIntoViewIfNeeded();
    await card.getByRole('button', { name: 'Scegli questo percorso' }).click();

    const dialog = page.getByRole('dialog');
    
    // Compila i campi
    await dialog.getByLabel('Nome (facoltativo)').fill('Mario Rossi');
    
    // MUI Select uses a hidden input, the easiest way to interact in Playwright is clicking the select and choosing option
    await dialog.getByLabel(/Classe o livello \*/).click();
    await page.getByRole('option', { name: 'Terza superiore' }).click();
    
    await dialog.getByLabel(/Necessità principale \*/).click();
    await page.getByRole('option', { name: 'Recupero insufficienza' }).click();
    
    await dialog.getByLabel(/Modalità preferita \*/).click();
    await page.getByRole('option', { name: 'Online' }).click();

    await dialog.getByLabel('Ulteriori informazioni (facoltativo)').fill('Ho bisogno di aiuto per giovedì.');

    // Prepara l'attesa della nuova pagina/tab
    const pagePromise = context.waitForEvent('page');
    await dialog.getByRole('button', { name: 'Invia su WhatsApp' }).click();
    
    const newPage = await pagePromise;
    const url = newPage.url();

    // Verifica URL (wa.me o api.whatsapp.com in caso di redirect)
    expect(url).toMatch(/wa\.me|api\.whatsapp\.com/);
    expect(url).toContain('393');
    
    // Decode query string
    const urlObj = new URL(url);
    const text = urlObj.searchParams.get('text') || '';

    expect(text).toContain('Mario Rossi');
    expect(text).toContain('Scuole superiori');
    expect(text).toContain('Terza superiore');
    expect(text).toContain('Recupero insufficienza');
    expect(text).toContain('Online');
    expect(text).toContain('Ho bisogno di aiuto per giovedì');
  });

  test.describe('Responsive Sizes', () => {
    const viewports = [
      { width: 320, height: 568, name: 'iPhone SE' },
      { width: 390, height: 844, name: 'iPhone 12' },
      { width: 768, height: 1024, name: 'iPad' },
      { width: 1440, height: 900, name: 'Desktop' }
    ];

    for (const v of viewports) {
      test(`Layout per ${v.name} (${v.width}x${v.height})`, async ({ page }) => {
        await page.setViewportSize({ width: v.width, height: v.height });
        await page.goto('/');

        // Nessuno scroll orizzontale
        const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
        expect(scrollWidth).toBeLessThanOrEqual(v.width);

        // CTA visibile (la prima nella hero o nella navbar)
        await expect(page.getByRole('button', { name: /Prenota una prova gratuita|Chat/ }).first()).toBeVisible();
      });
    }
  });
});
