import { describe, it, expect } from "vitest";

function getVisibleText(text, expanded) {
  if (typeof text !== "string") return "";

  if (expanded) return text;

  return text.slice(0, 120);
}

describe("Read More Toggle State", () => {

  it("shows truncated text by default", () => {

    const text = "A".repeat(300);

    expect(getVisibleText(text,false).length).toBe(120);

  });

  it("shows full text when expanded", () => {

    const text = "A".repeat(300);

    expect(getVisibleText(text,true).length).toBe(300);

  });

  it("handles empty string", () => {

    expect(getVisibleText("",false)).toBe("");

  });

  it("handles short text", () => {

    expect(getVisibleText("Hello",false)).toBe("Hello");

  });

  it("handles null input", () => {

    expect(getVisibleText(null,false)).toBe("");

  });

  it("handles undefined input", () => {

    expect(getVisibleText(undefined,false)).toBe("");

  });

  it("returns same text when expanded even if short", () => {

    expect(getVisibleText("Short",true)).toBe("Short");

  });

});