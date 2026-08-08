const template = document.createElement("template");
template.innerHTML = `
  <style>
    :host {
      display: block;
      --gallery-columns: 4;
      --gallery-gap: 16px;
      --accent-color: #d97706;
      --bg-color: #fcfcfc;
      --text-color: #111111;
      --muted-color: #555555;
      --focus-outline: 2px solid var(--accent-color);
      --font-serif: "Fraunces", Georgia, serif;
      --font-sans: "Inter", system-ui, -apple-system, sans-serif;
      --font-mono: "IBM Plex Mono", Courier, monospace;
    }

    /* Masonry Layout */
    .masonry-container {
      column-count: var(--gallery-columns, 4);
      column-gap: var(--gallery-gap, 16px);
      width: 100%;
      box-sizing: border-box;
    }

    .gallery-item {
      break-inside: avoid;
      margin-bottom: var(--gallery-gap, 16px);
      position: relative;
      cursor: pointer;
      display: block;
      overflow: hidden;
      background-color: #ffffff;
      border: 1px solid #eaeaea;
      transition: border-color 0.2s ease, transform 0.2s ease;
      transform: translate3d(0, 0, 0);
    }

    .gallery-item:focus {
      outline: none;
    }

    .gallery-item:focus-visible {
      outline: var(--focus-outline);
      outline-offset: 4px;
    }

    .gallery-thumb {
      display: block;
      width: 100%;
      height: auto;
      object-fit: cover;
      transition: filter 0.3s ease;
    }

    /* Contact Sheet Hover Effect */
    .hover-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(252, 252, 252, 0.95);
      opacity: 0;
      pointer-events: none;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      padding: 1.25rem;
      box-sizing: border-box;
      transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .gallery-item:hover .hover-overlay,
    .gallery-item:focus .hover-overlay {
      opacity: 1;
      pointer-events: auto;
    }

    .gallery-item:hover .gallery-thumb {
      filter: grayscale(100%) contrast(1.1);
    }

    /* Monospace Frame Stamp */
    .frame-stamp {
      position: absolute;
      top: 12px;
      right: 12px;
      font-family: var(--font-mono);
      font-size: 0.8rem;
      font-weight: 600;
      color: var(--accent-color);
      background-color: rgba(217, 119, 6, 0.05);
      border: 1px solid var(--accent-color);
      padding: 2px 6px;
      letter-spacing: 0.05em;
    }

    /* Serif Captions */
    .caption-serif {
      font-family: var(--font-serif);
      font-size: 0.95rem;
      color: var(--text-color);
      margin: 0;
      line-height: 1.4;
      font-style: italic;
    }

    /* Fullscreen Lightbox Overlay */
    .lightbox-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: rgba(252, 252, 252, 0.98);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      z-index: 99999;
      box-sizing: border-box;
      padding: 2rem;
    }

    .lightbox-close {
      position: absolute;
      top: 2rem;
      right: 2rem;
      background: none;
      border: none;
      font-size: 2.5rem;
      cursor: pointer;
      color: var(--text-color);
      font-family: var(--font-sans);
      line-height: 1;
      padding: 0.5rem;
      transition: color 0.2s ease;
      z-index: 100000;
    }

    .lightbox-close:hover,
    .lightbox-close:focus-visible {
      color: var(--accent-color);
    }

    .lightbox-close:focus-visible {
      outline: var(--focus-outline);
      outline-offset: 4px;
    }

    .lightbox-prev,
    .lightbox-next {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background: none;
      border: none;
      font-size: 3rem;
      cursor: pointer;
      color: var(--text-color);
      font-family: var(--font-sans);
      line-height: 1;
      padding: 1rem;
      transition: color 0.2s ease, transform 0.2s ease;
      z-index: 100000;
    }

    .lightbox-prev:hover,
    .lightbox-next:hover,
    .lightbox-prev:focus-visible,
    .lightbox-next:focus-visible {
      color: var(--accent-color);
    }

    .lightbox-prev:focus-visible,
    .lightbox-next:focus-visible {
      outline: var(--focus-outline);
      outline-offset: 4px;
    }

    .lightbox-prev {
      left: 2rem;
    }

    .lightbox-next {
      right: 2rem;
    }

    .lightbox-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      max-width: 80%;
      max-height: 80%;
      gap: 1.5rem;
      box-sizing: border-box;
    }

    .lightbox-image {
      max-width: 100%;
      max-height: 65vh;
      object-fit: contain;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
      border: 1px solid #eaeaea;
      background: #ffffff;
      padding: 8px;
    }

    .lightbox-meta {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .lightbox-stamp {
      font-family: var(--font-mono);
      font-size: 0.85rem;
      font-weight: 600;
      color: var(--accent-color);
      border: 1px solid var(--accent-color);
      padding: 2px 6px;
      letter-spacing: 0.05em;
    }

    .lightbox-caption {
      font-family: var(--font-serif);
      font-size: 1.1rem;
      color: var(--text-color);
      font-style: italic;
      margin: 0;
    }

    .lightbox-mobile-controls {
      display: none;
    }

    /* Responsive adjustments */
    @media (max-width: 1200px) {
      .masonry-container {
        column-count: 3;
      }
    }

    @media (max-width: 900px) {
      .masonry-container {
        column-count: 2;
      }
    }

    @media (max-width: 600px) {
      .masonry-container {
        column-count: 1;
      }

      .lightbox-overlay {
        padding: 1rem;
      }

      .lightbox-prev,
      .lightbox-next {
        display: none;
      }

      .lightbox-content {
        max-width: 100%;
        max-height: 85%;
      }

      .lightbox-image {
        max-height: 55vh;
      }

      .lightbox-mobile-controls {
        display: flex;
        justify-content: center;
        gap: 3rem;
        width: 100%;
      }

      .lightbox-mobile-prev,
      .lightbox-mobile-next {
        background: none;
        border: none;
        font-size: 2.2rem;
        cursor: pointer;
        color: var(--text-color);
        font-family: var(--font-sans);
        padding: 0.5rem;
      }

      .lightbox-mobile-prev:hover,
      .lightbox-mobile-next:hover,
      .lightbox-mobile-prev:focus-visible,
      .lightbox-mobile-next:focus-visible {
        color: var(--accent-color);
      }

      .lightbox-mobile-prev:focus-visible,
      .lightbox-mobile-next:focus-visible {
        outline: var(--focus-outline);
        outline-offset: 4px;
      }
    }

    /* Reduce Motion */
    @media (prefers-reduced-motion: reduce) {
      *,
      *::before,
      *::after {
        transition: none !important;
        animation: none !important;
      }
    }
  </style>

  <slot id="light-dom-slot" style="display: none;"></slot>
  <div class="masonry-container" id="gallery-root"></div>

  <div id="lightbox" role="dialog" aria-modal="true" aria-label="Photo Lightbox" class="lightbox-overlay" style="display: none;">
    <button class="lightbox-close" id="lightbox-close" aria-label="Close lightbox">&times;</button>
    <button class="lightbox-prev" id="lightbox-prev" aria-label="Previous photo">&larr;</button>
    
    <div class="lightbox-content">
      <img id="lightbox-img" class="lightbox-image" src="" alt="">
      <div class="lightbox-meta">
        <span id="lightbox-stamp" class="lightbox-stamp"></span>
        <p id="lightbox-caption" class="lightbox-caption"></p>
      </div>
      <div class="lightbox-mobile-controls">
        <button class="lightbox-mobile-prev" id="lightbox-mobile-prev" aria-label="Previous photo">&larr;</button>
        <button class="lightbox-mobile-next" id="lightbox-mobile-next" aria-label="Next photo">&rarr;</button>
      </div>
    </div>
    
    <button class="lightbox-next" id="lightbox-next" aria-label="Next photo">&rarr;</button>
  </div>
`;

