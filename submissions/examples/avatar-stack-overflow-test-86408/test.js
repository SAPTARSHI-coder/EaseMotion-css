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

describe("Avatar Stack Overflow Count Calculator Unit Specs", () => {
  it("should return 0 overflow when total count is less than or equal to max limit", () => {
    const res1 = calculateAvatarOverflow(2, 3);
    expect(res1.overflowCount).toBe(0);
    expect(res1.visibleCount).toBe(2);

    const res2 = calculateAvatarOverflow(3, 3);
    expect(res2.overflowCount).toBe(0);
    expect(res2.visibleCount).toBe(3);
  });

  it("should calculate correct overflow count when total exceeds max limit", () => {
    const result = calculateAvatarOverflow(15, 3);
    expect(result.visibleCount).toBe(3);
    expect(result.overflowCount).toBe(12);
    expect(result.overflowText).toBe("+12");
  });

  it("should process array of avatar objects correctly", () => {
    const list = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];
    const result = calculateAvatarOverflow(list, 2);
    expect(result.visibleCount).toBe(2);
    expect(result.overflowCount).toBe(3);
    expect(result.overflowText).toBe("+3");
  });

  it("should handle zero max limit", () => {
    const result = calculateAvatarOverflow(5, 0);
    expect(result.visibleCount).toBe(0);
    expect(result.overflowCount).toBe(5);
    expect(result.overflowText).toBe("+5");
  });

  it("should clamp negative max limit to 0", () => {
    const result = calculateAvatarOverflow(5, -2);
    expect(result.visibleCount).toBe(0);
    expect(result.overflowCount).toBe(5);
    expect(result.overflowText).toBe("+5");
  });

  it("should format overflow counts greater than 999 into +999+", () => {
    const result = calculateAvatarOverflow(1005, 3);
    expect(result.overflowCount).toBe(1002);
    expect(result.overflowText).toBe("+999+");
  });

  it("should return zero state for invalid or non-numeric inputs", () => {
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
    expect(calculateAvatarOverflow({})).toEqual({
      visibleCount: 0,
      overflowCount: 0,
      overflowText: "",
    });
  });
});
