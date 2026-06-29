import { test, expect } from "@playwright/test";

test("whatsapp widget toggles open", async ({ page }) => {
  await page.goto("/");
  // The panel text (wa.name) should be hidden initially
  const panel = page.getByText(/Dimonova team|Equipo Dimonova/i);
  await expect(panel).toBeHidden();
  // Click the floating launcher button (aria-label="WhatsApp")
  await page.getByRole("button", { name: /whatsapp/i }).first().click();
  await expect(panel).toBeVisible();
});

test("footer renders tagline", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("footer")).toBeVisible();
  await expect(page.locator("footer")).toContainText(
    "Digital menus and dashboards"
  );
});

test("header WhatsApp button opens widget", async ({ page }) => {
  await page.goto("/");
  const panel = page.getByText(/Dimonova team|Equipo Dimonova/i);
  await expect(panel).toBeHidden();
  // The header WA button is the one with the green dot inside dim-hide-md
  // It matches "WhatsApp" and is not the floating launcher
  const headerWaBtn = page
    .locator(".dim-hide-md")
    .getByRole("button", { name: /whatsapp/i });
  await headerWaBtn.click();
  await expect(panel).toBeVisible();
});