class EasePhotoGalleryMasonry extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this._images = [];
    this._currentIndex = -1;
    this._isOpen = false;
    this._triggeringElement = null;

    // Bind event handlers
    this._handleSlotChange = this._handleSlotChange.bind(this);
    this._handleKeyDown = this._handleKeyDown.bind(this);
    this._closeLightbox = this._closeLightbox.bind(this);
    this._prevPhoto = this._prevPhoto.bind(this);
    this._nextPhoto = this._nextPhoto.bind(this);
  }

  static get observedAttributes() {
    return ["images", "columns", "gap"];
  }

  get images() {
    return this._images;
  }

  set images(val) {
    if (Array.isArray(val)) {
      this._images = val;
      this._renderGallery();
    }
  }

  get columns() {
    return this.getAttribute("columns") || "4";
  }

  set columns(val) {
    this.setAttribute("columns", val);
  }

  get gap() {
    return this.getAttribute("gap") || "16px";
  }

  set gap(val) {
    this.setAttribute("gap", val);
  }

  connectedCallback() {
    this.style.setProperty("--gallery-columns", this.columns);
    this.style.setProperty("--gallery-gap", this.gap);

    // Setup slot listener
    const slot = this.shadowRoot.getElementById("light-dom-slot");
    slot.addEventListener("slotchange", this._handleSlotChange);

    // Setup lightbox click listeners
    this.shadowRoot
      .getElementById("lightbox-close")
      .addEventListener("click", this._closeLightbox);
    this.shadowRoot
      .getElementById("lightbox-prev")
      .addEventListener("click", this._prevPhoto);
    this.shadowRoot
      .getElementById("lightbox-next")
      .addEventListener("click", this._nextPhoto);
    this.shadowRoot
      .getElementById("lightbox-mobile-prev")
      .addEventListener("click", this._prevPhoto);
    this.shadowRoot
      .getElementById("lightbox-mobile-next")
      .addEventListener("click", this._nextPhoto);

    // Close lightbox on backdrop click
    this.shadowRoot
      .getElementById("lightbox")
      .addEventListener("click", (e) => {
        if (e.target === e.currentTarget) {
          this._closeLightbox();
        }
      });

    // Keyboard navigation listener
    window.addEventListener("keydown", this._handleKeyDown);

    // Initial parse in case slot is already populated
    this._updateImages();
  }

  disconnectedCallback() {
    window.removeEventListener("keydown", this._handleKeyDown);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue === newValue) return;

    if (name === "columns") {
      this.style.setProperty("--gallery-columns", newValue || "4");
    } else if (name === "gap") {
      this.style.setProperty("--gallery-gap", newValue || "16px");
    } else if (name === "images") {
      this._updateImages();
    }
  }

  _handleSlotChange() {
    this._updateImages();
  }

  _updateImages() {
    const attrImages = this._parseImagesAttribute();
    const slotImages = this._parseSlotImages();
    this._images = [...attrImages, ...slotImages];
    this._renderGallery();
  }

  _parseImagesAttribute() {
    const attr = this.getAttribute("images");
    if (!attr) return [];
    try {
      return JSON.parse(attr);
    } catch (e) {
      console.error(
        "Invalid JSON for images attribute on <ease-photo-gallery-masonry>",
        e
      );
      return [];
    }
  }

  _parseSlotImages() {
    const slot = this.shadowRoot.getElementById("light-dom-slot");
    if (!slot) return [];
    const assigned = slot.assignedElements({ flatten: true });
    const imgs = [];
    assigned.forEach((el) => {
      if (el.tagName === "IMG") {
        imgs.push({
          src: el.getAttribute("src") || "",
          alt: el.getAttribute("alt") || "",
          caption:
            el.getAttribute("data-caption") || el.getAttribute("alt") || "",
        });
      } else {
        el.querySelectorAll("img").forEach((nestedImg) => {
          imgs.push({
            src: nestedImg.getAttribute("src") || "",
            alt: nestedImg.getAttribute("alt") || "",
            caption:
              nestedImg.getAttribute("data-caption") ||
              nestedImg.getAttribute("alt") ||
              "",
          });
        });
      }
    });
    return imgs;
  }

  _getFrameStamp(index) {
    const num = String(index + 1).padStart(2, "0");
    const letter = String.fromCharCode(65 + (index % 26));
    return `${num}${letter}`;
  }

  _renderGallery() {
    const container = this.shadowRoot.getElementById("gallery-root");
    if (!container) return;

    container.innerHTML = "";

    this._images.forEach((img, i) => {
      const stamp = this._getFrameStamp(i);

      const item = document.createElement("div");
      item.className = "gallery-item";
      item.tabIndex = 0;
      item.setAttribute("role", "button");
      item.setAttribute(
        "aria-label",
        `Open photo: ${img.alt || "Image " + (i + 1)}`
      );
      item.setAttribute("data-index", i);

      const thumb = document.createElement("img");
      thumb.className = "gallery-thumb";
      thumb.src = img.src;
      thumb.alt = img.alt || "";
      thumb.loading = "lazy";

      const overlay = document.createElement("div");
      overlay.className = "hover-overlay";

      const stampEl = document.createElement("span");
      stampEl.className = "frame-stamp";
      stampEl.innerText = stamp;

      const captionEl = document.createElement("p");
      captionEl.className = "caption-serif";
      captionEl.innerText = img.caption || "";

      overlay.appendChild(stampEl);
      overlay.appendChild(captionEl);
      item.appendChild(thumb);
      item.appendChild(overlay);

      // Event Listeners for thumbnail triggers
      item.addEventListener("click", () => this._openLightbox(i, item));
      item.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          this._openLightbox(i, item);
        }
      });

      container.appendChild(item);
    });
  }

  _openLightbox(index, triggerEl) {
    if (index < 0 || index >= this._images.length) return;

    this._currentIndex = index;
    this._triggeringElement = triggerEl;
    this._isOpen = true;

    this._updateLightboxContent();

    const lightbox = this.shadowRoot.getElementById("lightbox");
    lightbox.style.display = "flex";

    // Focus close button initially for accessibility
    setTimeout(() => {
      this.shadowRoot.getElementById("lightbox-close").focus();
    }, 50);

    // Dispatch Custom Event
    this.dispatchEvent(
      new CustomEvent("ease-photo-open", {
        detail: { index },
        bubbles: true,
        composed: true,
      })
    );
  }

  _closeLightbox() {
    if (!this._isOpen) return;

    const lightbox = this.shadowRoot.getElementById("lightbox");
    lightbox.style.display = "none";
    this._isOpen = false;

    // Return focus to the thumbnail that triggered it
    if (this._triggeringElement) {
      this._triggeringElement.focus();
    }

    // Dispatch Custom Event
    this.dispatchEvent(
      new CustomEvent("ease-photo-close", {
        detail: { index: this._currentIndex },
        bubbles: true,
        composed: true,
      })
    );
  }

  _prevPhoto() {
    if (this._currentIndex > 0) {
      this._currentIndex--;
      this._updateLightboxContent();
    } else {
      // Loop back to end
      this._currentIndex = this._images.length - 1;
      this._updateLightboxContent();
    }
  }

  _nextPhoto() {
    if (this._currentIndex < this._images.length - 1) {
      this._currentIndex++;
      this._updateLightboxContent();
    } else {
      // Loop back to start
      this._currentIndex = 0;
      this._updateLightboxContent();
    }
  }

  _updateLightboxContent() {
    const imgData = this._images[this._currentIndex];
    if (!imgData) return;

    const img = this.shadowRoot.getElementById("lightbox-img");
    const stamp = this.shadowRoot.getElementById("lightbox-stamp");
    const caption = this.shadowRoot.getElementById("lightbox-caption");

    img.src = imgData.src;
    img.alt = imgData.alt || "";
    stamp.innerText = this._getFrameStamp(this._currentIndex);
    caption.innerText = imgData.caption || "";

    // Set buttons states (disable prev/next if at edges, or enable loop)
    // Note: Loop navigation is implemented, so no disabling required.
  }

  _handleKeyDown(event) {
    if (!this._isOpen) return;

    if (event.key === "Escape") {
      this._closeLightbox();
      event.preventDefault();
    } else if (event.key === "ArrowRight") {
      this._nextPhoto();
      event.preventDefault();
    } else if (event.key === "ArrowLeft") {
      this._prevPhoto();
      event.preventDefault();
    } else if (event.key === "Tab") {
      this._trapFocus(event);
    }
  }

  _trapFocus(event) {
    const focusables = Array.from(
      this.shadowRoot.querySelectorAll('button, [tabindex="0"]')
    );
    // Filter to only include elements inside the lightbox overlay
    const lightbox = this.shadowRoot.getElementById("lightbox");
    const lightboxFocusables = focusables.filter(
      (el) => lightbox.contains(el) && el.style.display !== "none"
    );

    if (lightboxFocusables.length === 0) return;

    const first = lightboxFocusables[0];
    const last = lightboxFocusables[lightboxFocusables.length - 1];
    const active = this.shadowRoot.activeElement;

    if (event.shiftKey) {
      if (active === first || active === null) {
        last.focus();
        event.preventDefault();
      }
    } else {
      if (active === last || active === null) {
        first.focus();
        event.preventDefault();
      }
    }
  }
}

customElements.define("ease-photo-gallery-masonry", EasePhotoGalleryMasonry);
