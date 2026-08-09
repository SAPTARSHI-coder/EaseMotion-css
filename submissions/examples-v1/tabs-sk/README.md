# Tabs Component

## What does this do?

A CSS-only tabs component using hidden radio inputs and the modern `:has()` selector for state management — zero JavaScript, unlimited tab count, four visual variants.

## How is it used?

### Standard Tabs

```html
<div class="tabs">
  <input type="radio" name="tabs-demo" id="tab1" class="tabs__radio" checked />
  <input type="radio" name="tabs-demo" id="tab2" class="tabs__radio" />
  <input type="radio" name="tabs-demo" id="tab3" class="tabs__radio" />

  <nav class="tabs__nav" role="tablist">
    <label for="tab1" class="tabs__tab" role="tab">Overview</label>
    <label for="tab2" class="tabs__tab" role="tab">Features</label>
    <label for="tab3" class="tabs__tab" role="tab">Pricing</label>
  </nav>

  <div class="tabs__panels">
    <div class="tabs__panel" role="tabpanel">
      <p>Content for panel 1.</p>
    </div>
    <div class="tabs__panel" role="tabpanel">
      <p>Content for panel 2.</p>
    </div>
    <div class="tabs__panel" role="tabpanel">
      <p>Content for panel 3.</p>
    </div>
  </div>
</div>
```

### Pills Variant

```html
<div class="tabs tabs--pills">
  <!-- Same structure; labels render as rounded pill buttons -->
</div>
```

### Underline Variant

```html
<div class="tabs tabs--underline">
  <!-- Same structure; active tab gets a sliding underline -->
</div>
```

### Vertical Tabs

```html
<div class="tabs tabs--vertical">
  <!-- Same structure; nav renders as a left sidebar -->
</div>
```

### Tabs with Icons

```html
<label for="tab1" class="tabs__tab" role="tab">
  <svg class="tabs__tab-icon" width="16" height="16" ...><!-- icon --></svg>
  Home
</label>
```

## Why is it useful?

CSS-only tabs are on the v1.2 roadmap as a planned feature. This implementation uses the modern `:has()` selector instead of `nth-of-type` chains, allowing unlimited tabs without CSS bloat. The component requires zero JavaScript — state is managed purely through radio input `:checked` states. All variants respect `prefers-reduced-motion`, support dark mode, and collapse gracefully on mobile screens.

## Installation

Add `style.css` to your project and link it:

```html
<link rel="stylesheet" href="path/to/style.css" />
```

No build tool, npm package, or JavaScript file required.

## Customization

All colors, spacing, and animation timing are driven by CSS custom properties scoped to the `.tabs` block. Override any value by redeclaring the variable on a parent element or directly on the `.tabs` container:

```css
.tabs {
  --tabs-color: #2563eb;
  --tabs-radius: 12px;
  --tabs-speed: 0.35s;
}
```

### Available Custom Properties

| Property | Default | Description |
|---|---|---|
| `--tabs-color` | `#6c63ff` | Active tab highlight color |
| `--tabs-color-hover` | `#4b44cc` | Hover color |
| `--tabs-border` | `#e2e8f0` | Border and separator color |
| `--tabs-bg` | `#ffffff` | Background color |
| `--tabs-text` | `#475569` | Inactive tab text color |
| `--tabs-text-active` | `#1e293b` | Active tab text color |
| `--tabs-radius` | `8px` | Tab border radius |
| `--tabs-speed` | `0.25s` | Transition duration |

## Accessibility

- **ARIA roles**: Each label has `role="tab"`, each panel has `role="tabpanel"`, and the nav has `role="tablist"` — screen readers correctly announce tab structure
- **Keyboard navigation**: Native radio input behavior — `Tab` moves focus between labels, arrow keys cycle within the group (once focused)
- **Focus visible**: `:focus-visible` provides a visible outline on keyboard focus without affecting mouse clicks
- **Reduced motion**: `prefers-reduced-motion: reduce` disables all transitions and animations

## Browser Support

| Feature | Chrome | Firefox | Safari | Edge |
|---|---|---|---|---|
| Radio input state management | All | All | All | All |
| `:has()` selector | 105+ | 121+ | 15.4+ | 105+ |
| `@supports selector(:has(*))` | 105+ | 121+ | 15.4+ | 105+ |

Browsers without `:has()` support (primarily older versions) receive the `@supports not selector(:has(*))` fallback which displays all panels as visible stacked content — the tabs remain usable, just without the toggle behavior.
