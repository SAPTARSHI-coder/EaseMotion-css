// @vitest-environment jsdom
import { describe, it, expect } from "vitest";

export function calculateScrollProgress(
  scrollTop,
  scrollHeight,
  clientHeight,
  precision = 0
) {
  const top =
    typeof scrollTop === "number" && !isNaN(scrollTop) ? scrollTop : 0;
  const height =
    typeof scrollHeight === "number" && !isNaN(scrollHeight) ? scrollHeight : 0;
  const client =
    typeof clientHeight === "number" && !isNaN(clientHeight) ? clientHeight : 0;

  const maxScroll = height - client;

  if (maxScroll <= 0) {
    return { rawRatio: 0, percentage: 0, formatted: "0%" };
  }

  const clampedTop = Math.max(0, Math.min(top, maxScroll));
  const rawRatio = clampedTop / maxScroll;
  const percentage = Number((rawRatio * 100).toFixed(precision));

  return {
    rawRatio,
    percentage,
    formatted: `${percentage}%`,
  };
}

describe("Scroll Progress Scroll Offset Calc Edge Case Assertions", () => {
  it("should calculate correct scroll progress percentage for standard offsets", () => {
    const result = calculateScrollProgress(500, 2000, 1000);
    expect(result.percentage).toBe(50);
    expect(result.formatted).toBe("50%");
  });

  it("should prevent Division-by-Zero when scrollable height equals clientHeight", () => {
    const result = calculateScrollProgress(100, 500, 500);
    expect(result.percentage).toBe(0);
    expect(result.formatted).toBe("0%");
  });

  it("should handle zero scrollHeight and zero clientHeight gracefully", () => {
    const result = calculateScrollProgress(0, 0, 0);
    expect(result.percentage).toBe(0);
    expect(result.formatted).toBe("0%");
  });

  it("should clamp negative scrollTop (elastic bounce) to 0%", () => {
    const result = calculateScrollProgress(-150, 2000, 1000);
    expect(result.percentage).toBe(0);
    expect(result.formatted).toBe("0%");
  });

  it("should clamp overscroll values beyond maxScroll to 100%", () => {
    const result = calculateScrollProgress(1500, 2000, 1000);
    expect(result.percentage).toBe(100);
    expect(result.formatted).toBe("100%");
  });

  it("should handle NaN, null, or invalid inputs safely", () => {
    expect(calculateScrollProgress(NaN, 1000, 500).percentage).toBe(0);
    expect(calculateScrollProgress(100, null, 500).percentage).toBe(0);
    expect(
      calculateScrollProgress(undefined, undefined, undefined).percentage
    ).toBe(0);
  });

  it("should format percentage with custom precision decimals", () => {
    const result = calculateScrollProgress(333, 1000, 0, 2);
    expect(result.percentage).toBe(33.3);
    expect(result.formatted).toBe("33.3%");
  });
});
