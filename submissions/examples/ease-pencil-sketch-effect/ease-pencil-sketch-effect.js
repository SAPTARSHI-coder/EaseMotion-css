/* ==========================================================================
   EaseMotion: `<ease-pencil-sketch-effect>` Web Component Definition
   Path: submissions/examples/ease-pencil-sketch-effect/ease-pencil-sketch-effect.js
   ========================================================================== */

class EasePencilSketchEffect extends HTMLElement {
  static get observedAttributes() {
    return ['src', 'intensity', 'mode'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    // Internal State
    this._intensity = 1.2; // Sensible default intensity
    this._mode = 'pencil';
    this._src = '';
    this._isProcessing = false;
    this._splitPercent = 50;
    this._isDragging = false;
    this._imgElement = null;
    this._resizeObserver = null;

    // Bind event handlers
    this._handleMove = this._handleMove.bind(this);
    this._handleStart = this._handleStart.bind(this);
    this._handleEnd = this._handleEnd.bind(this);
    this._handleKeyDown = this._handleKeyDown.bind(this);
    this._onResize = this._onResize.bind(this);
  }

  connectedCallback() {
    this._renderStructure();
    this._bindDOMReferences();
    this._setupEventListeners();
    
    // Initialize properties from attributes
    if (this.hasAttribute('intensity')) {
      this._intensity = parseFloat(this.getAttribute('intensity')) || 1.2;
    }
    if (this.hasAttribute('mode')) {
      const modeVal = this.getAttribute('mode');
      if (modeVal === 'pencil' || modeVal === 'charcoal') {
        this._mode = modeVal;
      }
    }

    // Sync UI controls with initial values
    this._syncUIControls();

    // Trigger initial load
    this._initSource();

    // Listen for size changes to update scaling metadata
    this._resizeObserver = new ResizeObserver(this._onResize);
    this._resizeObserver.observe(this);
  }

  disconnectedCallback() {
    this._removeEventListeners();
    if (this._resizeObserver) {
      this._resizeObserver.disconnect();
    }
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue === newValue) return;

    if (name === 'src') {
      this._src = newValue;
      if (this.isConnected) {
        this._loadImage(newValue);
      }
    } else if (name === 'intensity') {
      this._intensity = parseFloat(newValue) || 1.2;
      this._syncUIControls();
      if (this.isConnected && this._imgElement) {
        this._triggerLazyProcessing();
      }
    } else if (name === 'mode') {
      if (newValue === 'pencil' || newValue === 'charcoal') {
        this._mode = newValue;
        this._syncUIControls();
        if (this.isConnected && this._imgElement) {
          this._triggerLazyProcessing();
        }
      }
    }
  }

  /* ── Getters / Setters ── */
  get src() { return this._src; }
  set src(val) { this.setAttribute('src', val); }

  get intensity() { return this._intensity; }
  set intensity(val) { this.setAttribute('intensity', val.toString()); }

  get mode() { return this._mode; }
  set mode(val) { this.setAttribute('mode', val); }

