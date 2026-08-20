// @vitest-environment jsdom
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { Switch } from './script.js';

describe('Switch Toggle ARIA Checked State', () => {
  let root;

  beforeEach(() => {
    document.body.innerHTML = '';
    root = document.createElement('button');
    root.type = 'button';
    document.body.appendChild(root);
  });

  function keydown(key) {
    root.dispatchEvent(new window.KeyboardEvent('keydown', { key, bubbles: true }));
  }

  it('sets role=switch + tabindex=0 + aria-checked', () => {
    const s = new Switch(root, { checked: false });
    expect(root.getAttribute('role')).toBe('switch');
    expect(root.getAttribute('tabindex')).toBe('0');
    expect(root.getAttribute('aria-checked')).toBe('false');
    s.destroy();
  });

  it('initial checked state reflects in aria-checked + class', () => {
    const s = new Switch(root, { checked: true });
    expect(root.getAttribute('aria-checked')).toBe('true');
    expect(root.classList.contains('is-on')).toBe(true);
    s.destroy();
  });

  it('toggle() flips the state', () => {
    const s = new Switch(root, { checked: false });
    s.toggle();
    expect(s.getState()).toBe(true);
    expect(root.getAttribute('aria-checked')).toBe('true');
    s.destroy();
  });

  it('Space toggles the switch', () => {
    const s = new Switch(root, { checked: false });
    keydown(' ');
    expect(s.getState()).toBe(true);
    s.destroy();
  });

  it('Enter toggles the switch', () => {
    const s = new Switch(root, { checked: false });
    keydown('Enter');
    expect(s.getState()).toBe(true);
    s.destroy();
  });

  it('click toggles the switch', () => {
    const s = new Switch(root, { checked: true });
    root.click();
    expect(s.getState()).toBe(false);
    s.destroy();
  });

  it('setState(true) sets aria-checked=true + is-on', () => {
    const s = new Switch(root, { checked: false });
    s.setState(true);
    expect(root.getAttribute('aria-checked')).toBe('true');
    expect(root.classList.contains('is-on')).toBe(true);
    s.destroy();
  });

  it('change event fires with the new checked state', () => {
    const s = new Switch(root, { checked: false });
    const handler = vi.fn();
    root.addEventListener('change', handler);
    s.toggle();
    expect(handler).toHaveBeenCalledTimes(1);
    expect(handler.mock.calls[0][0].detail.checked).toBe(true);
    s.destroy();
  });

  it('aria-label is set when provided', () => {
    const s = new Switch(root, { label: 'Dark mode' });
    expect(root.getAttribute('aria-label')).toBe('Dark mode');
    s.destroy();
  });

  it('setState coerces non-booleans', () => {
    const s = new Switch(root, { checked: false });
    s.setState(1);
    expect(s.getState()).toBe(true);
    s.setState(0);
    expect(s.getState()).toBe(false);
    s.destroy();
  });

  it('destroy() removes role + aria-checked + knob', () => {
    const s = new Switch(root, { checked: false });
    s.destroy();
    expect(root.hasAttribute('role')).toBe(false);
    expect(root.hasAttribute('aria-checked')).toBe(false);
    expect(root.querySelector('.ease-switch__knob')).toBeNull();
  });

  it('throws without a root element', () => {
    expect(() => new Switch(null)).toThrow(TypeError);
  });
});
