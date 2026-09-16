# Switch Toggle Space Key Press Handler

An audited, WCAG 2.1 AA compliant switch toggle component with explicit `Space` and `Enter` keypress handling, `role="switch"` ARIA semantics, and Windows High Contrast Mode support.

## 🌟 Features & Accessibility Fixes

* **Space Key Scroll Prevention (WCAG 2.1.1):** Intercepts `Space` keypress events (`e.preventDefault()`) on `<button role="switch">` to prevent default page scrolling while updating `aria-checked`.
* **WAI-ARIA Switch Pattern (WCAG 4.1.2):** Implements `role="switch"` and `aria-checked="true|false"`, properly linked to visual labels via `aria-labelledby` and `aria-describedby`.
* **Screen Reader Live Feedback (WCAG 4.1.3):** Employs an `aria-live="polite"` region to broadcast dynamic state changes across NVDA, VoiceOver, and JAWS.
* **Dual-Layer Focus Ring (WCAG 2.4.7):** Ensures a visible 3:1+ contrast focus indicator across light and dark backgrounds.
* **High Contrast Mode Support (`forced-colors: active`):** Explicitly maps `ButtonFace`, `ButtonText`, `Highlight`, and `HighlightText` to maintain visible thumb and track boundaries in Windows High Contrast Mode.

## 🚀 Usage

```html
<button 
  type="button" 
  role="switch" 
  id="my-switch" 
  class="switch-button" 
  aria-checked="false" 
  aria-labelledby="label-id"
>
  <span class="switch-thumb" aria-hidden="true"></span>
</button>
