// @vitest-environment jsdom
import { describe, it, expect, beforeEach } from 'vitest';
import { ProgressBar } from './script.js';

describe('Progress Bar ARIA Valuenow Compliance', () => {
  let root;

  beforeEach(() => {
    document.body.innerHTML = '';
    root = document.createElement('div');
    document.body.appendChild(root);
  });

  it('sets role=progressbar + aria-valuemin/max/now', () => {
    const p = new ProgressBar(root);
    expect(root.getAttribute('role')).toBe('progressbar');
    expect(root.getAttribute('aria-valuemin')).toBe('0');
    expect(root.getAttribute('aria-valuemax')).toBe('100');
    expect(root.getAttribute('aria-valuenow')).toBe('0');
    p.destroy();
  });

  it('starts at 0% width', () => {
    const p = new ProgressBar(root);
    expect(root.querySelector('.ease-progress__bar').style.width).toBe('0%');
    p.destroy();
  });

  it('setValue(40) updates aria-valuenow + aria-valuetext + width', () => {
    const p = new ProgressBar(root);
    p.setValue(40);
    expect(root.getAttribute('aria-valuenow')).toBe('40');
    expect(root.getAttribute('aria-valuetext')).toBe('40%');
    expect(root.querySelector('.ease-progress__bar').style.width).toBe('40%');
    p.destroy();
  });

  it('setValue clamps to [0,100]', () => {
    const p = new ProgressBar(root);
    expect(p.setValue(-20)).toBe(0);
    expect(p.setValue(999)).toBe(100);
    expect(root.getAttribute('aria-valuenow')).toBe('100');
    p.destroy();
  });

  it('setValue coerces non-numbers to 0', () => {
    const p = new ProgressBar(root);
    p.setValue('abc');
    expect(root.getAttribute('aria-valuenow')).toBe('0');
    p.destroy();
  });

  it('getValue returns the current value', () => {
    const p = new ProgressBar(root);
    p.setValue(73);
    expect(p.getValue()).toBe(73);
    p.destroy();
  });

  it('setLabel sets aria-label', () => {
    const p = new ProgressBar(root);
    p.setLabel('Upload progress');
    expect(root.getAttribute('aria-label')).toBe('Upload progress');
    p.destroy();
  });

  it('destroy() removes ARIA attributes and bar node', () => {
    const p = new ProgressBar(root);
    p.destroy();
    expect(root.hasAttribute('role')).toBe(false);
    expect(root.querySelector('.ease-progress__bar')).toBeNull();
  });

  it('throws without a root element', () => {
    expect(() => new ProgressBar(null)).toThrow(TypeError);
  });
});
