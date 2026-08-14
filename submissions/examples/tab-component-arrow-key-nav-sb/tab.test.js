// @vitest-environment jsdom
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { TabNav } from './script.js';

describe('Tab Component Arrow Key Navigation', () => {
  let root;

  beforeEach(() => {
    document.body.innerHTML = '';
    root = document.createElement('div');
    root.setAttribute('role', 'tablist');
    for (let i = 0; i < 3; i++) {
      const tab = document.createElement('button');
      tab.setAttribute('role', 'tab');
      tab.setAttribute('aria-controls', 'panel-' + i);
      tab.textContent = 'Tab ' + (i + 1);
      root.appendChild(tab);

      const panel = document.createElement('div');
      panel.id = 'panel-' + i;
      panel.setAttribute('role', 'tabpanel');
      panel.textContent = 'Panel ' + (i + 1);
      document.body.appendChild(panel);
    }
    document.body.appendChild(root);
  });

  function press(key, target = root) {
    target.dispatchEvent(new window.KeyboardEvent('keydown', { key, bubbles: true }));
  }

  // ── Happy path ───────────────────────────────────────────────────

  it('marks the first tab aria-selected and tabindex=0, others -1', () => {
    const t = new TabNav(root);
    const tabs = root.querySelectorAll('[role="tab"]');
    expect(tabs[0].getAttribute('aria-selected')).toBe('true');
    expect(tabs[0].getAttribute('tabindex')).toBe('0');
    expect(tabs[1].getAttribute('aria-selected')).toBe('false');
    expect(tabs[1].getAttribute('tabindex')).toBe('-1');
    t.destroy();
  });

  it('shows the active panel (aria-hidden=false) and hides others', () => {
    const t = new TabNav(root);
    expect(document.getElementById('panel-0').getAttribute('aria-hidden')).toBe('false');
    expect(document.getElementById('panel-1').getAttribute('aria-hidden')).toBe('true');
    t.destroy();
  });

  it('ArrowRight moves focus to the next tab', () => {
    const t = new TabNav(root);
    const tabs = root.querySelectorAll('[role="tab"]');
    const spy = vi.spyOn(tabs[1], 'focus');
    press('ArrowRight', tabs[0]);
    expect(t.getActive()).toBe(1);
    expect(spy).toHaveBeenCalled();
    t.destroy();
  });

  it('ArrowLeft moves focus to the previous tab', () => {
    const t = new TabNav(root);
    t.select(2);
    const tabs = root.querySelectorAll('[role="tab"]');
    const spy = vi.spyOn(tabs[1], 'focus');
    press('ArrowLeft', tabs[2]);
    expect(t.getActive()).toBe(1);
    expect(spy).toHaveBeenCalled();
    t.destroy();
  });

  // ── Edge cases ───────────────────────────────────────────────────

  it('ArrowRight wraps from the last tab to the first', () => {
    const t = new TabNav(root);
    t.select(2);
    press('ArrowRight', root.querySelectorAll('[role="tab"]')[2]);
    expect(t.getActive()).toBe(0);
    t.destroy();
  });

  it('ArrowLeft wraps from the first tab to the last', () => {
    const t = new TabNav(root);
    press('ArrowLeft', root.querySelectorAll('[role="tab"]')[0]);
    expect(t.getActive()).toBe(2);
    t.destroy();
  });

  it('Home jumps to the first tab, End to the last', () => {
    const t = new TabNav(root);
    t.select(1);
    press('Home', root.querySelectorAll('[role="tab"]')[1]);
    expect(t.getActive()).toBe(0);
    press('End', root.querySelectorAll('[role="tab"]')[0]);
    expect(t.getActive()).toBe(2);
    t.destroy();
  });

  it('clicking a tab selects it', () => {
    const t = new TabNav(root);
    const tabs = root.querySelectorAll('[role="tab"]');
    tabs[2].dispatchEvent(new window.MouseEvent('click', { bubbles: true }));
    expect(t.getActive()).toBe(2);
    expect(tabs[2].getAttribute('aria-selected')).toBe('true');
    t.destroy();
  });

  it('vertical orientation uses ArrowDown/ArrowUp', () => {
    root.setAttribute('aria-orientation', 'vertical');
    const t = new TabNav(root);
    const tabs = root.querySelectorAll('[role="tab"]');
    press('ArrowDown', tabs[0]);
    expect(t.getActive()).toBe(1);
    press('ArrowUp', tabs[1]);
    expect(t.getActive()).toBe(0);
    t.destroy();
  });

  // ── Invalid inputs ───────────────────────────────────────────────

  it('throws without a root element', () => {
    expect(() => new TabNav(null)).toThrow(TypeError);
  });

  it('throws when there are no tab elements', () => {
    const empty = document.createElement('div');
    empty.setAttribute('role', 'tablist');
    expect(() => new TabNav(empty)).toThrow(Error);
  });
});
