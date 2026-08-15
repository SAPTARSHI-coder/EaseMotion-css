import { describe, expect, it } from "vitest";

function shouldDismiss(target) {
  if (!target || typeof target !== "object") return true;

  return !target.insideDropdown;
}

describe("Dropdown Menu Click Outside Dismiss - Edge Cases", () => {
  describe("Happy Path", () => {
    it("does not dismiss when clicking inside dropdown", () => {
      expect(shouldDismiss({ insideDropdown: true })).toBe(false);
    });

    it("dismisses when clicking outside dropdown", () => {
      expect(shouldDismiss({ insideDropdown: false })).toBe(true);
    });
  });

  describe("Edge Cases", () => {
    it("dismisses when target is null", () => {
      expect(shouldDismiss(null)).toBe(true);
    });

    it("dismisses when target is undefined", () => {
      expect(shouldDismiss(undefined)).toBe(true);
    });

    it("dismisses when property is missing", () => {
      expect(shouldDismiss({})).toBe(true);
    });

    it("does not dismiss nested dropdown elements", () => {
      expect(
        shouldDismiss({
          insideDropdown: true,
          nested: true,
        })
      ).toBe(false);
    });
  });

  describe("Invalid Inputs", () => {
    it("handles strings", () => {
      expect(shouldDismiss("menu")).toBe(true);
    });

    it("handles numbers", () => {
      expect(shouldDismiss(5)).toBe(true);
    });

    it("handles arrays", () => {
      expect(shouldDismiss([])).toBe(true);
    });

    it("handles booleans", () => {
      expect(shouldDismiss(true)).toBe(true);
      expect(shouldDismiss(false)).toBe(true);
    });
  });

  describe("State Assertions", () => {
    it("always returns a boolean", () => {
      expect(typeof shouldDismiss({ insideDropdown: true })).toBe("boolean");
      expect(typeof shouldDismiss(null)).toBe("boolean");
    });

    it("is deterministic", () => {
      expect(shouldDismiss({ insideDropdown: false })).toBe(
        shouldDismiss({ insideDropdown: false })
      );
    });
  });
});