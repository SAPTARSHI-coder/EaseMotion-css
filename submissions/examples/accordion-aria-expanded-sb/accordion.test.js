// @vitest-environment jsdom
import { describe, it, expect, beforeEach } from 'vitest';
import { Accordion } from './script.js';

describe('Accordion ARIA Expanded Attributes', () => {
  let root;

  beforeEach(() => {
    document.body.innerHTML = '';
    root = document.createElement('div');
    for (let i = 0; i < 3; i++) {
      const header = document.createElement('button');
      header.setAttribute('data-accordion-header', '');
      header.setAttribute('aria-controls', 'acc-panel-' + i);
      header.textContent = 'Section ' + (i + 1);
      root.appendChild(header);

      const panel = document.createElement('div');
      panel.id = 'acc-panel-' + i;
      panel.textContent = 'Content ' + (i + 1);
      root.appendChild(panel);
    }
    document.body.appendChild(root);
  });

  // ── Happy path ───────────────────────────────────────────────────

  it('sets role=button, aria-expanded=false, tabindex=0 on headers', () => {
    const a = new Accordion(root, { defaultOpen: false });
    const h = root.querySelector('[data-accordion-header]');
    expect(h.getAttribute('role')).toBe('button');
    expect(h.getAttribute('aria-expanded')).toBe('false');
    expect(h.getAttribute('tabindex')).toBe('0');
    a.destroy();
  });

  it('sets role=region and aria-hidden=true on panels', () => {
    const a = new Accordion(root, { defaultOpen: false });
    const panel = document.getElementById('acc-panel-0');
    expect(panel.getAttribute('role')).toBe('region');
    expect(panel.getAttribute('aria-hidden')).toBe('true');
    a.destroy();
  });

  it('defaultOpen expands the first section', () => {
    const a = new Accordion(root);
    expect(a.isExpanded(0)).toBe(true);
    expect(document.getElementById('acc-panel-0').getAttribute('aria-hidden')).toBe('false');
    a.destroy();
  });

  it('expand() sets aria-expanded=true and aria-hidden=false', () => {
    const a = new Accordion(root, { defaultOpen: false });
    a.expand(1);
    expect(a.isExpanded(1)).toBe(true);
    expect(document.getElementById('acc-panel-1').getAttribute('aria-hidden')).toBe('false');
    a.destroy();
  });

  it('collapse() sets aria-expanded=false and aria-hidden=true', () => {
    const a = new Accordion(root);
    a.collapse(0);
    expect(a.isExpanded(0)).toBe(false);
    expect(document.getElementById('acc-panel-0').getAttribute('aria-hidden')).toBe('true');
    a.destroy();
  });

  // ── Edge cases ───────────────────────────────────────────────────

  it('single-open mode closes others when expanding a new section', () => {
    const a = new Accordion(root);
    a.expand(1);
    expect(a.isExpanded(1)).toBe(true);
    expect(a.isExpanded(0)).toBe(false);
    a.destroy();
  });

  it('allowMultiple keeps other sections open', () => {
    const a = new Accordion(root, { allowMultiple: true });
    a.expand(1);
    expect(a.isExpanded(1)).toBe(true);
    expect(a.isExpanded(0)).toBe(true);
    a.destroy();
  });

  it('clicking a header toggles it', () => {
    const a = new Accordion(root);
    const headers = root.querySelectorAll('[data-accordion-header]');
    headers[1].dispatchEvent(new window.MouseEvent('click', { bubbles: true }));
    expect(a.isExpanded(1)).toBe(true);
    headers[1].dispatchEvent(new window.MouseEvent('click', { bubbles: true }));
    expect(a.isExpanded(1)).toBe(false);
    a.destroy();
  });

  // ── Invalid inputs ───────────────────────────────────────────────

  it('throws without a root element', () => {
    expect(() => new Accordion(null)).toThrow(TypeError);
  });

  it('throws when there are no headers', () => {
    const empty = document.createElement('div');
    expect(() => new Accordion(empty)).toThrow(Error);
  });
});
