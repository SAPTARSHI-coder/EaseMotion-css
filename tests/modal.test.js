import { describe, it, expect, beforeEach, afterEach, beforeAll } from 'vitest';
import { JSDOM } from 'jsdom';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const modalScript = readFileSync(resolve(__dirname, '../core/modal.js'), 'utf8');

let dom;
let document;
let window;

describe('modal.js', () => {
  beforeAll(() => {
    dom = new JSDOM('<!DOCTYPE html><html><head></head><body></body></html>', {
      url: 'http://localhost',
      runScripts: 'outside-only',
    });
    document = dom.window.document;
    window = dom.window;

    if (typeof window.CSS === 'undefined') {
      window.CSS = {};
    }
    window.CSS.escape = (val) => val;

    dom.window.eval(modalScript);
  });

  beforeEach(() => {
    document.body.innerHTML = '';
    document.body.innerHTML = `
      <button id="trigger">Trigger</button>
      <div id="my-modal" class="ease-modal-overlay">
        <div class="ease-modal">
          <a href="#" id="first-el">First</a>
          <button id="mid-el">Middle</button>
          <input type="text" id="last-el" />
        </div>
      </div>
    `;
    window.location.hash = '';
    document.body.style.overflow = '';
  });

  afterEach(() => {
    document.body.innerHTML = '';
    window.location.hash = '';
    document.body.style.overflow = '';
  });

  it('should open modal when location hash matches its ID', () => {
    const trigger = document.getElementById('trigger');
    trigger.focus();

    window.location.hash = '#my-modal';
    window.dispatchEvent(new window.HashChangeEvent('hashchange'));

    const overlay = document.getElementById('my-modal');
    expect(overlay.classList.contains('is-active')).toBe(true);
    expect(document.body.style.overflow).toBe('hidden');

    const modal = overlay.querySelector('.ease-modal');
    expect(document.activeElement).toBe(modal);
    expect(modal.getAttribute('tabindex')).toBe('-1');
  });

  it('should close modal when hash is cleared', () => {
    const trigger = document.getElementById('trigger');
    trigger.focus();

    window.location.hash = '#my-modal';
    window.dispatchEvent(new window.HashChangeEvent('hashchange'));
    expect(document.activeElement).not.toBe(trigger);

    window.location.hash = '';
    window.dispatchEvent(new window.HashChangeEvent('hashchange'));

    const overlay = document.getElementById('my-modal');
    expect(overlay.classList.contains('is-active')).toBe(false);
    expect(document.body.style.overflow).toBe('');
    expect(document.activeElement).toBe(trigger);
  });

  it('should close modal when clicking on the overlay backdrop', () => {
    window.location.hash = '#my-modal';
    window.dispatchEvent(new window.HashChangeEvent('hashchange'));

    const overlay = document.getElementById('my-modal');
    expect(overlay.classList.contains('is-active')).toBe(true);

    const clickEvent = new window.MouseEvent('click', { bubbles: true, cancelable: true });
    overlay.dispatchEvent(clickEvent);

    expect(window.location.hash).toBe('');
  });

  it('should close modal when Escape key is pressed', () => {
    window.location.hash = '#my-modal';
    window.dispatchEvent(new window.HashChangeEvent('hashchange'));

    const overlay = document.getElementById('my-modal');
    expect(overlay.classList.contains('is-active')).toBe(true);

    const escapeEvent = new window.KeyboardEvent('keydown', { key: 'Escape', bubbles: true });
    document.dispatchEvent(escapeEvent);

    expect(window.location.hash).toBe('');
  });

  it('should wrap focus on Tab key press (focus trap)', () => {
    window.location.hash = '#my-modal';
    window.dispatchEvent(new window.HashChangeEvent('hashchange'));

    const first = document.getElementById('first-el');
    const last = document.getElementById('last-el');

    last.focus();
    expect(document.activeElement).toBe(last);

    const tabEvent = new window.KeyboardEvent('keydown', { key: 'Tab', bubbles: true, cancelable: true });
    last.dispatchEvent(tabEvent);

    expect(document.activeElement).toBe(first);
  });

  it('should wrap focus on Shift+Tab key press (focus trap)', () => {
    window.location.hash = '#my-modal';
    window.dispatchEvent(new window.HashChangeEvent('hashchange'));

    const first = document.getElementById('first-el');
    const last = document.getElementById('last-el');

    first.focus();
    expect(document.activeElement).toBe(first);

    const shiftTabEvent = new window.KeyboardEvent('keydown', { key: 'Tab', shiftKey: true, bubbles: true, cancelable: true });
    first.dispatchEvent(shiftTabEvent);

    expect(document.activeElement).toBe(last);
  });

  it('should not wrap focus if Tab is pressed and there are no focusable elements', () => {
    document.body.innerHTML = `
      <div id="empty-modal" class="ease-modal-overlay">
        <div class="ease-modal">
          <p>No focusable elements here</p>
        </div>
      </div>
    `;
    window.location.hash = '#empty-modal';
    window.dispatchEvent(new window.HashChangeEvent('hashchange'));

    const tabEvent = new window.KeyboardEvent('keydown', { key: 'Tab', bubbles: true, cancelable: true });
    const modal = document.querySelector('.ease-modal');
    modal.dispatchEvent(tabEvent);

    expect(tabEvent.defaultPrevented).toBe(true);
  });

  it('should handle selector syntax errors gracefully', () => {
    window.location.hash = '#!!!invalid';
    window.dispatchEvent(new window.HashChangeEvent('hashchange'));
    expect(window.location.hash).toBe('');
  });
});
