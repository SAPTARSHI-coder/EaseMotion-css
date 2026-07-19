# Notification Badge with Pulse

A small badge (dot or counter) that sits on the corner of an icon or button to indicate unread notifications, messages, or alerts. The badge has a continuous soft pulsing animation — a ring that expands and fades outward — to draw attention without being distracting.

## Why this is useful for EaseMotion CSS

Notification badges are everywhere (nav bars, app icons, chat/message indicators), but the framework currently has no dedicated badge component. The pulse animation is simple but highly effective at drawing the eye, making it a great lightweight showcase of the animation-first philosophy — pure CSS, zero dependencies, just a positioned pseudo-element with a scaling/fading keyframe animation.

## Files

- `demo.html` — standalone demo page with 3 usage variants (counter, dot-only, themed color)
- `style.css` — the component styles
- `README.md` — this file

## Usage

```html
<button class="icon-btn" aria-label="Notifications, 3 unread">
  🔔
  <span class="notif-badge" aria-hidden="true">3</span>
</button>
```

### Dot-only variant (no count)

```html
<span class="notif-badge notif-dot" aria-hidden="true"></span>
```

### Custom color

Use the `.notif-blue` class (or add your own modifier class) to override `--notif-color` for a themed badge — no need to touch the keyframe:

```html
<span class="notif-badge notif-blue" aria-hidden="true">12</span>
```

```css
.notif-blue {
  --notif-color: #1677ff;
}
```

## CSS Variables

| Variable | Default | Purpose |
|---|---|---|
| `--notif-color` | `#ff4d4f` | Badge and pulse ring color |
| `--pulse-duration` | `1.6s` | Duration of one pulse cycle |
| `--pulse-easing` | `ease-out` | Timing function for the pulse animation |

All three are defined on `:root` and can be overridden globally or per-instance (like `.notif-blue` does with `--notif-color`).

## Notes / fixes made from the original snippet

- **Fixed a stacking bug**: `.notif-badge::before` used `z-index: -1` but the parent `.notif-badge` didn't establish its own stacking context, which caused the pulse ring to render behind the button's background instead of behind just the badge. Added `z-index: 1` to `.notif-badge` to fix this.
- **Introduced CSS variables** (`--notif-color`, `--pulse-duration`, `--pulse-easing`) on `:root` so color, speed, and easing can all be customized without touching the keyframe.
- **Replaced inline styles with classes** (`.notif-dot`, `.notif-blue`) — no `style="..."` attributes anywhere in the demo markup.
- **Moved all demo-page layout CSS** (`body`, `h1`, `.demo-description`, `.demo-row`) out of the HTML `<style>` block and into `style.css`.
- **Added `:hover` and `:focus-visible` states** on `.icon-btn` with a smooth `transition`, improving both visual feedback and keyboard accessibility.
- **Added `prefers-reduced-motion` support** — the pulse animation is disabled for users who have reduced motion enabled at the OS/browser level.
- **Accessibility**: the demo uses `aria-label` on the parent button to announce the unread count to screen readers, and marks the visual badge itself as `aria-hidden="true"` (since it's decorative once the label communicates the count).

## Checklist

- [x] This feature does not duplicate an existing EaseMotion CSS class
- [x] I understand my naming will be standardized by the maintainer
- [x] Code submitted inside `submissions/` only — not in `core/` or `components/`