# Accordion Expand/Collapse Max-Height Utilities

SCSS utility module for smooth accordion expand/collapse transitions using `max-height`.

## Files

- `_accordion-expand-collapse-max-height-utilities.scss`

## Mixins

### `accordion-panel($max-height-open, $duration, $easing, $overflow)`

Generates base accordion panel styles. Collapsed by default; expands when `.is-open`, `[open]`, or `.ease-accordion-open` is present.

| Parameter | Default | Description |
|-----------|---------|-------------|
| `$max-height-open` | `20rem` | Target max-height when expanded |
| `$duration` | `var(--ease-speed-medium, 0.3s)` | Transition duration |
| `$easing` | `var(--ease-ease, cubic-bezier(0.4, 0, 0.2, 1))` | Timing function |
| `$overflow` | `hidden` | Overflow when collapsed |

**SCSS:**
```scss
@use 'accordion-expand-collapse-max-height-utilities' as accordion;

.my-panel {
  @include accordion.accordion-panel($max-height-open: 30rem);
}