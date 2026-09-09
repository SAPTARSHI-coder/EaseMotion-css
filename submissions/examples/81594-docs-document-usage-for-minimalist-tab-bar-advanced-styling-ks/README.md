# Minimalist Tab Bar — Advanced Styling

A documentation example for building and customizing a minimalist
tab bar with reusable CSS classes, modifier classes, CSS custom
properties, responsive behavior, and accessible markup.

## Overview

The component uses a small set of reusable classes:

- `.tab-bar` — Base tab-list container.
- `.tab` — Base tab styling.
- `.tab--active` — Modifier for the currently selected tab.
- `.tab-bar--compact` — Compact layout modifier.
- `.tab__indicator` — Optional active-state indicator.

The component is intentionally designed so that visual customization
can be performed through CSS variables instead of changing the HTML.

## Basic HTML

```html
<div
  class="tab-bar"
  role="tablist"
  aria-label="Product sections"
>
  <button
    class="tab tab--active"
    type="button"
    role="tab"
    aria-selected="true"
    tabindex="0"
  >
    Overview
  </button>

  <button
    class="tab"
    type="button"
    role="tab"
    aria-selected="false"
    tabindex="-1"
  >
    Analytics
  </button>

  <button
    class="tab"
    type="button"
    role="tab"
    aria-selected="false"
    tabindex="-1"
  >
    Security
  </button>
</div>
````

## Class Naming

### `.tab-bar`

The base container for the tab controls.

```html
<div class="tab-bar">
  ...
</div>
```

### `.tab`

The base class applied to every tab.

```html
<button class="tab">
  Overview
</button>
```

### `.tab--active`

Use the modifier class for the currently selected tab.

```html
<button class="tab tab--active">
  Overview
</button>
```

The modifier controls the visual state without changing the base
`.tab` styles.

### `.tab-bar--compact`

Use this modifier when a smaller tab bar is required.

```html
<div class="tab-bar tab-bar--compact">
  ...
</div>
```

This follows the same base-plus-modifier pattern and avoids duplicating
the entire component's CSS.

## CSS Custom Properties

The component exposes CSS variables for common customizations.

```css
:root {
  --tab-accent: #4f46e5;
  --tab-text: #334155;
  --tab-text-muted: #64748b;
  --tab-border: #e2e8f0;
  --tab-background: #ffffff;

  --tab-radius: 12px;
  --tab-gap: 6px;

  --tab-padding-block: 12px;
  --tab-padding-inline: 18px;
}
```

### Custom Theme

Variables can be overridden at component scope:

```css
.dashboard-tabs {
  --tab-accent: #0f766e;
  --tab-accent-soft: #ccfbf1;
  --tab-radius: 8px;
}
```

Then apply the custom scope:

```html
<div class="dashboard-tabs">
  <div class="tab-bar">
    ...
  </div>
</div>
```

This keeps the component reusable while allowing individual sections
of a page to have different visual themes.

## Modifier Customization

Modifiers can override only the properties they need.

For example:

```css
.tab-bar--compact {
  --tab-gap: 2px;
}
```

This is preferable to creating a completely separate tab component
because the base styles remain reusable.

## Accessibility

Use actual `<button>` elements for interactive tabs rather than
non-semantic elements such as `<div>` or `<span>`.

A tab interface should expose the appropriate ARIA relationships:

```html
<div role="tablist">
  <button
    role="tab"
    aria-selected="true"
  >
    Overview
  </button>
</div>
```

The selected tab should expose:

```html
aria-selected="true"
```

while inactive tabs should expose:

```html
aria-selected="false"
```

### Keyboard Interaction

A fully interactive tab implementation should support keyboard
navigation.

Recommended behavior:

* `Tab` moves focus into and out of the tab list.
* `ArrowRight` moves to the next tab.
* `ArrowLeft` moves to the previous tab.
* `Home` moves to the first tab.
* `End` moves to the last tab.
* `Enter` or `Space` activates the focused tab when using manual
  activation.
* The active tab should have `aria-selected="true"`.
* Inactive tabs should have `aria-selected="false"`.

The JavaScript responsible for changing tabs should also keep
`tabindex` and the associated `tabpanel` state synchronized.

## Focus Styling

Do not remove the browser focus indicator without providing an
accessible replacement.

This component uses:

```css
.tab:focus-visible {
  outline: 3px solid rgba(79, 70, 229, 0.28);
  outline-offset: 2px;
}
```

`focus-visible` helps keep the keyboard focus indicator visible
without unnecessarily displaying it for every pointer interaction.

## Responsive Behavior

On smaller screens, the standard tab bar changes to a vertical
layout:

```css
@media (max-width: 640px) {
  .tab-bar {
    flex-direction: column;
  }
}
```

The compact variant remains horizontally scrollable so that its tabs
can remain on one line.

## Reduced Motion

The component respects users who prefer reduced motion:

```css
@media (prefers-reduced-motion: reduce) {
  .tab {
    transition: none;
  }
}
```

This prevents unnecessary transitions for users who have enabled a
reduced-motion preference.

## Customization Examples

### Change Accent Color

```css
.custom-tabs {
  --tab-accent: #2563eb;
  --tab-accent-soft: #dbeafe;
}
```

### Rounded Tabs

```css
.custom-tabs {
  --tab-radius: 999px;
}
```

### Compact Spacing

```css
.custom-tabs {
  --tab-padding-block: 8px;
  --tab-padding-inline: 12px;
  --tab-gap: 3px;
}
```

## Files

```text
81594-docs-document-usage-for-minimalist-tab-bar-advanced-styling-ks/
├── demo.html
├── style.css
└── README.md
```

## Technologies

* HTML5
* CSS3
* ARIA semantics

No external libraries are required.

## Notes

The demo focuses on the markup and styling documentation requested
for the Minimalist Tab Bar. A production implementation should connect
the tab controls to their associated tab panels and implement the
keyboard interaction behavior described above.

## License

This example follows the contribution and licensing guidelines of
the EaseMotion CSS project.

