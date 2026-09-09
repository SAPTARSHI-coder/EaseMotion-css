// @vitest-environment jsdom
import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";

export class ScrollProgressTracker {
  constructor(fillElement, textElement, targetWindow = window) {
    this.fill = fillElement;
    this.text = textElement;
    this.target = targetWindow;
    this.percentage = 0;

    this.handleScroll = () => this.update();
    this.init();
  }

  init() {
    this.update();
    if (this.target) {
      this.target.addEventListener("scroll", this.handleScroll);
    }
  }

  calculate() {
    const scrollTop =
      this.target.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    const scrollHeight =
      document.documentElement.scrollHeight || document.body.scrollHeight || 0;
    const clientHeight =
      document.documentElement.clientHeight || window.innerHeight || 0;

    const maxScroll = scrollHeight - clientHeight;
    if (maxScroll <= 0) return 0;

    const clampedTop = Math.max(0, Math.min(scrollTop, maxScroll));
    return Math.round((clampedTop / maxScroll) * 100);
  }

  update() {
    this.percentage = this.calculate();

    if (this.fill) {
      this.fill.style.width = `${this.percentage}%`;
    }
    if (this.text) {
      this.text.textContent = `${this.percentage}% Scrolled`;
    }
  }

  destroy() {
    if (this.target) {
      this.target.removeEventListener("scroll", this.handleScroll);
    }
  }
}

describe("Scroll Progress Scroll Offset Calc Unit Specs", () => {
  let fill;
  let text;

  beforeEach(() => {
    document.body.innerHTML = `
      <div id="progressFill" class="progress-bar-fill" style="width: 0%;"></div>
      <span id="progressText" class="progress-text">0% Scrolled</span>
    `;
    fill = document.getElementById("progressFill");
    text = document.getElementById("progressText");
  });

  afterEach(() => {
    document.body.innerHTML = "";
  });

  it("should initialize progress at 0% when no scrolling has occurred", () => {
    const tracker = new ScrollProgressTracker(fill, text);
    expect(tracker.percentage).toBe(0);
    expect(fill.style.width).toBe("0%");
    expect(text.textContent).toBe("0% Scrolled");
  });

  it("should update progress percentage on scroll event", () => {
    const tracker = new ScrollProgressTracker(fill, text);

    vi.spyOn(tracker, "calculate").mockReturnValue(65);
    window.dispatchEvent(new Event("scroll"));

    expect(tracker.percentage).toBe(65);
    expect(fill.style.width).toBe("65%");
    expect(text.textContent).toBe("65% Scrolled");
  });

  it("should return 0 when maxScroll is zero or negative", () => {
    const tracker = new ScrollProgressTracker(fill, text);
    Object.defineProperty(document.documentElement, "scrollHeight", {
      value: 500,
      configurable: true,
    });
    Object.defineProperty(document.documentElement, "clientHeight", {
      value: 500,
      configurable: true,
    });

    const calc = tracker.calculate();
    expect(calc).toBe(0);
  });

  it("should detach scroll event listener on destroy()", () => {
    const tracker = new ScrollProgressTracker(fill, text);
    const updateSpy = vi.spyOn(tracker, "update");

    tracker.destroy();
    window.dispatchEvent(new Event("scroll"));

    expect(updateSpy).not.toHaveBeenCalled();
  });
});
