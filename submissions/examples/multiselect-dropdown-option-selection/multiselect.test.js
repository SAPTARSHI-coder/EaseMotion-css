import { describe, it, expect } from "vitest";

function toggleOption(selectedOptions, option) {
  if (!Array.isArray(selectedOptions)) {
    return [];
  }

  if (typeof option !== "string" || option.trim() === "") {
    return [...selectedOptions];
  }

  if (selectedOptions.includes(option)) {
    return selectedOptions.filter((item) => item !== option);
  }

  return [...selectedOptions, option];
}

describe("Multi-Select Dropdown Option Selection Array", () => {
  it("adds an option to an empty selection", () => {
    expect(toggleOption([], "JavaScript")).toEqual(["JavaScript"]);
  });

  it("adds a new option to existing selections", () => {
    expect(
      toggleOption(["HTML", "CSS"], "JavaScript")
    ).toEqual(["HTML", "CSS", "JavaScript"]);
  });

  it("removes an already selected option", () => {
    expect(
      toggleOption(["HTML", "CSS", "JavaScript"], "CSS")
    ).toEqual(["HTML", "JavaScript"]);
  });

  it("returns an empty array when the only selected option is removed", () => {
    expect(toggleOption(["HTML"], "HTML")).toEqual([]);
  });

  it("does not create duplicate selections", () => {
    const result = toggleOption(["HTML", "CSS"], "CSS");

    expect(result).not.toContain("CSS");
  });

  it("handles repeated toggle operations correctly", () => {
    let selected = [];

    selected = toggleOption(selected, "React");
    selected = toggleOption(selected, "Vue");
    selected = toggleOption(selected, "React");

    expect(selected).toEqual(["Vue"]);
  });

  it("does not mutate the original selection array", () => {
    const original = ["HTML", "CSS"];

    toggleOption(original, "JavaScript");

    expect(original).toEqual(["HTML", "CSS"]);
  });

  it("handles an invalid option without changing the selection", () => {
    const selected = ["HTML"];

    expect(toggleOption(selected, "")).toEqual(["HTML"]);
    expect(toggleOption(selected, "   ")).toEqual(["HTML"]);
    expect(toggleOption(selected, null)).toEqual(["HTML"]);
  });

  it("handles invalid selection input safely", () => {
    expect(toggleOption(null, "HTML")).toEqual([]);
    expect(toggleOption(undefined, "CSS")).toEqual([]);
  });

  it("preserves selection order", () => {
    expect(
      toggleOption(["React", "Vue"], "Angular")
    ).toEqual(["React", "Vue", "Angular"]);
  });
});