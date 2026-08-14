import { describe, expect, it } from "vitest";

function createKeyboardNavigator(items = []) {
  let selectedIndex = items.length ? 0 : -1;

  function moveDown() {
    if (!items.length) return false;

    if (selectedIndex < items.length - 1) {
      selectedIndex++;
    }

    return true;
  }

  function moveUp() {
    if (!items.length) return false;

    if (selectedIndex > 0) {
      selectedIndex--;
    }

    return true;
  }

  function select() {
    if (selectedIndex < 0) return null;
    return items[selectedIndex];
  }

  return {
    moveDown,
    moveUp,
    select,
    index: () => selectedIndex
  };
}

describe("Command Palette Keyboard Item Selection", () => {
  const commands = [
    "Open File",
    "Save File",
    "Search Project",
    "Rename Symbol"
  ];

  it("starts with the first item selected", () => {
    const nav = createKeyboardNavigator(commands);

    expect(nav.index()).toBe(0);
    expect(nav.select()).toBe("Open File");
  });

  it("moves selection down", () => {
    const nav = createKeyboardNavigator(commands);

    nav.moveDown();

    expect(nav.index()).toBe(1);
    expect(nav.select()).toBe("Save File");
  });

  it("moves selection up", () => {
    const nav = createKeyboardNavigator(commands);

    nav.moveDown();
    nav.moveDown();
    nav.moveUp();

    expect(nav.index()).toBe(1);
    expect(nav.select()).toBe("Save File");
  });

  it("does not move above the first item", () => {
    const nav = createKeyboardNavigator(commands);

    nav.moveUp();

    expect(nav.index()).toBe(0);
  });

  it("does not move below the last item", () => {
    const nav = createKeyboardNavigator(commands);

    nav.moveDown();
    nav.moveDown();
    nav.moveDown();
    nav.moveDown();

    expect(nav.index()).toBe(3);
    expect(nav.select()).toBe("Rename Symbol");
  });

  it("returns false when navigating an empty list", () => {
    const nav = createKeyboardNavigator([]);

    expect(nav.moveDown()).toBe(false);
    expect(nav.moveUp()).toBe(false);
    expect(nav.select()).toBeNull();
  });

  it("handles a single-item list", () => {
    const nav = createKeyboardNavigator(["Build"]);

    nav.moveDown();
    nav.moveUp();

    expect(nav.index()).toBe(0);
    expect(nav.select()).toBe("Build");
  });

  it("maintains selection after repeated down presses", () => {
    const nav = createKeyboardNavigator(commands);

    for (let i = 0; i < 10; i++) {
      nav.moveDown();
    }

    expect(nav.index()).toBe(3);
  });

  it("maintains selection after repeated up presses", () => {
    const nav = createKeyboardNavigator(commands);

    nav.moveDown();
    nav.moveDown();

    for (let i = 0; i < 10; i++) {
      nav.moveUp();
    }

    expect(nav.index()).toBe(0);
  });

  it("always returns the currently selected command", () => {
    const nav = createKeyboardNavigator(commands);

    nav.moveDown();
    nav.moveDown();

    expect(nav.select()).toBe("Search Project");
  });

  it("supports duplicate command names", () => {
    const nav = createKeyboardNavigator([
      "Open",
      "Open",
      "Close"
    ]);

    nav.moveDown();

    expect(nav.select()).toBe("Open");
    expect(nav.index()).toBe(1);
  });

  it("keeps selection valid after alternating navigation", () => {
    const nav = createKeyboardNavigator(commands);

    nav.moveDown();
    nav.moveDown();
    nav.moveUp();
    nav.moveDown();

    expect(nav.index()).toBe(2);
    expect(nav.select()).toBe("Search Project");
  });
});