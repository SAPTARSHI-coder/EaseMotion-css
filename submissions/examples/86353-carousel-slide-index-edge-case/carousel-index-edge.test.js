import { describe, expect, it } from "vitest";

function clampIndex(index, totalSlides) {
  if (!Number.isInteger(index)) return 0;
  return Math.max(0, Math.min(index, totalSlides - 1));
}

describe("Carousel Slide Index Edge Case Assertions", () => {
  const totalSlides = 4;

  describe("Boundary Conditions", () => {
    it("returns first index when given a negative number", () => {
      expect(clampIndex(-1, totalSlides)).toBe(0);
    });

    it("returns first index for extremely small values", () => {
      expect(clampIndex(-9999, totalSlides)).toBe(0);
    });

    it("returns last index when value exceeds bounds", () => {
      expect(clampIndex(99, totalSlides)).toBe(3);
    });

    it("returns last index for very large values", () => {
      expect(clampIndex(Number.MAX_SAFE_INTEGER, totalSlides)).toBe(3);
    });

    it("keeps first valid index unchanged", () => {
      expect(clampIndex(0, totalSlides)).toBe(0);
    });

    it("keeps last valid index unchanged", () => {
      expect(clampIndex(3, totalSlides)).toBe(3);
    });
  });

  describe("Invalid Inputs", () => {
    it("handles undefined", () => {
      expect(clampIndex(undefined, totalSlides)).toBe(0);
    });

    it("handles null", () => {
      expect(clampIndex(null, totalSlides)).toBe(0);
    });

    it("handles NaN", () => {
      expect(clampIndex(NaN, totalSlides)).toBe(0);
    });

    it("handles decimal numbers", () => {
      expect(clampIndex(2.7, totalSlides)).toBe(0);
    });

    it("handles strings", () => {
      expect(clampIndex("3", totalSlides)).toBe(0);
    });

    it("handles empty strings", () => {
      expect(clampIndex("", totalSlides)).toBe(0);
    });

    it("handles objects", () => {
      expect(clampIndex({}, totalSlides)).toBe(0);
    });

    it("handles arrays", () => {
      expect(clampIndex([], totalSlides)).toBe(0);
    });

    it("handles booleans", () => {
      expect(clampIndex(true, totalSlides)).toBe(0);
      expect(clampIndex(false, totalSlides)).toBe(0);
    });
  });

  describe("State Invariants", () => {
    it("always returns an integer", () => {
      expect(Number.isInteger(clampIndex(2, totalSlides))).toBe(true);
      expect(Number.isInteger(clampIndex(-50, totalSlides))).toBe(true);
    });

    it("always returns a value within bounds", () => {
      const result = clampIndex(1000, totalSlides);

      expect(result).toBeGreaterThanOrEqual(0);
      expect(result).toBeLessThan(totalSlides);
    });

    it("is deterministic", () => {
      expect(clampIndex(2, totalSlides)).toBe(clampIndex(2, totalSlides));
    });

    it("does not mutate totalSlides", () => {
      let count = totalSlides;

      clampIndex(100, count);

      expect(count).toBe(4);
    });
  });
});