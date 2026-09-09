// @vitest-environment jsdom
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { Tooltip } from './script.js';

describe('Tooltip ARIA Describedby Link', () => {
  let trigger;

  beforeEach(() => {
    document.body.innerHTML = '';
    trigger = document.createElement('button');
    trigger.textContent = 'Help';
    document.body.appendChild(trigger);
  });

  it('creates a role=tooltip element linked via aria-describedby', () => {
    const t = new Tooltip(trigger, { text: 'More info' });
    expect(trigger.getAttribute('aria-describedby')).toMatch(/^ease-tooltip-\d+$/);
    const tip = document.getElementById(trigger.getAttribute('aria-describedby'));
    expect(tip).not.toBeNull();
    expect(tip.getAttribute('role')).toBe('tooltip');
    expect(tip.textContent).toBe('More info');
    t.destroy();
  });

  it('starts hidden', () => {
    const t = new Tooltip(trigger, { text: 'Hi' });
    expect(t.isVisible()).toBe(false);
    t.destroy();
  });

  it('show() removes hidden and sets aria-expanded=true', () => {
    const t = new Tooltip(trigger, { text: 'Hi' });
    t.show();
    expect(t.isVisible()).toBe(true);
    expect(trigger.getAttribute('aria-expanded')).toBe('true');
    t.destroy();
  });

  it('hide() restores hidden', () => {
    const t = new Tooltip(trigger, { text: 'Hi' });
    t.show();
    t.hide();
    expect(t.isVisible()).toBe(false);
    t.destroy();
  });

  it('hover (mouseenter) shows the tooltip', () => {
    const t = new Tooltip(trigger, { text: 'Hi' });
    trigger.dispatchEvent(new window.MouseEvent('mouseenter', { bubbles: true }));
    expect(t.isVisible()).toBe(true);
    t.destroy();
  });

  it('focus shows and blur hides the tooltip', () => {
    const t = new Tooltip(trigger, { text: 'Hi' });
    trigger.dispatchEvent(new window.FocusEvent('focusin', { bubbles: true }));
    expect(t.isVisible()).toBe(true);
    trigger.dispatchEvent(new window.FocusEvent('focusout', { bubbles: true }));
    expect(t.isVisible()).toBe(false);
    t.destroy();
  });

  it('Escape hides the tooltip', () => {
    const t = new Tooltip(trigger, { text: 'Hi' });
    t.show();
    trigger.dispatchEvent(new window.KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    expect(t.isVisible()).toBe(false);
    t.destroy();
  });

  it('uses the title attribute as the tooltip text and removes title', () => {
    trigger.setAttribute('title', 'From title');
    const t = new Tooltip(trigger);
    expect(t.getText()).toBe('From title');
    expect(trigger.hasAttribute('title')).toBe(false);
    t.destroy();
  });

  it('toggle() flips visibility', () => {
    const t = new Tooltip(trigger, { text: 'Hi' });
    t.toggle();
    expect(t.isVisible()).toBe(true);
    t.toggle();
    expect(t.isVisible()).toBe(false);
    t.destroy();
  });

  it('reduced motion adds the static class', () => {
    window.matchMedia = () => ({ matches: true });
    const t = new Tooltip(trigger, { text: 'Hi' });
    expect(t.tooltip.classList.contains('ease-tooltip--static')).toBe(true);
    delete window.matchMedia;
    t.destroy();
  });

  it('destroy() removes the tooltip and aria-describedby', () => {
    const t = new Tooltip(trigger, { text: 'Hi' });
    t.destroy();
    expect(trigger.hasAttribute('aria-describedby')).toBe(false);
    expect(document.querySelectorAll('[role="tooltip"]').length).toBe(0);
  });

  it('throws without a trigger element', () => {
    expect(() => new Tooltip(null)).toThrow(TypeError);
  });
});
