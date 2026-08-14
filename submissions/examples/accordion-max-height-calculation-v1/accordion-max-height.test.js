import { describe, expect, it } from "vitest";

function calculateMaxHeight(contentHeight, expanded) {
  if (typeof contentHeight !== "number") return 0;
  if (contentHeight < 0) return 0;

  return expanded ? contentHeight : 0;
}

describe("Accordion Toggle Smooth Max-Height Calculation", () => {
  it("returns the content height when expanded", () => {
    expect(calculateMaxHeight(250, true)).toBe(250);
  });

  it("returns zero when collapsed", () => {
    expect(calculateMaxHeight(250, false)).toBe(0);
  });

  it("supports a zero-height accordion", () => {
    expect(calculateMaxHeight(0, true)).toBe(0);
  });

  it("supports large content heights", () => {
    expect(calculateMaxHeight(5000, true)).toBe(5000);
  });

  it("returns zero for negative heights", () => {
    expect(calculateMaxHeight(-100, true)).toBe(0);
  });

  it("returns zero for null height", () => {
    expect(calculateMaxHeight(null, true)).toBe(0);
  });

  it("returns zero for undefined height", () => {
    expect(calculateMaxHeight(undefined, true)).toBe(0);
  });

  it("returns zero for string height", () => {
    expect(calculateMaxHeight("250", true)).toBe(0);
  });

  it("returns zero for object height", () => {
    expect(calculateMaxHeight({}, true)).toBe(0);
  });

  it("correctly toggles expanded and collapsed states", () => {
    expect(calculateMaxHeight(180, true)).toBe(180);
    expect(calculateMaxHeight(180, false)).toBe(0);
  });

  it("returns consistent values across repeated calls", () => {
    expect(calculateMaxHeight(300, true)).toBe(300);
    expect(calculateMaxHeight(300, true)).toBe(300);
  });

  it("handles decimal heights", () => {
    expect(calculateMaxHeight(125.5, true)).toBe(125.5);
  });
});