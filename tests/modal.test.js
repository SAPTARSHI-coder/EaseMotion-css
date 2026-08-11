// @vitest-environment jsdom
import { describe, it, expect, beforeEach, afterEach, beforeAll } from 'vitest';
import fs from 'fs';
import path from 'path';

const modalScript = fs.readFileSync(path.resolve(__dirname, '../core/modal.js'), 'utf8');

function runModalScript() {
  const fn = new Function(modalScript);
  fn();
}

describe('modal.js', () => {
  beforeAll(() => {
    if (typeof window.CSS === 'undefined') {
      window.CSS = {};
    }
    window.CSS.escape = (val) => val;
    // Register listeners exactly once
    runModalScript();
  });

  beforeEach(() => {
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
    window.dispatchEvent(new HashChangeEvent('hashchange'));

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

    // Open first
    window.location.hash = '#my-modal';
    window.dispatchEvent(new HashChangeEvent('hashchange'));
    expect(document.activeElement).not.toBe(trigger);

    // Close now
    window.location.hash = '';
    window.dispatchEvent(new HashChangeEvent('hashchange'));

    const overlay = document.getElementById('my-modal');
    expect(overlay.classList.contains('is-active')).toBe(false);
    expect(document.body.style.overflow).toBe('');
    expect(document.activeElement).toBe(trigger);
  });

  it('should close modal when clicking on the overlay backdrop', () => {
    window.location.hash = '#my-modal';
    window.dispatchEvent(new HashChangeEvent('hashchange'));

    const overlay = document.getElementById('my-modal');
    expect(overlay.classList.contains('is-active')).toBe(true);

    const clickEvent = new MouseEvent('click', { bubbles: true, cancelable: true });
    overlay.dispatchEvent(clickEvent);

    expect(window.location.hash).toBe('');
  });

  it('should close modal when Escape key is pressed', () => {
    window.location.hash = '#my-modal';
    window.dispatchEvent(new HashChangeEvent('hashchange'));

    const overlay = document.getElementById('my-modal');
    expect(overlay.classList.contains('is-active')).toBe(true);

    const escapeEvent = new KeyboardEvent('keydown', { key: 'Escape', bubbles: true });
    document.dispatchEvent(escapeEvent);

    expect(window.location.hash).toBe('');
  });

  it('should wrap focus on Tab key press (focus trap)', () => {
    window.location.hash = '#my-modal';
    window.dispatchEvent(new HashChangeEvent('hashchange'));

    const first = document.getElementById('first-el');
    const last = document.getElementById('last-el');

    last.focus();
    expect(document.activeElement).toBe(last);

    const tabEvent = new KeyboardEvent('keydown', { key: 'Tab', bubbles: true, cancelable: true });
    last.dispatchEvent(tabEvent);

    expect(document.activeElement).toBe(first);
  });

  it('should wrap focus on Shift+Tab key press (focus trap)', () => {
    window.location.hash = '#my-modal';
    window.dispatchEvent(new HashChangeEvent('hashchange'));

    const first = document.getElementById('first-el');
    const last = document.getElementById('last-el');

    first.focus();
    expect(document.activeElement).toBe(first);

    const shiftTabEvent = new KeyboardEvent('keydown', { key: 'Tab', shiftKey: true, bubbles: true, cancelable: true });
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
    window.dispatchEvent(new HashChangeEvent('hashchange'));

    const tabEvent = new KeyboardEvent('keydown', { key: 'Tab', bubbles: true, cancelable: true });
    const modal = document.querySelector('.ease-modal');
    modal.dispatchEvent(tabEvent);

    expect(tabEvent.defaultPrevented).toBe(true);
  });

  it('should handle selector syntax errors gracefully', () => {
    window.location.hash = '#!!!invalid';
    window.dispatchEvent(new HashChangeEvent('hashchange'));
    expect(window.location.hash).toBe('');
  });
});
