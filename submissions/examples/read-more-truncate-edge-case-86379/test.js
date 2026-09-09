// @vitest-environment jsdom
import { describe, it, expect } from "vitest";

export function truncateText(text, maxChars = 50, ellipsis = "...") {
  if (typeof text !== "string" || !text.trim()) {
    return { truncated: "", isTruncated: false, original: "" };
  }

  const cleanText = text.trim();
  if (cleanText.length <= maxChars) {
    return { truncated: cleanText, isTruncated: false, original: cleanText };
  }

  const sub = cleanText.slice(0, maxChars);
  const lastSpace = sub.lastIndexOf(" ");
  const truncatedBase = lastSpace > 0 ? sub.slice(0, lastSpace) : sub;

  return {
    truncated: `${truncatedBase}${ellipsis}`,
    isTruncated: true,
    original: cleanText,
  };
}

describe("Read More Text Truncate State Edge Case Assertions", () => {
  it("should return unmodified text when length is below max limit", () => {
    const text = "Short text";
    const result = truncateText(text, 50);

    expect(result.truncated).toBe("Short text");
    expect(result.isTruncated).toBe(false);
    expect(result.original).toBe("Short text");
  });

  it("should return unmodified text when length equals exact max limit", () => {
    const text = "1234567890";
    const result = truncateText(text, 10);

    expect(result.truncated).toBe("1234567890");
    expect(result.isTruncated).toBe(false);
  });

  it("should truncate and preserve word boundaries", () => {
    const text =
      "EaseMotion CSS provides lightweight keyframe animations for UIs";
    const result = truncateText(text, 25);

    expect(result.isTruncated).toBe(true);
    expect(result.truncated).toBe("EaseMotion CSS...");
    expect(result.truncated).not.toContain("CSS p..."); // No partial word slicing
  });

  it("should support custom ellipsis suffix", () => {
    const text = "Hello world from EaseMotion CSS framework";
    const result = truncateText(text, 15, " [Read More]");

    expect(result.truncated).toBe("Hello world [Read More]");
  });

  it("should handle empty string, null, or undefined inputs safely", () => {
    expect(truncateText(null)).toEqual({
      truncated: "",
      isTruncated: false,
      original: "",
    });
    expect(truncateText(undefined)).toEqual({
      truncated: "",
      isTruncated: false,
      original: "",
    });
    expect(truncateText("   ")).toEqual({
      truncated: "",
      isTruncated: false,
      original: "",
    });
  });

  it("should handle single long word without spaces cleanly", () => {
    const longWord = "Supercalifragilisticexpialidocious";
    const result = truncateText(longWord, 10);

    expect(result.isTruncated).toBe(true);
    expect(result.truncated).toBe("Supercalif...");
  });
});
