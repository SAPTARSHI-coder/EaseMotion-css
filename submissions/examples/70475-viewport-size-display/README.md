# Viewport Size Display Component (`ease-viewport-size-display`)

A live viewport dimension display corner widget featuring real-time pixel width and height readouts (`width × height`), pure CSS responsive breakpoint badges (`MOBILE`, `TABLET`, `DESKTOP`, `ULTRAWIDE`), orientation & Device Pixel Ratio (DPR) indicators, glassmorphism UI, collapsible widget states, dark/light theme adaptation, and reduced motion fallbacks.

## Technical Rationale — Live Viewport Dimensions

> **Note on Live Dimensions**: Pure CSS media queries (`@media (min-width: ...)`) natively drive responsive breakpoint badges (`MOBILE`, `TABLET`, `DESKTOP`), orientation badges (`LANDSCAPE` / `PORTRAIT`), and glassmorphism corner widget styling. Because CSS alone cannot generate dynamic numeric strings for arbitrary runtime pixel dimensions, an ultra-lightweight inline 8-line listener updates live pixel spans on `window.resize`.

## Features

- **Real-Time Pixel Readout**: Dynamically displays live `width × height` pixel measurements as the browser window or device orientation changes.
- **Pure CSS Breakpoint Badges**: Automatically displays breakpoint tags (`MOBILE <640px`, `TABLET 640-1023px`, `DESKTOP 1024-1439px`, `ULTRAWIDE ≥1440px`) using pure CSS `@media` queries.
- **Pure CSS Orientation & DPR**: Detects `LANDSCAPE` vs `PORTRAIT` orientation via `@media (orientation)` and Device Pixel Ratio (DPR).
- **Glassmorphism Corner Dock**: Fixed bottom-right corner widget with `backdrop-filter: blur(12px)` and collapsible minimized state.
- **100% Accessible**: Includes `role="status"`, `aria-live="polite"`, `aria-label="Live viewport size display"`, keyboard focusable controls, and `@media (prefers-reduced-motion: reduce)` fallbacks.

## Usage

Include `style.css` and use semantic HTML:

```html
<div
  id="vp-widget"
  class="ease-viewport-size-display"
  role="status"
  aria-live="polite"
  aria-label="Live viewport size display"
>
  <div class="widget-header">
    <span class="widget-label">VIEWPORT READOUT</span>
    <button type="button" id="vp-toggle-btn" class="widget-toggle-btn">
      <svg
        class="toggle-icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
      >
        <path d="M18 12H6" />
      </svg>
    </button>
  </div>

  <div class="widget-body">
    <div class="dimensions-readout">
      <span id="vp-width">---</span> &times; <span id="vp-height">---</span> px
    </div>
    <div class="badges-row">
      <span class="vp-badge badge-mobile">MOBILE</span>
      <span class="vp-badge badge-tablet">TABLET</span>
      <span class="vp-badge badge-desktop">DESKTOP</span>
      <span class="vp-badge badge-ultrawide">ULTRAWIDE</span>
      <span class="vp-badge badge-landscape">LANDSCAPE</span>
      <span class="vp-badge badge-portrait">PORTRAIT</span>
    </div>
  </div>
</div>
```

### Customization Variables

```css
.ease-viewport-size-display {
  --vp-primary: #0284c7;
  --vp-accent: #10b981;
  --vp-border: #1f2937;
}
```

## How to View

Open [`demo.html`](file:///Users/tanvitiwari/EaseMotion-css/submissions/examples/70475-viewport-size-display/demo.html) directly in any modern web browser and resize the window to see live dimension and breakpoint updates.
