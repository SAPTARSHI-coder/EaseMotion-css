# CSS Glassmorphism Tab Bar

## What does this do?

Provides a pure CSS animated tab bar featuring frosted glass containers, smooth glider transitions, and a refined active glow effect without relying on JavaScript.

## How is it used?

Include `style.css` in your project and structure your HTML with radio inputs, matching tab labels, and panel sections:

```html
<div class="ease-glass-tabs">
  <input
    type="radio"
    id="tab-1"
    name="glass-tab-group"
    checked
    class="ease-glass-tab-input"
  />
  <input
    type="radio"
    id="tab-2"
    name="glass-tab-group"
    class="ease-glass-tab-input"
  />

  <nav class="ease-glass-tab-nav" role="tablist">
    <label for="tab-1" class="ease-glass-tab-label" role="tab" tabindex="0"
      >Tab 1</label
    >
    <label for="tab-2" class="ease-glass-tab-label" role="tab" tabindex="0"
      >Tab 2</label
    >
    <div class="ease-glass-glider" aria-hidden="true"></div>
  </nav>

  <div class="ease-glass-tab-panels">
    <section class="ease-glass-tab-panel panel-1" role="tabpanel">
      Content 1
    </section>
    <section class="ease-glass-tab-panel panel-2" role="tabpanel">
      Content 2
    </section>
  </div>
</div>
```

## Why is it useful?

It offers a lightweight, fully accessible, zero-JavaScript glassmorphism UI pattern that delivers hardware-accelerated motion, responsive touch targets, and full keyboard navigation while aligning with EaseMotion CSS's zero-dependency design system.
