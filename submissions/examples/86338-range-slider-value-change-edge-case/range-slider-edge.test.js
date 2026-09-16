import { describe, expect, it } from "vitest";

function normalizeValue(value, min = 0, max = 100) {
  if (!Number.isFinite(value)) return min;

  if (value < min) return min;
  if (value > max) return max;

  return Math.round(value);
}

describe("Range Slider Value Change Handler - Edge Cases", () => {
  describe("Happy Path", () => {
    it("returns valid values unchanged", () => {
      expect(normalizeValue(50)).toBe(50);
      expect(normalizeValue(0)).toBe(0);
      expect(normalizeValue(100)).toBe(100);
    });
  });

  describe("Boundary Conditions", () => {
    it("clamps values below minimum", () => {
      expect(normalizeValue(-1)).toBe(0);
      expect(normalizeValue(-999)).toBe(0);
    });

    it("clamps values above maximum", () => {
      expect(normalizeValue(101)).toBe(100);
      expect(normalizeValue(9999)).toBe(100);
    });

    it("rounds decimal values", () => {
      expect(normalizeValue(24.4)).toBe(24);
      expect(normalizeValue(24.6)).toBe(25);
    });
  });

  describe("Invalid Inputs", () => {
    it("handles undefined", () => {
      expect(normalizeValue(undefined)).toBe(0);
    });

    it("handles null", () => {
      expect(normalizeValue(null)).toBe(0);
    });

    it("handles NaN", () => {
      expect(normalizeValue(NaN)).toBe(0);
    });

    it("handles strings", () => {
      expect(normalizeValue("50")).toBe(0);
    });

    it("handles arrays", () => {
      expect(normalizeValue([])).toBe(0);
    });

    it("handles objects", () => {
      expect(normalizeValue({})).toBe(0);
    });

    it("handles booleans", () => {
      expect(normalizeValue(true)).toBe(0);
      expect(normalizeValue(false)).toBe(0);
    });
  });

  describe("State Assertions", () => {
    it("always returns an integer", () => {
      expect(Number.isInteger(normalizeValue(50.7))).toBe(true);
    });

    it("always stays within bounds", () => {
      const result = normalizeValue(9999);

      expect(result).toBeGreaterThanOrEqual(0);
      expect(result).toBeLessThanOrEqual(100);
    });

    it("is deterministic", () => {
      expect(normalizeValue(45)).toBe(normalizeValue(45));
    });
  });
});