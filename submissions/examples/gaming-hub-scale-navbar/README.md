# Gaming Hub Scale-Hover Navbar

A pure CSS/HTML, responsive navigation bar built for gaming hub / esports-style
layouts. Nav links scale up and lift with a glowing shadow on hover or
keyboard focus, the brand mark and icons get subtle secondary motion, and the
CTA button has a soft looping pulse animation. Fully responsive with a
checkbox-driven hamburger menu — **no JavaScript required**.

## Files

| File | Purpose |
|---|---|
| `demo.html` | Standalone showcase page wired up with EaseMotion (`em-*`) classes |
| `style.css` | Full component stylesheet |
| `README.md` | This file |

Open `demo.html` directly in a browser — no build step needed.

## Features

- **Scale-hover links** — links scale up (`1.08x`), lift slightly, and gain a
  colored glow on `:hover` and `:focus-visible`.
- **Active link state** — a gradient background highlights the current page
  link.
- **Animated brand mark** — the logo icon rotates and scales on hover.
- **Pulsing CTA button** — a looping `box-shadow` keyframe animation draws
  attention to the "Play Now" button without being distracting.
- **No-JS mobile menu** — a hidden checkbox + `<label>` pattern drives the
  hamburger toggle and animated menu panel, using only CSS.
- **Sticky header** — stays pinned to the top of the viewport on scroll.
- **Fully responsive** — three breakpoints (900px, 700px, 420px) progressively
  collapse link labels, then switch to a stacked mobile menu, then shrink the
  CTA to an icon.
- **Accessible motion** — every transition and animation is neutralized under
  `prefers-reduced-motion: reduce`.
- **Keyboard-friendly** — `:focus-visible` states mirror hover states and add
  a visible focus ring so keyboard users get the same feedback as mouse
  users.

## Usage

Copy the markup structure from `demo.html` and `style.css` into your project.
The essential structure is:

```html
<header class="em-navbar">
  <nav class="em-navbar__inner">
    <a href="#" class="em-navbar__brand">...</a>

    <input type="checkbox" id="em-navbar-toggle" class="em-navbar__toggle-input" />
    <label for="em-navbar-toggle" class="em-navbar__toggle">
      <span class="em-navbar__toggle-bar"></span>
      <span class="em-navbar__toggle-bar"></span>
      <span class="em-navbar__toggle-bar"></span>
    </label>

    <ul class="em-navbar__menu">
      <li class="em-navbar__item">
        <a href="#" class="em-navbar__link em-navbar__link--active">
          <span class="em-navbar__link-icon">🏠</span>
          <span class="em-navbar__link-text">Home</span>
        </a>
      </li>
      <!-- repeat .em-navbar__item for each link -->
    </ul>

    <a href="#" class="em-navbar__cta"><span>Play Now</span></a>
  </nav>
</header>
```

Add `em-navbar__link--active` to whichever link represents the current page.

## CSS Custom Properties

All theming and motion tuning is centralized in `:root` so you can restyle
the navbar without touching selectors.

| Property | Default | Description |
|---|---|---|
| `--em-nav-bg` | `#0d0d17` | Base navbar background (used for solid fallbacks) |
| `--em-nav-bg-blur` | `rgba(13,13,23,0.85)` | Translucent background paired with the blur filter |
| `--em-nav-accent` | `#7f5af0` | Primary accent (active link gradient start, CTA, focus ring) |
| `--em-nav-accent-2` | `#2cb67d` | Secondary accent (active link gradient end, CTA hover) |
| `--em-nav-text` | `#e6e6f0` | Primary text color |
| `--em-nav-text-muted` | `#9a9ab0` | Muted/inactive link text color |
| `--em-nav-active-glow` | `rgba(127,90,240,0.55)` | Glow color used in hover/active box-shadows |
| `--em-nav-height` | `72px` | Fixed navbar height |
| `--em-nav-radius` | `12px` | Border radius on nav links |
| `--em-nav-gap` | `0.5rem` | Spacing between nav items |
| `--em-nav-transition-fast` | `180ms cubic-bezier(0.4,0,0.2,1)` | Timing for color/background transitions |
| `--em-nav-transition-base` | `280ms cubic-bezier(0.34,1.56,0.64,1)` | Timing for the springy scale/transform transitions |
| `--em-nav-scale-hover` | `1.08` | Scale factor applied to links on hover/focus |
| `--em-nav-scale-active` | `0.97` | Scale factor applied on `:active` (click) press |
| `--em-nav-lift` | `-3px` | Vertical translation applied alongside hover scale |

### Example: Retheme to a "cyberpunk red" palette

```css
:root {
  --em-nav-accent: #ff2e63;
  --em-nav-accent-2: #ffd23f;
  --em-nav-active-glow: rgba(255, 46, 99, 0.55);
}
```

## Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| `> 900px` | Full navbar: icons + text labels, inline menu |
| `≤ 900px` | Link text labels hide, icons remain, menu stays inline |
| `≤ 700px` | Hamburger toggle appears; menu collapses into an animated dropdown panel; text labels return in the stacked layout |
| `≤ 420px` | CTA button collapses to a small icon-only button |

## Accessibility Notes

- All interactive elements are real `<a>` tags — no `<div onclick>` patterns.
- `:focus-visible` is used (not bare `:focus`) so mouse clicks don't leave a
  distracting ring, while keyboard tabbing still gets a clear indicator.
- The hamburger toggle uses a native `<input type="checkbox">` + `<label>`
  pair, so it's operable via keyboard and screen readers without any
  JavaScript or `aria-expanded` state management.
- A `@media (prefers-reduced-motion: reduce)` block disables all transform
  and keyframe animations for users who have requested reduced motion at the
  OS level, while keeping the navbar fully functional.

## Browser Support

Uses standard CSS: flexbox, `backdrop-filter`, CSS custom properties,
`:focus-visible`, and the checkbox-hack for the mobile menu. Works in all
current evergreen browsers (Chrome, Firefox, Safari, Edge). `backdrop-filter`
gracefully degrades to the solid `--em-nav-bg-blur` color in browsers without
support.