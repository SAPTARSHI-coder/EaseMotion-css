// @vitest-environment jsdom
import { describe, it, expect } from "vitest";

export function mapKbdKeyCombo(comboString, platform = "mac", separator = "+") {
  if (typeof comboString !== "string" || !comboString.trim()) {
    return { keys: [], formatted: "" };
  }

  const MAC_MAP = {
    cmd: "⌘",
    command: "⌘",
    ctrl: "⌃",
    control: "⌃",
    alt: "⌥",
    option: "⌥",
    shift: "⇧",
    enter: "↵",
    delete: "⌫",
    backspace: "⌫",
    esc: "⎋",
    escape: "⎋",
  };

  const WIN_MAP = {
    cmd: "Win",
    command: "Win",
    ctrl: "Ctrl",
    control: "Ctrl",
    alt: "Alt",
    option: "Alt",
    shift: "Shift",
    enter: "Enter",
    delete: "Delete",
    backspace: "Backspace",
    esc: "Esc",
    escape: "Esc",
  };

  const map = platform.toLowerCase() === "mac" ? MAC_MAP : WIN_MAP;
  const rawParts = comboString
    .split("+")
    .map((p) => p.trim().toLowerCase())
    .filter(Boolean);

  const seen = new Set();
  const keys = [];

  rawParts.forEach((part) => {
    const mapped =
      map[part] ||
      (part.length === 1
        ? part.toUpperCase()
        : part.charAt(0).toUpperCase() + part.slice(1));
    if (!seen.has(mapped)) {
      seen.add(mapped);
      keys.push(mapped);
    }
  });

  return {
    keys,
    formatted: keys.join(` ${separator} `),
  };
}

describe("Kbd Key Combo Display Mapper Edge Case Assertions", () => {
  it("should map Mac shortcuts into symbol representations", () => {
    const result = mapKbdKeyCombo("cmd+shift+p", "mac");
    expect(result.keys).toEqual(["⌘", "⇧", "P"]);
    expect(result.formatted).toBe("⌘ + ⇧ + P");
  });

  it("should map Windows/Linux shortcuts into textual labels", () => {
    const result = mapKbdKeyCombo("ctrl+alt+delete", "win");
    expect(result.keys).toEqual(["Ctrl", "Alt", "Delete"]);
    expect(result.formatted).toBe("Ctrl + Alt + Delete");
  });

  it("should handle empty, null, or whitespace key strings safely", () => {
    expect(mapKbdKeyCombo(null)).toEqual({ keys: [], formatted: "" });
    expect(mapKbdKeyCombo(undefined)).toEqual({ keys: [], formatted: "" });
    expect(mapKbdKeyCombo("   ")).toEqual({ keys: [], formatted: "" });
  });

  it("should deduplicate repeated modifier declarations", () => {
    const result = mapKbdKeyCombo("cmd+cmd+shift+shift+k", "mac");
    expect(result.keys).toEqual(["⌘", "⇧", "K"]);
    expect(result.formatted).toBe("⌘ + ⇧ + K");
  });

  it("should format single character key names in uppercase", () => {
    const result = mapKbdKeyCombo("ctrl+c", "win");
    expect(result.keys).toEqual(["Ctrl", "C"]);
  });

  it("should allow custom separator string", () => {
    const result = mapKbdKeyCombo("cmd+option+i", "mac", "-");
    expect(result.formatted).toBe("⌘ - ⌥ - I");
  });
});
