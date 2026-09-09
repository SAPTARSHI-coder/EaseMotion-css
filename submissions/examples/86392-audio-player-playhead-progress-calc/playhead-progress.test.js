import { describe, expect, it } from "vitest";

/**
 * Calculates audio playhead progress as a percentage.
 *
 * Invalid durations or times return 0.
 * Results are clamped between 0% and 100%.
 */
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

describe("Audio Player playhead progress calculation", () => {
  describe("happy path", () => {
    it("returns 0% at the beginning of playback", () => {
      expect(calculateProgress(0, 180)).toBe(0);
    });

    it("returns 50% at the midpoint", () => {
      expect(calculateProgress(90, 180)).toBe(50);
    });

    it("returns 100% at the end of playback", () => {
      expect(calculateProgress(180, 180)).toBe(100);
    });

    it("calculates a quarter of the audio correctly", () => {
      expect(calculateProgress(45, 180)).toBe(25);
    });

    it("calculates a three-quarter position correctly", () => {
      expect(calculateProgress(135, 180)).toBe(75);
    });

    it("supports fractional playback positions", () => {
      expect(calculateProgress(30, 120)).toBe(25);
    });
  });

  describe("edge cases", () => {
    it("returns 0 when duration is zero", () => {
      expect(calculateProgress(0, 0)).toBe(0);
    });

    it("returns 0 when duration is negative", () => {
      expect(calculateProgress(30, -180)).toBe(0);
    });

    it("clamps progress above 100%", () => {
      expect(calculateProgress(240, 180)).toBe(100);
    });

    it("clamps negative progress to 0%", () => {
      expect(calculateProgress(-30, 180)).toBe(0);
    });

    it("handles a very small duration", () => {
      expect(calculateProgress(0.5, 1)).toBe(50);
    });

    it("handles a very small playback position", () => {
      expect(calculateProgress(0.001, 1)).toBeCloseTo(0.1);
    });

    it("handles equal current time and duration", () => {
      expect(calculateProgress(60, 60)).toBe(100);
    });

    it("handles repeated calculations consistently", () => {
      const results = [
        calculateProgress(30, 120),
        calculateProgress(30, 120),
        calculateProgress(30, 120),
      ];

      expect(results).toEqual([25, 25, 25]);
    });
  });

  describe("invalid inputs", () => {
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

    it("returns 0 for Infinity duration", () => {
      expect(calculateProgress(30, Infinity)).toBe(0);
    });

    it("returns 0 for string current time", () => {
      expect(calculateProgress("30", 180)).toBe(0);
    });

    it("returns 0 for string duration", () => {
      expect(calculateProgress(30, "180")).toBe(0);
    });

    it("returns 0 for null current time", () => {
      expect(calculateProgress(null, 180)).toBe(0);
    });

    it("returns 0 for null duration", () => {
      expect(calculateProgress(30, null)).toBe(0);
    });

    it("returns 0 when both values are invalid", () => {
      expect(calculateProgress("invalid", null)).toBe(0);
    });
  });

  describe("boundary precision", () => {
    it("calculates 1% correctly", () => {
      expect(calculateProgress(1, 100)).toBe(1);
    });

    it("calculates 99% correctly", () => {
      expect(calculateProgress(99, 100)).toBe(99);
    });

    it("handles decimal duration values", () => {
      expect(calculateProgress(1.5, 3)).toBe(50);
    });

    it("handles decimal current time values", () => {
      expect(calculateProgress(2.5, 10)).toBe(25);
    });

    it("never returns a value below zero", () => {
      expect(calculateProgress(-1000, 100)).toBeGreaterThanOrEqual(0);
    });

    it("never returns a value above one hundred", () => {
      expect(calculateProgress(1000, 100)).toBeLessThanOrEqual(100);
    });
  });
});