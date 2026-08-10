# Pulse-Active Tooltip

A pure CSS tooltip that uses a continuous **pulse-active** indicator (a
radar-style pulsing dot) paired with a click/tap-to-toggle tooltip bubble.
Unlike a hover tooltip, this is designed for status/notification indicators
where the tooltip needs to be toggled open on click and stay open — useful
on touch devices where hover isn't reliable. Zero JavaScript.

## Features

- 🎯 Pure CSS — no JavaScript required (uses the checkbox-hack for toggle state)
- ⌨️ Keyboard accessible: focus the label and press Enter/Space to toggle,
  or Tab to it to preview via `:focus-visible`
- 🔴 Continuous pulsing indicator dot (radar/ping effect) independent of
  tooltip open state — draws attention to live/urgent items
- 🔄 Three placement variants demoed: top, bottom, right
- 🎛️ Customizable pulse duration, pulse scale, pulse color, and easing via
  CSS custom properties
- 📱 Fully responsive
- 🌀 Respects `prefers-reduced-motion` (disables both the dot pulse and
  bubble pulse animation)

## Usage

```html
<div class="pt-wrap">
  <input type="checkbox" class="pt-toggle" id="pt-1">
  <label class="pt-trigger" for="pt-1" tabindex="0" aria-describedby="ptt-1">
    <span class="pt-dot"></span>
    Notifications
  </label>
  <span class="pt-bubble pt-bubble--top" id="ptt-1" role="tooltip">
    3 unread notifications
  </span>
</div>
```

Each instance needs a unique `id`/`for` pair on the checkbox and label.
Swap `pt-bubble--top` for `pt-bubble--bottom` or `pt-bubble--right` to
change placement.

## Customization

| Variable | Default | Description |
|---|---|---|
| `--pt-duration` | `1.6s` | Duration of one pulse-ring cycle |
| `--pt-easing` | `ease-out` | Easing of the pulse ring |
| `--pt-pulse-scale` | `2.2` | How large the pulse ring grows before fading |
| `--pt-pulse-color` | `rgba(99,102,241,0.55)` | Color used in the bubble's echoing pulse |
| `--pt-dot-color` | `#6366f1` | Base color of the indicator dot |
| `--pt-bg` | `#1f2430` | Tooltip background color |
| `--pt-offset` | `10px` | Gap between trigger and tooltip |
| `--pt-fade-duration` | `0.25s` | Fade/scale duration when the tooltip opens/closes |

Example override for a single instance:

```css
.pt-trigger--custom {
  --pt-duration: 1s;
  --pt-pulse-scale: 2.8;
}
```

## Accessibility

- Uses a real `<input type="checkbox">` + `<label>` pair so it's operable
  by mouse, touch, and keyboard without JavaScript.
- The trigger label is focusable (`tabindex="0"`) and previews the tooltip
  on `:focus-visible`, in addition to the click-toggle behavior.
- Each trigger uses `aria-describedby` pointing to the tooltip's `id`.
- The tooltip element uses `role="tooltip"`.
- Continuous pulse animations are disabled under
  `prefers-reduced-motion: reduce`.

## Files

- `demo.html` — four toggle-activated examples (notification, warning,
  live status, and a custom-timing variant)
- `style.css` — component styles and animation logic
- `README.md` — this file