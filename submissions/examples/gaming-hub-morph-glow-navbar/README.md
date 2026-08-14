# Gaming Hub Morph-Glow Navbar

A pure CSS/HTML navigation bar for gaming hub / esports-style layouts. Each
nav link has an organic, blob-shaped glow that continuously morphs its
`border-radius` while hovered/active, the navbar carries slow ambient morphing
background blobs for atmosphere, and the CTA button has a shifting gradient
glow. **No JavaScript required.**

## Files

| File | Purpose |
|---|---|
| `demo.html` | Standalone showcase page wired up with EaseMotion (`em-*`) classes |
| `style.css` | Full component stylesheet |
| `README.md` | This file |

Open `demo.html` directly in a browser — no build step needed.

## Features

- **Morph-glow links** — a blurred gradient blob sits behind each link and
  continuously reshapes itself (via animated `border-radius`) while hovered,
  focused, or active — giving a liquid, organic glow instead of a static
  highlight.
- **Ambient background blobs** — two large, slow-morphing gradient blobs
  drift and reshape behind the navbar content for a living atmosphere,
  independent of user interaction.
- **Active link state** — the current-page link keeps its glow blob visible
  and morphing at rest, in a distinct color pairing from the hover state.
- **Animated gradient CTA** — the "Enter Arena" button's background blob
  cycles through a 3-color gradient sweep, speeding up on hover for extra
  emphasis.
- **Morphing brand orb** — a small logo orb continuously reshapes between
  organic blob shapes.
- **No-JS mobile menu** — a hidden checkbox + `<label>` pattern drives the
  hamburger toggle and animated dropdown panel, using only CSS.
- **Sticky header** — stays pinned to the top of the viewport on scroll.
- **Fully responsive** — ambient blobs shrink on tablets and are hidden
  entirely on mobile (where the dropdown menu takes over), keeping small
  viewports clean and performant.
- **Accessible motion** — every morph, pulse, and gradient-shift animation is
  neutralized under `prefers-reduced-motion: reduce`, collapsing blobs into
  simple static rounded highlights.
- **Keyboard-friendly** — `:focus-visible` triggers the same morph-glow
  effect as hover and adds a visible focus ring.

## Usage

Copy the markup structure from `demo.html` and `style.css` into your project.
Each link needs an extra `.em-mgnav__link-blob` span, which is the element
that actually morphs and glows behind the text:

```html
<header class="em-mgnav">
  <span class="em-mgnav__ambient em-mgnav__ambient--1"></span>
  <span class="em-mgnav__ambient em-mgnav__ambient--2"></span>

  <nav class="em-mgnav__inner">
    <a href="#" class="em-mgnav__brand">
      <span class="em-mgnav__brand-orb"></span>
      <span class="em-mgnav__brand-text">Vortex<span class="em-mgnav__brand-accent">Arena</span></span>
    </a>

    <input type="checkbox" id="em-mgnav-toggle" class="em-mgnav__toggle-input" />
    <label for="em-mgnav-toggle" class="em-mgnav__toggle">
      <span class="em-mgnav__toggle-bar"></span>
      <span class="em-mgnav__toggle-bar"></span>
      <span class="em-mgnav__toggle-bar"></span>
    </label>

    <ul class="em-mgnav__menu">
      <li class="em-mgnav__item">
        <a href="#" class="em-mgnav__link em-mgnav__link--active">
          <span class="em-mgnav__link-blob"></span>
          <span class="em-mgnav__link-text">Home</span>
        </a>
      </li>
      <!-- repeat .em-mgnav__item for each link -->
    </ul>

    <a href="#" class="em-mgnav__cta">
      <span class="em-mgnav__cta-blob"></span>
      <span class="em-mgnav__cta-text">Enter Arena</span>
    </a>
  </nav>
</header>
```

Add `em-mgnav__link--active` to whichever link represents the current page.
All decorative spans (`__link-blob`, `__cta-blob`, `__ambient`,
`__brand-orb`) are `aria-hidden="true"` in the demo since they carry no
content.

## CSS Custom Properties

All theming and motion tuning is centralized in `:root`.

| Property | Default | Description |
|---|---|---|
| `--em-mgnav-bg` | `#0a0a14` | Solid navbar background fallback |
| `--em-mgnav-bg-blur` | `rgba(10,10,20,0.82)` | Translucent background paired with the blur filter |
| `--em-mgnav-text` | `#e8e8f5` | Primary text color |
| `--em-mgnav-text-muted` | `#9494ad` | Muted/inactive link text color |
| `--em-mgnav-glow-a` | `#00e5ff` | Primary glow color (cyan) |
| `--em-mgnav-glow-b` | `#b537f2` | Secondary glow color (violet) |
| `--em-mgnav-glow-c` | `#ff2e9a` | Tertiary glow color (magenta), used in active/CTA gradients |
| `--em-mgnav-height` | `76px` | Fixed navbar height |
| `--em-mgnav-radius` | `999px` | Border radius for the pill-shaped CTA |
| `--em-mgnav-morph-duration` | `6s` | Cycle length of the link blob's shape-morph loop |
| `--em-mgnav-ambient-duration` | `14s` | Cycle length of the ambient background blob morph |
| `--em-mgnav-transition-fast` | `200ms ease` | Timing for color/background transitions |
| `--em-mgnav-transition-morph` | `450ms cubic-bezier(0.22,1,0.36,1)` | Timing for blob scale/opacity/shape transitions |

### Example: Retheme to a "toxic green" palette

```css
:root {
  --em-mgnav-glow-a: #39ff14;
  --em-mgnav-glow-b: #00c2a8;
  --em-mgnav-glow-c: #baff29;
}
```

### Example: Make the ambient blobs calmer/slower

```css
:root {
  --em-mgnav-ambient-duration: 24s;
}
```

## Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| `> 900px` | Full navbar with large ambient blobs, inline menu |
| `≤ 900px` | Ambient blobs shrink to reduce visual noise on tablets |
| `≤ 700px` | Hamburger toggle appears; menu collapses into an animated dropdown panel; ambient blobs are hidden for a cleaner, more performant mobile view |
| `≤ 420px` | CTA text shrinks slightly to fit narrow screens |

## Accessibility Notes

- All interactive elements are real `<a>` tags — no `<div onclick>` patterns.
- `:focus-visible` is used (not bare `:focus`) so mouse clicks don't leave a
  distracting ring, while keyboard tabbing still gets the full morph-glow
  treatment plus a visible ring.
- The hamburger toggle uses a native `<input type="checkbox">` + `<label>`
  pair, operable via keyboard and screen readers without JavaScript.
- Decorative blob/orb elements (`__link-blob`, `__cta-blob`, `__ambient`,
  `__brand-orb`) carry no text content and should be marked
  `aria-hidden="true"`, as shown in `demo.html`.
- `@media (prefers-reduced-motion: reduce)` disables all morphing,
  pulsing, and gradient-shifting animations, collapsing every glow blob into
  a simple static rounded-rectangle highlight so the navbar remains fully
  legible and calm.

## Browser Support

Uses standard CSS: flexbox, `backdrop-filter`, `background-clip: text`,
animated `border-radius`, and CSS custom properties. Works in all current
evergreen browsers (Chrome, Firefox, Safari, Edge). `backdrop-filter`
gracefully degrades to the solid `--em-mgnav-bg-blur` color in browsers
without support.