// @vitest-environment jsdom
import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";

export class DOMEventListenerComponent {
  constructor(element, options = {}) {
    this.element = element;
    this.onClick = options.onClick || null;
    this.onKeydown = options.onKeydown || null;
    this.isDestroyed = false;

    this.handleClick = (e) => this.handleClickEvent(e);
    this.handleKeydown = (e) => this.handleKeydownEvent(e);
    this.handleResize = (e) => this.handleResizeEvent(e);

    this.init();
  }

  init() {
    if (this.element) {
      this.element.addEventListener("click", this.handleClick);
    }
    if (typeof window !== "undefined") {
      window.addEventListener("keydown", this.handleKeydown);
      window.addEventListener("resize", this.handleResize);
    }
  }

  handleClickEvent(e) {
    if (this.isDestroyed) return;
    if (this.onClick) this.onClick(e);
  }

  handleKeydownEvent(e) {
    if (this.isDestroyed) return;
    if (this.onKeydown) this.onKeydown(e);
  }

  handleResizeEvent(e) {}

  destroy() {
    if (this.isDestroyed) return;

    if (this.element) {
      this.element.removeEventListener("click", this.handleClick);
    }
    if (typeof window !== "undefined") {
      window.removeEventListener("keydown", this.handleKeydown);
      window.removeEventListener("resize", this.handleResize);
    }

    this.isDestroyed = true;
  }
}

describe("DOM Event Listener Cleanup Destroy Edge Case Assertions", () => {
  let button;

  beforeEach(() => {
    document.body.innerHTML = '<button id="testBtn">Test</button>';
    button = document.getElementById("testBtn");
  });

  afterEach(() => {
    document.body.innerHTML = "";
  });

  it("should unbind click and window event listeners when destroy() is called", () => {
    const clickSpy = vi.fn();
    const keydownSpy = vi.fn();

    const comp = new DOMEventListenerComponent(button, {
      onClick: clickSpy,
      onKeydown: keydownSpy,
    });

    comp.destroy();

    button.click();
    window.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter" }));

    expect(clickSpy).not.toHaveBeenCalled();
    expect(keydownSpy).not.toHaveBeenCalled();
    expect(comp.isDestroyed).toBe(true);
  });

  it("should be idempotent when destroy() is called multiple times consecutively", () => {
    const clickSpy = vi.fn();
    const comp = new DOMEventListenerComponent(button, { onClick: clickSpy });

    expect(() => {
      comp.destroy();
      comp.destroy();
      comp.destroy();
    }).not.toThrow();

    expect(comp.isDestroyed).toBe(true);
  });

  it("should safely construct and destroy component when element is null", () => {
    const comp = new DOMEventListenerComponent(null);
    expect(() => comp.destroy()).not.toThrow();
    expect(comp.isDestroyed).toBe(true);
  });

  it("should handle element removed from DOM prior to destroy() call", () => {
    const clickSpy = vi.fn();
    const comp = new DOMEventListenerComponent(button, { onClick: clickSpy });

    button.remove(); // Remove element from DOM first

    expect(() => comp.destroy()).not.toThrow();
    expect(comp.isDestroyed).toBe(true);
  });
});
