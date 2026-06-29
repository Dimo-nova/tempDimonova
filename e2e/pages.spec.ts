import { test, expect } from "@playwright/test";

const pages = ["features", "pricing", "cases", "about"];
for (const p of pages) {
  test(`${p} page renders a heading`, async ({ page }) => {
    await page.goto(`/${p}`);
    await expect(page.getByRole("heading").first()).toBeVisible();
  });
  test(`${p} page works in spanish`, async ({ page }) => {
    await page.goto(`/es/${p}`);
    await expect(page.getByRole("heading").first()).toBeVisible();
  });
}
