// @vitest-environment jsdom
import { describe, it, expect, beforeEach, afterEach } from "vitest";

export class KbdComboMapper {
  constructor(container, options = {}) {
    this.container = container;
    this.platform = options.platform || "mac";
    this.separator = options.separator || "+";
  }

  render(comboString) {
    if (!this.container) return;
    this.container.innerHTML = "";

    if (typeof comboString !== "string" || !comboString.trim()) {
      return;
    }

    const macMap = { cmd: "⌘", ctrl: "⌃", alt: "⌥", shift: "⇧" };
    const winMap = { cmd: "Win", ctrl: "Ctrl", alt: "Alt", shift: "Shift" };
    const map = this.platform.toLowerCase() === "mac" ? macMap : winMap;

    const parts = comboString
      .split("+")
      .map((p) => p.trim().toLowerCase())
      .filter(Boolean);

    parts.forEach((part, index) => {
      const label =
        map[part] ||
        (part.length === 1
          ? part.toUpperCase()
          : part.charAt(0).toUpperCase() + part.slice(1));
      const kbd = document.createElement("kbd");
      kbd.className = "kbd";
      kbd.textContent = label;
      this.container.appendChild(kbd);

      if (index < parts.length - 1) {
        const sep = document.createElement("span");
        sep.className = "kbd-sep";
        sep.textContent = this.separator;
        this.container.appendChild(sep);
      }
    });
  }

  destroy() {
    if (this.container) {
      this.container.innerHTML = "";
    }
  }
}

describe("Kbd Key Combo Display Mapper Unit Specs", () => {
  let container;

  beforeEach(() => {
    document.body.innerHTML = '<div id="kbdContainer" class="kbd-combo"></div>';
    container = document.getElementById("kbdContainer");
  });

  afterEach(() => {
    document.body.innerHTML = "";
  });

  it("should render Mac OS kbd badges with symbols", () => {
    const mapper = new KbdComboMapper(container, { platform: "mac" });
    mapper.render("cmd+shift+p");

    const kbds = container.querySelectorAll("kbd");
    expect(kbds.length).toBe(3);
    expect(kbds[0].textContent).toBe("⌘");
    expect(kbds[1].textContent).toBe("⇧");
    expect(kbds[2].textContent).toBe("P");
  });

  it("should render Windows OS kbd badges with textual names", () => {
    const mapper = new KbdComboMapper(container, { platform: "win" });
    mapper.render("ctrl+alt+delete");

    const kbds = container.querySelectorAll("kbd");
    expect(kbds.length).toBe(3);
    expect(kbds[0].textContent).toBe("Ctrl");
    expect(kbds[1].textContent).toBe("Alt");
    expect(kbds[2].textContent).toBe("Delete");
  });

  it("should render separator spans between key badges", () => {
    const mapper = new KbdComboMapper(container, {
      platform: "mac",
      separator: "+",
    });
    mapper.render("cmd+k");

    const seps = container.querySelectorAll(".kbd-sep");
    expect(seps.length).toBe(1);
    expect(seps[0].textContent).toBe("+");
  });

  it("should handle empty string without throwing errors", () => {
    const mapper = new KbdComboMapper(container);
    mapper.render("");
    expect(container.children.length).toBe(0);
  });

  it("should clear container on destroy()", () => {
    const mapper = new KbdComboMapper(container);
    mapper.render("cmd+s");
    expect(container.children.length).toBeGreaterThan(0);

    mapper.destroy();
    expect(container.children.length).toBe(0);
  });
});
