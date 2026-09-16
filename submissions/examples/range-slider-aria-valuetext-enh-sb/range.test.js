// @vitest-environment jsdom
import { describe, it, expect, beforeEach } from 'vitest';
import { RangeSlider } from './script.js';

describe('Range Slider ARIA Valuetext Labels', () => {
  let input;

  beforeEach(() => {
    document.body.innerHTML = '';
    input = document.createElement('input');
    input.type = 'range';
    input.min = '0';
    input.max = '100';
    input.value = '20';
    document.body.appendChild(input);
  });

  it('sets role=slider + aria-valuemin/max + aria-orientation=horizontal', () => {
    const s = new RangeSlider(input);
    expect(input.getAttribute('role')).toBe('slider');
    expect(input.getAttribute('aria-valuemin')).toBe('0');
    expect(input.getAttribute('aria-valuemax')).toBe('100');
    expect(input.getAttribute('aria-orientation')).toBe('horizontal');
    s.destroy();
  });

  it('aria-valuenow matches the initial value', () => {
    const s = new RangeSlider(input);
    expect(input.getAttribute('aria-valuenow')).toBe('20');
    s.destroy();
  });

  it('default formatter produces plain number valuetext', () => {
    const s = new RangeSlider(input);
    expect(input.getAttribute('aria-valuetext')).toBe('20');
    s.destroy();
  });

  it('custom formatter builds aria-valuetext (e.g. "40 dB")', () => {
    const s = new RangeSlider(input, { format: (v) => v + ' dB' });
    expect(input.getAttribute('aria-valuetext')).toBe('20 dB');
    s.setValue(40);
    expect(input.getAttribute('aria-valuetext')).toBe('40 dB');
    s.destroy();
  });

  it('setValue updates valuenow + valuetext + native value', () => {
    const s = new RangeSlider(input, { format: (v) => v + ' dB' });
    s.setValue(60);
    expect(input.value).toBe('60');
    expect(input.getAttribute('aria-valuenow')).toBe('60');
    expect(input.getAttribute('aria-valuetext')).toBe('60 dB');
    s.destroy();
  });

  it('setValue clamps to [min, max]', () => {
    const s = new RangeSlider(input);
    expect(s.setValue(-10)).toBe(0);
    expect(s.setValue(999)).toBe(100);
    s.destroy();
  });

  it('input event keeps ARIA in sync', () => {
    const s = new RangeSlider(input, { format: (v) => v + ' dB' });
    input.value = '50';
    input.dispatchEvent(new window.Event('input', { bubbles: true }));
    expect(input.getAttribute('aria-valuenow')).toBe('50');
    expect(input.getAttribute('aria-valuetext')).toBe('50 dB');
    s.destroy();
  });

  it('vertical orientation sets aria-orientation=vertical', () => {
    const s = new RangeSlider(input, { vertical: true });
    expect(input.getAttribute('aria-orientation')).toBe('vertical');
    s.destroy();
  });

  it('setLabel sets aria-label', () => {
    const s = new RangeSlider(input, { label: 'Volume' });
    expect(input.getAttribute('aria-label')).toBe('Volume');
    s.setLabel('Brightness');
    expect(input.getAttribute('aria-label')).toBe('Brightness');
    s.destroy();
  });

  it('getValue/getValueText return current values', () => {
    const s = new RangeSlider(input, { format: (v) => v + ' dB' });
    s.setValue(33);
    expect(s.getValue()).toBe(33);
    expect(s.getValueText()).toBe('33 dB');
    s.destroy();
  });

  it('destroy() removes ARIA attributes', () => {
    const s = new RangeSlider(input);
    s.destroy();
    expect(input.hasAttribute('role')).toBe(false);
    expect(input.hasAttribute('aria-valuenow')).toBe(false);
    s.destroy();
  });

  it('throws without an input element', () => {
    expect(() => new RangeSlider(null)).toThrow(TypeError);
  });
});
