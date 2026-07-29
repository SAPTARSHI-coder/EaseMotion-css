# Gaming Hub Float-Drift Navbar

A pure CSS/HTML navigation bar for gaming hub and launcher layouts. The
navbar floats as a detached glass dock above the page, its icons idle in a
gentle asynchronous float, and its active-tab indicator drifts smoothly to
whichever tab is selected — entirely in CSS, no JavaScript.


## Files

| File | Purpose |
|---|---|
| `demo.html` | Standalone showcase page with a full navbar (brand, 5 tabs, actions) |
| `style.css` | All component styles, animations, and responsive rules |
| `README.md` | This document |

Open `demo.html` directly in a browser — there is no build step and no
external JavaScript dependency.

## How it works

**Floating dock.** The navbar is `position: fixed`, detached from the
viewport edge with margin, and rendered as a translucent, blurred glass
panel (`backdrop-filter: blur()`), so it reads as a HUD console hovering
over the page rather than a docked bar.

**Idle float.** Each nav icon runs its own `translateY` keyframe loop
(`em-float`), with a negative `animation-delay` staggered per item via
`:nth-of-type`, so the icons bob independently instead of in lockstep —
this is what gives the bar its "alive" feel at rest.

**Drifting active indicator, in pure CSS.** Tab selection is implemented
with the classic hidden-radio-input pattern (no JS): each tab is a
`<label>` bound to a visually-hidden `<input type="radio">`. The indicator
pill's horizontal position is driven by a CSS custom property, `--active`,
which is set per tab using the modern `:has()` selector:

```css
.em-navbar__nav:has(#nav-store:checked) { --active: 1; }
```

```css
.em-nav-indicator {
  transform: translateX(calc(var(--active, 0) * 100%));
  transition: transform var(--em-indicator-duration) var(--em-indicator-ease);
}
```

Because the indicator's own width equals one tab's width, `translateX(N *
100%)` lands it exactly on the Nth tab, and because `transform` is
animatable, the move glides rather than jumps. Browsers without `:has()`
support simply keep the indicator hidden (`@supports not selector(:has(a))`)
— the checked tab is still clearly marked by its text color, so navigation
never breaks, only the extra glide is skipped.

## HTML structure

```html
<nav class="em-navbar" aria-label="Primary">
  <div class="em-navbar__brand">...</div>

  <div class="em-navbar__nav" style="--em-tab-count:5">
    <input type="radio" name="em-nav" id="nav-home" class="em-nav-radio" checked>
    <label for="nav-home" class="em-nav-item">
      <span class="em-nav-item__icon" aria-hidden="true">🏠</span>
      <span class="em-nav-item__label">Home</span>
    </label>
    <!-- ...repeat per tab... -->
    <span class="em-nav-indicator" aria-hidden="true"></span>
  </div>

  <div class="em-navbar__actions">...</div>
</nav>
```

Set `--em-tab-count` on `.em-navbar__nav` to however many tabs you have —
it's used to size the indicator to exactly `1 / count` of the track width.
If you change the tab count, also add/remove the matching
`:has(#id:checked) { --active: N; }` rule for the new tab's index.

> **Real apps:** swap the `<label for>` / `<input>` pattern for your
> router's active-link mechanism (e.g. render the `checked` attribute or an
> `is-active` class server-side) — the indicator math works the same way
> either way, since it only depends on `--active` and `--em-tab-count`.

## CSS custom properties

| Property | Default | Description |
|---|---|---|
| `--em-abyss` | `#061412` | Page background base |
| `--em-abyss-deep` | `#030907` | Text color on bright accent surfaces (indicator, badge, avatar) |
| `--em-panel` | `rgba(14, 36, 32, 0.66)` | Navbar glass background |
| `--em-panel-border` | `rgba(255,255,255,0.09)` | Navbar hairline border |
| `--em-ink` | `#eafff5` | Primary text color |
| `--em-ink-dim` | `#7fa89c` | Inactive tab / secondary text color |
| `--em-drift-a` | `#33e6a6` | Primary accent — brand orb, indicator, focus rings |
| `--em-drift-b` | `#ffb84d` | Secondary accent — notification badge, avatar |
| `--em-radius` | `999px` | Corner radius used throughout (pill shapes) |
| `--em-navbar-height` | `62px` | Height of the navbar; also used to reserve page top padding |
| `--em-float-duration` | `3.6s` | Duration of one idle icon float cycle |
| `--em-float-amplitude` | `4px` | Vertical travel distance of the idle float |
| `--em-glow-duration` | `9s` | Loop time of the ambient border-glow drift |
| `--em-indicator-duration` | `0.5s` | How long the active indicator takes to glide |
| `--em-indicator-ease` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Overshoot easing for the indicator glide |
| `--em-font-display` | `'Orbitron', sans-serif` | Brand wordmark typeface |
| `--em-font-body` | `'Inter', sans-serif` | Nav labels, body text |
| `--em-font-mono` | `'JetBrains Mono', monospace` | Notification count / data readouts |

## Features

- **Pure CSS/HTML** — zero JavaScript, zero build tooling; tab switching
  uses the native radio-input pattern.
- **Smooth, performant animation** — every animated property is `transform`,
  `opacity`, or a masked gradient position; nothing triggers layout, so the
  float and drift stay smooth even with the `backdrop-filter` blur active.
- **Fully responsive** — the dock repositions from a centered top bar on
  desktop to a full-width bottom tab bar at `860px`, and drops text labels
  in favor of icon-only tabs at `560px` for comfortable thumb reach.
- **`prefers-reduced-motion` support** — the idle icon float, brand-orb
  pulse, notification-badge pulse, and ambient border glow are all disabled
  under reduced motion; the indicator glide is kept (it's a direct response
  to a click, not ambient motion) but its transition is shortened to be
  effectively instant.
- **Keyboard & screen-reader friendly** — tabs are real, labelled form
  controls reachable with `Tab`/arrow keys with a visible focus ring
  (`:focus-visible`); decorative icons and the indicator are `aria-hidden`.

## Customization examples

**Change how many tabs you have:**

```html
<div class="em-navbar__nav" style="--em-tab-count:4">
```
```css
.em-navbar__nav:has(#nav-new-tab:checked) { --active: 3; }
```

**Calmer, less bouncy indicator:**

```css
.em-navbar__nav { --em-indicator-ease: ease-out; --em-indicator-duration: 0.3s; }
```

**Recolor to a different brand accent:**

```css
:root {
  --em-drift-a: #4dd2ff;
  --em-drift-b: #ff5fae;
}
```

**Turn off the idle float entirely** (e.g. for a calmer admin-style hub)
while keeping the indicator glide:

```css
.em-nav-item__icon { animation: none; }
```