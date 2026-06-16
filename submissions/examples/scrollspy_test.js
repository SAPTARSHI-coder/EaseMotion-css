// Unit test for sidebar scroll‑spy behavior using Vitest
// This file should be placed under `submissions/examples/` so it complies with the temporary contribution guidelines.

import { test, expect, beforeAll, afterAll } from "vitest";
import puppeteer from "puppeteer";

let browser;
let page;

beforeAll(async () => {
  // Launch a headless browser to render the docs page
  browser = await puppeteer.launch({
    headless: true,
    // The repository serves the docs via a simple file URL; adjust if a dev server is used.
    args: ["--no-sandbox", "--disable-setuid-sandbox"]
  });
  page = await browser.newPage();
  const filePath = "file://" + encodeURI(
    "C:/Users/Kamal/Desktop/GSSOC/EaseMotion-css/docs/index.html"
  );
  await page.goto(filePath);
});

afterAll(async () => {
  await browser.close();
});

// Helper to get the ID of the currently highlighted sidebar link
async function getActiveSidebarId() {
  return await page.evaluate(() => {
    const active = document.querySelector("nav a.active");
    return active ? active.getAttribute("href").replace(/^#/, "") : null;
  });
}

// Scroll to a specific vertical offset and wait for the observer to fire
async function scrollTo(offset) {
  await page.evaluate((y) => {
    window.scrollTo(0, y);
  }, offset);
  // Give the IntersectionObserver time to update the DOM
  await page.waitForTimeout(300);
}

test("sidebar highlight updates while scrolling through sections", async () => {
  // Ensure we start at the top; active should be the first section (e.g., "installation")
  await scrollTo(0);
  let activeId = await getActiveSidebarId();
  expect(activeId).toBe("installation");

  // Approximate offsets for later sections – adjust if the layout changes
  const offsets = {
    animations: 1200,
    components: 2400,
    contributing: 3600
  };

  // Scroll to Animations
  await scrollTo(offsets.animations);
  activeId = await getActiveSidebarId();
  expect(activeId).toBe("animations");

  // Scroll to Components
  await scrollTo(offsets.components);
  activeId = await getActiveSidebarId();
  expect(activeId).toBe("components");

  // Scroll to Contributing
  await scrollTo(offsets.contributing);
  activeId = await getActiveSidebarId();
  expect(activeId).toBe("contributing");
});
