/**
 * Ease Pencil Sketch Effect
 * A self-contained web component that converts images into a live pencil-sketch effect.
 */
class EasePencilSketchEffect extends HTMLElement {
  static get observedAttributes() {
    return ['src', 'intensity', 'mode'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    
    // Internal state
    this._intensity = 50;
    this._mode = 'pencil';
    this._src = '';
    this._imageLoaded = false;
    this._isProcessing = false;
    this._processingFrame = null;
    this._imgElement = null; // Internal loading Image object
    
    // Elements
    this._container = null;
    this._canvasOriginal = null;
    this._canvasSketch = null;
    this._slider = null;
    this._divider = null;
    
    // Bindings
    this._onSlotChange = this._onSlotChange.bind(this);
    this._onSliderInput = this._onSliderInput.bind(this);
    this._handleResize = this._handleResize.bind(this);
  }

  get intensity() {
    return this._intensity;
  }

  set intensity(val) {
    const parsed = parseInt(val, 10);
    if (!isNaN(parsed)) {
      this.setAttribute('intensity', Math.min(100, Math.max(0, parsed)));
    }
  }

  get mode() {
    return this._mode;
  }

  set mode(val) {
    if (val === 'pencil' || val === 'charcoal') {
      this.setAttribute('mode', val);
    }
  }

  get src() {
    return this._src;
  }

  set src(val) {
    this.setAttribute('src', val);
  }

  connectedCallback() {
    this._render();
    
    // Set up elements
    this._container = this.shadowRoot.getElementById('container');
    this._canvasOriginal = this.shadowRoot.getElementById('canvas-original');
    this._canvasSketch = this.shadowRoot.getElementById('canvas-sketch');
    this._slider = this.shadowRoot.getElementById('compare-slider');
    this._divider = this.shadowRoot.getElementById('divider');
    
    // Event listeners
    this._slider.addEventListener('input', this._onSliderInput);
    this.shadowRoot.getElementById('default-slot').addEventListener('slotchange', this._onSlotChange);
    window.addEventListener('resize', this._handleResize);
    
    // Initialize properties from attributes
    this._intensity = this.hasAttribute('intensity') ? Math.min(100, Math.max(0, parseInt(this.getAttribute('intensity'), 10))) : 50;
    this._mode = this.getAttribute('mode') === 'charcoal' ? 'charcoal' : 'pencil';
    this._src = this.getAttribute('src') || '';
    
    // Set initial custom property for slider clipping
    this._container.style.setProperty('--slider-pos', `${this._slider.value}%`);
    
    if (this._src) {
      this._loadImage(this._src);
    } else {
      // Check if there's already an image in the light DOM
      this._detectLightDOMImage();
    }
  }

  disconnectedCallback() {
    window.removeEventListener('resize', this._handleResize);
    if (this._processingFrame) {
      cancelAnimationFrame(this._processingFrame);
    }
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue === newValue) return;

    if (name === 'src') {
      this._src = newValue || '';
      if (this._container) {
        this._loadImage(this._src);
      }
    } else if (name === 'intensity') {
      this._intensity = Math.min(100, Math.max(0, parseInt(newValue, 10) || 50));
      this._triggerReprocess();
    } else if (name === 'mode') {
      this._mode = newValue === 'charcoal' ? 'charcoal' : 'pencil';
      this._triggerReprocess();
    }
  }

