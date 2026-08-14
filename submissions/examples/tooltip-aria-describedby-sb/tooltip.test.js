// @vitest-environment jsdom
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { TooltipAria } from './script.js';

describe('Tooltip ARIA Describedby Link', () => {
  let trigger, tooltip;

  beforeEach(() => {
    document.body.innerHTML = '';
    trigger = document.createElement('button');
    tooltip = document.createElement('span');
    tooltip.textContent = 'More info';
    document.body.append(trigger, tooltip);
  });

  // ── Happy path ───────────────────────────────────────────────────

  it('sets role=tooltip and links aria-describedby', () => {
    const t = new TooltipAria(trigger, tooltip);
    expect(tooltip.getAttribute('role')).toBe('tooltip');
    expect(trigger.getAttribute('aria-describedby')).toBe(tooltip.id);
    expect(tooltip.id).toBeTruthy();
    t.destroy();
  });

  it('reuses an existing tooltip id for aria-describedby', () => {
    tooltip.id = 'custom-tip';
    const t = new TooltipAria(trigger, tooltip);
    expect(trigger.getAttribute('aria-describedby')).toBe('custom-tip');
    t.destroy();
  });

  it('is hidden initially', () => {
    const t = new TooltipAria(trigger, tooltip);
    expect(tooltip.getAttribute('data-visible')).toBe('false');
    t.destroy();
  });

  it('focus shows the tooltip; blur hides it', () => {
    const t = new TooltipAria(trigger, tooltip);
    trigger.dispatchEvent(new window.Event('focus'));
    expect(tooltip.getAttribute('data-visible')).toBe('true');
    trigger.dispatchEvent(new window.Event('blur'));
    expect(tooltip.getAttribute('data-visible')).toBe('false');
    t.destroy();
  });

  // ── Edge cases ───────────────────────────────────────────────────

  it('mouseenter shows the tooltip; mouseleave hides it', () => {
    const t = new TooltipAria(trigger, tooltip);
    trigger.dispatchEvent(new window.MouseEvent('mouseenter'));
    expect(tooltip.getAttribute('data-visible')).toBe('true');
    trigger.dispatchEvent(new window.MouseEvent('mouseleave'));
    expect(tooltip.getAttribute('data-visible')).toBe('false');
    t.destroy();
  });

  it('show()/hide() toggle the visible state', () => {
    const t = new TooltipAria(trigger, tooltip);
    t.show();
    expect(tooltip.getAttribute('data-visible')).toBe('true');
    t.hide();
    expect(tooltip.getAttribute('data-visible')).toBe('false');
    t.destroy();
  });

  it('destroy() removes aria-describedby it set', () => {
    const t = new TooltipAria(trigger, tooltip);
    t.destroy();
    expect(trigger.getAttribute('aria-describedby')).toBeNull();
  });

  // ── Invalid inputs ───────────────────────────────────────────────

  it('throws without valid elements', () => {
    expect(() => new TooltipAria(null, tooltip)).toThrow(TypeError);
    expect(() => new TooltipAria(trigger, null)).toThrow(TypeError);
    expect(() => new TooltipAria({}, {})).toThrow(TypeError);
  });
});
