// @vitest-environment jsdom
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';

/**
 * Hover Preview Card Delay Timeout Manager
 */
export class HoverPreviewCard {
  constructor(trigger, preview, options = {}) {
    this.trigger = trigger;
    this.preview = preview;
    this.showDelay = typeof options.showDelay === 'number' && options.showDelay >= 0 ? options.showDelay : 300;
    this.hideDelay = typeof options.hideDelay === 'number' && options.hideDelay >= 0 ? options.hideDelay : 200;
    this.showTimer = null;
    this.hideTimer = null;
    this.isVisible = false;

    this.init();
  }

  init() {
    if (!this.trigger || !this.preview) return;

    this.onMouseEnter = () => this.scheduleShow();
    this.onMouseLeave = () => this.scheduleHide();

    this.trigger.addEventListener('mouseenter', this.onMouseEnter);
    this.trigger.addEventListener('mouseleave', this.onMouseLeave);
    this.preview.addEventListener('mouseenter', () => this.clearHideTimer());
    this.preview.addEventListener('mouseleave', this.onMouseLeave);
  }

  scheduleShow() {
    this.clearHideTimer();
    if (this.isVisible) return;

    this.clearShowTimer();
    this.showTimer = setTimeout(() => {
      this.show();
    }, this.showDelay);
  }

  scheduleHide() {
    this.clearShowTimer();
    if (!this.isVisible) return;

    this.clearHideTimer();
    this.hideTimer = setTimeout(() => {
      this.hide();
    }, this.hideDelay);
  }

  show() {
    this.clearShowTimer();
    this.isVisible = true;
    if (this.preview) {
      this.preview.classList.add('is-active');
      this.preview.setAttribute('aria-hidden', 'false');
    }
  }

  hide() {
    this.clearHideTimer();
    this.isVisible = false;
    if (this.preview) {
      this.preview.classList.remove('is-active');
      this.preview.setAttribute('aria-hidden', 'true');
    }
  }

  clearShowTimer() {
    if (this.showTimer !== null) {
      clearTimeout(this.showTimer);
      this.showTimer = null;
    }
  }

  clearHideTimer() {
    if (this.hideTimer !== null) {
      clearTimeout(this.hideTimer);
      this.hideTimer = null;
    }
  }

  destroy() {
    this.clearShowTimer();
    this.clearHideTimer();
    if (this.trigger) {
      this.trigger.removeEventListener('mouseenter', this.onMouseEnter);
      this.trigger.removeEventListener('mouseleave', this.onMouseLeave);
    }
  }
}

describe('Hover Preview Card Delay Timeout Edge Cases', () => {
  let trigger;
  let preview;

  beforeEach(() => {
    vi.useFakeTimers();
    document.body.innerHTML = `
      <a id="preview-trigger" href="#">User Profile</a>
      <div id="preview-card" class="hover-preview-card" aria-hidden="true">
        <p>User Bio Details</p>
      </div>
    `;
    trigger = document.getElementById('preview-trigger');
    preview = document.getElementById('preview-card');
  });

  afterEach(() => {
    vi.useRealTimers();
    document.body.innerHTML = '';
  });

  it('should cancel show delay timeout when mouse leaves before delay elapses', () => {
    const instance = new HoverPreviewCard(trigger, preview, { showDelay: 300 });

    trigger.dispatchEvent(new MouseEvent('mouseenter'));
    expect(instance.showTimer).not.toBeNull();
    expect(instance.isVisible).toBe(false);

    vi.advanceTimersByTime(150);
    expect(instance.isVisible).toBe(false);

    // Mouse leaves before 300ms delay timeout finishes
    trigger.dispatchEvent(new MouseEvent('mouseleave'));
    expect(instance.showTimer).toBeNull();

    vi.advanceTimersByTime(200);
    expect(instance.isVisible).toBe(false);
    expect(preview.classList.contains('is-active')).toBe(false);
  });

  it('should handle zero delay timeout edge case by showing immediately after timer tick', () => {
    const instance = new HoverPreviewCard(trigger, preview, { showDelay: 0 });

    trigger.dispatchEvent(new MouseEvent('mouseenter'));
    vi.advanceTimersByTime(0);

    expect(instance.isVisible).toBe(true);
    expect(preview.classList.contains('is-active')).toBe(true);
  });

  it('should fallback to default delay threshold when negative delay is supplied', () => {
    const instance = new HoverPreviewCard(trigger, preview, { showDelay: -500 });
    expect(instance.showDelay).toBe(300);
  });

  it('should clear existing timers and handle rapid mouse enter/leave toggles gracefully', () => {
    const instance = new HoverPreviewCard(trigger, preview, { showDelay: 200, hideDelay: 200 });

    for (let i = 0; i < 10; i++) {
      trigger.dispatchEvent(new MouseEvent('mouseenter'));
      vi.advanceTimersByTime(50);
      trigger.dispatchEvent(new MouseEvent('mouseleave'));
      vi.advanceTimersByTime(50);
    }

    expect(instance.isVisible).toBe(false);
    expect(instance.showTimer).toBeNull();
    expect(instance.hideTimer).toBeNull();
  });

  it('should clean up timers and state when destroy() is invoked during pending delay timeout', () => {
    const instance = new HoverPreviewCard(trigger, preview, { showDelay: 400 });

    trigger.dispatchEvent(new MouseEvent('mouseenter'));
    expect(instance.showTimer).not.toBeNull();

    instance.destroy();
    expect(instance.showTimer).toBeNull();
    expect(instance.hideTimer).toBeNull();

    vi.advanceTimersByTime(500);
    expect(instance.isVisible).toBe(false);
  });

  it('should handle null or invalid DOM elements without throwing errors', () => {
    expect(() => {
      const instance = new HoverPreviewCard(null, null);
      instance.scheduleShow();
      instance.scheduleHide();
      instance.destroy();
    }).not.toThrow();
  });
});
