# Morph-Glow Accordion

A lightweight, responsive accordion pattern for SaaS showcase layouts, built
entirely with semantic HTML and CSS.

## Features

- Pure HTML and CSS — no JavaScript or external dependencies.
- Semantic `<details>` and `<summary>` controls.
- Smooth hover, focus, and open-state transitions.
- Subtle morphing glow effect on the active accordion item.
- Responsive layout for desktop, tablet, and mobile screens.
- Keyboard accessible through the native `<summary>` interaction.
- Visible `:focus-visible` styling.
- Reduced-motion fallback using `prefers-reduced-motion`.

## File Structure

```text
morph-glow-accordion/
├── demo.html
├── style.css
└── README.md
```

## Usage

Copy the required markup from `demo.html` and include `style.css` in the
target page.

```html
<link rel="stylesheet" href="style.css">
```

The component uses native `<details>` elements, so no JavaScript is required
for opening and closing panels.

```html
<details class="accordion__item">
  <summary class="accordion__trigger">
    Feature title
    <span class="accordion__icon" aria-hidden="true"></span>
  </summary>

  <div class="accordion__content">
    <p>Feature description goes here.</p>
  </div>
</details>
```

## Customization

The main visual properties are exposed as CSS custom properties in `:root`:

| Property | Purpose |
| --- | --- |
| `--mg-bg` | Page background |
| `--mg-surface` | Accordion background |
| `--mg-surface-hover` | Hover/open background |
| `--mg-border` | Default border |
| `--mg-border-active` | Active border |
| `--mg-text` | Primary text |
| `--mg-muted` | Secondary text |
| `--mg-accent` | Accent and glow color |
| `--mg-radius` | Accordion corner radius |
| `--mg-duration` | Transition duration |
| `--mg-ease` | Transition timing function |

Example:

```css
:root {
  --mg-accent: #8b5cf6;
  --mg-radius: 14px;
  --mg-duration: 280ms;
}
```

## Accessibility

The component uses semantic native disclosure controls instead of custom
JavaScript interactions. Keyboard users can operate each accordion item with
the standard `<summary>` control.

A visible `:focus-visible` state is provided for keyboard navigation.

When a user has enabled reduced motion at the operating-system level,
`prefers-reduced-motion: reduce` minimizes transitions and disables the
decorative glow effect.

## Performance

The component has no JavaScript runtime, images, web fonts, or third-party
dependencies. Decorative effects are limited to CSS properties and are
disabled under reduced-motion preferences.

## Browser Support

The component relies on modern CSS features and native `<details>/<summary>`
disclosure behavior supported by current evergreen browsers.

## License

This example is intended as a contribution to the EaseMotion CSS project and
should follow the repository's project license and contribution guidelines.
