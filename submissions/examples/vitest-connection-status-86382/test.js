// @vitest-environment jsdom
import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";

export class ConnectionStatusMonitor {
  constructor(toastElement, textElement, options = {}) {
    this.toast = toastElement;
    this.text = textElement;
    this.onOnline = options.onOnline || null;
    this.onOffline = options.onOffline || null;
    this.isOnline = typeof navigator !== "undefined" ? navigator.onLine : true;

    this.handleOnline = () => this.updateStatus(true);
    this.handleOffline = () => this.updateStatus(false);

    this.init();
  }

  init() {
    this.updateStatus(this.isOnline);

    window.addEventListener("online", this.handleOnline);
    window.addEventListener("offline", this.handleOffline);
  }

  updateStatus(online) {
    this.isOnline = online;

    if (this.toast) {
      this.toast.setAttribute("data-status", online ? "online" : "offline");
    }
    if (this.text) {
      this.text.textContent = online
        ? "You are connected online"
        : "You are currently offline";
    }

    if (online && this.onOnline) this.onOnline();
    if (!online && this.onOffline) this.onOffline();
  }

  destroy() {
    window.removeEventListener("online", this.handleOnline);
    window.removeEventListener("offline", this.handleOffline);
  }
}

describe("Connection Status Online Offline Event Unit Specs", () => {
  let toast;
  let text;

  beforeEach(() => {
    document.body.innerHTML = `
      <div id="connectionToast" class="connection-toast" data-status="online">
        <span id="statusText" class="status-text">You are connected online</span>
      </div>
    `;
    toast = document.getElementById("connectionToast");
    text = document.getElementById("statusText");
  });

  afterEach(() => {
    document.body.innerHTML = "";
  });

  it("should initialize with current navigator.onLine state", () => {
    const monitor = new ConnectionStatusMonitor(toast, text);
    expect(typeof monitor.isOnline).toBe("boolean");
    expect(toast.getAttribute("data-status")).toBe(
      monitor.isOnline ? "online" : "offline"
    );
  });

  it("should handle window offline event correctly", () => {
    const onOfflineSpy = vi.fn();
    const monitor = new ConnectionStatusMonitor(toast, text, {
      onOffline: onOfflineSpy,
    });

    window.dispatchEvent(new Event("offline"));

    expect(monitor.isOnline).toBe(false);
    expect(toast.getAttribute("data-status")).toBe("offline");
    expect(text.textContent).toBe("You are currently offline");
    expect(onOfflineSpy).toHaveBeenCalledTimes(1);
  });

  it("should handle window online event correctly", () => {
    const onOnlineSpy = vi.fn();
    const monitor = new ConnectionStatusMonitor(toast, text, {
      onOnline: onOnlineSpy,
    });

    // Set offline first
    window.dispatchEvent(new Event("offline"));
    expect(monitor.isOnline).toBe(false);

    // Now trigger online
    window.dispatchEvent(new Event("online"));

    expect(monitor.isOnline).toBe(true);
    expect(toast.getAttribute("data-status")).toBe("online");
    expect(text.textContent).toBe("You are connected online");
    expect(onOnlineSpy).toHaveBeenCalledTimes(1);
  });

  it("should detach event listeners on destroy()", () => {
    const onOfflineSpy = vi.fn();
    const monitor = new ConnectionStatusMonitor(toast, text, {
      onOffline: onOfflineSpy,
    });

    monitor.destroy();
    window.dispatchEvent(new Event("offline"));

    expect(onOfflineSpy).not.toHaveBeenCalled();
  });
});
