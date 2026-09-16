// @vitest-environment jsdom
import { describe, it, expect } from "vitest";

export function calculateAvatarOverflow(totalAvatars, maxVisible = 3) {
  if (!Array.isArray(totalAvatars) && typeof totalAvatars !== "number") {
    return { visibleCount: 0, overflowCount: 0, overflowText: "" };
  }

  const total = Array.isArray(totalAvatars)
    ? totalAvatars.length
    : Math.max(0, Math.floor(totalAvatars));
  const limit =
    typeof maxVisible === "number" ? Math.max(0, Math.floor(maxVisible)) : 3;

  if (total <= limit) {
    return { visibleCount: total, overflowCount: 0, overflowText: "" };
  }

  const overflow = total - limit;
  const overflowText = overflow > 999 ? "+999+" : `+${overflow}`;

  return {
    visibleCount: limit,
    overflowCount: overflow,
    overflowText,
  };
}

describe("Avatar Stack Overflow Count Calculator Edge Cases", () => {
  it("should return 0 overflow when total avatars is less than max limit", () => {
    const result = calculateAvatarOverflow(2, 5);
    expect(result.visibleCount).toBe(2);
    expect(result.overflowCount).toBe(0);
    expect(result.overflowText).toBe("");
  });

  it("should return 0 overflow when total avatars equals max limit", () => {
    const result = calculateAvatarOverflow(4, 4);
    expect(result.visibleCount).toBe(4);
    expect(result.overflowCount).toBe(0);
    expect(result.overflowText).toBe("");
  });

  it("should calculate correct overflow when total exceeds max limit", () => {
    const result = calculateAvatarOverflow(10, 3);
    expect(result.visibleCount).toBe(3);
    expect(result.overflowCount).toBe(7);
    expect(result.overflowText).toBe("+7");
  });

  it("should handle array inputs correctly", () => {
    const avatars = ["user1", "user2", "user3", "user4", "user5"];
    const result = calculateAvatarOverflow(avatars, 2);
    expect(result.visibleCount).toBe(2);
    expect(result.overflowCount).toBe(3);
    expect(result.overflowText).toBe("+3");
  });

  it("should handle max limit = 0 edge case", () => {
    const result = calculateAvatarOverflow(5, 0);
    expect(result.visibleCount).toBe(0);
    expect(result.overflowCount).toBe(5);
    expect(result.overflowText).toBe("+5");
  });

  it("should handle negative max limit by clamping to 0", () => {
    const result = calculateAvatarOverflow(5, -3);
    expect(result.visibleCount).toBe(0);
    expect(result.overflowCount).toBe(5);
    expect(result.overflowText).toBe("+5");
  });

  it("should format large overflow counts (>999) into compact +999+ string", () => {
    const result = calculateAvatarOverflow(1500, 3);
    expect(result.overflowCount).toBe(1497);
    expect(result.overflowText).toBe("+999+");
  });

  it("should return zeroes for null, undefined, or invalid inputs", () => {
    expect(calculateAvatarOverflow(null)).toEqual({
      visibleCount: 0,
      overflowCount: 0,
      overflowText: "",
    });
    expect(calculateAvatarOverflow(undefined)).toEqual({
      visibleCount: 0,
      overflowCount: 0,
      overflowText: "",
    });
    expect(calculateAvatarOverflow("invalid")).toEqual({
      visibleCount: 0,
      overflowCount: 0,
      overflowText: "",
    });
  });
});
