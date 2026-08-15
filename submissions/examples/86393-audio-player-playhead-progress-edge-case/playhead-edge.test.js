import { describe, expect, it } from "vitest";

function calculateProgress(currentTime, duration) {
  if (
    !Number.isFinite(currentTime) ||
    !Number.isFinite(duration) ||
    duration <= 0
  ) {
    return 0;
  }

  const progress = (currentTime / duration) * 100;

  return Math.min(100, Math.max(0, progress));
}

describe("Audio Player playhead progress edge cases", () => {
  describe("boundary values", () => {
    it("returns exactly 0 for the beginning", () => {
      expect(calculateProgress(0, 180)).toBe(0);
    });

    it("returns exactly 100 at the duration boundary", () => {
      expect(calculateProgress(180, 180)).toBe(100);
    });

    it("returns 0 for zero duration", () => {
      expect(calculateProgress(0, 0)).toBe(0);
    });

    it("returns 0 for a negative duration", () => {
      expect(calculateProgress(30, -180)).toBe(0);
    });
  });

  describe("out-of-range values", () => {
    it("clamps negative current time to 0", () => {
      expect(calculateProgress(-1, 180)).toBe(0);
    });

    it("clamps a large negative current time to 0", () => {
      expect(calculateProgress(-100000, 180)).toBe(0);
    });

    it("clamps current time beyond duration to 100", () => {
      expect(calculateProgress(181, 180)).toBe(100);
    });

    it("clamps extremely large current time to 100", () => {
      expect(calculateProgress(100000, 180)).toBe(100);
    });
  });

  describe("very small values", () => {
    it("handles a duration of one second", () => {
      expect(calculateProgress(0.5, 1)).toBe(50);
    });

    it("handles a very small current time", () => {
      expect(calculateProgress(0.001, 1)).toBeCloseTo(0.1);
    });

    it("handles a very small duration", () => {
      expect(calculateProgress(0.0005, 0.001)).toBe(50);
    });

    it("handles equal small values", () => {
      expect(calculateProgress(0.001, 0.001)).toBe(100);
    });
  });

  describe("very large values", () => {
    it("handles a large valid duration", () => {
      expect(calculateProgress(500000, 1000000)).toBe(50);
    });

    it("clamps a large current time against a smaller duration", () => {
      expect(calculateProgress(1000000000, 100)).toBe(100);
    });

    it("handles large equal values", () => {
      expect(calculateProgress(1000000000, 1000000000)).toBe(100);
    });
  });

  describe("non-finite values", () => {
    it("returns 0 for NaN current time", () => {
      expect(calculateProgress(NaN, 180)).toBe(0);
    });

    it("returns 0 for NaN duration", () => {
      expect(calculateProgress(30, NaN)).toBe(0);
    });

    it("returns 0 for positive Infinity current time", () => {
      expect(calculateProgress(Infinity, 180)).toBe(0);
    });

    it("returns 0 for negative Infinity current time", () => {
      expect(calculateProgress(-Infinity, 180)).toBe(0);
    });

    it("returns 0 for infinite duration", () => {
      expect(calculateProgress(30, Infinity)).toBe(0);
    });
  });

  describe("invalid types", () => {
    it("returns 0 for a string current time", () => {
      expect(calculateProgress("30", 180)).toBe(0);
    });

    it("returns 0 for a string duration", () => {
      expect(calculateProgress(30, "180")).toBe(0);
    });

    it("returns 0 for null current time", () => {
      expect(calculateProgress(null, 180)).toBe(0);
    });

    it("returns 0 for null duration", () => {
      expect(calculateProgress(30, null)).toBe(0);
    });

    it("returns 0 for a boolean current time", () => {
      expect(calculateProgress(true, 180)).toBe(0);
    });

    it("returns 0 for a boolean duration", () => {
      expect(calculateProgress(30, false)).toBe(0);
    });

    it("returns 0 for an object current time", () => {
      expect(calculateProgress({}, 180)).toBe(0);
    });

    it("returns 0 for an array duration", () => {
      expect(calculateProgress(30, [])).toBe(0);
    });
  });

  describe("precision boundaries", () => {
    it("calculates exactly 1%", () => {
      expect(calculateProgress(1, 100)).toBe(1);
    });

    it("calculates exactly 99%", () => {
      expect(calculateProgress(99, 100)).toBe(99);
    });

    it("calculates a decimal percentage correctly", () => {
      expect(calculateProgress(1, 3)).toBeCloseTo(33.333333);
    });

    it("handles a decimal current time", () => {
      expect(calculateProgress(2.5, 10)).toBe(25);
    });
  });

  describe("range invariant", () => {
    it("never returns a value below 0", () => {
      const values = [-1000, -1, 0, 1, 180, 1000];

      values.forEach((value) => {
        expect(calculateProgress(value, 180)).toBeGreaterThanOrEqual(0);
      });
    });

    it("never returns a value above 100", () => {
      const values = [-1000, 0, 1, 180, 1000];

      values.forEach((value) => {
        expect(calculateProgress(value, 180)).toBeLessThanOrEqual(100);
      });
    });

    it("always produces a finite result", () => {
      const cases = [
        [0, 180],
        [90, 180],
        [180, 180],
        [-10, 180],
        [1000, 180],
        [NaN, 180],
        [Infinity, 180],
      ];

      cases.forEach(([currentTime, duration]) => {
        expect(
          Number.isFinite(calculateProgress(currentTime, duration))
        ).toBe(true);
      });
    });
  });
});