  /* ── DOM Render & Bindings ── */
  _renderStructure() {
    // Inject CSS Reference (resolved relative to script path)
    const cssLink = document.createElement('link');
    cssLink.rel = 'stylesheet';
    cssLink.href = new URL('style.css', import.meta.url).href;
    this.shadowRoot.appendChild(cssLink);

    // Markup Structure
    const container = document.createElement('div');
    container.className = 'sketch-container';
    container.innerHTML = `
      <!-- Technical Metadata Banner -->
      <div class="sketch-meta">
        <div class="sketch-meta-item">Effect: <span id="meta-effect">PENCIL_SKETCH</span></div>
        <div class="sketch-meta-item">Dimen: <span id="meta-dimen">0 × 0 px</span></div>
        <div class="sketch-meta-item">Scale: <span id="meta-scale">1:1</span></div>
      </div>

      <!-- Comparison Viewport -->
      <div class="sketch-viewport" id="viewport" role="img" aria-label="Before/after comparison of pencil sketch effect. Drag horizontally to slide.">
        <!-- Original Image -->
        <div class="image-layer original-layer">
          <img id="source-img" alt="Original Image Source" />
        </div>
        
        <!-- Processed Sketch Canvas -->
        <div class="image-layer sketch-layer" id="sketch-layer">
          <canvas id="sketch-canvas"></canvas>
        </div>

        <!-- Slider Comparison Divider -->
        <div class="split-slider-handle" id="slider-handle">
          <div class="handle-line"></div>
          <button class="handle-button" id="handle-btn"
                  role="slider"
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  aria-label="Split position slider"
                  tabindex="0">
          </button>
        </div>

        <!-- Loading overlay -->
        <div class="loading-overlay" id="loading-overlay">
          <div class="loading-spinner"></div>
          <div class="loading-text">Engraving...</div>
        </div>

        <!-- Error overlay -->
        <div class="error-overlay" id="error-overlay" style="display: none;">
          <div class="error-icon">⚠️</div>
          <div class="error-title">Technical Blockage</div>
          <div class="error-message" id="error-message">Unable to load vellum source image.</div>
        </div>
      </div>

      <!-- Drafting Table Controls -->
      <div class="sketch-controls">
        <div class="sketch-control-group">
          <label for="intensity-input" class="sketch-control-label">Lead Contrast:</label>
          <input type="range" id="intensity-input" class="sketch-slider-input" min="0.5" max="3.0" step="0.1" value="1.2">
          <span class="sketch-control-value" id="intensity-val">1.2</span>
        </div>

        <div class="sketch-control-group">
          <span class="sketch-control-label">Medium:</span>
          <div class="sketch-radio-toolbar" role="radiogroup" aria-label="Sketch medium selector">
            <input type="radio" id="mode-pencil" name="sketch-mode" value="pencil">
            <label for="mode-pencil">Graphite</label>

            <input type="radio" id="mode-charcoal" name="sketch-mode" value="charcoal">
            <label for="mode-charcoal">Charcoal</label>
          </div>
        </div>
      </div>

      <!-- Hidden slot to capture light-DOM <img> -->
      <slot id="img-slot" style="display: none;"></slot>
    `;
    this.shadowRoot.appendChild(container);
  }

  _bindDOMReferences() {
    this._viewport = this.shadowRoot.getElementById('viewport');
    this._sourceImg = this.shadowRoot.getElementById('source-img');
    this._sketchLayer = this.shadowRoot.getElementById('sketch-layer');
    this._sketchCanvas = this.shadowRoot.getElementById('sketch-canvas');
    this._sliderHandle = this.shadowRoot.getElementById('slider-handle');
    this._handleBtn = this.shadowRoot.getElementById('handle-btn');
    this._loadingOverlay = this.shadowRoot.getElementById('loading-overlay');
    this._errorOverlay = this.shadowRoot.getElementById('error-overlay');
    this._errorMessage = this.shadowRoot.getElementById('error-message');
    
    this._intensityInput = this.shadowRoot.getElementById('intensity-input');
    this._intensityVal = this.shadowRoot.getElementById('intensity-val');
    this._modePencil = this.shadowRoot.getElementById('mode-pencil');
    this._modeCharcoal = this.shadowRoot.getElementById('mode-charcoal');
    this._imgSlot = this.shadowRoot.getElementById('img-slot');

    // Metadata selectors
    this._metaEffect = this.shadowRoot.getElementById('meta-effect');
    this._metaDimen = this.shadowRoot.getElementById('meta-dimen');
    this._metaScale = this.shadowRoot.getElementById('meta-scale');
  }

  _setupEventListeners() {
    // Sliders & settings
    this._intensityInput.addEventListener('input', (e) => {
      const val = parseFloat(e.target.value);
      this._intensityVal.textContent = val.toFixed(1);
      this.intensity = val; // Triggers attributeChangedCallback
    });

    const onModeChange = (e) => {
      if (e.target.checked) {
        this.mode = e.target.value;
      }
    };
    this._modePencil.addEventListener('change', onModeChange);
    this._modeCharcoal.addEventListener('change', onModeChange);

    // Light-DOM slot detection
    this._imgSlot.addEventListener('slotchange', () => this._initSource());

    // Drag-split comparison listeners on Viewport
    this._viewport.addEventListener('mousedown', this._handleStart);
    this._viewport.addEventListener('touchstart', this._handleStart, { passive: true });

    // Keyboard events on Handle Button
    this._handleBtn.addEventListener('keydown', this._handleKeyDown);
  }

