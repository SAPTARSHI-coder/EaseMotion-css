import { describe, expect, it } from "vitest";

function calculateIndicatorPosition(index, tabCount, tabWidth = 100) {
  if (tabCount <= 0) {
    return 0;
  }

  if (index < 0) {
    return 0;
  }

  if (index >= tabCount) {
    return (tabCount - 1) * tabWidth;
  }

  return index * tabWidth;
}

describe("Segmented Tab Bar indicator edge cases", () => {
  it("keeps the indicator at the first position for index 0", () => {
    expect(calculateIndicatorPosition(0, 3)).toBe(0);
  });

  it("keeps the indicator at the first position for a negative index", () => {
    expect(calculateIndicatorPosition(-1, 3)).toBe(0);
  });

  it("places the indicator at the final valid position", () => {
    expect(calculateIndicatorPosition(2, 3)).toBe(200);
  });

  it("clamps an index beyond the final tab to the final position", () => {
    expect(calculateIndicatorPosition(3, 3)).toBe(200);
  });

  it("clamps a significantly oversized index to the final position", () => {
    expect(calculateIndicatorPosition(999, 3)).toBe(200);
  });

  it("returns the neutral position when there are no tabs", () => {
    expect(calculateIndicatorPosition(0, 0)).toBe(0);
  });

  it("handles a single-tab segmented bar without producing an offset", () => {
    expect(calculateIndicatorPosition(0, 1)).toBe(0);
  });

  it("does not allow a negative tab count to produce a negative position", () => {
    expect(calculateIndicatorPosition(0, -1)).toBe(0);
  });

  it("preserves the correct boundary position with a custom tab width", () => {
    expect(calculateIndicatorPosition(2, 3, 120)).toBe(240);
  });
});