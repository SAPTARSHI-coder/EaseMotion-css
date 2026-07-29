# CSS-Only Animated Accordion

This submission adds a pure CSS, interactive Accordion component to the EaseMotion framework.

## Features
- **Zero JavaScript:** Relies entirely on the hidden checkbox hack (`:checked`).
- **Smooth Height Transitions:** Uses modern CSS Grid (`grid-template-rows: 0fr -> 1fr`) to overcome the traditional `height: auto` transition limitation.
- **Accessible:** Uses `.ease-sr-only` to ensure screen reader compatibility, and implements `:focus-visible` to support keyboard navigation (Tab & Space).
- **Animated Icons:** Icons automatically rotate using `transform` when the accordion is expanded.

## Usage

```html
<div class="ease-accordion">
  <input type="checkbox" id="faq-1" class="ease-accordion-trigger ease-sr-only">
  <label for="faq-1" class="ease-accordion-header">
    <span>Question</span>
    <div class="ease-accordion-icon">⬇️</div>
  </label>
  <div class="ease-accordion-content">
    <div class="ease-accordion-inner">
      <p>Answer text goes here.</p>
    </div>
  </div>
</div>
```