  _removeEventListeners() {
    window.removeEventListener('mousemove', this._handleMove);
    window.removeEventListener('mouseup', this._handleEnd);
    window.removeEventListener('touchmove', this._handleMove);
    window.removeEventListener('touchend', this._handleEnd);
  }

  _syncUIControls() {
    if (!this._intensityInput) return;
    this._intensityInput.value = this._intensity;
    this._intensityVal.textContent = this._intensity.toFixed(1);
    
    if (this._mode === 'charcoal') {
      this._modeCharcoal.checked = true;
      this._metaEffect.textContent = 'CHARCOAL_SKETCH';
    } else {
      this._modePencil.checked = true;
      this._metaEffect.textContent = 'PENCIL_SKETCH';
    }
  }

  /* ── Image Initializations ── */
  _initSource() {
    const srcAttr = this.getAttribute('src');
    if (srcAttr) {
      this._loadImage(srcAttr);
      return;
    }

    // Try finding light-DOM <img> children
    const lightImg = this.querySelector('img');
    if (lightImg) {
      this._loadImage(lightImg.getAttribute('src') || lightImg.src);
      return;
    }
  }

  _loadImage(src) {
    if (!src) return;
    this._src = src;
    
    this._showLoading();
    this._hideError();
    this._sourceImg.style.display = 'none';

    const img = new Image();
    img.crossOrigin = 'anonymous'; // request CORS credentials
    img.onload = () => {
      this._imgElement = img;
      this._sourceImg.src = src;
      this._sourceImg.style.display = 'block';

      // Set aspect ratio dynamically to prevent viewport layout shift
      const aspect = img.naturalWidth / img.naturalHeight;
      this._viewport.style.aspectRatio = aspect.toString();

      // Trigger lazy drawing process
      this._triggerLazyProcessing();
    };

    img.onerror = () => {
      this._onImageError('The requested image asset failed to load. Please verify path.');
    };

    img.src = src;
  }

  /* ── Lazy Canvas Filtering ── */
  _triggerLazyProcessing() {
    if (this._isProcessing) return;
    this._isProcessing = true;
    this._showLoading();

    // requestAnimationFrame ensures it does not block the main render queue
    requestAnimationFrame(() => {
      // Small setTimeout lets UI draw loading screen first
      setTimeout(() => {
        try {
          this._processSketchEffect();
        } catch (error) {
          console.error(error);
          this._onImageError(error.message || 'CORS security taint blocked canvas image conversion.');
        } finally {
          this._isProcessing = false;
          this._hideLoading();
        }
      }, 35);
    });
  }

