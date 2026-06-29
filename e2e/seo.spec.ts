import { test, expect } from "@playwright/test";

test("home page has title with Dimonova", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/Dimonova/i);
});

test("/sitemap.xml returns 200", async ({ page }) => {
  const res = await page.goto("/sitemap.xml");
  expect(res?.status()).toBe(200);
});

test("/robots.txt returns 200 and contains dimonova.com", async ({ page }) => {
  const res = await page.goto("/robots.txt");
  expect(res?.status()).toBe(200);
  const body = await page.content();
  expect(body).toContain("dimonova.com");
});

test("Spanish home has hreflang links", async ({ page }) => {
  await page.goto("/es");
  const hreflang = page.locator('link[rel="alternate"][hreflang]');
  await expect(hreflang.first()).toBeAttached();
});
