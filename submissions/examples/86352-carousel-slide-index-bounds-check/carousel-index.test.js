import { describe, expect, it } from "vitest";

function clampIndex(index, totalSlides) {
  if (!Number.isInteger(index)) return 0;
  if (index < 0) return 0;
  if (index >= totalSlides) return totalSlides - 1;
  return index;
}

describe("Carousel Slide Index Bounds Check", () => {
  const totalSlides = 4;

  describe("Happy Path", () => {
    it("keeps a valid index unchanged", () => {
      expect(clampIndex(2, totalSlides)).toBe(2);
    });

    it("allows first slide", () => {
      expect(clampIndex(0, totalSlides)).toBe(0);
    });

    it("allows last slide", () => {
      expect(clampIndex(3, totalSlides)).toBe(3);
    });
  });

  describe("Lower Bound", () => {
    it("clamps negative index to zero", () => {
      expect(clampIndex(-1, totalSlides)).toBe(0);
    });

    it("clamps large negative index", () => {
      expect(clampIndex(-100, totalSlides)).toBe(0);
    });
  });

  describe("Upper Bound", () => {
    it("clamps index equal to length", () => {
      expect(clampIndex(4, totalSlides)).toBe(3);
    });

    it("clamps index greater than length", () => {
      expect(clampIndex(20, totalSlides)).toBe(3);
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

    it("handles floating-point numbers", () => {
      expect(clampIndex(2.5, totalSlides)).toBe(0);
    });

    it("handles strings", () => {
      expect(clampIndex("2", totalSlides)).toBe(0);
    });

    it("handles arrays", () => {
      expect(clampIndex([], totalSlides)).toBe(0);
    });

    it("handles objects", () => {
      expect(clampIndex({}, totalSlides)).toBe(0);
    });
  });

  describe("State Invariants", () => {
    it("always returns an integer", () => {
      expect(Number.isInteger(clampIndex(1, totalSlides))).toBe(true);
      expect(Number.isInteger(clampIndex(-5, totalSlides))).toBe(true);
    });

    it("always stays within bounds", () => {
      const result = clampIndex(999, totalSlides);
      expect(result).toBeGreaterThanOrEqual(0);
      expect(result).toBeLessThan(totalSlides);
    });

    it("is deterministic", () => {
      expect(clampIndex(2, totalSlides)).toBe(clampIndex(2, totalSlides));
    });
  });
});