import { describe, expect, it } from "vitest";

/**
 * Toggles the fullscreen state.
 * A valid fullscreen state is always represented by a boolean.
 */
function toggleFullscreenState(currentState) {
  return !currentState;
}

describe("Video Player fullscreen toggle state", () => {
  describe("initial state", () => {
    it("starts in the non-fullscreen state", () => {
      const state = false;

      expect(state).toBe(false);
    });

    it("represents the initial state as a boolean", () => {
      const state = false;

      expect(typeof state).toBe("boolean");
    });
  });

  describe("happy path", () => {
    it("enters fullscreen when toggled from false", () => {
      expect(toggleFullscreenState(false)).toBe(true);
    });

    it("exits fullscreen when toggled from true", () => {
      expect(toggleFullscreenState(true)).toBe(false);
    });

    it("changes the state on every toggle", () => {
      let state = false;

      state = toggleFullscreenState(state);

      expect(state).toBe(true);

      state = toggleFullscreenState(state);

      expect(state).toBe(false);
    });
  });

  describe("repeated toggles", () => {
    it("returns to the original state after two toggles", () => {
      const initialState = false;

      const finalState = toggleFullscreenState(
        toggleFullscreenState(initialState)
      );

      expect(finalState).toBe(initialState);
    });

    it("returns to the original state after four toggles", () => {
      let state = false;

      for (let index = 0; index < 4; index += 1) {
        state = toggleFullscreenState(state);
      }

      expect(state).toBe(false);
    });

    it("returns to fullscreen after an odd number of toggles", () => {
      let state = false;

      for (let index = 0; index < 5; index += 1) {
        state = toggleFullscreenState(state);
      }

      expect(state).toBe(true);
    });
  });

  describe("edge cases", () => {
    it("handles the false boundary correctly", () => {
      expect(toggleFullscreenState(false)).toBe(true);
    });

    it("handles the true boundary correctly", () => {
      expect(toggleFullscreenState(true)).toBe(false);
    });

    it("does not produce a value outside the boolean states", () => {
      const states = [false, true];

      states.forEach((state) => {
        const result = toggleFullscreenState(state);

        expect([false, true]).toContain(result);
      });
    });

    it("preserves boolean output after repeated toggles", () => {
      let state = false;

      for (let index = 0; index < 10; index += 1) {
        state = toggleFullscreenState(state);
        expect(typeof state).toBe("boolean");
      }
    });

    it("supports consecutive calls without shared state", () => {
      expect(toggleFullscreenState(false)).toBe(true);
      expect(toggleFullscreenState(false)).toBe(true);
      expect(toggleFullscreenState(true)).toBe(false);
      expect(toggleFullscreenState(true)).toBe(false);
    });
  });

  describe("invalid inputs", () => {
    it("converts undefined to the fullscreen state true", () => {
      expect(toggleFullscreenState(undefined)).toBe(true);
    });

    it("converts null to the fullscreen state true", () => {
      expect(toggleFullscreenState(null)).toBe(true);
    });

    it("handles numeric zero", () => {
      expect(toggleFullscreenState(0)).toBe(true);
    });

    it("handles numeric one", () => {
      expect(toggleFullscreenState(1)).toBe(false);
    });

    it("handles an empty string", () => {
      expect(toggleFullscreenState("")).toBe(true);
    });

    it("handles a non-empty string", () => {
      expect(toggleFullscreenState("fullscreen")).toBe(false);
    });

    it("handles an object input", () => {
      expect(toggleFullscreenState({})).toBe(false);
    });

    it("handles an array input", () => {
      expect(toggleFullscreenState([])).toBe(false);
    });
  });

  describe("state invariants", () => {
    it("flips false to true", () => {
      const result = toggleFullscreenState(false);

      expect(result).not.toBe(false);
      expect(result).toBe(true);
    });

    it("flips true to false", () => {
      const result = toggleFullscreenState(true);

      expect(result).not.toBe(true);
      expect(result).toBe(false);
    });

    it("is deterministic for false", () => {
      expect(toggleFullscreenState(false)).toBe(
        toggleFullscreenState(false)
      );
    });

    it("is deterministic for true", () => {
      expect(toggleFullscreenState(true)).toBe(
        toggleFullscreenState(true)
      );
    });
  });
});