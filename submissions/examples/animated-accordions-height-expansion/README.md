# Animated Accordions Component

A clean, pure-CSS accordion component that features smooth height-expansion transitions and collapsible chevron icons.

## Features
- Pure CSS state toggling via input checks (no JS dependencies).
- Smooth vertical expansion using cubic-bezier transitions on the `max-height` property.
- Self-rotating chevron indicators (`.em-accordion-icon`).
- Accessible keyboard navigation support (labels act as native focus targets for screen readers and tab indexes).

## Usage
Define the markup using a checkbox input and matched label trigger:

```html
<div class="em-accordion">
  <!-- Hidden state control checkbox -->
  <input type="checkbox" id="item-1" class="em-accordion-input" />
  
  <!-- Accordion Trigger Header -->
  <label for="item-1" class="em-accordion-header">
    <span>Panel Header Title</span>
    <span class="em-accordion-icon">▼</span>
  </label>
  
  <!-- Content Container -->
  <div class="em-accordion-content">
    <div class="em-accordion-content-inner">
      Accordion content goes here...
    </div>
  </div>
</div>
```
