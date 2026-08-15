# Tooltip Hover Delay & Escape Key Dismiss

An audited, WCAG 2.1 AA compliant tooltip component implementing intentional hover delays, persistent pointer hover over tooltip content, immediate `Escape` key dismissal, and Windows High Contrast Mode support.

## 🌟 Features & Accessibility Fixes

* **Dismissible without moving focus (WCAG 1.4.13):** Pressing <kbd>Escape</kbd> dismisses the tooltip immediately while preserving keyboard focus on the triggering button.
* **Hoverable Content (WCAG 1.4.13):** Users can move their mouse over the tooltip bubble without it disappearing, allowing zoom inspection and text selection.
* **Hover Intent Delay:** Includes a 250ms delay before displaying on hover to avoid accidental activations during pointer sweeps.
* **ARIA Description (WCAG 4.1.2):** Links trigger and tooltip via `aria-describedby` and `role="tooltip"`, read automatically by NVDA, VoiceOver, and JAWS.
* **Dual-Layer Focus Ring (WCAG 2.4.7):** High-contrast focus indicator visible across dark and light surfaces.
* **High Contrast Mode Support (`forced-colors: active`):** Binds borders and text to `CanvasText`, `ButtonText`, and `Highlight`.

## 🚀 Usage

```html
<div class="tooltip-wrapper" id="tooltip-container">
  <button 
    type="button" 
    class="tooltip-trigger" 
    aria-describedby="tooltip-id"
  >
    Action
  </button>
  <div id="tooltip-id" class="tooltip-bubble" role="tooltip" aria-hidden="true">
    Descriptive helper text
  </div>
</div>
