````markdown
# Retro Pixel Toggle Switch

A responsive, accessible toggle switch component with a retro
pixel-art inspired visual style.

## Features

- Pure HTML and CSS.
- Responsive across desktop, tablet, and mobile breakpoints.
- Keyboard accessible.
- Visible `:focus-visible` state.
- Supports disabled states.
- Supports modifier classes.
- Supports custom CSS property overrides.
- Respects `prefers-reduced-motion`.
- No JavaScript dependencies.

## Demo

Open `demo.html` in a browser to view the component examples.

## Basic HTML

```html
<label class="pixel-toggle">
  <input
    class="pixel-toggle__input"
    type="checkbox"
    role="switch"
    aria-label="Enable notifications"
  />

  <span class="pixel-toggle__track" aria-hidden="true">
    <span class="pixel-toggle__thumb"></span>
  </span>

  <span class="pixel-toggle__label">
    Notifications
  </span>
</label>
````

The native checkbox remains the interactive element while the
visual track and thumb provide the custom presentation.

## Modifier Classes

### Large

Use `.pixel-toggle--large` for a larger switch.

```html
<label class="pixel-toggle pixel-toggle--large">
  <input
    class="pixel-toggle__input"
    type="checkbox"
    role="switch"
    aria-label="Large toggle"
  />

  <span class="pixel-toggle__track" aria-hidden="true">
    <span class="pixel-toggle__thumb"></span>
  </span>

  <span class="pixel-toggle__label">
    Large
  </span>
</label>
```

### Compact

Use `.pixel-toggle--compact` for a smaller switch.

```html
<label class="pixel-toggle pixel-toggle--compact">
  <input
    class="pixel-toggle__input"
    type="checkbox"
    role="switch"
    aria-label="Compact toggle"
  />

  <span class="pixel-toggle__track" aria-hidden="true">
    <span class="pixel-toggle__thumb"></span>
  </span>

  <span class="pixel-toggle__label">
    Compact
  </span>
</label>
```

### Disabled

Use the native `disabled` attribute when the control should not
be interactive.

```html
<label class="pixel-toggle pixel-toggle--disabled">
  <input
    class="pixel-toggle__input"
    type="checkbox"
    role="switch"
    disabled
    aria-label="Disabled toggle"
  />

  <span class="pixel-toggle__track" aria-hidden="true">
    <span class="pixel-toggle__thumb"></span>
  </span>

  <span class="pixel-toggle__label">
    Disabled
  </span>
</label>
```

## Custom CSS Properties

The component exposes CSS custom properties that can be overridden
at the component or theme level.

| Property           | Default             | Purpose              |
| ------------------ | ------------------- | -------------------- |
| `--toggle-width`   | `4.5rem`            | Toggle width         |
| `--toggle-height`  | `2.25rem`           | Toggle height        |
| `--toggle-padding` | `0.25rem`           | Thumb inset          |
| `--toggle-on`      | `#39ff14`           | Active background    |
| `--toggle-off`     | `#555555`           | Inactive background  |
| `--toggle-border`  | `#111111`           | Border color         |
| `--toggle-thumb`   | `#ffffff`           | Thumb color          |
| `--toggle-shadow`  | `4px 4px 0 #111111` | Pixel shadow         |
| `--toggle-focus`   | Focus ring values   | Keyboard focus style |

### Example Override

```html
<label
  class="pixel-toggle"
  style="
    --toggle-width: 5.5rem;
    --toggle-height: 2.75rem;
    --toggle-on: #ffdf00;
    --toggle-off: #333333;
    --toggle-border: #111111;
    --toggle-thumb: #ffffff;
  "
>
  <input
    class="pixel-toggle__input"
    type="checkbox"
    role="switch"
    checked
    aria-label="Custom themed toggle"
  />

  <span class="pixel-toggle__track" aria-hidden="true">
    <span class="pixel-toggle__thumb"></span>
  </span>

  <span class="pixel-toggle__label">
    Custom Theme
  </span>
</label>
```

For multiple toggles, define the properties in a parent theme
instead of repeating inline styles.

```css
.settings-panel {
  --toggle-on: #00e5ff;
  --toggle-off: #222222;
  --toggle-border: #000000;
}
```

## Responsive Breakpoints

The component uses CSS media queries to adapt its layout.

### Desktop

At widths above `768px`, the demo uses the default horizontal
layout and spacing.

### Tablet

At widths up to `768px`:

* Container width is reduced.
* Card padding is reduced.
* Modifier examples stack vertically.

### Mobile

At widths up to `480px`:

* Page padding is reduced.
* Heading size is reduced.
* Toggle rows use the available width.
* Large toggles are slightly reduced.

The toggle itself remains usable at all supported widths.

## Keyboard Navigation

The component uses a native checkbox, so it inherits standard
browser keyboard interaction.

Recommended interaction:

1. Press `Tab` to move focus to the toggle.
2. Press `Space` to toggle its state.
3. Press `Tab` again to move to the next control.

Do not remove the native input from the accessibility tree.

The component provides a visible focus indicator using
`:focus-visible`.

```css
.pixel-toggle__input:focus-visible
  + .pixel-toggle__track {
  outline: none;
  box-shadow: var(--toggle-focus);
}
```

## Accessibility Guidance

### Use a native control

Always use a native checkbox as the interactive element.

```html
<input type="checkbox" />
```

This provides built-in keyboard and form behavior.

### Use an accessible name

If the visible label is present, associate the input and label
using the `<label>` element.

For standalone toggles without visible text, provide an
`aria-label` or another accessible name.

```html
<input
  type="checkbox"
  role="switch"
  aria-label="Enable notifications"
/>
```

### Switch semantics

The optional `role="switch"` communicates that the checkbox
behaves as an on/off switch.

The checked state is automatically exposed by the native checkbox.

### Disabled state

Use the native `disabled` attribute rather than only changing
the visual appearance.

```html
<input
  type="checkbox"
  role="switch"
  disabled
/>
```

### Reduced motion

The component respects the user's reduced-motion preference.

```css
@media (prefers-reduced-motion: reduce) {
  .pixel-toggle__track,
  .pixel-toggle__thumb {
    transition: none;
  }
}
```

### Touch targets

Keep the complete label clickable so users do not need to precisely
tap the small visual switch.

## Component Structure

```text
.pixel-toggle
├── .pixel-toggle__input
├── .pixel-toggle__track
│   └── .pixel-toggle__thumb
└── .pixel-toggle__label
```

### Class Reference

| Class                     | Purpose                  |
| ------------------------- | ------------------------ |
| `.pixel-toggle`           | Base component           |
| `.pixel-toggle__input`    | Native checkbox input    |
| `.pixel-toggle__track`    | Toggle background        |
| `.pixel-toggle__thumb`    | Moving toggle thumb      |
| `.pixel-toggle__label`    | Optional visible label   |
| `.pixel-toggle--large`    | Large modifier           |
| `.pixel-toggle--compact`  | Compact modifier         |
| `.pixel-toggle--disabled` | Disabled visual modifier |

## Documentation Index

Add the following entry to the project's documentation index:

```markdown
- [Retro Pixel Toggle Switch](./retro-pixel-toggle/README.md)
```

If the repository uses a different docs-index location, add the
same relative link using the repository's existing index structure.

## Browser Support

The component uses standard HTML and CSS features including:

* CSS custom properties.
* Media queries.
* `:focus-visible`.
* `prefers-reduced-motion`.

Test the component in the project's supported browsers before
merging.

## Files

```text
retro-pixel-toggle/
├── demo.html
├── style.css
└── README.md
```

```
```
