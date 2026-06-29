import { test, expect } from "@playwright/test";

test("home page responds", async ({ page }) => {
  const res = await page.goto("/");
  expect(res?.status()).toBe(200);
});

test("english at root, spanish prefixed", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("main")).toHaveText("Home");
  await page.goto("/es");
  await expect(page.locator("main")).toHaveText("Inicio");
});
