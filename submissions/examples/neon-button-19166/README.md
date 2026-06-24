# Neon Glow Button

A collection of glassmorphism-style neon glow buttons with smooth hover transitions and optional throb animations.

## Features

- Glassmorphism base with subtle border and background
- Four neon color variants: indigo, pink, teal, amber
- Glow effect transitions from `0` to expanded `box-shadow` on hover
- Throb animation for pulsing glow attention
- Ghost variant with transparent background
- Reduced-motion support via `prefers-reduced-motion`
- Responsive layout — horizontal flex row wraps to vertical stack at 640px

## Variants

| Class              | Description                                |
| ------------------ | ------------------------------------------ |
| `.btn`             | Base button styles                         |
| `.btn-indigo`      | Indigo (#6366f1) neon glow                 |
| `.btn-pink`        | Pink (#ec4899) neon glow                   |
| `.btn-teal`        | Teal (#14b8a6) neon glow                   |
| `.btn-amber`       | Amber (#f59e0b) neon glow                  |
| `.btn-throb`       | Indigo base with pulsing `throb` animation |
| `.btn-throb-pink`  | Pink base with pulsing `throb` animation   |
| `.btn-ghost`       | Outline-only variant, no glow on hover     |

## Example Usage

```html
<button class="btn btn-indigo">Indigo</button>
<button class="btn btn-pink btn-throb-pink">Throb Pink</button>
<button class="btn btn-ghost">Ghost</button>
```

## Animation Behavior

- **Hover**: `box-shadow` expands from `0 0 0 0` to a multi-stop glow, background gains color tint, button scales up `1.03` and lifts `-1px`
- **Active**: Press-in effect with `scale(0.97)`
- **Throb**: Looping `@keyframes throb` pulses `box-shadow` between zero and `30px 8px` spread — starts from nothing and blooms outward
- **Reduced motion**: Throb animations and button transitions are disabled when `prefers-reduced-motion: reduce` is set

## Accessibility

- Semantic `<button>` elements used
- Visible focus states via default browser outline
- `prefers-reduced-motion` query disables all animations and transitions
- No auto-playing media or strobe effects beyond user-initiated hover

## Browser Compatibility

- Chrome 84+, Firefox 78+, Safari 14+ (CSS `:focus-visible`, `clamp()`, custom properties)
- `@media (prefers-reduced-motion)` supported in all modern browsers
- `background-clip: text` supported with `-webkit-` prefix

## Acceptance Criteria

- [x] Glow uses `0` to expanded technique (not small to big)
- [x] Glassmorphism base with `rgba(255,255,255,0.02)` background
- [x] Custom `throb` keyframe animation
- [x] Reduced-motion media query targeting only affected elements
- [x] Responsive stacking at 640px
- [x] 7 unique button variants including ghost

Fixes #19166
