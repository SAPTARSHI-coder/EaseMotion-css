// @vitest-environment jsdom
import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";

export class HoverPreviewCardController {
  constructor(trigger, preview, options = {}) {
    this.trigger = trigger;
    this.preview = preview;
    this.showDelay = options.showDelay ?? 300;
    this.hideDelay = options.hideDelay ?? 200;
    this.showTimer = null;
    this.hideTimer = null;
    this.isOpen = false;

    this.init();
  }

  init() {
    if (!this.trigger || !this.preview) return;

    this.handleTriggerEnter = () => this.startShowTimer();
    this.handleTriggerLeave = () => this.startHideTimer();
    this.handlePreviewEnter = () => this.cancelHideTimer();
    this.handlePreviewLeave = () => this.startHideTimer();

    this.trigger.addEventListener("mouseenter", this.handleTriggerEnter);
    this.trigger.addEventListener("mouseleave", this.handleTriggerLeave);
    this.preview.addEventListener("mouseenter", this.handlePreviewEnter);
    this.preview.addEventListener("mouseleave", this.handlePreviewLeave);
  }

  startShowTimer() {
    this.cancelHideTimer();
    if (this.isOpen) return;

    this.cancelShowTimer();
    this.showTimer = setTimeout(() => {
      this.open();
    }, this.showDelay);
  }

  startHideTimer() {
    this.cancelShowTimer();
    if (!this.isOpen) return;

    this.cancelHideTimer();
    this.hideTimer = setTimeout(() => {
      this.close();
    }, this.hideDelay);
  }

  open() {
    this.cancelShowTimer();
    this.isOpen = true;
    if (this.preview) {
      this.preview.classList.add("is-active");
      this.preview.setAttribute("aria-hidden", "false");
    }
  }

  close() {
    this.cancelHideTimer();
    this.isOpen = false;
    if (this.preview) {
      this.preview.classList.remove("is-active");
      this.preview.setAttribute("aria-hidden", "true");
    }
  }

  cancelShowTimer() {
    if (this.showTimer !== null) {
      clearTimeout(this.showTimer);
      this.showTimer = null;
    }
  }

  cancelHideTimer() {
    if (this.hideTimer !== null) {
      clearTimeout(this.hideTimer);
      this.hideTimer = null;
    }
  }

  destroy() {
    this.cancelShowTimer();
    this.cancelHideTimer();
    if (this.trigger) {
      this.trigger.removeEventListener("mouseenter", this.handleTriggerEnter);
      this.trigger.removeEventListener("mouseleave", this.handleTriggerLeave);
    }
    if (this.preview) {
      this.preview.removeEventListener("mouseenter", this.handlePreviewEnter);
      this.preview.removeEventListener("mouseleave", this.handlePreviewLeave);
    }
  }
}

describe("Hover Preview Card Delay Timeout Check Unit Specs", () => {
  let trigger;
  let preview;

  beforeEach(() => {
    vi.useFakeTimers();
    document.body.innerHTML = `
      <a id="preview-trigger" href="#">Trigger Link</a>
      <div id="preview-card" class="hover-preview-card" aria-hidden="true">Preview Card Content</div>
    `;
    trigger = document.getElementById("preview-trigger");
    preview = document.getElementById("preview-card");
  });

  afterEach(() => {
    vi.useRealTimers();
    document.body.innerHTML = "";
  });

  it("should initialize with preview card hidden", () => {
    const controller = new HoverPreviewCardController(trigger, preview);
    expect(controller.isOpen).toBe(false);
    expect(preview.classList.contains("is-active")).toBe(false);
    expect(preview.getAttribute("aria-hidden")).toBe("true");
  });

  it("should open preview card after showDelay timeout when mouse enters trigger", () => {
    const controller = new HoverPreviewCardController(trigger, preview, {
      showDelay: 300,
    });

    trigger.dispatchEvent(new MouseEvent("mouseenter"));
    expect(controller.isOpen).toBe(false);

    vi.advanceTimersByTime(299);
    expect(controller.isOpen).toBe(false);

    vi.advanceTimersByTime(1);
    expect(controller.isOpen).toBe(true);
    expect(preview.classList.contains("is-active")).toBe(true);
    expect(preview.getAttribute("aria-hidden")).toBe("false");
  });

  it("should cancel pending show timer if mouse leaves before timeout completes", () => {
    const controller = new HoverPreviewCardController(trigger, preview, {
      showDelay: 300,
    });

    trigger.dispatchEvent(new MouseEvent("mouseenter"));
    vi.advanceTimersByTime(150);

    trigger.dispatchEvent(new MouseEvent("mouseleave"));
    vi.advanceTimersByTime(200);

    expect(controller.isOpen).toBe(false);
    expect(preview.classList.contains("is-active")).toBe(false);
  });

  it("should close preview card after hideDelay timeout when mouse leaves", () => {
    const controller = new HoverPreviewCardController(trigger, preview, {
      showDelay: 100,
      hideDelay: 200,
    });

    trigger.dispatchEvent(new MouseEvent("mouseenter"));
    vi.advanceTimersByTime(100);
    expect(controller.isOpen).toBe(true);

    trigger.dispatchEvent(new MouseEvent("mouseleave"));
    vi.advanceTimersByTime(199);
    expect(controller.isOpen).toBe(true);

    vi.advanceTimersByTime(1);
    expect(controller.isOpen).toBe(false);
    expect(preview.classList.contains("is-active")).toBe(false);
  });

  it("should cancel hide timer if mouse moves into preview card before hideDelay expires", () => {
    const controller = new HoverPreviewCardController(trigger, preview, {
      showDelay: 100,
      hideDelay: 200,
    });

    trigger.dispatchEvent(new MouseEvent("mouseenter"));
    vi.advanceTimersByTime(100);

    trigger.dispatchEvent(new MouseEvent("mouseleave"));
    vi.advanceTimersByTime(100);

    preview.dispatchEvent(new MouseEvent("mouseenter"));
    vi.advanceTimersByTime(300);

    expect(controller.isOpen).toBe(true);
  });

  it("should clean up all active timers and event listeners on destroy()", () => {
    const controller = new HoverPreviewCardController(trigger, preview, {
      showDelay: 300,
    });

    trigger.dispatchEvent(new MouseEvent("mouseenter"));
    expect(controller.showTimer).not.toBeNull();

    controller.destroy();
    expect(controller.showTimer).toBeNull();
    expect(controller.hideTimer).toBeNull();

    vi.advanceTimersByTime(500);
    expect(controller.isOpen).toBe(false);
  });
});
