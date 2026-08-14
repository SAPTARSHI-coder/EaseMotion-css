import { describe, expect, it } from "vitest";

function createNavigator(items = []) {
  let index = items.length ? 0 : -1;

  return {
    up() {
      if (!items.length) return false;

      if (index > 0) {
        index--;
      }

      return true;
    },

    down() {
      if (!items.length) return false;

      if (index < items.length - 1) {
        index++;
      }

      return true;
    },

    current() {
      return index >= 0 ? items[index] : null;
    },

    position() {
      return index;
    }
  };
}

describe("Command Palette Keyboard Item Selection Edge Cases", () => {
  it("starts on the first command", () => {
    const nav = createNavigator(["A", "B", "C"]);

    expect(nav.position()).toBe(0);
    expect(nav.current()).toBe("A");
  });

  it("does not move above the first item", () => {
    const nav = createNavigator(["A", "B"]);

    nav.up();
    nav.up();

    expect(nav.position()).toBe(0);
  });

  it("does not move below the last item", () => {
    const nav = createNavigator(["A", "B"]);

    nav.down();
    nav.down();
    nav.down();

    expect(nav.position()).toBe(1);
    expect(nav.current()).toBe("B");
  });

  it("handles repeated down navigation", () => {
    const nav = createNavigator(["A", "B", "C"]);

    for (let i = 0; i < 25; i++) {
      nav.down();
    }

    expect(nav.position()).toBe(2);
  });

  it("handles repeated up navigation", () => {
    const nav = createNavigator(["A", "B", "C"]);

    nav.down();
    nav.down();

    for (let i = 0; i < 25; i++) {
      nav.up();
    }

    expect(nav.position()).toBe(0);
  });

  it("supports alternating navigation", () => {
    const nav = createNavigator(["A", "B", "C", "D"]);

    nav.down();
    nav.down();
    nav.up();
    nav.down();

    expect(nav.position()).toBe(2);
    expect(nav.current()).toBe("C");
  });

  it("handles an empty command list", () => {
    const nav = createNavigator([]);

    expect(nav.up()).toBe(false);
    expect(nav.down()).toBe(false);
    expect(nav.current()).toBeNull();
    expect(nav.position()).toBe(-1);
  });

  it("handles a single command", () => {
    const nav = createNavigator(["Only"]);

    nav.down();
    nav.up();

    expect(nav.position()).toBe(0);
    expect(nav.current()).toBe("Only");
  });

  it("supports duplicate command names", () => {
    const nav = createNavigator(["Open", "Open", "Close"]);

    nav.down();

    expect(nav.position()).toBe(1);
    expect(nav.current()).toBe("Open");
  });

  it("keeps the selection valid after mixed navigation", () => {
    const nav = createNavigator(["One", "Two", "Three"]);

    nav.down();
    nav.up();
    nav.down();
    nav.down();

    expect(nav.position()).toBe(2);
    expect(nav.current()).toBe("Three");
  });

  it("returns true for valid navigation requests", () => {
    const nav = createNavigator(["One", "Two"]);

    expect(nav.down()).toBe(true);
    expect(nav.up()).toBe(true);
  });

  it("selection never becomes invalid", () => {
    const nav = createNavigator(["A", "B", "C"]);

    for (let i = 0; i < 100; i++) {
      nav.down();
      nav.up();
    }

    expect(nav.position()).toBeGreaterThanOrEqual(0);
    expect(nav.position()).toBeLessThan(3);
  });
});