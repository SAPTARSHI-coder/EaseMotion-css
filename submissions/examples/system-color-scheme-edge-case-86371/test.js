// @vitest-environment jsdom
import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";

export class SystemColorSchemeListener {
  constructor(options = {}) {
    this.manualOverride = options.manualOverride || null;
    this.onChangeCallback = options.onChange || null;
    this.mediaQuery = null;
    this.currentTheme = "light";

    this.handleChange = (e) =>
      this.onSchemeChange(e.matches ? "dark" : "light");

    this.init();
  }

  init() {
    if (this.manualOverride) {
      this.applyTheme(this.manualOverride);
      return;
    }

    if (
      typeof window !== "undefined" &&
      typeof window.matchMedia === "function"
    ) {
      this.mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      this.currentTheme = this.mediaQuery.matches ? "dark" : "light";

      if (this.mediaQuery.addEventListener) {
        this.mediaQuery.addEventListener("change", this.handleChange);
      } else if (this.mediaQuery.addListener) {
        this.mediaQuery.addListener(this.handleChange);
      }
    } else {
      this.currentTheme = "dark"; // safe default
    }

    this.applyTheme(this.currentTheme);
  }

  onSchemeChange(newTheme) {
    if (this.manualOverride) return;
    this.currentTheme = newTheme;
    this.applyTheme(newTheme);
    if (this.onChangeCallback) this.onChangeCallback(newTheme);
  }

  applyTheme(theme) {
    if (typeof document !== "undefined" && document.documentElement) {
      document.documentElement.setAttribute("data-theme", theme);
    }
  }

  destroy() {
    if (this.mediaQuery) {
      if (this.mediaQuery.removeEventListener) {
        this.mediaQuery.removeEventListener("change", this.handleChange);
      } else if (this.mediaQuery.removeListener) {
        this.mediaQuery.removeListener(this.handleChange);
      }
    }
  }
}

describe("System Color Scheme Change Listener Edge Case Assertions", () => {
  let listeners;

  beforeEach(() => {
    listeners = [];
    window.matchMedia = vi.fn().mockImplementation((query) => ({
      matches: query.includes("dark"),
      media: query,
      onchange: null,
      addEventListener: vi.fn((event, cb) => listeners.push(cb)),
      removeEventListener: vi.fn((event, cb) => {
        listeners = listeners.filter((fn) => fn !== cb);
      }),
      addListener: vi.fn((cb) => listeners.push(cb)),
      removeListener: vi.fn((cb) => {
        listeners = listeners.filter((fn) => fn !== cb);
      }),
    }));
  });

  afterEach(() => {
    document.documentElement.removeAttribute("data-theme");
  });

  it("should detect initial dark preference from matchMedia matches", () => {
    const listener = new SystemColorSchemeListener();
    expect(listener.currentTheme).toBe("dark");
    expect(document.documentElement.getAttribute("data-theme")).toBe("dark");
  });

  it("should update theme when OS color scheme change event fires", () => {
    const listener = new SystemColorSchemeListener();

    // Trigger change event to light
    listeners.forEach((cb) => cb({ matches: false }));

    expect(listener.currentTheme).toBe("light");
    expect(document.documentElement.getAttribute("data-theme")).toBe("light");
  });

  it("should respect manual override over OS system preference", () => {
    const listener = new SystemColorSchemeListener({ manualOverride: "light" });

    expect(document.documentElement.getAttribute("data-theme")).toBe("light");

    // Trigger OS dark mode event
    listeners.forEach((cb) => cb({ matches: true }));

    // Manual override must stay unchanged
    expect(document.documentElement.getAttribute("data-theme")).toBe("light");
  });

  it("should handle missing matchMedia API gracefully without crashing", () => {
    window.matchMedia = undefined;

    const listener = new SystemColorSchemeListener();
    expect(listener.currentTheme).toBe("dark");
    expect(document.documentElement.getAttribute("data-theme")).toBe("dark");
  });

  it("should detach matchMedia event listeners cleanly on destroy()", () => {
    const listener = new SystemColorSchemeListener();
    expect(listeners.length).toBe(1);

    listener.destroy();
    expect(listeners.length).toBe(0);
  });
});
