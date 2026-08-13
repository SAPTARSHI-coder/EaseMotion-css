# Interactive Tooltip Usage Guide

The **Interactive Tooltip** is a pure CSS component designed to provide accessible, rich-content tooltips that appear on hover or focus, without requiring any JavaScript event listeners or positioning libraries.

## Table of Contents
- [Basic Usage](#basic-usage)
- [Accessibility](#accessibility)
- [Positioning Variables](#positioning-variables)
- [Customization (Theming)](#customization-theming)

---

## Basic Usage

To implement the Interactive Tooltip, you need a wrapper element and the tooltip content itself. The CSS uses the `hover` and `focus-within` states on the wrapper to reveal the hidden tooltip.

```html
<!-- The Wrapper (Trigger) -->
<div class="tooltip-wrapper" tabindex="0">
  
  <span class="tooltip-trigger-text">Hover or Focus Me</span>
  
  <!-- The Tooltip Content -->
  <div class="tooltip-content" role="tooltip">
    <h4>Interactive Content</h4>
    <p>You can put text, links, or even small images inside this tooltip.</p>
    <a href="#">Clickable Link</a>
  </div>
  
</div>
```

**Why it's interactive:** Unlike standard `title` attributes or simple `::after` pseudo-element tooltips, wrapping a real HTML `<div>` allows you to put interactive elements (like buttons or links) inside the tooltip. As long as the user hovers over the wrapper *or* the tooltip itself, the tooltip remains visible.

## Accessibility

Because this component contains rich HTML, accessibility is crucial:
- **Keyboard Navigation:** The `.tooltip-wrapper` must have `tabindex="0"` so keyboard users can focus it. 
- **Focus States:** The CSS is written so that `.tooltip-wrapper:focus-within .tooltip-content` also reveals the tooltip. This ensures that when a keyboard user tabs onto the trigger, the tooltip appears, and they can then tab *into* the tooltip's internal links.
- **ARIA Roles:** Add `role="tooltip"` to the `.tooltip-content`. For advanced usage, you should add `aria-describedby="[tooltip-id]"` to the trigger element.

## Positioning Variables

The tooltip is positioned absolutely relative to the `.tooltip-wrapper`. By default, it appears above the trigger. You can change this behavior by adjusting the CSS Custom Properties on the wrapper.

```css
.tooltip-wrapper.bottom-placement {
  /* Shifts the tooltip below the trigger */
  --tooltip-translate-y: 10px;
  --tooltip-origin: top center;
}
```

The core CSS handles the centering and floating:
```css
.tooltip-content {
  position: absolute;
  /* Center horizontally */
  left: 50%;
  transform: translateX(-50%) translateY(var(--tooltip-translate-y, -10px));
  
  /* Reveal animation */
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, transform 0.3s ease, visibility 0.3s;
}

.tooltip-wrapper:hover .tooltip-content,
.tooltip-wrapper:focus-within .tooltip-content {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) translateY(var(--tooltip-translate-active-y, -15px));
}
```

## Customization (Theming)

The visual style of the tooltip can be easily customized overriding the root variables:

```css
:root {
  /* Colors */
  --tooltip-bg: #1e293b;
  --tooltip-text: #f8fafc;
  --tooltip-border: #334155;
  
  /* Dimensions & Spacing */
  --tooltip-padding: 12px 16px;
  --tooltip-border-radius: 8px;
  --tooltip-max-width: 250px;
  
  /* Shadows */
  --tooltip-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3);
}
```

### The Caret (Arrow) Pointer
The small arrow pointing from the tooltip to the trigger is created using a `::before` pseudo-element on the `.tooltip-content` utilizing the CSS triangle border trick or a rotated square. It automatically inherits the `--tooltip-bg` and `--tooltip-border` variables to ensure it matches your custom theme seamlessly.
