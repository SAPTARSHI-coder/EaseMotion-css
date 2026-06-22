import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { JSDOM } from 'jsdom';
import fs from 'fs';
import path from 'path';

// Simulate loading the core script
const scriptPath = path.resolve(__dirname, '../core/modal.js');
let scriptCode = '';
if (fs.existsSync(scriptPath)) {
  scriptCode = fs.readFileSync(scriptPath, 'utf-8');
}

describe('Modal Component JavaScript Logic', () => {
  let dom;
  let window;
  let document;

  beforeEach(() => {
    // Setup a mock DOM environment
    dom = new JSDOM(`
      <!DOCTYPE html>
      <body>
        <div id="demo-modal" class="ease-modal-overlay">
          <div class="ease-modal">
            <h2>Test Title</h2>
            <button id="close-btn">Close</button>
          </div>
        </div>
        <a href="#demo-modal" id="trigger">Open</a>
      </body>
    `, { runScripts: "dangerously" });
    
    window = dom.window;
    document = window.document;

    // Mock CSS.escape if not present in JSDOM
    if (!window.CSS) {
      window.CSS = {
        escape: function(str) {
          return str.replace(/([!"#$%&'()*+,.\/:;<=>?@\[\\\]^`{|}~])/g, '\\$1');
        }
      };
    }

    // Inject the actual framework script into the DOM
    if (scriptCode) {
      const script = document.createElement('script');
      script.textContent = scriptCode;
      document.body.appendChild(script);
    }
  });

  afterEach(() => {
    if (dom) {
      dom.window.close();
    }
  });

  it('toggles the is-active class based on location hash', () => {
    const overlay = document.querySelector('#demo-modal');
    
    // Simulate user clicking link to #demo-modal
    window.location.hash = '#demo-modal';
    const event = new window.Event('hashchange');
    window.dispatchEvent(event);

    expect(overlay.classList.contains('is-active')).toBe(true);
    expect(document.body.style.overflow).toBe('hidden');

    // Simulate closing
    window.location.hash = '';
    window.dispatchEvent(event);

    expect(overlay.classList.contains('is-active')).toBe(false);
    expect(document.body.style.overflow).toBe('');
  });

  it('traps focus correctly when Escape is pressed', () => {
    window.location.hash = '#demo-modal';
    window.dispatchEvent(new window.Event('hashchange'));

    // Trigger escape
    const escEvent = new window.KeyboardEvent('keydown', { key: 'Escape' });
    document.dispatchEvent(escEvent);

    expect(window.location.hash).toBe('');
  });
});
