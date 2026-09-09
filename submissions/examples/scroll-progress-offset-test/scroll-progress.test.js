import { describe, it, expect } from "vitest";

function getScrollPercentage(scrollTop, scrollHeight, clientHeight) {

  const max = scrollHeight - clientHeight;

  if (max <= 0) return 0;

  const value = (scrollTop / max) * 100;

  return Math.max(0, Math.min(100, value));

}

describe("Scroll Progress Offset Calculation", () => {

  it("returns 0% at top", () => {

    expect(getScrollPercentage(0,2000,1000)).toBe(0);

  });

  it("returns 100% at bottom", () => {

    expect(getScrollPercentage(1000,2000,1000)).toBe(100);

  });

  it("returns 50% halfway", () => {

    expect(getScrollPercentage(500,2000,1000)).toBe(50);

  });

  it("clamps values above 100%", () => {

    expect(getScrollPercentage(1500,2000,1000)).toBe(100);

  });

  it("clamps negative values", () => {

    expect(getScrollPercentage(-100,2000,1000)).toBe(0);

  });

  it("returns 0 when no scrolling is possible", () => {

    expect(getScrollPercentage(0,1000,1000)).toBe(0);

  });

  it("returns 0 for invalid height", () => {

    expect(getScrollPercentage(100,500,700)).toBe(0);

  });

  it("handles decimal values", () => {

    expect(getScrollPercentage(250,2000,1000)).toBe(25);

  });

});