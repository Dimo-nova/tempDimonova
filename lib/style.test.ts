import { test, expect } from "@playwright/test";
import { s } from "./style";

test("parses declarations to camelCased object", () => {
  expect(s("display:flex;gap:10px")).toEqual({ display: "flex", gap: "10px" });
});
test("camelCases hyphenated props and keeps url() colons", () => {
  expect(s("background-image:url(/a.png);border-radius:8px")).toEqual({
    backgroundImage: "url(/a.png)",
    borderRadius: "8px",
  });
});
