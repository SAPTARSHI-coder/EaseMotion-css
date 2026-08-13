# Bounce-Pulse Drawer

A responsive navigation drawer that combines native HTML disclosure behavior with EaseMotion CSS animation, button, layout, and hover utilities.

## What does it do?

The example opens an off-canvas navigation panel with a short bounce entrance and pulse feedback while preserving keyboard access and reduced-motion support.

## Why is it useful?

The component fits EaseMotion's animation-first philosophy by pairing readable framework utilities with a focused custom motion pattern. It remains zero-JavaScript, responsive, easy to inspect, and simple to customize.

## Accessibility

- Uses native `<details>` and `<summary>` keyboard behavior.
- Keeps the summary control visible while the drawer is open.
- Includes a skip link and visible `:focus-visible` indicators.
- Gives navigation landmarks explicit accessible labels.
- Marks decorative elements with `aria-hidden="true"`.
- Honors `prefers-reduced-motion: reduce`.
- Uses motion only as enhancement; content remains available without animation.
