import { describe, expect, it } from "vitest";

function toggleFullscreenState(state) {
  return !state;
}

describe("Video Player fullscreen toggle edge cases", () => {
  describe("boundary states", () => {
    it("toggles false to true", () => {
      expect(toggleFullscreenState(false)).toBe(true);
    });

    it("toggles true to false", () => {
      expect(toggleFullscreenState(true)).toBe(false);
    });

    it("always produces a boolean for valid states", () => {
      expect(typeof toggleFullscreenState(false)).toBe("boolean");
      expect(typeof toggleFullscreenState(true)).toBe("boolean");
    });
  });

  describe("repeated toggles", () => {
    it("returns to the initial state after two toggles", () => {
      let state = false;

      state = toggleFullscreenState(state);
      state = toggleFullscreenState(state);

      expect(state).toBe(false);
    });

    it("returns to the initial state after four toggles", () => {
      let state = false;

      for (let i = 0; i < 4; i += 1) {
        state = toggleFullscreenState(state);
      }

      expect(state).toBe(false);
    });

    it("changes state after every toggle", () => {
      let state = false;

      state = toggleFullscreenState(state);
      expect(state).toBe(true);

      state = toggleFullscreenState(state);
      expect(state).toBe(false);

      state = toggleFullscreenState(state);
      expect(state).toBe(true);
    });

    it("produces the opposite state after an odd number of toggles", () => {
      let state = false;

      for (let i = 0; i < 5; i += 1) {
        state = toggleFullscreenState(state);
      }

      expect(state).toBe(true);
    });
  });

  describe("invalid input edge cases", () => {
    it("handles undefined deterministically", () => {
      expect(toggleFullscreenState(undefined)).toBe(true);
    });

    it("handles null deterministically", () => {
      expect(toggleFullscreenState(null)).toBe(true);
    });

    it("handles zero deterministically", () => {
      expect(toggleFullscreenState(0)).toBe(true);
    });

    it("handles one deterministically", () => {
      expect(toggleFullscreenState(1)).toBe(false);
    });

    it("handles an empty string", () => {
      expect(toggleFullscreenState("")).toBe(true);
    });

    it("handles a non-empty string", () => {
      expect(toggleFullscreenState("fullscreen")).toBe(false);
    });

    it("handles an object", () => {
      expect(toggleFullscreenState({})).toBe(false);
    });

    it("handles an array", () => {
      expect(toggleFullscreenState([])).toBe(false);
    });
  });

  describe("state invariants", () => {
    it("does not return null", () => {
      expect(toggleFullscreenState(false)).not.toBeNull();
      expect(toggleFullscreenState(true)).not.toBeNull();
    });

    it("does not return undefined", () => {
      expect(toggleFullscreenState(false)).not.toBeUndefined();
      expect(toggleFullscreenState(true)).not.toBeUndefined();
    });

    it("is deterministic for false", () => {
      const first = toggleFullscreenState(false);
      const second = toggleFullscreenState(false);

      expect(first).toBe(second);
    });

    it("is deterministic for true", () => {
      const first = toggleFullscreenState(true);
      const second = toggleFullscreenState(true);

      expect(first).toBe(second);
    });

    it("preserves boolean output across repeated transitions", () => {
      let state = false;

      for (let i = 0; i < 20; i += 1) {
        state = toggleFullscreenState(state);
        expect(typeof state).toBe("boolean");
      }
    });
  });

  describe("independent calls", () => {
    it("does not share state between calls", () => {
      expect(toggleFullscreenState(false)).toBe(true);
      expect(toggleFullscreenState(false)).toBe(true);
      expect(toggleFullscreenState(true)).toBe(false);
      expect(toggleFullscreenState(true)).toBe(false);
    });
  });
});