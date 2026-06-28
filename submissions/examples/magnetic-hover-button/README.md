# Magnetic Hover Button

A premium CSS-only button component that simulates a magnetic pull interaction through smooth `translate`, `scale`, and `box-shadow` choreography. No JavaScript required.

Designed to feel at home in modern SaaS interfaces inspired by Vercel, Linear, Framer, and Stripe.

---

## Features

- **CSS-only** — zero JavaScript, zero dependencies
- **4 variants** — Primary, Gradient, Outline, Dark
- **3 size modifiers** — Small, Default, Large
- **Loading state** — animated spinner via `::after` pseudo-element
- **Disabled state** — opacity, `not-allowed` cursor, pointer-events off
- **Icon slot** — `.btn-icon` with a subtle translate on hover
- **Shimmer sweep** — `::before` pseudo-element for a light-catch effect
- **CSS custom properties** — every token is overridable
- **`prefers-reduced-motion`** — transforms removed; only colour transitions remain
- **`:focus-visible`** — accessible keyboard ring per variant
- **Responsive** — spacing adjusts below 480 px
- **GPU-accelerated** — `will-change: transform, box-shadow` on `.btn-magnetic`

---

## Installation

Copy `style.css` into your project and link it in your HTML:

```html
<link rel="stylesheet" href="path/to/magnetic-hover-button/style.css" />
```

No build step. No preprocessor. Works in every modern browser.

---

## HTML Usage

### Primary

```html
<button type="button" class="btn-magnetic btn-primary">
  Get Started
</button>
```

### Gradient

```html
<button type="button" class="btn-magnetic btn-gradient">
  Start Free Trial
</button>
```

### Outline

```html
<button type="button" class="btn-magnetic btn-outline">
  Learn More
</button>
```

### Dark

```html
<button type="button" class="btn-magnetic btn-dark">
  Settings
</button>
```

### With an icon

```html
<button type="button" class="btn-magnetic btn-primary">
  Deploy Now
  <span class="btn-icon" aria-hidden="true">
    <!-- any inline SVG -->
  </span>
</button>
```

### As an anchor

```html
<a href="/pricing" class="btn-magnetic btn-gradient">
  View Pricing
</a>
```

### Disabled

```html
<button type="button" class="btn-magnetic btn-primary" disabled>
  Unavailable
</button>
```

### Loading

```html
<button type="button" class="btn-magnetic btn-primary btn-loading" aria-busy="true">
  Saving
</button>
```

---

## CSS Classes

| Class | Role |
|---|---|
| `.btn-magnetic` | **Required base class.** Applies layout, reset, transition, and hover behaviour. |
| `.btn-primary` | Solid indigo fill — primary CTA. |
| `.btn-gradient` | Animated indigo-to-violet gradient — highest emphasis. |
| `.btn-outline` | Transparent background, coloured border — secondary action. |
| `.btn-dark` | Frosted dark surface — tertiary/neutral action. |
| `.btn-sm` | Small size modifier (`9px 22px` padding). |
| `.btn-lg` | Large size modifier (`15px 38px` padding). |
| `.btn-icon` | Icon wrapper — receives a `translateX(2px)` nudge on hover. |
| `.btn-loading` | Shows a CSS spinner; sets `cursor: wait` and blocks interaction. |

---

## Hover Choreography

The magnetic illusion is achieved through three layered transforms on `:hover`:

```css
transform: translateY(-4px) scale(1.04) rotate(0.8deg);
```

Combined with an expanding `box-shadow` glow and a shimmer sweep via `background-position`, this creates the perception of the button responding to cursor proximity — all without a single line of JavaScript.

On `:active`, the button compresses back:

```css
transform: translateY(-1px) scale(0.97) rotate(0deg);
```

---

## Customization

Override any CSS custom property on a parent element or the component itself:

```css
/* Example: teal palette override */
.my-section {
  --em-color-primary:      #14b8a6;
  --em-color-primary-dark: #0d9488;
  --em-glow-primary:       rgba(20, 184, 166, 0.50);
}
```

### Available tokens

| Token | Default | Description |
|---|---|---|
| `--em-color-primary` | `#6366f1` | Main accent colour |
| `--em-color-primary-dark` | `#4f46e5` | Hover/active accent |
| `--em-color-primary-light` | `#818cf8` | Focus ring, text on outlines |
| `--em-gradient-primary` | `indigo → violet` | Gradient variant fill |
| `--em-glow-primary` | `rgba(99,102,241,.5)` | Shadow glow colour |
| `--em-duration-base` | `220ms` | Primary transition speed |
| `--em-ease-bounce` | `cubic-bezier(...)` | Hover easing |
| `--em-radius-pill` | `9999px` | Border radius |
| `--em-font-sans` | System font stack | Button typography |

---

## Browser Support

| Browser | Version |
|---|---|
| Chrome / Edge | 88+ |
| Firefox | 90+ |
| Safari | 14+ |
| iOS Safari | 14.5+ |
| Samsung Internet | 14+ |

Uses: CSS custom properties, `cubic-bezier`, `::before`/`::after`, `will-change`, `prefers-reduced-motion`, `:focus-visible`. No CSS Grid, no Flexbox Grid — `display: inline-flex` only.

---

## Accessibility

- **`:focus-visible`** — each variant has a distinct focus ring colour; keyboard-only users always see a clear indicator.
- **`disabled` attribute** — `pointer-events: none` and `cursor: not-allowed`; screen readers receive the native disabled state.
- **`aria-busy="true"`** — mark loading buttons so assistive technology can announce the busy state.
- **`aria-hidden="true"`** on icon wrappers — decorative SVGs are hidden from the accessibility tree.
- **`prefers-reduced-motion`** — all `transform` animations are removed; only `background`, `box-shadow`, and `color` transitions remain, at the same duration.
- **Colour contrast** — all variant foreground/background pairs exceed WCAG AA (4.5:1) at their default sizes.

---

## Why it fits EaseMotion CSS

EaseMotion CSS is built around the principle that motion should communicate intent, not decorate. The Magnetic Hover Button follows that ethos precisely:

- **Every animation has a purpose** — the lift communicates interactivity; the press communicates response; the shimmer communicates surface depth.
- **No JavaScript** — motion is a CSS concern; logic is a JavaScript concern. The two are separated.
- **Composable** — the base class `.btn-magnetic` carries all shared behaviour; variants only declare colour and shadow overrides. No specificity battles.
- **Token-driven** — every value the library consumer would want to change is a custom property; nothing is hard-coded in a deeply nested selector.
- **Reduced-motion first** — the fallback is designed, not an afterthought.

---

## Folder Structure

```text
submissions/examples/magnetic-hover-button/
├── demo.html        ← Polished demo page (self-contained)
├── style.css        ← Component stylesheet (import this)
└── README.md        ← This file
```

---

## License

MIT — free to use in personal and commercial projects.