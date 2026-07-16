# ease-pulse-border

A CSS utility that creates a soft pulsing border animation using
`box-shadow`, without affecting the content, size, or layout of the
element it's applied to. Pure CSS, zero JavaScript.

## Why box-shadow?

`box-shadow` is used instead of animating `border` or `outline` because
it never participates in the box model — it doesn't reflow layout, resize
the element, or shift surrounding content, no matter how large the pulse
grows. That satisfies the core requirement: attention-grabbing motion with
zero impact on the content inside (or around) the element.

## Features

- ✅ Pure CSS — no JavaScript required
- ✅ Single reusable utility class: `ease-pulse-border`
- ✅ Works on any element: buttons, cards, inputs, banners, badges
- ✅ Does not affect content size, position, or surrounding layout
- ✅ Color, spread, duration, and easing exposed as CSS custom properties
- ✅ Built-in color variants: `success`, `warning`, `danger`
- ✅ Pauses on hover/focus so the animation doesn't compete with active
     interaction (easily removable if not desired)
- ✅ Respects `prefers-reduced-motion`
- ✅ No external dependencies

## Files

```
ease-pulse-border/
├── demo.html   # Standalone demo across buttons, cards, inputs, banners
├── style.css   # The utility class, variants, and demo page styles
└── README.md   # This file
```

## Usage

Include `style.css`, then add the `ease-pulse-border` class to any
element:

```html
<button class="ease-pulse-border">
  Get Started
</button>
```

It works identically on non-button elements:

```html
<div class="ease-pulse-border">
  <strong>New message</strong>
  <p>You have 1 unread notification.</p>
</div>

<input class="ease-pulse-border" type="email" placeholder="you@example.com" />
```

### Color variants

Pair `ease-pulse-border` with a modifier class to change the pulse color:

```html
<button class="ease-pulse-border ease-pulse-border--success">Saved</button>
<button class="ease-pulse-border ease-pulse-border--warning">Pending</button>
<button class="ease-pulse-border ease-pulse-border--danger">Action needed</button>
```

| Class                          | Use case                          |
|----------------------------------|--------------------------------------|
| `ease-pulse-border` (default)   | Primary CTAs, general attention cues |
| `ease-pulse-border--success`   | Confirmations, positive states       |
| `ease-pulse-border--warning`   | Cautions, pending states             |
| `ease-pulse-border--danger`    | Errors, urgent states                |

## Customization

All animation values are CSS custom properties, overridable globally on
`:root` or per-instance via inline `style`:

```html
<button
  class="ease-pulse-border"
  style="--epb-duration: 1s; --epb-spread: 14px; --epb-shadow-color: rgba(168, 85, 247, .3);"
>
  Faster + Wider Pulse
</button>
```

| Variable              | Default                     | Description                          |
|-------------------------|--------------------------------|------------------------------------------|
| `--epb-shadow-color`   | `rgba(0, 123, 255, 0.35)`     | Pulse color (include alpha for softness) |
| `--epb-spread`         | `8px`                        | Maximum spread radius of the pulse       |
| `--epb-duration`       | `1.8s`                       | Duration of one pulse cycle              |
| `--epb-easing`         | `ease-in-out`                | Animation easing curve                   |

## Accessibility

- The animation uses only `box-shadow`, so it never causes layout shift —
  content inside and around the element stays perfectly still.
- Pulsing pauses automatically on `:hover` and `:focus-visible`, so it
  doesn't distract while a user is actively interacting with the element.
- Under `prefers-reduced-motion: reduce`, the animation stops entirely and
  is replaced with a static soft shadow, preserving the visual cue without
  the motion.

## Browser Support

Tested and working on the latest versions of:

- Chrome
- Firefox
- Safari
- Edge

Uses standard CSS custom properties, `@keyframes`, and `box-shadow` — no
vendor prefixes required for modern browsers.

## Checklist

- [x] Pure CSS implementation
- [x] Does not affect content inside the element
- [x] Reusable across buttons, cards, inputs, and banners
- [x] Exposes timing/color/spread via CSS custom properties
- [x] Does not duplicate an existing EaseMotion CSS class
- [x] Submitted inside `submissions/` only