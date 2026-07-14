# CSS Spring Physics Accordion for Minimalist Tech Layouts

A completely JavaScript-free animated Accordion utilizing modern CSS Grid properties and a custom `cubic-bezier` spring transition. It is styled for Minimalist Tech interfaces (clean lines, monochrome with subtle blue accents, and a distinct physical bounce).

## Files
- `demo.html` – The structural HTML demonstrating the CSS-only checkbox hack integrated with semantic labeling and keyboard accessibility.
- `style.css` – The stylesheet containing the core `grid-template-rows` transition logic and aesthetic variables.

## How it works
Historically, animating an element to `height: auto` using pure CSS was impossible without fixed heights or `max-height` hacks that ruined timing curves. 

This component solves this by utilizing CSS Grid. The wrapper is set to `display: grid` with `grid-template-rows: 0fr`. When the hidden checkbox is toggled, it transitions to `grid-template-rows: 1fr`. This allows the browser to smoothly interpolate the height, combined with our `cubic-bezier(0.34, 1.56, 0.64, 1)` spring physics timing function.

## Usage
Simply drop the HTML structure into your project and link the stylesheet. 

```html
<div class="ease-accordion-group">
  <div class="ease-accordion-item">
    <input type="checkbox" id="acc-1" class="ease-accordion-trigger-hidden" aria-hidden="true" />
    <label for="acc-1" class="ease-accordion-title" tabindex="0">
      <span class="ease-accordion-label">01. System Requirements</span>
      <span class="ease-accordion-icon">▼</span>
    </label>
    <div class="ease-accordion-content-wrapper">
      <div class="ease-accordion-content-inner">
        <p>Your content goes here.</p>
      </div>
    </div>
  </div>
</div>
```

## Accessibility
The component is fully keyboard navigable. The `<label>` acts as the interactive trigger and includes `tabindex="0"`. A tiny inline script in the demo handles translating the `Space` and `Enter` keys into standard click events for the label, ensuring WCAG compliance without needing a complex UI framework. Focus rings are explicitly defined for high visibility.

## Why it fits EaseMotion CSS
EaseMotion advocates for high-fidelity animations with zero JavaScript overhead. This component perfectly demonstrates how modern CSS mechanics (like `grid-template-rows: 0fr -> 1fr`) can replace entire JavaScript accordion libraries while delivering a superior, hardware-accelerated "Spring Physics" bounce.
