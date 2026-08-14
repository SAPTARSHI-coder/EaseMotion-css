import { describe, expect, it } from "vitest";

function fuzzySearch(commands, query) {
  if (!Array.isArray(commands)) return [];

  if (typeof query !== "string") return [];

  const text = query.trim().toLowerCase();

  if (!text) return [...commands];

  return commands.filter((command) =>
    command.toLowerCase().includes(text)
  );
}

describe("Command Palette Fuzzy Search Edge Cases", () => {
  const commands = [
    "Open File",
    "Save File",
    "Search Project",
    "Command Palette",
    "Toggle Sidebar",
    "Rename Symbol",
    "Format Document"
  ];

  it("returns every command for an empty query", () => {
    expect(fuzzySearch(commands, "")).toEqual(commands);
  });

  it("returns every command for whitespace only", () => {
    expect(fuzzySearch(commands, "     ")).toEqual(commands);
  });

  it("matches regardless of letter case", () => {
    expect(fuzzySearch(commands, "FORMAT")).toEqual([
      "Format Document"
    ]);
  });

  it("finds partial matches", () => {
    expect(fuzzySearch(commands, "file")).toEqual([
      "Open File",
      "Save File"
    ]);
  });

  it("finds text in the middle of a command", () => {
    expect(fuzzySearch(commands, "palette")).toEqual([
      "Command Palette"
    ]);
  });

  it("returns no matches for unknown text", () => {
    expect(fuzzySearch(commands, "docker")).toEqual([]);
  });

  it("handles duplicate command names", () => {
    const list = ["Build", "Build", "Run"];

    expect(fuzzySearch(list, "build")).toEqual([
      "Build",
      "Build"
    ]);
  });

  it("supports a single command", () => {
    expect(fuzzySearch(["Deploy"], "deploy")).toEqual([
      "Deploy"
    ]);
  });

  it("supports an empty command list", () => {
    expect(fuzzySearch([], "test")).toEqual([]);
  });

  it("returns an empty array for null commands", () => {
    expect(fuzzySearch(null, "file")).toEqual([]);
  });

  it("returns an empty array for undefined commands", () => {
    expect(fuzzySearch(undefined, "file")).toEqual([]);
  });

  it("returns an empty array for invalid query types", () => {
    expect(fuzzySearch(commands, null)).toEqual([]);
    expect(fuzzySearch(commands, undefined)).toEqual([]);
    expect(fuzzySearch(commands, {})).toEqual([]);
    expect(fuzzySearch(commands, [])).toEqual([]);
    expect(fuzzySearch(commands, 10)).toEqual([]);
  });

  it("does not mutate the original array", () => {
    const original = [...commands];

    fuzzySearch(commands, "file");

    expect(commands).toEqual(original);
  });

  it("returns a new array instance for empty queries", () => {
    const result = fuzzySearch(commands, "");

    expect(result).toEqual(commands);
    expect(result).not.toBe(commands);
  });
});