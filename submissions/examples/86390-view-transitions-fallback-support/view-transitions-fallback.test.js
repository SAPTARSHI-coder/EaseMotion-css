import { describe, expect, it, vi } from "vitest";

/**
 * Executes a DOM update using the View Transitions API when available.
 * Falls back to the callback when the API is unavailable or invalid.
 */
function runTransition(startViewTransition, callback) {
  if (typeof startViewTransition === "function") {
    return startViewTransition(callback);
  }

  callback();
  return null;
}

describe("View Transitions fallback support", () => {
  describe("happy path", () => {
    it("uses startViewTransition when the API is available", () => {
      const callback = vi.fn();
      const startViewTransition = vi.fn((update) => {
        update();
        return { finished: Promise.resolve() };
      });

      const result = runTransition(startViewTransition, callback);

      expect(startViewTransition).toHaveBeenCalledTimes(1);
      expect(callback).toHaveBeenCalledTimes(1);
      expect(result).toBeDefined();
    });

    it("executes the DOM update callback through the transition", () => {
      let updated = false;

      const startViewTransition = vi.fn((update) => {
        update();
      });

      runTransition(startViewTransition, () => {
        updated = true;
      });

      expect(updated).toBe(true);
      expect(startViewTransition).toHaveBeenCalledTimes(1);
    });

    it("returns the transition object when supported", () => {
      const transition = {
        finished: Promise.resolve(),
      };

      const startViewTransition = vi.fn(() => transition);
      const callback = vi.fn();

      const result = runTransition(startViewTransition, callback);

      expect(result).toBe(transition);
    });
  });

  describe("fallback behavior", () => {
    it("runs the callback when View Transitions are unavailable", () => {
      const callback = vi.fn();

      const result = runTransition(undefined, callback);

      expect(callback).toHaveBeenCalledTimes(1);
      expect(result).toBeNull();
    });

    it("runs the callback when startViewTransition is null", () => {
      const callback = vi.fn();

      const result = runTransition(null, callback);

      expect(callback).toHaveBeenCalledTimes(1);
      expect(result).toBeNull();
    });

    it("runs the callback when startViewTransition is not a function", () => {
      const callback = vi.fn();

      const result = runTransition("unsupported", callback);

      expect(callback).toHaveBeenCalledTimes(1);
      expect(result).toBeNull();
    });

    it("runs the callback when the API is represented by a boolean", () => {
      const callback = vi.fn();

      expect(runTransition(false, callback)).toBeNull();
      expect(callback).toHaveBeenCalledTimes(1);
    });

    it("does not require a View Transition object for fallback updates", () => {
      let value = 0;

      const result = runTransition(undefined, () => {
        value += 1;
      });

      expect(value).toBe(1);
      expect(result).toBeNull();
    });
  });

  describe("edge cases", () => {
    it("supports repeated fallback updates", () => {
      const callback = vi.fn();

      runTransition(undefined, callback);
      runTransition(undefined, callback);
      runTransition(undefined, callback);

      expect(callback).toHaveBeenCalledTimes(3);
    });

    it("supports repeated transitions when the API is available", () => {
      const callback = vi.fn();
      const startViewTransition = vi.fn((update) => {
        update();
      });

      runTransition(startViewTransition, callback);
      runTransition(startViewTransition, callback);
      runTransition(startViewTransition, callback);

      expect(startViewTransition).toHaveBeenCalledTimes(3);
      expect(callback).toHaveBeenCalledTimes(3);
    });

    it("preserves callback errors instead of silently swallowing them", () => {
      const callbackError = new Error("DOM update failed");

      expect(() =>
        runTransition(undefined, () => {
          throw callbackError;
        })
      ).toThrow(callbackError);
    });

    it("preserves transition API errors", () => {
      const transitionError = new Error("Transition failed");
      const startViewTransition = vi.fn(() => {
        throw transitionError;
      });

      expect(() =>
        runTransition(startViewTransition, vi.fn())
      ).toThrow(transitionError);
    });
  });

  describe("invalid inputs", () => {
    it("handles a missing callback when the API is unavailable", () => {
      expect(() => runTransition(undefined, undefined)).not.toThrow();
    });

    it("rejects a string as a transition API", () => {
      const callback = vi.fn();

      expect(runTransition("startViewTransition", callback)).toBeNull();
      expect(callback).toHaveBeenCalledTimes(1);
    });

    it("rejects an object as a transition API", () => {
      const callback = vi.fn();

      expect(
        runTransition({ startViewTransition: true }, callback)
      ).toBeNull();

      expect(callback).toHaveBeenCalledTimes(1);
    });

    it("rejects a number as a transition API", () => {
      const callback = vi.fn();

      expect(runTransition(42, callback)).toBeNull();
      expect(callback).toHaveBeenCalledTimes(1);
    });

    it("does not invoke an invalid transition API value", () => {
      const callback = vi.fn();

      runTransition(null, callback);

      expect(callback).toHaveBeenCalledTimes(1);
    });
  });
});