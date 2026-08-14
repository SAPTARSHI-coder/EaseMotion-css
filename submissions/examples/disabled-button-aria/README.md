# Disabled Button `aria-disabled` State vs. `pointer-events: none`

An audited, WCAG 2.1 AA compliant disabled button pattern using `aria-disabled="true"` instead of native `disabled` or `pointer-events: none`. This preserves keyboard focusability, screen reader accessibility, and contextual error help text.

## 🌟 Audit Fixes & Strategy

* **Keyboard Focus Preservation (WCAG 2.1.1):** Keeps the button in the keyboard tab sequence so keyboard and screen reader users can discover unavailable controls and understand why they are disabled.
* **Explanatory Context via `aria-describedby` (WCAG 1.3.1 / WCAG 4.1.2):** Links the button to an explanatory message (e.g., *"You must accept the Terms to proceed"*), which is read automatically when screen readers focus the button.
* **Event Interception without `pointer-events: none`:** Keeps pointer events active so clicks on disabled controls trigger live region announcements or redirect focus to missing required fields.
* **Forced Colors Mode Support (`forced-colors: active`):** Maps disabled states explicitly to Windows High Contrast system colors (`GrayText` / `CanvasText`).

## 🚀 Pattern Implementation

```html
<!-- Accessible Disabled Button -->
<button 
  type="submit" 
  class="btn-accessible" 
  aria-disabled="true"
  aria-describedby="disabled-reason"
>
  Submit Application
</button>

<div id="disabled-reason" class="help-text">
  Complete all required fields above to enable submission.
</div>
