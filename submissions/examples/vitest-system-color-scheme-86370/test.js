// @vitest-environment jsdom
import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";

export class SystemColorSchemeMonitor {
  constructor(options = {}) {
    this.onThemeChange = options.onThemeChange || null;
    this.mediaQuery = null;
    this.theme = "dark";

    this.handleMediaChange = (e) => this.update(e.matches ? "dark" : "light");
    this.init();
  }

  init() {
    if (
      typeof window !== "undefined" &&
      typeof window.matchMedia === "function"
    ) {
      this.mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      this.theme = this.mediaQuery.matches ? "dark" : "light";

      if (this.mediaQuery.addEventListener) {
        this.mediaQuery.addEventListener("change", this.handleMediaChange);
      } else if (this.mediaQuery.addListener) {
        this.mediaQuery.addListener(this.handleMediaChange);
      }
    }

    this.render();
  }

  update(newTheme) {
    this.theme = newTheme;
    this.render();
    if (this.onThemeChange) this.onThemeChange(newTheme);
  }

  render() {
    if (typeof document !== "undefined" && document.documentElement) {
      document.documentElement.setAttribute("data-theme", this.theme);
    }
  }

  destroy() {
    if (this.mediaQuery) {
      if (this.mediaQuery.removeEventListener) {
        this.mediaQuery.removeEventListener("change", this.handleMediaChange);
      } else if (this.mediaQuery.removeListener) {
        this.mediaQuery.removeListener(this.handleMediaChange);
      }
    }
  }
}

describe("System Color Scheme Change Listener Unit Specs", () => {
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
    vi.restoreAllMocks();
  });

  it("should initialize with current prefers-color-scheme match state", () => {
    const monitor = new SystemColorSchemeMonitor();
    expect(monitor.theme).toBe("dark");
    expect(document.documentElement.getAttribute("data-theme")).toBe("dark");
  });

  it("should update theme state when matchMedia change event fires", () => {
    const monitor = new SystemColorSchemeMonitor();

    listeners.forEach((cb) => cb({ matches: false }));

    expect(monitor.theme).toBe("light");
    expect(document.documentElement.getAttribute("data-theme")).toBe("light");
  });

  it("should trigger onThemeChange callback when theme updates", () => {
    const spy = vi.fn();
    new SystemColorSchemeMonitor({ onThemeChange: spy });

    listeners.forEach((cb) => cb({ matches: false }));

    expect(spy).toHaveBeenCalledWith("light");
  });

  it("should detach matchMedia event listener on destroy()", () => {
    const monitor = new SystemColorSchemeMonitor();
    expect(listeners.length).toBe(1);

    monitor.destroy();
    expect(listeners.length).toBe(0);
  });
});