  _render() {
    // Dynamic import paths for CSS
    const cssUrl = new URL('./style.css', import.meta.url).href;

    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="${cssUrl}">
      <div class="ease-sketch-container" id="container">
        <!-- Render layers -->
        <div class="layer layer-original">
          <canvas id="canvas-original"></canvas>
        </div>
        <div class="layer layer-sketch">
          <canvas id="canvas-sketch"></canvas>
        </div>

        <!-- Custom divider line & handle -->
        <div class="slider-divider" id="divider">
          <div class="divider-line"></div>
          <div class="divider-handle" aria-hidden="true">
            <svg class="handle-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
            <svg class="handle-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </div>
        </div>

        <!-- Accessible native slider on top -->
        <input 
          type="range" 
          min="0" 
          max="100" 
          value="50" 
          class="comparison-slider" 
          id="compare-slider" 
          aria-label="Image comparison split slider" 
        />

        <!-- Hidden light DOM receiver slot -->
        <slot id="default-slot"></slot>

        <!-- Mechanical Studio Loader Overlay -->
        <div class="loading-overlay" id="loading-overlay">
          <div class="loading-hud">
            <div class="loading-compass"></div>
            <div class="loading-label">COMPUTING OUTLINES</div>
            <div class="loading-meta">intensity: ${this._intensity}% | mode: ${this._mode.toUpperCase()}</div>
          </div>
        </div>

        <!-- Studio Technical Error Overlay -->
        <div class="error-overlay" id="error-overlay" hidden>
          <div class="error-hud">
            <div class="error-alert-icon">⚡</div>
            <div class="error-title" id="error-title">SYSTEM INTERRUPTED</div>
            <div class="error-message" id="error-message">An error occurred during canvas processing.</div>
            <div class="error-tip">Verify cross-origin (CORS) headers or file paths.</div>
          </div>
        </div>
      </div>
    `;
  }

  _onSliderInput(e) {
    const value = e.target.value;
    this._container.style.setProperty('--slider-pos', `${value}%`);
  }

  _onSlotChange() {
    // If src attribute is set, we prefer it.
    if (this._src) return;
    this._detectLightDOMImage();
  }

  _detectLightDOMImage() {
    const slot = this.shadowRoot.getElementById('default-slot');
    const nodes = slot.assignedNodes();
    const imgNode = nodes.find(node => node.nodeName === 'IMG' || (node.querySelector && node.querySelector('img')));
    
    if (imgNode) {
      const img = imgNode.nodeName === 'IMG' ? imgNode : imgNode.querySelector('img');
      const src = img.getAttribute('src');
      if (src) {
        this._loadImage(src);
      }
    }
  }

  _loadImage(url) {
    if (!url) return;
    this._showLoading();
    this._imageLoaded = false;

    // Use a fresh image to load source
    this._imgElement = new Image();
    this._imgElement.crossOrigin = 'anonymous'; // Set anonymous to enable cross-origin canvas processing where possible
    this._imgElement.src = url;

    this._imgElement.onload = () => {
      this._imageLoaded = true;
      this._triggerReprocess();
    };

    this._imgElement.onerror = () => {
      this._showError('Failed to load image at source URL. Verify source path and internet connectivity.');
    };
  }

  _triggerReprocess() {
    if (!this._imageLoaded || !this._imgElement) return;

    if (this._processingFrame) {
      cancelAnimationFrame(this._processingFrame);
    }
    // Defer processing to prevent blocking page rendering (lazy processing)
    this._processingFrame = requestAnimationFrame(() => {
      this._processSketch();
    });
  }

  _processSketch() {
    if (!this._imageLoaded || !this._imgElement) return;

    this._showLoading();
    this._isProcessing = true;

    try {
      const img = this._imgElement;
      const naturalW = img.naturalWidth;
      const naturalH = img.naturalHeight;
      
      // Safety downscaling for ultra-large images to prevent lag/out of memory
      const maxDimension = Math.max(naturalW, naturalH);
      let scale = 1.0;
      const maxSafeSize = 1600;
      if (maxDimension > maxSafeSize) {
        scale = maxSafeSize / maxDimension;
      }

      const w = Math.round(naturalW * scale);
      const h = Math.round(naturalH * scale);

      // Verify canvas coordinates match
      this._canvasOriginal.width = w;
      this._canvasOriginal.height = h;
      this._canvasSketch.width = w;
      this._canvasSketch.height = h;

      // Update aspect ratio CSS custom property on the wrapper
      this._container.style.setProperty('--image-aspect', `${w} / ${h}`);

      const ctxOriginal = this._canvasOriginal.getContext('2d');
      const ctxSketch = this._canvasSketch.getContext('2d');

      // Test CORS taint before full process
      try {
        ctxOriginal.drawImage(img, 0, 0, 1, 1);
        ctxOriginal.getImageData(0, 0, 1, 1);
        ctxOriginal.clearRect(0, 0, 1, 1);
      } catch (err) {
        if (err.name === 'SecurityError') {
          this._showError('CORS restrictions interrupted image access. Canvas cannot be processed without anonymous sharing headers.');
          return;
        }
        throw err;
      }

      // Draw original image into original canvas
      ctxOriginal.drawImage(img, 0, 0, w, h);

      // --- Processing Pipeline (Color Dodge sketch effect) ---
      // Layer A: Grayscale source
      const canvasA = document.createElement('canvas');
      canvasA.width = w;
      canvasA.height = h;
      const ctxA = canvasA.getContext('2d');
      ctxA.filter = 'grayscale(100%)';
      ctxA.drawImage(img, 0, 0, w, h);

      // Layer B: Inverted + Blurred
      const canvasB = document.createElement('canvas');
      canvasB.width = w;
      canvasB.height = h;
      const ctxB = canvasB.getContext('2d');
      
      // Calculate blur radius scaled with image scale and intensity
      const baseBlur = Math.max(1, (Math.max(w, h) / 350));
      // Pencil uses fine details (lower blur range); Charcoal uses thicker smudgier details (higher blur range)
      const intensityScale = this._intensity / 50; // default 1.0
      const modeMultiplier = this._mode === 'charcoal' ? 2.5 : 1.0;
      const blurRadius = Math.max(0.5, baseBlur * intensityScale * modeMultiplier);

      ctxB.filter = `grayscale(100%) invert(100%) blur(${blurRadius}px)`;
      ctxB.drawImage(img, 0, 0, w, h);

      // Combine layers onto A using Color Dodge (creates outlines)
      ctxA.globalCompositeOperation = 'color-dodge';
      ctxA.drawImage(canvasB, 0, 0, w, h);

      // Reset composite operation on canvas A
      ctxA.globalCompositeOperation = 'source-over';

      // Draw outlines to final sketch canvas
      ctxSketch.clearRect(0, 0, w, h);
      
      // Adjust final contrast and darkness
      const contrastValue = this._mode === 'charcoal' 
        ? Math.max(1.0, 1.6 * intensityScale) 
        : Math.max(0.6, 1.2 * intensityScale);
      
      ctxSketch.filter = `contrast(${contrastValue})`;
      ctxSketch.drawImage(canvasA, 0, 0, w, h);
      ctxSketch.filter = 'none';

      // For charcoal mode, generate and overlay a fine-tooth paper grain texture
      if (this._mode === 'charcoal') {
        const noiseCanvas = document.createElement('canvas');
        noiseCanvas.width = 128;
        noiseCanvas.height = 128;
        const nCtx = noiseCanvas.getContext('2d');
        const nData = nCtx.createImageData(128, 128);
        for (let i = 0; i < nData.data.length; i += 4) {
          const val = Math.floor(Math.random() * 255);
          nData.data[i] = val;
          nData.data[i+1] = val;
          nData.data[i+2] = val;
          nData.data[i+3] = 10; // Very subtle noise alpha
        }
        nCtx.putImageData(nData, 0, 0);

        ctxSketch.globalCompositeOperation = 'multiply';
        const pattern = ctxSketch.createPattern(noiseCanvas, 'repeat');
        ctxSketch.fillStyle = pattern;
        ctxSketch.fillRect(0, 0, w, h);
        ctxSketch.globalCompositeOperation = 'source-over';
      }

      this._hideOverlay();
      this._isProcessing = false;

      // Dispatch finish custom event
      this.dispatchEvent(new CustomEvent('ease-sketch-ready', {
        bubbles: true,
        composed: true,
        detail: {
          width: naturalW,
          height: naturalH
        }
      }));

    } catch (err) {
      console.error(err);
      this._showError('Canvas computation failure. Clean drafting workspace and refresh.');
    }
  }

  _showLoading() {
    this.shadowRoot.getElementById('loading-overlay').removeAttribute('hidden');
    this.shadowRoot.getElementById('error-overlay').setAttribute('hidden', '');
    const metaEl = this.shadowRoot.querySelector('.loading-meta');
    if (metaEl) {
      metaEl.textContent = `intensity: ${this._intensity}% | mode: ${this._mode.toUpperCase()}`;
    }
  }

  _showError(msg) {
    this.shadowRoot.getElementById('loading-overlay').setAttribute('hidden', '');
    const errOverlay = this.shadowRoot.getElementById('error-overlay');
    errOverlay.removeAttribute('hidden');
    
    const msgEl = this.shadowRoot.getElementById('error-message');
    if (msgEl) {
      msgEl.textContent = msg;
    }
    this._isProcessing = false;
  }

  _hideOverlay() {
    this.shadowRoot.getElementById('loading-overlay').setAttribute('hidden', '');
    this.shadowRoot.getElementById('error-overlay').setAttribute('hidden', '');
  }

  _handleResize() {
    // Canvas sizing handles responsiveness automatically via CSS percentages,
    // but we can trigger a draw if rendering dimensions need alignment.
  }
}

// Define the custom element
customElements.define('ease-pencil-sketch-effect', EasePencilSketchEffect);
