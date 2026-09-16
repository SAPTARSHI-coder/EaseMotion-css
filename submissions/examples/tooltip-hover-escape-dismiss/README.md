# Tooltip Hover Delay & Escape Key Dismiss

An audited, WCAG 2.1 AA compliant tooltip component implementing intentional hover delays, persistent pointer hover over tooltip content, immediate `Escape` key dismissal, and Windows High Contrast Mode support.

## 🌟 Features & Accessibility Fixes

* **Dismissible without moving focus (WCAG 1.4.13):** Pressing the <kbd>Escape</kbd> key dismisses the tooltip immediately while leaving keyboard focus on the triggering button.
* **Hoverable Content (WCAG 1.4.13):** Users can move their mouse over the tooltip bubble without it disappearing, allowing text inspection or zoom navigation.
* **Hover Delay Prevention:** Incorporates a 250ms intent delay before displaying to prevent accidental triggers while moving the pointer across the screen.
* **ARIA Description (WCAG 4.1.2):** Links the trigger button to the tooltip via `aria-describedby` and `role="tooltip"`, ensuring full announcement across NVDA, VoiceOver, and JAWS.
* **Dual-Layer Focus Ring (WCAG 2.4.7):** Preserves a high-contrast focus indicator across dark and light surfaces.
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
