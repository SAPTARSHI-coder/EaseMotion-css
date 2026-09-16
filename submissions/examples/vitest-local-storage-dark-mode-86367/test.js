// @vitest-environment jsdom
import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";

export class LocalStorageThemeManager {
  constructor(buttonElement, options = {}) {
    this.btn = buttonElement;
    this.storageKey = options.storageKey || "theme";
    this.theme = "dark";

    this.handleToggle = () => this.toggle();
    this.init();
  }

  init() {
    this.theme = this.getStoredTheme();
    this.applyTheme(this.theme);

    if (this.btn) {
      this.btn.addEventListener("click", this.handleToggle);
    }
  }

  getStoredTheme() {
    try {
      if (typeof localStorage !== "undefined") {
        const stored = localStorage.getItem(this.storageKey);
        if (stored === "dark" || stored === "light") {
          return stored;
        }
      }
    } catch {
      // Storage access blocked or restricted
    }

    if (
      typeof window !== "undefined" &&
      typeof window.matchMedia === "function"
    ) {
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }

    return "dark";
  }

  setStoredTheme(theme) {
    try {
      if (typeof localStorage !== "undefined") {
        localStorage.setItem(this.storageKey, theme);
      }
    } catch {
      // Storage access blocked or restricted
    }
  }

  toggle() {
    this.theme = this.theme === "dark" ? "light" : "dark";
    this.setStoredTheme(this.theme);
    this.applyTheme(this.theme);
  }

  applyTheme(theme) {
    if (typeof document !== "undefined" && document.documentElement) {
      document.documentElement.setAttribute("data-theme", theme);
    }
  }

  destroy() {
    if (this.btn) {
      this.btn.removeEventListener("click", this.handleToggle);
    }
  }
}

describe("Local Storage Dark Mode Preference Unit Specs", () => {
  let btn;

  beforeEach(() => {
    document.body.innerHTML = `
      <button id="themeToggleBtn">Toggle Theme</button>
    `;
    btn = document.getElementById("themeToggleBtn");
    localStorage.clear();
  });

  afterEach(() => {
    document.body.innerHTML = "";
    document.documentElement.removeAttribute("data-theme");
    localStorage.clear();
  });

  it("should initialize theme from stored localStorage item", () => {
    localStorage.setItem("theme", "light");
    const manager = new LocalStorageThemeManager(btn);

    expect(manager.theme).toBe("light");
    expect(document.documentElement.getAttribute("data-theme")).toBe("light");
  });

  it("should toggle theme and save preference to localStorage on click", () => {
    const manager = new LocalStorageThemeManager(btn);
    expect(manager.theme).toBe("dark");

    btn.click(); // Toggle to light

    expect(manager.theme).toBe("light");
    expect(localStorage.getItem("theme")).toBe("light");
    expect(document.documentElement.getAttribute("data-theme")).toBe("light");
  });

  it("should fall back to OS prefers-color-scheme when localStorage is empty", () => {
    window.matchMedia = vi.fn().mockImplementation((query) => ({
      matches: query.includes("dark"),
      media: query,
    }));

    const manager = new LocalStorageThemeManager(btn);
    expect(manager.theme).toBe("dark");
  });

  it("should handle localStorage getItem/setItem throwing exceptions gracefully", () => {
    vi.spyOn(Storage.prototype, "getItem").mockImplementation(() => {
      throw new Error("SecurityError: Access is denied");
    });
    vi.spyOn(Storage.prototype, "setItem").mockImplementation(() => {
      throw new Error("SecurityError: Access is denied");
    });

    const manager = new LocalStorageThemeManager(btn);
    expect(() => manager.toggle()).not.toThrow();
    expect(document.documentElement.getAttribute("data-theme")).toBe("light");
  });

  it("should detach toggle click listener on destroy()", () => {
    const manager = new LocalStorageThemeManager(btn);
    manager.destroy();

    btn.click();

    expect(manager.theme).toBe("dark");
    expect(localStorage.getItem("theme")).toBeNull();
  });
});
