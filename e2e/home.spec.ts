import { test, expect } from "@playwright/test";

test("home hero heading renders and contains 'digital menu'", async ({ page }) => {
  await page.goto("/");
  const h1 = page.getByRole("heading", { level: 1 }).first();
  await expect(h1).toContainText(/digital menu/i);
});

test("home shows venue logo strip with La Pulpería", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByAltText("La Pulpería")).toBeVisible();
});

test("localized hero screenshot uses spanish_hero src for /es", async ({ page }) => {
  await page.goto("/es");
  await expect(page.locator("img[src*='spanish_hero']")).toBeVisible();
});
