# Fix: Sidebar Transition Tokens

## Problem

`components/sidebar.css` used hardcoded transition values on `.ease-sidebar-main`:

```css
.ease-sidebar-main {
  transition:
    transform 0.5s cubic-bezier(0.16, 1, 0.3, 1),
    border-radius 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}
```

The `prefers-reduced-motion` override in `easemotion.css` sets `--ease-speed-*` to `0.01ms` — but hardcoded values ignore this, meaning the sidebar still animated at full speed for users who have requested reduced motion.

## Solution

Replace hardcoded values with design token variables:

```css
.ease-sidebar-main {
  transition:
    transform var(--ease-speed-slow, 600ms) var(--ease-ease, cubic-bezier(0.4, 0, 0.2, 1)),
    border-radius var(--ease-speed-slow, 600ms) var(--ease-ease, cubic-bezier(0.4, 0, 0.2, 1));
}
```

## Usage

No class changes needed. To customise sidebar speed:

```css
.my-layout {
  --ease-speed-slow: 800ms;
}
```

## Why it fits EaseMotion CSS

EaseMotion CSS exposes speed and easing as design tokens so users can control animation globally or per-component. Hardcoded values break this contract and accessibility guarantees.

Fixes #10243