  _processSketchEffect() {
    if (!this._imgElement) return;

    const img = this._imgElement;
    
    // Performance optimization: Cap max resolution of offscreen canvas
    // Prevents extreme sizes from freezing JS threads
    const MAX_DIM = 850;
    let w = img.naturalWidth || img.width;
    let h = img.naturalHeight || img.height;

    this._metaDimen.textContent = `${w} × ${h} px`;

    if (w > MAX_DIM || h > MAX_DIM) {
      if (w > h) {
        h = Math.round((h * MAX_DIM) / w);
        w = MAX_DIM;
      } else {
        w = Math.round((w * MAX_DIM) / h);
        h = MAX_DIM;
      }
    }

    const canvas = this._sketchCanvas;
    canvas.width = w;
    canvas.height = h;

    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('Could not get 2D context.');

    // Draw source to extract raw pixel data
    ctx.drawImage(img, 0, 0, w, h);

    let imgData;
    try {
      imgData = ctx.getImageData(0, 0, w, h);
    } catch (e) {
      // CORS taints the canvas, throwing a security error on getImageData
      throw new Error('CORS security restriction blocked canvas pixel extraction. Ensure image has Access-Control-Allow-Origin Headers.');
    }

    const srcPixels = imgData.data;
    const len = srcPixels.length;

    // ── 1. Create Inverted Grayscale ──
    const grayInv = new Uint8ClampedArray(len);
    for (let i = 0; i < len; i += 4) {
      // Standard luminance weighting
      const gray = Math.round(0.299 * srcPixels[i] + 0.587 * srcPixels[i + 1] + 0.114 * srcPixels[i + 2]);
      const inv = 255 - gray;
      grayInv[i] = inv;
      grayInv[i + 1] = inv;
      grayInv[i + 2] = inv;
      grayInv[i + 3] = 255;
    }

    // ── 2. Box Blur Approximation ──
    // Scale blur radius based on width to keep sketch lines consistent
    const blurRadius = Math.max(3, Math.round(w / 180));
    const temp = new Uint8ClampedArray(len);
    const blurredInv = new Uint8ClampedArray(len);

    this._boxBlurH(grayInv, temp, w, h, blurRadius);
    this._boxBlurV(temp, blurredInv, w, h, blurRadius);

    // ── 3. Color Dodge Blend & Contrast Tuning ──
    const sketchImgData = ctx.createImageData(w, h);
    const dst = sketchImgData.data;
    const intensity = this._intensity;
    const isCharcoal = this._mode === 'charcoal';

    for (let i = 0; i < len; i += 4) {
      const gray = 255 - grayInv[i];
      const blurred = blurredInv[i];

      // Dodge blend formula
      let dodge = Math.min(255, (gray * 255) / Math.max(1, 255 - blurred));

      // Intensity adjustment (Gamma curve)
      let val = dodge;
      if (intensity !== 1.0) {
        val = Math.pow(val / 255, intensity) * 255;
      }

      // Charcoal modifier
      if (isCharcoal) {
        // Add random high-frequency pencil paper grain
        const noise = (Math.random() - 0.5) * 32;
        val = val + noise;

        // Darken shadows and line structures
        if (val < 140) {
          val = val * 0.78;
        }
        val = Math.max(0, Math.min(255, val));
      }

      dst[i] = val;
      dst[i + 1] = val;
      dst[i + 2] = val;
      dst[i + 3] = 255;
    }

    // Draw final sketch back to canvas
    ctx.putImageData(sketchImgData, 0, 0);

    // Render scale calculation
    this._onResize();

    // Dispatch Custom Event indicating processing complete
    this.dispatchEvent(new CustomEvent('ease-sketch-ready', {
      bubbles: true,
      composed: true,
      detail: { width: img.naturalWidth, height: img.naturalHeight }
    }));
  }

  /* Separable Box Blur Pass (Horizontal) */
  _boxBlurH(src, dest, w, h, r) {
    const val = 1 / (2 * r + 1);
    for (let y = 0; y < h; y++) {
      let outIdx = y * w * 4;
      let sum = 0;
      
      for (let x = -r; x <= r; x++) {
        const idx = y * w * 4 + Math.max(0, Math.min(w - 1, x)) * 4;
        sum += src[idx];
      }
      
      for (let x = 0; x < w; x++) {
        dest[outIdx] = sum * val;
        dest[outIdx + 1] = sum * val;
        dest[outIdx + 2] = sum * val;
        dest[outIdx + 3] = 255;

        const nextX = x + r + 1;
        const prevX = x - r;

        const nextIdx = y * w * 4 + Math.min(w - 1, nextX) * 4;
        const prevIdx = y * w * 4 + Math.max(0, prevX) * 4;

        sum += src[nextIdx] - src[prevIdx];
        outIdx += 4;
      }
    }
  }

