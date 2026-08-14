# Screen Reader Visually Hidden (`.sr-only`) Utility Class

An audited, WCAG 2.1 AA compliant CSS utility class designed to visually hide elements while keeping them fully exposed to Screen Readers (NVDA, VoiceOver, JAWS) and accessibility API engines.

## 🌟 Audit Fixes & Improvements

* **Clip-Path + Clip Fallback:** Combines legacy `clip: rect(0, 0, 0, 0)` with modern `clip-path: inset(50%)` to ensure compatibility across both legacy and modern rendering engines.
* **Focusable Overrides (`.sr-only-focusable`):** Allows visually hidden elements (e.g., skip links) to un-hide smoothly when focused via keyboard (`Tab`), satisfying WCAG 2.4.7 (Focus Visible).
* **Forced-Colors Mode Support:** Strips phantom outlines in Windows High Contrast Mode (`forced-colors: active`) while applying distinct contrast borders when focusable elements receive focus.
* **Layout Isolation:** Uses `position: absolute`, `width: 1px`, `height: 1px`, `margin: -1px`, and `white-space: nowrap` to prevent layout overflow, unwanted horizontal scrollbars, or word-splitting in screen reader speech engines.

## 🚀 Usage Guide

### Basic Usage (Icon Button Accessible Name)
```html
<button type="button" class="btn">
  <svg aria-hidden="true" focusable="false"><!-- Icon --></svg>
  <span class="sr-only">Close Modal</span>
</button>
