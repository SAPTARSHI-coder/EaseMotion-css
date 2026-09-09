import { describe, expect, it } from "vitest";

function calculateColumns(width) {
  if (!Number.isFinite(width) || width <= 0) return 1;

  if (width < 500) return 1;
  if (width < 700) return 2;
  if (width < 900) return 3;

  return 4;
}

describe("Masonry Column Calculation Resize", () => {
  describe("Happy Path", () => {
    it("returns one column for small widths", () => {
      expect(calculateColumns(320)).toBe(1);
    });

    it("returns two columns for medium widths", () => {
      expect(calculateColumns(600)).toBe(2);
    });

    it("returns three columns for large widths", () => {
      expect(calculateColumns(800)).toBe(3);
    });

    it("returns four columns for desktop widths", () => {
      expect(calculateColumns(1200)).toBe(4);
    });
  });

  describe("Boundary Values", () => {
    it("handles exactly 500px", () => {
      expect(calculateColumns(500)).toBe(2);
    });

    it("handles exactly 700px", () => {
      expect(calculateColumns(700)).toBe(3);
    });

    it("handles exactly 900px", () => {
      expect(calculateColumns(900)).toBe(4);
    });
  });

  describe("Invalid Inputs", () => {
    it("handles undefined", () => {
      expect(calculateColumns(undefined)).toBe(1);
    });

    it("handles null", () => {
      expect(calculateColumns(null)).toBe(1);
    });

    it("handles NaN", () => {
      expect(calculateColumns(NaN)).toBe(1);
    });

    it("handles negative widths", () => {
      expect(calculateColumns(-300)).toBe(1);
    });

    it("handles strings", () => {
      expect(calculateColumns("900")).toBe(1);
    });

    it("handles objects", () => {
      expect(calculateColumns({})).toBe(1);
    });

    it("handles arrays", () => {
      expect(calculateColumns([])).toBe(1);
    });
  });

  describe("State Invariants", () => {
    it("always returns an integer", () => {
      expect(Number.isInteger(calculateColumns(650))).toBe(true);
    });

    it("always returns between 1 and 4 columns", () => {
      const value = calculateColumns(99999);

      expect(value).toBeGreaterThanOrEqual(1);
      expect(value).toBeLessThanOrEqual(4);
    });

    it("is deterministic", () => {
      expect(calculateColumns(800)).toBe(calculateColumns(800));
    });
  });
});