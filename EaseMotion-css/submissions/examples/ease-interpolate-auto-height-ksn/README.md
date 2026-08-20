# interpolate-size: Auto-Height Transitions Demo (ksn)

## What does this do?

Demonstrates the `interpolate-size: allow-keywords` CSS property — enabling smooth CSS transitions between `height: 0` and `height: auto`. This solves the decades-old problem of animating to/from automatically-sized content without JavaScript or `max-height` hacks.

## How is it used?

```css
/* Apply to any element that needs auto-height transitions */
.ease-auto-height {
  overflow: hidden;
  interpolate-size: allow-keywords;
  height: 0;
  transition: height 350ms ease;
}

.ease-auto-height.is-open {
  height: auto;
}
```

The demo shows three real-world patterns:
1. **Accordion** — native `<details>` elements with smooth open/close
2. **Side-by-side comparison** — animated vs. snap behavior
3. **Expandable cards** — hover/focus reveals hidden content

## Why is it useful?

EaseMotion CSS aims to make CSS simple and expressive. The inability to transition `height: auto` has been one of CSS's most persistent pain points. `interpolate-size: allow-keywords` is a 2024 CSS feature that eliminates the `max-height` trick entirely — transitions are perfectly smooth, accurately timed, and work for any content height. This submission educates contributors on using this modern CSS feature while providing a drop-in utility class pattern that fits the EaseMotion philosophy.
