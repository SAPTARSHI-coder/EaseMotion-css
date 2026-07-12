# Avatar Initials — Orange

A premium, dependency-free initials avatar built with pure HTML and CSS. Features a warm orange gradient, soft layered elevation, glassmorphism preview card, and a dark showcase section — all driven by a small CSS custom-property token system.

## Overview

This component renders a user's initials inside a circular avatar with an orange gradient background. It's designed as a drop-in replacement for image-based avatars in places where a photo isn't available — chat UIs, team rosters, comment threads, and dashboards. No JavaScript is used; every interaction (hover, focus) is handled entirely in CSS.

## Features

- **Circular avatar** with centered initials and modern, balanced typography (Inter, with system-font fallback)
- **Orange gradient background** (`--aio-gradient`) with a deeper, richer gradient swapped in on hover
- **Soft layered shadow** combining ambient + directional shadow plus an inner highlight for a tactile, "pressed glass" feel
- **Hover lift animation** — the avatar rises and scales slightly on hover
- **Glow on hover** — a soft orange bloom appears around the avatar using layered `box-shadow`
- **Smooth transitions** powered by a custom easing curve (`--aio-ease`) for a polished, non-linear feel
- **Focus-visible styles** — a distinct halo ring appears only for keyboard navigation, never on mouse click
- **Five size variants** — `xs`, `sm`, `md`, `lg`, `xl`
- **Online status badge** — online / away / offline indicator dots with a white border ring
- **Glassmorphism preview card** — a frosted, blurred card pairing the avatar with a name and status line
- **Dark modern showcase section** — a radial-gradient dark panel demonstrating the avatar in a team-roster context
- **Fully responsive** — sizes and spacing adapt gracefully down to small viewports
- **Reduced-motion support** — hover lift is disabled when the user prefers reduced motion

## Usage

Link `style.css`, then add the markup:

```html
<span class="aio-avatar aio-avatar--md" role="img" aria-label="Avatar for Sofia Lee" tabindex="0">
  SL
</span>
```

With an online status badge:

```html
<span class="aio-avatar aio-avatar--lg" role="img" aria-label="Avatar for Liam Carter" tabindex="0">
  LC
  <span class="aio-avatar__status" aria-hidden="true"></span>
  <span class="sr-only">Online</span>
</span>
```

Inside a glassmorphism card:

```html
<div class="aio-glass-card">
  <span class="aio-avatar aio-avatar--lg" role="img" aria-label="Avatar for Liam Carter" tabindex="0">LC</span>
  <div class="aio-glass-card__body">
    <span class="aio-glass-card__name">Liam Carter</span>
    <span class="aio-glass-card__meta">Product Designer · Active now</span>
  </div>
</div>
```

## Customization

All visual properties are exposed as CSS custom properties on `:root`, so the component can be retheme­d without touching the rule bodies:

| Variable | Purpose |
|---|---|
| `--aio-gradient` / `--aio-gradient-hover` | Base and hover background gradients |
| `--aio-orange-50` … `--aio-orange-700` | Full orange color ramp used across the component |
| `--aio-text-on-orange` | Initials text color |
| `--aio-shadow-color` | HSL shadow base color |
| `--aio-ring-color` | Focus-visible ring color |
| `--aio-status-online` / `--aio-status-border` | Status badge fill and border |
| `--aio-ease` / `--aio-duration` | Transition timing function and duration |
| `--aio-size-xs` … `--aio-size-xl` | Size scale, also exposed as `.aio-avatar--*` modifier classes |

To add a new size, define a custom width/height/font-size pair on an additional modifier class, following the same ratio (`font-size ≈ 0.34–0.4 × size`).

## Accessibility

- Each avatar uses `role="img"` with a descriptive `aria-label` (e.g. `"Avatar for Sofia Lee"`) so screen readers announce the represented person rather than reading raw initials.
- `tabindex="0"` makes avatars keyboard-focusable when they represent interactive/clickable identities; remove it for purely decorative use.
- `:focus-visible` provides a clear, high-contrast halo ring that only appears for keyboard users, keeping mouse interactions visually clean.
- Status badges are marked `aria-hidden="true"` and paired with a visually hidden (`.sr-only`) text label (`Online`, `Away`, `Offline`) so status is still conveyed to assistive technology.
- Color contrast between the initials text and the gradient background meets WCAG AA at all gradient stops.
- Respects `prefers-reduced-motion`: the hover lift transform is disabled for users who have requested reduced motion, while shadow/glow transitions remain.

## Browser Support

Built entirely on widely supported CSS: custom properties, `linear-gradient`, `backdrop-filter`, `:focus-visible`, and `prefers-reduced-motion`.

- Chrome / Edge 90+
- Firefox 88+
- Safari 15.4+
- iOS Safari 15.4+
- Android Chrome (latest)

`backdrop-filter` (used only by the glassmorphism card) gracefully degrades to a flat translucent background in browsers without support; the avatar itself is unaffected.

## Preview Description

The demo page walks through the component in five sections: a full size scale (XS–XL), three status-badge states (online/away/offline), a glassmorphism profile preview card, and a dark, radial-gradient team showcase panel with multiple status-bearing avatars side by side. Hover or tab through any avatar to see the lift, glow, and focus-ring states in action.