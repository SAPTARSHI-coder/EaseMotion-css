import { describe, it, expect } from "vitest";

function toggleOption(selectedOptions, option) {
  if (!Array.isArray(selectedOptions)) {
    return [];
  }

  if (!option || typeof option !== "string") {
    return selectedOptions;
  }

  return selectedOptions.includes(option)
    ? selectedOptions.filter((item) => item !== option)
    : [...selectedOptions, option];
}

describe("Multi-Select Dropdown Option Selection Array", () => {
  it("adds an option to an empty selection", () => {
    expect(toggleOption([], "React")).toEqual(["React"]);
  });

  it("adds a new option to existing selections", () => {
    expect(toggleOption(["HTML"], "CSS")).toEqual(["HTML", "CSS"]);
  });

  it("removes an already selected option", () => {
    expect(toggleOption(["HTML", "CSS"], "CSS")).toEqual(["HTML"]);
  });

  it("handles selecting the same option twice", () => {
    let selected = [];

    selected = toggleOption(selected, "JavaScript");
    selected = toggleOption(selected, "JavaScript");

    expect(selected).toEqual([]);
  });

  it("preserves the order of selected options", () => {
    expect(
      toggleOption(["HTML", "CSS"], "JavaScript")
    ).toEqual(["HTML", "CSS", "JavaScript"]);
  });

  it("handles an empty option list", () => {
    expect(toggleOption([], "HTML")).toEqual(["HTML"]);
  });

  it("handles removing the final selected option", () => {
    expect(toggleOption(["HTML"], "HTML")).toEqual([]);
  });

  it("does not mutate the original array", () => {
    const original = ["HTML", "CSS"];

    const result = toggleOption(original, "JavaScript");

    expect(original).toEqual(["HTML", "CSS"]);
    expect(result).toEqual(["HTML", "CSS", "JavaScript"]);
  });

  it("handles invalid selection input", () => {
    expect(toggleOption(null, "HTML")).toEqual([]);
    expect(toggleOption(undefined, "CSS")).toEqual([]);
    expect(toggleOption("HTML", "JavaScript")).toEqual([]);
  });

  it("ignores an invalid option value", () => {
    const selected = ["HTML"];

    expect(toggleOption(selected, "")).toEqual(["HTML"]);
    expect(toggleOption(selected, null)).toEqual(["HTML"]);
    expect(toggleOption(selected, undefined)).toEqual(["HTML"]);
  });

  it("supports multiple selections and individual removal", () => {
    let selected = [];

    selected = toggleOption(selected, "HTML");
    selected = toggleOption(selected, "CSS");
    selected = toggleOption(selected, "JavaScript");
    selected = toggleOption(selected, "CSS");

    expect(selected).toEqual(["HTML", "JavaScript"]);
  });
});