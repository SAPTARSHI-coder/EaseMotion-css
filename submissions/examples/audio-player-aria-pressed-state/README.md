# Audio Player Play/Pause ARIA Pressed State

An audited, WCAG 2.1 AA compliant audio player play/pause toggle button implementing `aria-pressed="true|false"`, `role="progressbar"`, directional arrow key seeking, and Windows High Contrast Mode support.

## 🌟 Features & Accessibility Fixes

* **Toggle Semantics with `aria-pressed` (WCAG 4.1.2):** Implements `aria-pressed="true|false"` so screen readers (NVDA, VoiceOver, JAWS) unambiguously identify pressed/unpressed states.
* **Space Key Scroll Suppression (WCAG 2.1.1):** Prevents default window scrolling when toggling playback with <kbd>Space</kbd>.
* **Arrow Key Navigation (WCAG 2.1.1):** Supports <kbd>ArrowLeft</kbd> and <kbd>ArrowRight</kbd> keys to seek backwards and forwards by 5-second intervals.
* **Polite Live Region Feedback (WCAG 4.1.3):** Relays audio status shifts (e.g., *"Playback started"*, *"Seeked to 15 seconds"*) to an `aria-live="polite"` region.
* **High Contrast Mode Support (`forced-colors: active`):** Binds controls, icons, and progress tracks to `ButtonText`, `CanvasText`, and `Highlight`.

## 🚀 Usage

```html
<button 
  type="button" 
  class="btn-ctrl btn-play-pause" 
  aria-label="Play track title" 
  aria-pressed="false"
>
  <svg class="icon" aria-hidden="true"><!-- Play/Pause Icon --></svg>
</button>
