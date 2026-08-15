import { describe, it, expect } from "vitest";

/**
 * Helper function used to calculate the horizontal
 * position of the segmented tab indicator.
 */
function getIndicatorPosition(index, tabWidth) {
  if (!Number.isInteger(index) || index < 0) {
    throw new Error("Invalid tab index");
  }

  if (typeof tabWidth !== "number" || tabWidth <= 0) {
    throw new Error("Invalid tab width");
  }

  return index * tabWidth;
}

describe("Segmented Tab Bar Indicator Position", () => {

  describe("Happy Path", () => {

    it("calculates the first tab position", () => {
      expect(getIndicatorPosition(0, 100)).toBe(0);
    });

    it("calculates the second tab position", () => {
      expect(getIndicatorPosition(1, 100)).toBe(100);
    });

    it("calculates the third tab position", () => {
      expect(getIndicatorPosition(2, 120)).toBe(240);
    });

    it("calculates the fourth tab position", () => {
      expect(getIndicatorPosition(3, 90)).toBe(270);
    });

  });

  describe("Edge Cases", () => {

    it("supports a very large tab width", () => {
      expect(getIndicatorPosition(2, 500)).toBe(1000);
    });

    it("supports a single-pixel tab width", () => {
      expect(getIndicatorPosition(5, 1)).toBe(5);
    });

    it("supports zero offset for first tab", () => {
      expect(getIndicatorPosition(0, 250)).toBe(0);
    });

  });

  describe("Invalid Inputs", () => {

    it("throws for a negative index", () => {
      expect(() => getIndicatorPosition(-1, 100))
        .toThrow("Invalid tab index");
    });

    it("throws for a decimal index", () => {
      expect(() => getIndicatorPosition(1.5, 100))
        .toThrow("Invalid tab index");
    });

    it("throws for zero width", () => {
      expect(() => getIndicatorPosition(1, 0))
        .toThrow("Invalid tab width");
    });

    it("throws for a negative width", () => {
      expect(() => getIndicatorPosition(1, -80))
        .toThrow("Invalid tab width");
    });

    it("throws for a non-number width", () => {
      expect(() => getIndicatorPosition(1, "100"))
        .toThrow("Invalid tab width");
    });

  });

});