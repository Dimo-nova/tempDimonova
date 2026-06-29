import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./lib",
  testMatch: "**/*.test.ts",
  fullyParallel: true,
  reporter: "list",
});
