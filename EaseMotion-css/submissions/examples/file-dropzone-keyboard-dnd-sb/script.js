/**
 * EaseMotion CSS — File Dropzone Keyboard Drag-and-Drop
 * ============================================================
 * Makes a file dropzone operable from the keyboard: the dropzone has
 * role="button" + tabindex="0"; Enter/Space opens the file picker;
 * dragging a file over the zone toggles a highlight. Drop/cancel events
 * are emitted via onFile(fn)/onHighlight(fn) callbacks.
 *
 * API:
 *   const dz = new DropzoneKeyboard(rootEl, { input });
 *   dz.onFile(fn); dz.onHighlight(fn);
 *   dz.openPicker(); dz.destroy();
 * ============================================================
 */

export class DropzoneKeyboard {
  constructor(root, options = {}) {
    if (!root || typeof root.addEventListener !== 'function') {
      throw new TypeError('DropzoneKeyboard requires a root element');
    }
    this.root = root;
    this.input = options.input || root.querySelector('input[type="file"]');
    this._fileListeners = [];
    this._highlightListeners = [];
    this._dragDepth = 0;

    this.root.setAttribute('role', 'button');
    this.root.setAttribute('tabindex', '0');
    this.root.setAttribute('aria-label', 'Drop files here or press Enter to browse');

    this._onKeydown = this._onKeydown.bind(this);
    this._onClick = this._onClick.bind(this);
    this._onDragEnter = this._onDragEnter.bind(this);
    this._onDragOver = this._onDragOver.bind(this);
    this._onDragLeave = this._onDragLeave.bind(this);
    this._onDrop = this._onDrop.bind(this);
    this._onChange = this._onChange.bind(this);

    this.root.addEventListener('keydown', this._onKeydown);
    this.root.addEventListener('click', this._onClick);
    this.root.addEventListener('dragenter', this._onDragEnter);
    this.root.addEventListener('dragover', this._onDragOver);
    this.root.addEventListener('dragleave', this._onDragLeave);
    this.root.addEventListener('drop', this._onDrop);
    if (this.input) this.input.addEventListener('change', this._onChange);
  }

  openPicker() {
    if (this.input && typeof this.input.click === 'function') {
      this.input.click();
      return true;
    }
    return false;
  }

  onFile(fn) {
    if (typeof fn === 'function') this._fileListeners.push(fn);
  }

  onHighlight(fn) {
    if (typeof fn === 'function') this._highlightListeners.push(fn);
  }

  _emitFiles(files) {
    if (!files || !files.length) return;
    this._fileListeners.forEach((fn) => {
      try { fn(files); } catch { /* listener error */ }
    });
  }

  _setHighlight(on) {
    this.root.classList.toggle('is-dragover', on);
    this.root.setAttribute('aria-pressed', String(on));
    this._highlightListeners.forEach((fn) => {
      try { fn(on); } catch { /* listener error */ }
    });
  }

  _onKeydown(event) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.openPicker();
    }
  }

  _onClick() {
    this.openPicker();
  }

  _onDragEnter(event) {
    event.preventDefault();
    this._dragDepth++;
    this._setHighlight(true);
  }

  _onDragOver(event) {
    event.preventDefault();
  }

  _onDragLeave() {
    this._dragDepth = Math.max(0, this._dragDepth - 1);
    if (this._dragDepth === 0) this._setHighlight(false);
  }

  _onDrop(event) {
    event.preventDefault();
    this._dragDepth = 0;
    this._setHighlight(false);
    this._emitFiles(event.dataTransfer ? event.dataTransfer.files : null);
  }

  _onChange() {
    if (this.input) this._emitFiles(this.input.files);
  }

  destroy() {
    this.root.removeEventListener('keydown', this._onKeydown);
    this.root.removeEventListener('click', this._onClick);
    this.root.removeEventListener('dragenter', this._onDragEnter);
    this.root.removeEventListener('dragover', this._onDragOver);
    this.root.removeEventListener('dragleave', this._onDragLeave);
    this.root.removeEventListener('drop', this._onDrop);
    if (this.input) this.input.removeEventListener('change', this._onChange);
  }
}

export default DropzoneKeyboard;
