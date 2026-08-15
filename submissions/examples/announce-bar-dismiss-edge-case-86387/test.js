// @vitest-environment jsdom
import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";

export class AnnounceBarManager {
  constructor(element, options = {}) {
    this.element = element;
    this.storageKey = options.key || "easemotion_announce_dismissed";
    this.ttlDays = options.ttlDays || 7;
    this.fallbackState = false;
  }

  isDismissed() {
    try {
      const raw = localStorage.getItem(this.storageKey);
      if (!raw) return false;

      const data = JSON.parse(raw);
      if (typeof data !== "object" || data === null) return false;

      if (data.expiry && Date.now() > data.expiry) {
        localStorage.removeItem(this.storageKey);
        return false;
      }

      return Boolean(data.dismissed);
    } catch {
      return this.fallbackState;
    }
  }

  dismiss() {
    const payload = {
      dismissed: true,
      timestamp: Date.now(),
      expiry: Date.now() + this.ttlDays * 24 * 60 * 60 * 1000,
    };

    try {
      localStorage.setItem(this.storageKey, JSON.stringify(payload));
    } catch {
      this.fallbackState = true;
    }

    if (this.element) {
      this.element.style.display = "none";
    }
  }

  reset() {
    try {
      localStorage.removeItem(this.storageKey);
    } catch {}
    this.fallbackState = false;
    if (this.element) {
      this.element.style.display = "";
    }
  }
}

describe("Announce Bar Dismiss Storage Flag Edge Case Assertions", () => {
  let barElement;

  beforeEach(() => {
    localStorage.clear();
    document.body.innerHTML =
      '<div id="announceBar" class="announce-bar">Content</div>';
    barElement = document.getElementById("announceBar");
  });

  afterEach(() => {
    localStorage.clear();
    document.body.innerHTML = "";
  });

  it("should return false initially when no dismissal flag exists", () => {
    const manager = new AnnounceBarManager(barElement);
    expect(manager.isDismissed()).toBe(false);
  });

  it("should persist dismissal flag with expiry timestamp on dismiss()", () => {
    const manager = new AnnounceBarManager(barElement, {
      key: "test_announcement",
    });
    manager.dismiss();

    expect(manager.isDismissed()).toBe(true);
    expect(barElement.style.display).toBe("none");

    const stored = JSON.parse(localStorage.getItem("test_announcement"));
    expect(stored.dismissed).toBe(true);
    expect(typeof stored.expiry).toBe("number");
  });

  it("should auto-expire dismissal flag after TTL duration has passed", () => {
    const manager = new AnnounceBarManager(barElement, { ttlDays: 1 });
    const expiredPayload = {
      dismissed: true,
      expiry: Date.now() - 1000, // 1 second in the past
    };
    localStorage.setItem(
      "easemotion_announce_dismissed",
      JSON.stringify(expiredPayload)
    );

    expect(manager.isDismissed()).toBe(false);
    expect(localStorage.getItem("easemotion_announce_dismissed")).toBeNull();
  });

  it("should fall back to in-memory state if localStorage throws an error", () => {
    const setItemSpy = vi
      .spyOn(Storage.prototype, "setItem")
      .mockImplementation(() => {
        throw new Error("QuotaExceededError");
      });
    const getItemSpy = vi
      .spyOn(Storage.prototype, "getItem")
      .mockImplementation(() => {
        throw new Error("SecurityError");
      });

    const manager = new AnnounceBarManager(barElement);
    manager.dismiss();

    expect(manager.isDismissed()).toBe(true);
    expect(barElement.style.display).toBe("none");

    setItemSpy.mockRestore();
    getItemSpy.mockRestore();
  });

  it("should recover safely from corrupted JSON stored data", () => {
    localStorage.setItem(
      "easemotion_announce_dismissed",
      "invalid-json-string"
    );
    const manager = new AnnounceBarManager(barElement);

    expect(manager.isDismissed()).toBe(false);
  });

  it("should clear stored flag on reset()", () => {
    const manager = new AnnounceBarManager(barElement);
    manager.dismiss();
    expect(manager.isDismissed()).toBe(true);

    manager.reset();
    expect(manager.isDismissed()).toBe(false);
    expect(barElement.style.display).toBe("");
  });
});
