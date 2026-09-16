# Floating Search Bar — Glassmorphism

A frosted-glass search bar that appears to float above the page, lifting
and brightening on focus while a glass results panel expands beneath it.
Pure CSS/HTML, entirely state-driven by `:focus-within` — no JavaScript.

## ✨ Features

- **Pure CSS / HTML** — no JS, no dependencies
- **True glassmorphism** — `backdrop-filter: blur() saturate()` over a
  colorful gradient backdrop, with translucent fill and a soft inset
  highlight border
- **Floating focus state** — the bar lifts (`translateY`), brightens, and
  gains a deeper shadow on focus, reinforcing the "floating" metaphor
- **Expanding results panel** — a connected glass panel beneath the bar
  smoothly expands (`max-height` + `opacity` + `transform`) when the
  component receives focus, and collapses just as smoothly on blur
- **EaseMotion design tokens** — colors, radii, blur amount, and motion
  timing all exposed as CSS custom properties, with a dark-mode palette
- **Cross-browser normalized** — native search-input chrome
  (`::-webkit-search-cancel-button` etc.) is neutralized for visual
  consistency
- **Accessible** — visible focus rings, visually-hidden label, listbox
  semantics on the results, and full `prefers-reduced-motion` support
- **Fully responsive** — scales from mobile to desktop widths

## 📁 Files

| File | Purpose |
|---|---|
| `demo.html` | Showcase page: floating bar + expandable results panel over a gradient backdrop |
| `style.css` | All styling, tokens, glass effect, and expand/lift animation logic |
| `README.md` | This file |

## 🚀 Usage

1. Include `style.css` in your page `<head>`.
2. Add a backdrop the glass bar can float above (any gradient, image, or
   photo works — glassmorphism needs visual content behind it to blur):

```html
<div class="em-backdrop" aria-hidden="true"></div>
```

3. Add the search form + results panel markup:

```html
<form class="em-float-search" role="search" action="/search" method="get">

  <div class="em-float-search-bar">
    <svg class="em-search-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" stroke-width="2"/>
      <line x1="16.5" y1="16.5" x2="21" y2="21" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    </svg>

    <label for="search-input" class="em-visually-hidden">Search</label>
    <input
      type="search"
      id="search-input"
      name="q"
      class="em-float-input"
      placeholder="Search…"
      autocomplete="off"
      aria-controls="search-results">

    <button type="submit" class="em-float-submit">
      <span class="em-visually-hidden">Search</span>
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
  </div>

  <div class="em-float-results" id="search-results" role="listbox" aria-label="Suggested results">
    <a href="/result-1" class="em-result-item" role="option">
      <span class="em-result-icon" aria-hidden="true">◆</span>
      <span>
        <span class="em-result-title">Result title</span>
        <span class="em-result-sub">Result category</span>
      </span>
    </a>
    <!-- repeat .em-result-item as needed -->
  </div>

</form>
```

The results panel expands automatically whenever any element inside
`.em-float-search` has focus (the input, or a result link once you tab
into the panel) — no toggle class or JS required.

## 🎛️ CSS Custom Properties (EaseMotion tokens)

```css
:root {
  /* Base tokens */
  --em-bg-1: #2a1f5c;             /* backdrop gradient stop 1 */
  --em-bg-2: #1a2a5c;             /* backdrop gradient stop 2 */
  --em-bg-3: #3a1f4f;             /* backdrop gradient stop 3 */

  --em-text: #f4f4fb;             /* primary text color */
  --em-text-dim: rgba(244,244,251,0.68); /* muted text / icon color */

  --em-glass-bg: rgba(255,255,255,0.10);       /* glass fill, idle */
  --em-glass-bg-focus: rgba(255,255,255,0.16); /* glass fill, focused */
  --em-glass-border: rgba(255,255,255,0.28);   /* glass border, idle */
  --em-glass-border-focus: rgba(255,255,255,0.5); /* glass border, focused */
  --em-glass-blur: 18px;                        /* backdrop blur amount */

  --em-accent-1: #7c5cff;         /* gradient accent 1 */
  --em-accent-2: #22d3ee;         /* gradient accent 2 */
  --em-accent-3: #ff8fd6;         /* gradient accent 3 */

  --em-radius-lg: 20px;           /* results panel corner radius */
  --em-radius-pill: 999px;        /* search bar pill radius */

  /* Motion tokens */
  --em-dur-fast: 0.18s;           /* icon/button micro-interactions */
  --em-dur-base: 0.4s;            /* bar lift/brighten transition */
  --em-dur-panel: 0.45s;          /* results panel expand/collapse */
  --em-ease: cubic-bezier(0.4, 0, 0.2, 1);         /* standard easing */
  --em-ease-panel: cubic-bezier(0.16, 1, 0.3, 1);  /* panel expand easing (slight overshoot feel) */
}
```

Dark mode automatically deepens the backdrop and dims the glass tokens
inside a `prefers-color-scheme: dark` block — no separate dark-mode class
needed. Override any of these on `:root` (or a scoped parent) to re-theme
the whole component.

## 🧩 Key Classes

| Class | Purpose |
|---|---|
| `.em-backdrop` | Full-page gradient background the glass bar floats above |
| `.em-float-search` | Outer form wrapper; `:focus-within` state root |
| `.em-float-search-bar` | The visible glass pill containing icon + input + submit |
| `.em-float-input` | The `<input type="search">` |
| `.em-float-submit` | Circular submit button, gradient-fills on focus |
| `.em-float-results` | Glass results panel; collapsed by default, expands on focus-within |
| `.em-result-item` | Individual result link/row inside the panel |

## ♿ Accessibility Notes

- The form carries `role="search"`; the results panel uses
  `role="listbox"` with each entry as `role="option"`, giving assistive
  tech a clear structural map of the suggestions.
- The input has an associated `<label>` (visually hidden via
  `.em-visually-hidden`, not `display: none`, so it's still announced).
- `aria-controls` links the input to the results panel by ID.
  **Note:** because this is a zero-JS component, the panel's expanded
  state cannot be reflected with a live `aria-expanded` attribute (that
  requires script to toggle). The panel is still fully reachable and
  operable via `:focus-within` — tabbing from the input directly into a
  result keeps it open — but if your project can add a few lines of
  progressive-enhancement JS, toggling `aria-expanded` on focus/blur is a
  worthwhile accessibility upgrade beyond this pure-CSS baseline.
- Every interactive element (input, submit button, result links) has a
  visible `:focus-visible` outline independent of the glass styling.
- Under `prefers-reduced-motion: reduce`, all `transform`-based motion
  (bar lift, button scale) is removed; the results panel still uses a
  `max-height`/`opacity` transition to reveal/hide content but drops its
  `translateY` easing, keeping the state change immediate and legible.

## 📱 Responsive Behavior

- The component is `max-width`-constrained but fluid, filling `100%` of
  its container under `640px`.
- Padding, font size, and button size scale down further under `380px`;
  the results panel's `max-height` cap is raised slightly on very small
  screens so more suggestions remain visible without clipping.

## 🌐 Browser Support

Relies on standard, widely-supported CSS: `:focus-within`, CSS custom
properties, `backdrop-filter` (with `-webkit-` fallback for Safari),
`radial-gradient`/`linear-gradient`, and `prefers-reduced-motion`. Works
in all modern evergreen browsers (Chrome, Edge, Firefox, Safari).