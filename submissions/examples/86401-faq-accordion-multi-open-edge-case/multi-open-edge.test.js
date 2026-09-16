import { describe, expect, it } from "vitest";

/**
 * Updates the accordion state after a question is toggled.
 *
 * When multiOpen is true, existing open items remain open.
 * When multiOpen is false, only the selected item remains open.
 */
function updateAccordionState(openItems, selectedIndex, multiOpen) {
  if (!Array.isArray(openItems)) {
    return [];
  }

  if (!Number.isInteger(selectedIndex)) {
    return [...openItems];
  }

  if (selectedIndex < 0 || selectedIndex >= openItems.length) {
    return [...openItems];
  }

  const nextState = [...openItems];

  if (multiOpen === true) {
    nextState[selectedIndex] = !nextState[selectedIndex];
    return nextState;
  }

  if (multiOpen === false) {
    return nextState.map((_, index) => index === selectedIndex);
  }

  return [...openItems];
}

describe("FAQ Accordion multi-open state", () => {
  describe("happy path", () => {
    it("allows multiple FAQ items to remain open when multiOpen is true", () => {
      const state = [true, false, false];

      expect(updateAccordionState(state, 1, true)).toEqual([
        true,
        true,
        false,
      ]);
    });

    it("keeps only the selected item open when multiOpen is false", () => {
      const state = [true, true, false];

      expect(updateAccordionState(state, 2, false)).toEqual([
        false,
        false,
        true,
      ]);
    });

    it("closes an already-open item in multi-open mode", () => {
      const state = [true, true, false];

      expect(updateAccordionState(state, 1, true)).toEqual([
        true,
        false,
        false,
      ]);
    });
  });

  describe("edge cases", () => {
    it("supports opening the first FAQ item", () => {
      expect(updateAccordionState([false, false, false], 0, true)).toEqual([
        true,
        false,
        false,
      ]);
    });

    it("supports opening the final FAQ item", () => {
      expect(updateAccordionState([false, false, false], 2, true)).toEqual([
        false,
        false,
        true,
      ]);
    });

    it("supports a single-item accordion", () => {
      expect(updateAccordionState([false], 0, true)).toEqual([true]);
    });

    it("allows a single item to close itself", () => {
      expect(updateAccordionState([true], 0, true)).toEqual([false]);
    });

    it("preserves multiple open items when multiOpen is true", () => {
      expect(updateAccordionState([true, true, true], 1, true)).toEqual([
        true,
        false,
        true,
      ]);
    });

    it("handles an empty accordion without throwing", () => {
      expect(updateAccordionState([], 0, true)).toEqual([]);
    });
  });

  describe("invalid inputs", () => {
    it("ignores a negative selected index", () => {
      const state = [true, false, false];

      expect(updateAccordionState(state, -1, true)).toEqual(state);
    });

    it("ignores an index beyond the final item", () => {
      const state = [true, false, false];

      expect(updateAccordionState(state, 3, true)).toEqual(state);
    });

    it("ignores a significantly oversized index", () => {
      const state = [false, true, false];

      expect(updateAccordionState(state, 999, true)).toEqual(state);
    });

    it("ignores a decimal selected index", () => {
      const state = [false, true, false];

      expect(updateAccordionState(state, 1.5, true)).toEqual(state);
    });

    it("ignores a string selected index", () => {
      const state = [false, true, false];

      expect(updateAccordionState(state, "1", true)).toEqual(state);
    });

    it("preserves state when multiOpen is null", () => {
      const state = [true, false, true];

      expect(updateAccordionState(state, 1, null)).toEqual(state);
    });

    it("preserves state when multiOpen is undefined", () => {
      const state = [true, false, true];

      expect(updateAccordionState(state, 1, undefined)).toEqual(state);
    });

    it("handles a non-array accordion state safely", () => {
      expect(updateAccordionState(null, 0, true)).toEqual([]);
    });
  });
});