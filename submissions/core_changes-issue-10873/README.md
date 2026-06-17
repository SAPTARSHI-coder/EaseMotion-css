# ease-tabs

## What does this do?

Provides a CSS-only animated tabs component with content fade-transition. Tab switching is handled entirely via the radio button hack — no JavaScript required.

## How is it used?

Add hidden radio inputs for each tab, label elements as tab buttons, and panel elements for content. The `is-active` state is controlled by the `:checked` pseudo-class.

```html
<div class="ease-tabs">
  <input type="radio" name="tab" id="tab-1" class="ease-tab-input" checked />
  <input type="radio" name="tab" id="tab-2" class="ease-tab-input" />
  <input type="radio" name="tab" id="tab-3" class="ease-tab-input" />

  <div class="ease-tab-list">
    <label class="ease-tab-label" for="tab-1">Overview</label>
    <label class="ease-tab-label" for="tab-2">Features</label>
    <label class="ease-tab-label" for="tab-3">Pricing</label>
  </div>

  <div class="ease-tab-panels">
    <div class="ease-tab-panel" data-tab="1">Content 1</div>
    <div class="ease-tab-panel" data-tab="2">Content 2</div>
    <div class="ease-tab-panel" data-tab="3">Content 3</div>
  </div>
</div>
```

Active tab labels get a colored underline via the `ease-tab-label` style. Inactive tab panels fade and slide down slightly using `opacity` and `translateY` transitions.

### Custom duration

The transition duration is configurable via the `--ease-speed-medium` custom property:

```css
.ease-tabs {
  --ease-speed-medium: 0.5s;
}
```

## Why is it useful?

Tabbed interfaces are a standard UI pattern for organizing content into switchable views. CSS-only tabs eliminate JavaScript dependencies, reduce bundle size, and improve resilience. The fade transition provides visual continuity when switching between panels.

## Features

- CSS-only tab switching via radio button hack (no JS)
- Fade + slide-up transition on panel switch
- Configurable transition duration via `--ease-speed-medium`
- Active tab indicator (colored underline)
- Respects `prefers-reduced-motion`
- Pure CSS, no JavaScript