  /* Separable Box Blur Pass (Vertical) */
  _boxBlurV(src, dest, w, h, r) {
    const val = 1 / (2 * r + 1);
    for (let x = 0; x < w; x++) {
      let sum = 0;

      for (let y = -r; y <= r; y++) {
        const idx = Math.max(0, Math.min(h - 1, y)) * w * 4 + x * 4;
        sum += src[idx];
      }

      for (let y = 0; y < h; y++) {
        const outIdx = y * w * 4 + x * 4;
        dest[outIdx] = sum * val;
        dest[outIdx + 1] = sum * val;
        dest[outIdx + 2] = sum * val;
        dest[outIdx + 3] = 255;

        const nextY = y + r + 1;
        const prevY = y - r;

        const nextIdx = Math.min(h - 1, nextY) * w * 4 + x * 4;
        const prevIdx = Math.max(0, prevY) * w * 4 + x * 4;

        sum += src[nextIdx] - src[prevIdx];
      }
    }
  }

  /* ── Interactive Slider Dragging ── */
  _handleStart(e) {
    this._isDragging = true;
    
    // Add temporary styling class for smooth dragging
    this._viewport.style.setProperty('--sketch-transition-speed', '0s');

    // Register window trackers to track movements outside boundary
    const isTouch = e.type.startsWith('touch');
    const moveEvent = isTouch ? 'touchmove' : 'mousemove';
    const endEvent = isTouch ? 'touchend' : 'mouseup';

    window.addEventListener(moveEvent, this._handleMove, { passive: false });
    window.addEventListener(endEvent, this._handleEnd);

    this._handleMove(e);
  }

  _handleMove(e) {
    if (!this._isDragging) return;
    
    // Prevent default scrolling on mobile when dragging
    if (e.cancelable) e.preventDefault();

    const rect = this._viewport.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const x = clientX - rect.left;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));

    this._updateSplit(percent);
  }

  _handleEnd() {
    this._isDragging = false;
    this._viewport.style.setProperty('--sketch-transition-speed', '0.15s');

    // Remove window handlers
    window.removeEventListener('mousemove', this._handleMove);
    window.removeEventListener('mouseup', this._handleEnd);
    window.removeEventListener('touchmove', this._handleMove);
    window.removeEventListener('touchend', this._handleEnd);
  }

  /* Update Visual Reveal Position */
  _updateSplit(percent) {
    this._splitPercent = percent;
    this._sketchLayer.style.clipPath = `inset(0 0 0 ${percent}%)`;
    this._sliderHandle.style.left = `${percent}%`;
    this._handleBtn.setAttribute('aria-valuenow', Math.round(percent).toString());
  }

  /* Keyboard Accessibility arrow controls */
  _handleKeyDown(e) {
    let current = this._splitPercent;
    
    // Check keycodes
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      current = Math.max(0, current - 2);
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      current = Math.min(100, current + 2);
    } else if (e.key === 'Home') {
      e.preventDefault();
      current = 0;
    } else if (e.key === 'End') {
      e.preventDefault();
      current = 100;
    } else {
      return;
    }

    // Apply linear transitions for keyboard adjustments
    this._viewport.style.setProperty('--sketch-transition-speed', '0.15s');
    this._updateSplit(current);
  }

  /* Dynamic scale calculation label (e.g. 1:1 or responsive ratio) */
  _onResize() {
    if (!this._viewport || !this._imgElement) return;
    const rect = this._viewport.getBoundingClientRect();
    const nativeW = this._imgElement.naturalWidth || this._imgElement.width;
    const currentW = rect.width;
    const ratio = nativeW / currentW;
    
    if (ratio >= 0.95 && ratio <= 1.05) {
      this._metaScale.textContent = '1:1';
    } else {
      this._metaScale.textContent = `1:${ratio.toFixed(1)}`;
    }
  }

  /* ── Loading and Errors Overlays ── */
  _showLoading() {
    if (this._loadingOverlay) this._loadingOverlay.classList.add('active');
  }

  _hideLoading() {
    if (this._loadingOverlay) this._loadingOverlay.classList.remove('active');
  }

  _onImageError(msg) {
    this._hideLoading();
    this._errorMessage.textContent = msg;
    this._errorOverlay.style.display = 'flex';
  }

  _hideError() {
    if (this._errorOverlay) this._errorOverlay.style.display = 'none';
  }
}

// Define the custom element
customElements.define('ease-pencil-sketch-effect', EasePencilSketchEffect);
