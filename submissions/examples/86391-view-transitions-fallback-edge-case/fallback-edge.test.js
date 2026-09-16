import { describe, expect, it, vi } from "vitest";

/**
 * Executes a View Transition when supported.
 * Otherwise, runs the update callback directly.
 */
function runTransition(startViewTransition, update) {
  if (typeof startViewTransition === "function") {
    return startViewTransition(update);
  }

  update();
  return null;
}

describe("View Transitions fallback edge cases", () => {
  describe("boundary behavior", () => {
    it("falls back when startViewTransition is undefined", () => {
      const update = vi.fn();

      const result = runTransition(undefined, update);

      expect(result).toBeNull();
      expect(update).toHaveBeenCalledTimes(1);
    });

    it("falls back when startViewTransition is null", () => {
      const update = vi.fn();

      const result = runTransition(null, update);

      expect(result).toBeNull();
      expect(update).toHaveBeenCalledTimes(1);
    });

    it("falls back when startViewTransition is false", () => {
      const update = vi.fn();

      const result = runTransition(false, update);

      expect(result).toBeNull();
      expect(update).toHaveBeenCalledTimes(1);
    });

    it("falls back when startViewTransition is an empty string", () => {
      const update = vi.fn();

      const result = runTransition("", update);

      expect(result).toBeNull();
      expect(update).toHaveBeenCalledTimes(1);
    });
  });

  describe("invalid API values", () => {
    it("does not call a string as a transition function", () => {
      const update = vi.fn();

      runTransition("startViewTransition", update);

      expect(update).toHaveBeenCalledTimes(1);
    });

    it("does not call an object as a transition function", () => {
      const update = vi.fn();

      runTransition({}, update);

      expect(update).toHaveBeenCalledTimes(1);
    });

    it("does not call an array as a transition function", () => {
      const update = vi.fn();

      runTransition([], update);

      expect(update).toHaveBeenCalledTimes(1);
    });

    it("does not call a number as a transition function", () => {
      const update = vi.fn();

      runTransition(123, update);

      expect(update).toHaveBeenCalledTimes(1);
    });
  });

  describe("fallback execution", () => {
    it("executes the fallback exactly once", () => {
      const update = vi.fn();

      runTransition(undefined, update);

      expect(update).toHaveBeenCalledTimes(1);
    });

    it("supports repeated fallback executions", () => {
      const update = vi.fn();

      runTransition(undefined, update);
      runTransition(undefined, update);
      runTransition(undefined, update);

      expect(update).toHaveBeenCalledTimes(3);
    });

    it("supports an empty update callback", () => {
      expect(() => runTransition(undefined, () => {})).not.toThrow();
    });

    it("supports a callback that updates state", () => {
      let value = 0;

      runTransition(undefined, () => {
        value += 1;
      });

      expect(value).toBe(1);
    });

    it("preserves sequential fallback state updates", () => {
      let value = 0;

      runTransition(undefined, () => {
        value += 1;
      });

      runTransition(undefined, () => {
        value += 1;
      });

      expect(value).toBe(2);
    });
  });

  describe("supported API boundary", () => {
    it("uses the transition API when it is callable", () => {
      const update = vi.fn();
      const startViewTransition = vi.fn((callback) => {
        callback();
        return { finished: Promise.resolve() };
      });

      runTransition(startViewTransition, update);

      expect(startViewTransition).toHaveBeenCalledTimes(1);
      expect(update).toHaveBeenCalledTimes(1);
    });

    it("does not execute the fallback separately when the API handles the callback", () => {
      const update = vi.fn();

      const startViewTransition = vi.fn((callback) => {
        callback();
      });

      runTransition(startViewTransition, update);

      expect(update).toHaveBeenCalledTimes(1);
    });

    it("preserves an API error instead of silently switching paths", () => {
      const error = new Error("Transition failed");

      const startViewTransition = vi.fn(() => {
        throw error;
      });

      expect(() =>
        runTransition(startViewTransition, vi.fn())
      ).toThrow(error);
    });
  });

  describe("callback edge cases", () => {
    it("propagates a fallback callback error", () => {
      const error = new Error("Update failed");

      expect(() =>
        runTransition(undefined, () => {
          throw error;
        })
      ).toThrow(error);
    });

    it("does not swallow callback errors", () => {
      const update = vi.fn(() => {
        throw new Error("DOM update failed");
      });

      expect(() => runTransition(undefined, update)).toThrow(
        "DOM update failed"
      );

      expect(update).toHaveBeenCalledTimes(1);
    });
  });
});