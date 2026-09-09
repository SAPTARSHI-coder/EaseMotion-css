# CSS Popover Animations

## What does this do?

Demonstrates smooth open/close animations for the Popover API using `@starting-style` and `transition-behavior: allow-discrete`. Three popover types (tooltip, dropdown menu, info card) each use a different animation strategy.

## How is it used?

```css
[popover] {
  overlay: auto;
  transition: opacity 0.25s, translate 0.25s, display 0.25s allow-discrete;
  transition-behavior: allow-discrete;
}

[popover]:popover-open {
  opacity: 1;
  translate: 0;
}

@starting-style {
  [popover]:popover-open {
    opacity: 0;
    translate: 0 8px;
  }
}
```

A `@supports (overlay: auto)` guard provides fallback for unsupported browsers, and `prefers-reduced-motion` disables all transitions.

## Why is it useful?

The Popover API brings native top-layer UI without z-index battles or focus-trap libraries. But without animation, popovers appear/disappear instantly — jarring for users. `@starting-style` solves the entry-animation problem that CSS transitions alone could never handle, enabling smooth, accessible animated popovers with zero JavaScript dependencies.
