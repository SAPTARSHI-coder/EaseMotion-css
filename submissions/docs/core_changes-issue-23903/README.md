# ease-alert

A CSS-only notification banner component with color variants, styles, sizes, dismiss button, icon support, accent borders, and animated transitions.

## What

Alert/notification banner built with flexbox layout, CSS custom properties, and semantic class variants. No JavaScript required for styling or animation.

## How

1. Include `style.css`.
2. Use `<div class="ease-alert ease-alert--{variant}">` with optional icon, title, message, and close button.
3. Add modifier classes for style, size, dismiss, animation, and accent border.

## Why

Provides a lightweight, reusable, accessible (focus-visible close button, role="alert" ready) alert banner system without JavaScript dependencies.

## Variants

### Colors

| Class                 | Context          |
| --------------------- | ---------------- |
| `ease-alert--info`    | Blue info        |
| `ease-alert--success` | Green success    |
| `ease-alert--warning` | Amber warning    |
| `ease-alert--danger`  | Red error/danger |
| `ease-alert--neutral` | Gray neutral     |
| `ease-alert--accent`  | Purple accent    |

### Styles

| Class                  | Description                        |
| ---------------------- | ---------------------------------- |
| _(default)_            | Filled background + border         |
| `ease-alert--outline`  | Transparent background, 2px border |
| `ease-alert--subtle`   | No border, lighter background      |
| `ease-alert--elevated` | Box shadow lift                    |

### Accent Borders

| Class                       | Description            |
| --------------------------- | ---------------------- |
| `ease-alert--bordered-left` | 4px left accent border |
| `ease-alert--bordered-top`  | 4px top accent border  |

### Sizes

| Class            | Description          |
| ---------------- | -------------------- |
| `ease-alert--sm` | Small padding + font |
| _(default)_      | Medium               |
| `ease-alert--lg` | Large padding + font |

### Modifiers

| Class                       | Description                         |
| --------------------------- | ----------------------------------- |
| `ease-alert--dismissible`   | Adds right padding for close button |
| `ease-alert--no-icon`       | Hides icon slot                     |
| `ease-alert--centered`      | Centers text and stacks vertically  |
| `ease-alert--animated`      | Slide-in animation on mount         |
| `ease-alert--sticky`        | Sticky positioning at top           |
| `ease-alert--full`          | Full width (block)                  |
| `ease-alert--inline`        | Inline-flex display                 |
| `ease-alert--with-progress` | Auto-dismiss progress bar (5s)      |

### Roundedness

| Class                      | Description |
| -------------------------- | ----------- |
| `ease-alert--rounded-none` | Square      |
| `ease-alert--rounded-sm`   | 0.25rem     |
| _(default)_                | 0.5rem      |
| `ease-alert--rounded-lg`   | 0.75rem     |
| `ease-alert--rounded-xl`   | 1rem        |
| `ease-alert--rounded-full` | 9999px      |

## Sub-components

- `.ease-alert__icon` — Icon container
- `.ease-alert__content` — Title + message wrapper
- `.ease-alert__title` — Optional bold title
- `.ease-alert__message` — Alert body text
- `.ease-alert__close` — Dismiss button (requires JavaScript to remove)
- `.ease-alert__action` — Action link/button
- `.ease-alert__progress` — Auto-dismiss progress indicator

## Accessibility

- Close button has `:focus-visible` outline.
- Use `role="alert"` or `role="status"` on the alert element.
- Close button should have `aria-label`.
