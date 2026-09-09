// @vitest-environment jsdom
import { describe, it, expect, beforeEach, afterEach } from "vitest";

export class SwitchTouchToggle {
  constructor(track, thumb, options = {}) {
    this.track = track;
    this.thumb = thumb;
    this.isChecked = options.checked || false;
    this.dragThreshold = options.threshold || 15;
    this.startX = 0;
    this.currentX = 0;
    this.isDragging = false;

    this.init();
  }

  init() {
    if (!this.track || !this.thumb) return;

    this.handleTouchStart = (e) => this.onTouchStart(e);
    this.handleTouchMove = (e) => this.onTouchMove(e);
    this.handleTouchEnd = (e) => this.onTouchEnd(e);

    this.track.addEventListener("touchstart", this.handleTouchStart, {
      passive: true,
    });
    this.track.addEventListener("touchmove", this.handleTouchMove, {
      passive: true,
    });
    this.track.addEventListener("touchend", this.handleTouchEnd);
  }

  onTouchStart(e) {
    if (!e.touches || e.touches.length !== 1) return;
    this.isDragging = true;
    this.startX = e.touches[0].clientX;
    this.currentX = this.startX;
  }

  onTouchMove(e) {
    if (!this.isDragging || !e.touches || e.touches.length !== 1) return;
    this.currentX = e.touches[0].clientX;
    const deltaX = this.currentX - this.startX;

    if (this.thumb) {
      const baseOffset = this.isChecked ? 30 : 0;
      const clampedOffset = Math.max(0, Math.min(30, baseOffset + deltaX));
      this.thumb.style.transform = `translateX(${clampedOffset}px)`;
    }
  }

  onTouchEnd() {
    if (!this.isDragging) return;
    this.isDragging = false;
    const deltaX = this.currentX - this.startX;

    if (Math.abs(deltaX) >= this.dragThreshold) {
      this.setChecked(deltaX > 0);
    } else {
      this.updateUI();
    }
  }

  setChecked(checked) {
    this.isChecked = Boolean(checked);
    this.updateUI();
  }

  updateUI() {
    if (this.track) {
      this.track.setAttribute("aria-checked", String(this.isChecked));
    }
    if (this.thumb) {
      this.thumb.style.transform = this.isChecked
        ? "translateX(30px)"
        : "translateX(0px)";
    }
  }

  destroy() {
    if (this.track) {
      this.track.removeEventListener("touchstart", this.handleTouchStart);
      this.track.removeEventListener("touchmove", this.handleTouchMove);
      this.track.removeEventListener("touchend", this.handleTouchEnd);
    }
  }
}

describe("Switch Toggle Drag Touch Listener Unit Specs", () => {
  let track;
  let thumb;

  beforeEach(() => {
    document.body.innerHTML = `
      <div id="switchTrack" class="switch-track" aria-checked="false">
        <div id="switchThumb" class="switch-thumb"></div>
      </div>
    `;
    track = document.getElementById("switchTrack");
    thumb = document.getElementById("switchThumb");
  });

  afterEach(() => {
    document.body.innerHTML = "";
  });

  it("should initialize with correct default unchecked state", () => {
    const toggle = new SwitchTouchToggle(track, thumb);
    expect(toggle.isChecked).toBe(false);
    expect(track.getAttribute("aria-checked")).toBe("false");
  });

  it("should initialize dragging state on single touchstart", () => {
    const toggle = new SwitchTouchToggle(track, thumb);
    const touchStartEvent = new CustomEvent("touchstart");
    touchStartEvent.touches = [{ clientX: 100 }];

    track.dispatchEvent(touchStartEvent);
    expect(toggle.isDragging).toBe(true);
    expect(toggle.startX).toBe(100);
  });

  it("should update thumb transform during touchmove drag", () => {
    const toggle = new SwitchTouchToggle(track, thumb);
    const touchStartEvent = new CustomEvent("touchstart");
    touchStartEvent.touches = [{ clientX: 100 }];
    track.dispatchEvent(touchStartEvent);

    const touchMoveEvent = new CustomEvent("touchmove");
    touchMoveEvent.touches = [{ clientX: 120 }];
    track.dispatchEvent(touchMoveEvent);

    expect(thumb.style.transform).toBe("translateX(20px)");
  });

  it("should toggle state to checked when dragged right past threshold", () => {
    const toggle = new SwitchTouchToggle(track, thumb, { threshold: 15 });
    const touchStartEvent = new CustomEvent("touchstart");
    touchStartEvent.touches = [{ clientX: 100 }];
    track.dispatchEvent(touchStartEvent);

    const touchMoveEvent = new CustomEvent("touchmove");
    touchMoveEvent.touches = [{ clientX: 120 }];
    track.dispatchEvent(touchMoveEvent);

    track.dispatchEvent(new CustomEvent("touchend"));

    expect(toggle.isChecked).toBe(true);
    expect(track.getAttribute("aria-checked")).toBe("true");
    expect(thumb.style.transform).toBe("translateX(30px)");
  });

  it("should snap back to original state if drag distance is less than threshold", () => {
    const toggle = new SwitchTouchToggle(track, thumb, { threshold: 15 });
    const touchStartEvent = new CustomEvent("touchstart");
    touchStartEvent.touches = [{ clientX: 100 }];
    track.dispatchEvent(touchStartEvent);

    const touchMoveEvent = new CustomEvent("touchmove");
    touchMoveEvent.touches = [{ clientX: 105 }];
    track.dispatchEvent(touchMoveEvent);

    track.dispatchEvent(new CustomEvent("touchend"));

    expect(toggle.isChecked).toBe(false);
    expect(track.getAttribute("aria-checked")).toBe("false");
    expect(thumb.style.transform).toBe("translateX(0px)");
  });

  it("should ignore multi-touch contacts gracefully", () => {
    const toggle = new SwitchTouchToggle(track, thumb);
    const multiTouchEvent = new CustomEvent("touchstart");
    multiTouchEvent.touches = [{ clientX: 100 }, { clientX: 200 }];

    track.dispatchEvent(multiTouchEvent);
    expect(toggle.isDragging).toBe(false);
  });

  it("should clean up touch listeners on destroy()", () => {
    const toggle = new SwitchTouchToggle(track, thumb);
    toggle.destroy();

    const touchStartEvent = new CustomEvent("touchstart");
    touchStartEvent.touches = [{ clientX: 100 }];
    track.dispatchEvent(touchStartEvent);

    expect(toggle.isDragging).toBe(false);
  });
});
