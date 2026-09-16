// @vitest-environment jsdom
import { describe, it, expect } from "vitest";

export function calculateAnchorPosition(target, headerOffset = 0) {
  let element = null;

  if (typeof target === "string") {
    if (!target.trim()) return 0;
    element = document.querySelector(target);
  } else if (target && target.nodeType === 1) {
    element = target;
  }

  if (!element) return 0;

  let elementPosition = 0;
  let currentEl = element;

  while (currentEl) {
    elementPosition += currentEl.offsetTop || 0;
    currentEl = currentEl.offsetParent;
  }

  const offset =
    typeof headerOffset === "number" && !isNaN(headerOffset) ? headerOffset : 0;
  const rawTargetY = elementPosition - offset;

  const scrollHeight =
    document.documentElement.scrollHeight || document.body.scrollHeight || 0;
  const clientHeight =
    document.documentElement.clientHeight || window.innerHeight || 0;
  const maxScroll = Math.max(0, scrollHeight - clientHeight);

  return Math.max(0, Math.min(rawTargetY, maxScroll));
}

describe("Smooth Scroll Anchor Position Calc Edge Case Assertions", () => {
  it("should return 0 when target selector or element is missing/null/empty", () => {
    expect(calculateAnchorPosition("")).toBe(0);
    expect(calculateAnchorPosition("#non-existent-id")).toBe(0);
    expect(calculateAnchorPosition(null)).toBe(0);
    expect(calculateAnchorPosition(undefined)).toBe(0);
  });

  it("should subtract custom sticky header offset height", () => {
    const dummy = document.createElement("div");
    Object.defineProperty(dummy, "offsetTop", {
      value: 500,
      configurable: true,
    });
    Object.defineProperty(dummy, "offsetParent", {
      value: null,
      configurable: true,
    });

    Object.defineProperty(document.documentElement, "scrollHeight", {
      value: 3000,
      configurable: true,
    });
    Object.defineProperty(document.documentElement, "clientHeight", {
      value: 1000,
      configurable: true,
    });

    const targetY = calculateAnchorPosition(dummy, 80);
    expect(targetY).toBe(420); // 500 - 80
  });

  it("should clamp position to 0 when header offset exceeds element offsetTop", () => {
    const dummy = document.createElement("div");
    Object.defineProperty(dummy, "offsetTop", {
      value: 50,
      configurable: true,
    });
    Object.defineProperty(dummy, "offsetParent", {
      value: null,
      configurable: true,
    });

    const targetY = calculateAnchorPosition(dummy, 100);
    expect(targetY).toBe(0); // 50 - 100 clamped to 0
  });

  it("should clamp position to max scroll height at page bottom", () => {
    const dummy = document.createElement("div");
    Object.defineProperty(dummy, "offsetTop", {
      value: 2500,
      configurable: true,
    });
    Object.defineProperty(dummy, "offsetParent", {
      value: null,
      configurable: true,
    });

    Object.defineProperty(document.documentElement, "scrollHeight", {
      value: 2000,
      configurable: true,
    });
    Object.defineProperty(document.documentElement, "clientHeight", {
      value: 1000,
      configurable: true,
    });

    const targetY = calculateAnchorPosition(dummy, 0);
    expect(targetY).toBe(1000); // maxScroll = 2000 - 1000 = 1000
  });

  it("should calculate offset cumulative height across nested offsetParents", () => {
    const parent = document.createElement("div");
    Object.defineProperty(parent, "offsetTop", {
      value: 300,
      configurable: true,
    });
    Object.defineProperty(parent, "offsetParent", {
      value: null,
      configurable: true,
    });

    const child = document.createElement("div");
    Object.defineProperty(child, "offsetTop", {
      value: 150,
      configurable: true,
    });
    Object.defineProperty(child, "offsetParent", {
      value: parent,
      configurable: true,
    });

    Object.defineProperty(document.documentElement, "scrollHeight", {
      value: 5000,
      configurable: true,
    });
    Object.defineProperty(document.documentElement, "clientHeight", {
      value: 1000,
      configurable: true,
    });

    const targetY = calculateAnchorPosition(child, 50);
    expect(targetY).toBe(400); // (300 + 150) - 50 = 400
  });
});
