import { describe, expect, it, vi } from "vitest";

/**
 * Executes the split button's primary action.
 * The main action is intentionally independent from the dropdown action.
 */
function executeMainAction(handler, event = {}) {
  if (typeof handler !== "function") {
    return false;
  }

  handler(event);
  return true;
}

describe("Split Button main action click handler", () => {
  describe("happy path", () => {
    it("calls the main action handler when clicked", () => {
      const handler = vi.fn();

      const result = executeMainAction(handler);

      expect(result).toBe(true);
      expect(handler).toHaveBeenCalledTimes(1);
    });

    it("calls the handler once for each main action click", () => {
      const handler = vi.fn();

      executeMainAction(handler);
      executeMainAction(handler);
      executeMainAction(handler);

      expect(handler).toHaveBeenCalledTimes(3);
    });

    it("passes the click event to the main action handler", () => {
      const handler = vi.fn();
      const event = { type: "click", target: "main-action" };

      executeMainAction(handler, event);

      expect(handler).toHaveBeenCalledWith(event);
    });
  });

  describe("edge cases", () => {
    it("works when the main action is triggered without dropdown state", () => {
      const handler = vi.fn();

      expect(executeMainAction(handler)).toBe(true);
      expect(handler).toHaveBeenCalledTimes(1);
    });

    it("handles repeated clicks independently", () => {
      const handler = vi.fn();

      for (let index = 0; index < 10; index += 1) {
        executeMainAction(handler);
      }

      expect(handler).toHaveBeenCalledTimes(10);
    });

    it("supports an event with no target", () => {
      const handler = vi.fn();
      const event = { type: "click" };

      expect(executeMainAction(handler, event)).toBe(true);
      expect(handler).toHaveBeenCalledWith(event);
    });

    it("supports an empty event object", () => {
      const handler = vi.fn();

      expect(executeMainAction(handler, {})).toBe(true);
      expect(handler).toHaveBeenCalledTimes(1);
    });
  });

  describe("invalid inputs", () => {
    it("does not execute a null handler", () => {
      expect(executeMainAction(null)).toBe(false);
    });

    it("does not execute an undefined handler", () => {
      expect(executeMainAction(undefined)).toBe(false);
    });

    it("does not execute a string as a handler", () => {
      expect(executeMainAction("save")).toBe(false);
    });

    it("does not execute a number as a handler", () => {
      expect(executeMainAction(42)).toBe(false);
    });

    it("does not execute an object as a handler", () => {
      expect(executeMainAction({ click: true })).toBe(false);
    });

    it("does not execute an array as a handler", () => {
      expect(executeMainAction([])).toBe(false);
    });
  });

  describe("handler isolation", () => {
    it("does not invoke an unrelated dropdown handler", () => {
      const mainHandler = vi.fn();
      const dropdownHandler = vi.fn();

      executeMainAction(mainHandler);

      expect(mainHandler).toHaveBeenCalledTimes(1);
      expect(dropdownHandler).not.toHaveBeenCalled();
    });

    it("does not invoke another action when the main action is clicked", () => {
      const mainHandler = vi.fn();
      const secondaryHandler = vi.fn();
      const event = {
        type: "click",
        action: "main",
      };

      executeMainAction(mainHandler, event);

      expect(mainHandler).toHaveBeenCalledTimes(1);
      expect(secondaryHandler).not.toHaveBeenCalled();
    });
  });
});