// @vitest-environment jsdom
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { DropzoneKeyboard } from './script.js';

describe('File Dropzone Keyboard Drag-and-Drop', () => {
  let root, input;

  beforeEach(() => {
    document.body.innerHTML = '';
    input = document.createElement('input');
    input.type = 'file';
    root = document.createElement('div');
    root.className = 'ease-dropzone';
    root.appendChild(input);
    document.body.appendChild(root);
  });

  function dragEvent(type, opts = {}) {
    const ev = new window.Event(type, { bubbles: true });
    if (type === 'drop') {
      Object.defineProperty(ev, 'dataTransfer', {
        value: { files: opts.files || [] },
      });
    }
    return ev;
  }

  // ── Happy path ───────────────────────────────────────────────────

  it('sets role=button, tabindex=0 and an aria-label', () => {
    const dz = new DropzoneKeyboard(root);
    expect(root.getAttribute('role')).toBe('button');
    expect(root.getAttribute('tabindex')).toBe('0');
    expect(root.getAttribute('aria-label')).toBeTruthy();
    dz.destroy();
  });

  it('Enter opens the file picker', () => {
    const dz = new DropzoneKeyboard(root);
    const spy = vi.spyOn(input, 'click');
    root.dispatchEvent(new window.KeyboardEvent('keydown', { key: 'Enter', bubbles: true }));
    expect(spy).toHaveBeenCalled();
    dz.destroy();
  });

  it('Space opens the file picker', () => {
    const dz = new DropzoneKeyboard(root);
    const spy = vi.spyOn(input, 'click');
    root.dispatchEvent(new window.KeyboardEvent('keydown', { key: ' ', bubbles: true }));
    expect(spy).toHaveBeenCalled();
    dz.destroy();
  });

  it('dragenter highlights the zone; dragleave clears it', () => {
    const dz = new DropzoneKeyboard(root);
    root.dispatchEvent(dragEvent('dragenter'));
    expect(root.classList.contains('is-dragover')).toBe(true);
    root.dispatchEvent(dragEvent('dragleave'));
    expect(root.classList.contains('is-dragover')).toBe(false);
    dz.destroy();
  });

  // ── Edge cases ───────────────────────────────────────────────────

  it('drop emits the files via onFile and clears the highlight', () => {
    const dz = new DropzoneKeyboard(root);
    const spy = vi.fn();
    dz.onFile(spy);
    root.dispatchEvent(dragEvent('dragenter'));
    const files = [{ name: 'a.txt' }];
    root.dispatchEvent(dragEvent('drop', { files }));
    expect(spy).toHaveBeenCalledWith(files);
    expect(root.classList.contains('is-dragover')).toBe(false);
    dz.destroy();
  });

  it('nested dragenter/dragleave keeps highlight until depth reaches 0', () => {
    const dz = new DropzoneKeyboard(root);
    root.dispatchEvent(dragEvent('dragenter'));
    root.dispatchEvent(dragEvent('dragenter'));
    root.dispatchEvent(dragEvent('dragleave'));
    expect(root.classList.contains('is-dragover')).toBe(true);
    root.dispatchEvent(dragEvent('dragleave'));
    expect(root.classList.contains('is-dragover')).toBe(false);
    dz.destroy();
  });

  it('onHighlight fires on dragenter/leave with the new state', () => {
    const dz = new DropzoneKeyboard(root);
    const spy = vi.fn();
    dz.onHighlight(spy);
    root.dispatchEvent(dragEvent('dragenter'));
    root.dispatchEvent(dragEvent('dragleave'));
    expect(spy).toHaveBeenNthCalledWith(1, true);
    expect(spy).toHaveBeenNthCalledWith(2, false);
    dz.destroy();
  });

  it('change on the input emits files via onFile', () => {
    const dz = new DropzoneKeyboard(root);
    const spy = vi.fn();
    dz.onFile(spy);
    const files = [{ name: 'b.txt' }];
    Object.defineProperty(input, 'files', { value: files, configurable: true });
    input.dispatchEvent(new window.Event('change', { bubbles: true }));
    expect(spy).toHaveBeenCalledWith(files);
    dz.destroy();
  });

  it('openPicker() returns false when there is no input', () => {
    const bare = document.createElement('div');
    const dz = new DropzoneKeyboard(bare);
    expect(dz.openPicker()).toBe(false);
    dz.destroy();
  });

  // ── Invalid inputs ───────────────────────────────────────────────

  it('throws without a valid root element', () => {
    expect(() => new DropzoneKeyboard(null)).toThrow(TypeError);
    expect(() => new DropzoneKeyboard({})).toThrow(TypeError);
  });
});
