// @vitest-environment jsdom
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { SwitchToggle } from './script.js';

describe('Switch Toggle ARIA Checked State', () => {
  let root;

  beforeEach(() => {
    document.body.innerHTML = '';
    root = document.createElement('button');
    root.className = 'ease-switch';
    document.body.appendChild(root);
  });

  // ── Happy path ───────────────────────────────────────────────────

  it('sets role=switch and tabindex=0', () => {
    const s = new SwitchToggle(root);
    expect(root.getAttribute('role')).toBe('switch');
    expect(root.getAttribute('tabindex')).toBe('0');
    s.destroy();
  });

  it('aria-checked is false initially', () => {
    const s = new SwitchToggle(root);
    expect(root.getAttribute('aria-checked')).toBe('false');
    expect(s.isChecked()).toBe(false);
    s.destroy();
  });

  it('setChecked(true) sets aria-checked=true', () => {
    const s = new SwitchToggle(root);
    s.setChecked(true);
    expect(root.getAttribute('aria-checked')).toBe('true');
    expect(s.isChecked()).toBe(true);
    s.destroy();
  });

  it('click toggles the checked state', () => {
    const s = new SwitchToggle(root);
    root.dispatchEvent(new window.MouseEvent('click', { bubbles: true }));
    expect(s.isChecked()).toBe(true);
    root.dispatchEvent(new window.MouseEvent('click', { bubbles: true }));
    expect(s.isChecked()).toBe(false);
    s.destroy();
  });

  // ── Edge cases ───────────────────────────────────────────────────

  it('Space toggles the checked state', () => {
    const s = new SwitchToggle(root);
    root.dispatchEvent(new window.KeyboardEvent('keydown', { key: ' ', bubbles: true }));
    expect(s.isChecked()).toBe(true);
    s.destroy();
  });

  it('Enter toggles the checked state', () => {
    const s = new SwitchToggle(root);
    root.dispatchEvent(new window.KeyboardEvent('keydown', { key: 'Enter', bubbles: true }));
    expect(s.isChecked()).toBe(true);
    s.destroy();
  });

  it('onChange fires only when the state actually changes', () => {
    const s = new SwitchToggle(root);
    const spy = vi.fn();
    s.onChange(spy);
    s.setChecked(true);
    s.setChecked(true); // no-op
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(true);
    s.destroy();
  });

  it('initial checked option is reflected', () => {
    const s = new SwitchToggle(root, { checked: true });
    expect(root.getAttribute('aria-checked')).toBe('true');
    expect(s.isChecked()).toBe(true);
    s.destroy();
  });

  it('is-on class tracks the checked state', () => {
    const s = new SwitchToggle(root);
    s.setChecked(true);
    expect(root.classList.contains('is-on')).toBe(true);
    s.setChecked(false);
    expect(root.classList.contains('is-on')).toBe(false);
    s.destroy();
  });

  // ── Invalid inputs ───────────────────────────────────────────────

  it('throws without a valid root element', () => {
    expect(() => new SwitchToggle(null)).toThrow(TypeError);
    expect(() => new SwitchToggle({})).toThrow(TypeError);
  });
});
