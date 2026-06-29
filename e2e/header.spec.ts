import { test, expect } from "@playwright/test";

test("nav links route to real pages", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "Features" }).click();
  await expect(page).toHaveURL("/features");
});

test("language switch changes URL locale", async ({ page }) => {
  await page.goto("/");
  // Open the lang switcher (aria-label="Choose language")
  await page.locator('button[aria-label="Choose language"]').click();
  // Click the ES option
  await page.locator("[data-lang='es']").first().click();
  await expect(page).toHaveURL(/\/es(\/|$)/);
});

test("mobile nav desktop nav is hidden at 480px", async ({ page }) => {
  await page.setViewportSize({ width: 480, height: 900 });
  await page.goto("/");
  await expect(page.locator(".dim-hide-md").first()).toBeHidden();
});
