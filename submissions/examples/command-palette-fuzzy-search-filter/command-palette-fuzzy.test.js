import { describe, expect, it } from "vitest";

function fuzzyFilter(commands, query) {
  if (!Array.isArray(commands)) return [];

  if (typeof query !== "string") return [];

  const search = query.trim().toLowerCase();

  if (!search) return [...commands];

  return commands.filter((command) =>
    command.toLowerCase().includes(search)
  );
}

const commands = [
  "Open File",
  "Save File",
  "Search Project",
  "Toggle Sidebar",
  "Rename Symbol",
  "Command Palette",
  "Go to Definition",
  "Format Document"
];

describe("Command Palette Fuzzy Search Filter", () => {
  it("returns all commands for an empty query", () => {
    expect(fuzzyFilter(commands, "")).toEqual(commands);
  });

  it("matches a command by partial text", () => {
    expect(fuzzyFilter(commands, "save")).toEqual(["Save File"]);
  });

  it("is case insensitive", () => {
    expect(fuzzyFilter(commands, "COMMAND")).toEqual([
      "Command Palette"
    ]);
  });

  it("matches multiple commands", () => {
    expect(fuzzyFilter(commands, "file")).toEqual([
      "Open File",
      "Save File"
    ]);
  });

  it("matches a substring in the middle", () => {
    expect(fuzzyFilter(commands, "symbol")).toEqual([
      "Rename Symbol"
    ]);
  });

  it("returns an empty array when nothing matches", () => {
    expect(fuzzyFilter(commands, "docker")).toEqual([]);
  });

  it("ignores leading and trailing whitespace", () => {
    expect(fuzzyFilter(commands, "  save  ")).toEqual([
      "Save File"
    ]);
  });

  it("returns an empty array for invalid command input", () => {
    expect(fuzzyFilter(null, "save")).toEqual([]);
    expect(fuzzyFilter(undefined, "save")).toEqual([]);
  });

  it("returns an empty array for invalid query input", () => {
    expect(fuzzyFilter(commands, null)).toEqual([]);
    expect(fuzzyFilter(commands, undefined)).toEqual([]);
    expect(fuzzyFilter(commands, 10)).toEqual([]);
  });

  it("does not mutate the original command array", () => {
    const original = [...commands];

    fuzzyFilter(commands, "file");

    expect(commands).toEqual(original);
  });

  it("handles duplicate commands", () => {
    const list = ["Open", "Open", "Close"];

    expect(fuzzyFilter(list, "open")).toEqual([
      "Open",
      "Open"
    ]);
  });

  it("supports a single command list", () => {
    expect(fuzzyFilter(["Build"], "build")).toEqual([
      "Build"
    ]);
  });
});