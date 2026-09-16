# Glassmorphic Notification Badge

A floating notification badge with a glassmorphism background, for
highlighting unread counts or status alerts on icons and buttons.
Includes an optional continuous pulse animation utility.

## Usage

1. Include `style.css`.
2. Add `ease-badge-notify` to a `<span>` positioned inside a
   `position: relative` container (an icon, button, etc.):

```html
<div style="position: relative;">
  🔔
  <span class="ease-badge-notify">3</span>
</div>
```

3. Add `ease-badge-pulse` alongside it for a continuous pulse animation:

```html
<span class="ease-badge-notify ease-badge-pulse">3</span>
```

4. Use color variants for different alert types:

```html
<span class="ease-badge-notify ease-badge-notify-success">12</span>
<span class="ease-badge-notify ease-badge-notify-danger"></span>
```

Leave the badge empty (no text content) to show a small dot instead of
a count.

## How it works

- `.ease-badge-notify` is absolutely positioned at the top-right corner
  of its nearest `position: relative` ancestor.
- The glassmorphism look comes from a semi-transparent background,
  `backdrop-filter: blur(6px)`, and a soft border/shadow.
- `.ease-badge-notify:empty` shrinks the badge into a small dot when no
  count is provided.
- `.ease-badge-pulse` applies a looping scale animation
  (`ease-badge-pulse-kf`) for continuous attention-drawing motion, and
  respects `prefers-reduced-motion`.

## Demo

Open `demo.html` to see the badge on icons (with and without pulse) and
on a button, across all three color variants.

## Customization

- Badge color: change the `background` / `box-shadow` values, or use
  the `-success` / `-danger` variants
- Blur amount: change `6px` in `backdrop-filter`
- Pulse speed: change `1.8s` in `.ease-badge-pulse`
- Pulse intensity: change `scale(1.18)` in the keyframes