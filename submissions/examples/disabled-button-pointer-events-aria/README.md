# Disabled Button Pointer-Events & ARIA Disabled

An audited, WCAG 2.1 AA compliant disabled button pattern utilizing `aria-disabled="true"` with `pointer-events: auto` to prevent focus starvation, convey contextual requirements to screen readers, and support Windows High Contrast Mode.

## 🌟 Features & Accessibility Fixes

* **Keyboard Focus Retention (WCAG 2.1.1):** Preserves the button in the keyboard tab sequence, allowing keyboard and screen reader users to discover unavailable controls.
* **Contextual Help via `aria-describedby` (WCAG 1.3.1 & 4.1.2):** Links the button to an explanatory note, automatically announced when NVDA, VoiceOver, or JAWS focuses the control.
* **Non-Silent Pointer Clicks:** Retaining pointer events enables click intercept handlers to announce remaining requirements and guide focus to the invalid field.
* **Dual-Layer Focus Ring (WCAG 2.4.7):** Ensures focus outline contrast across varied backgrounds even while disabled.
* **High Contrast Mode Support (`forced-colors: active`):** Binds disabled text and borders to `GrayText` and `ButtonText`.

## 🚀 Usage

```html
<button 
  type="submit" 
  class="btn-accessible" 
  aria-disabled="true" 
  aria-describedby="help-id"
>
  Submit
</button>
<span id="help-id">Complete required fields to submit.</span>
