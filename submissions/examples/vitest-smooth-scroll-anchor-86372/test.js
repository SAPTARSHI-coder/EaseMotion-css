// @vitest-environment jsdom
import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";

export class SmoothScrollHandler {
  constructor(options = {}) {
    this.headerOffset = options.headerOffset || 0;
    this.links = [];
    this.handleLinkClick = (e) => this.onClick(e);

    this.init();
  }

  init() {
    this.links = Array.from(document.querySelectorAll('a[href^="#"]'));
    this.links.forEach((link) =>
      link.addEventListener("click", this.handleLinkClick)
    );
  }

  onClick(e) {
    const link = e.currentTarget;
    const hash = link.getAttribute("href");

    if (!hash || hash === "#") return;

    const targetEl = document.querySelector(hash);
    if (!targetEl) return;

    e.preventDefault();

    let elementPosition = 0;
    let current = targetEl;
    while (current) {
      elementPosition += current.offsetTop || 0;
      current = current.offsetParent;
    }

    const targetY = Math.max(0, elementPosition - this.headerOffset);

    if (typeof window.scrollTo === "function") {
      window.scrollTo({
        top: targetY,
        behavior: "smooth",
      });
    }
  }

  destroy() {
    this.links.forEach((link) =>
      link.removeEventListener("click", this.handleLinkClick)
    );
  }
}

describe("Smooth Scroll Anchor Position Calc Unit Specs", () => {
  let anchor;
  let target;

  beforeEach(() => {
    document.body.innerHTML = `
      <a id="anchorLink" href="#section-features">Jump</a>
      <a id="dummyLink" href="#">Dummy</a>
      <div id="section-features" style="margin-top: 500px;">Features</div>
    `;
    anchor = document.getElementById("anchorLink");
    target = document.getElementById("section-features");
    window.scrollTo = vi.fn();
  });

  afterEach(() => {
    document.body.innerHTML = "";
    vi.restoreAllMocks();
  });

  it("should prevent default navigation and scroll smoothly to target", () => {
    new SmoothScrollHandler({ headerOffset: 60 });
    Object.defineProperty(target, "offsetTop", {
      value: 500,
      configurable: true,
    });

    const event = new MouseEvent("click", { cancelable: true, bubbles: true });
    anchor.dispatchEvent(event);

    expect(event.defaultPrevented).toBe(true);
    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 440, // 500 - 60
      behavior: "smooth",
    });
  });

  it('should ignore dummy links with href="#"', () => {
    new SmoothScrollHandler();
    const dummy = document.getElementById("dummyLink");

    const event = new MouseEvent("click", { cancelable: true, bubbles: true });
    dummy.dispatchEvent(event);

    expect(event.defaultPrevented).toBe(false);
    expect(window.scrollTo).not.toHaveBeenCalled();
  });

  it("should ignore links pointing to non-existent DOM elements", () => {
    anchor.setAttribute("href", "#non-existent");
    new SmoothScrollHandler();

    const event = new MouseEvent("click", { cancelable: true, bubbles: true });
    anchor.dispatchEvent(event);

    expect(event.defaultPrevented).toBe(false);
    expect(window.scrollTo).not.toHaveBeenCalled();
  });

  it("should detach click listeners on destroy()", () => {
    const handler = new SmoothScrollHandler();
    handler.destroy();

    const event = new MouseEvent("click", { cancelable: true, bubbles: true });
    anchor.dispatchEvent(event);

    expect(event.defaultPrevented).toBe(false);
    expect(window.scrollTo).not.toHaveBeenCalled();
  });
});
