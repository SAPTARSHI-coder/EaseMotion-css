# CSS Shimmer Sweep Accordion — Neumorphic

**ShimmerAccord** is a premium CSS-only neumorphic accordion component showcase built with EaseMotion CSS. It features a smooth shimmer sweep interaction, five CSS custom properties for theming, full keyboard accessibility, and three colour themes — all without a single line of JavaScript.

## Folder Structure

```
css-shimmer-sweep-accordion-neumorphic/
├── demo.html    — Full page component showcase (open directly in browser)
├── style.css    — Neumorphic layout, component styles, shimmer keyframes, responsive rules
└── README.md    — This file
```

## Features

- **CSS-only accordion** — built on semantic `<details>` / `<summary>` elements; no JavaScript required
- **Shimmer sweep animation** — a soft highlight slides across each card on hover and on open, implemented as a component-local `@keyframes` animation (not a utility class)
- **Neumorphic design** — raised cards, inset content areas, and soft dual-shadow technique on a `#e0e5ec` base
- **Five CSS custom properties** — retheme the entire component with a single block override
- **Three colour themes** — Classic Gray (default), Lavender, Marine; each achieved with three variable overrides
- **EaseMotion integration** — page-level entrance and hover effects via EaseMotion utility classes

## Sections

1. **Navigation** — sticky neumorphic nav with section links
2. **Hero** — split layout with copy and a live three-item preview accordion (one panel open by default)
3. **Live Demo** — full six-item accordion with documentation-quality content panels
4. **Theme Variations** — three side-by-side themed accordions (Classic / Lavender / Marine)
5. **Customization** — CSS variable reference table and code snippet examples
6. **Accessibility** — six checklist cards covering keyboard, focus, screen reader, contrast, motion, and semantics
7. **Footer** — links to Platform, Technology, and More sections

## Accordion Items (Live Demo)

| # | Item | Content |
|---|---|---|
| 1 | Installation | CDN and npm setup, feature checklist |
| 2 | Getting Started | Minimal HTML structure, code snippet |
| 3 | Custom Properties | Full CSS variable table + override example |
| 4 | Accessibility | Keyboard / ARIA / focus / motion checklist |
| 5 | Animation Options | EaseMotion class reference + usage examples |
| 6 | Browser Support | Browser compatibility table with version notes |

## Shimmer Sweep Animation

The shimmer is a `::before` pseudo-element on each `.accordion-item` containing a skewed `linear-gradient` highlight. It is triggered by two CSS selectors:

```css
.accordion-item:hover::before    /* fires on hover */
.accordion-item[open]::before    /* fires when opened */
```

The `@keyframes shimmer-sweep` animation translates the element from `-130%` to `+210%` on the X axis with a skew. Speed and highlight color are controlled by `--accordion-duration` and `--accordion-highlight`.

When `prefers-reduced-motion: reduce` is active, all shimmer and panel animations are fully suppressed.

## CSS Custom Properties

| Property | Default | Purpose |
|---|---|---|
| `--accordion-radius` | `16px` | Card corner radius |
| `--accordion-duration` | `0.42s` | Shimmer and transition speed |
| `--accordion-easing` | `cubic-bezier(0.4,0,0.2,1)` | Animation timing function |
| `--accordion-shadow` | `var(--neu-raised)` | Card box-shadow preset |
| `--accordion-highlight` | `rgba(255,255,255,0.58)` | Shimmer highlight colour |

Override on any parent element:

```css
.my-wrapper {
  --accordion-radius:    24px;
  --accordion-duration:  0.6s;
  --accordion-highlight: rgba(255, 200, 80, 0.45);
}
```

## Accessibility

| Feature | Implementation |
|---|---|
| Keyboard navigation | Browser-native via `<details>` / `<summary>` — Tab + Enter/Space |
| Screen reader state | Native "expanded" / "collapsed" announcement |
| Focus indicators | `outline: 2px solid var(--accent)` via `:focus-visible` |
| Colour contrast | All text ≥ 4.5:1 on neumorphic background (WCAG 2.1 AA) |
| Reduced motion | `@media (prefers-reduced-motion)` disables all animation |
| Decorative elements | `aria-hidden="true"` on chevron and icon wrappers |

## EaseMotion Classes Demonstrated

### Entrance (scroll-revealed via IntersectionObserver)
- `ease-fade-in` — nav, hero eyebrow badge
- `ease-slide-up` — section headings, variation cards, accessibility cards
- `ease-slide-in-right` — hero preview accordion panel
- `ease-zoom-in` — main live demo accordion container

### Hover / Interactive
- `ease-hover-lift` — nav CTA, primary button, variation cards, accessibility cards, social links
- `ease-hover-grow` — secondary CTA button
- `ease-hover-underline` — footer navigation links

### Delay Utilities
- `ease-delay-100` through `ease-delay-400` — stagger entrance on grids

## Responsive Breakpoints

| Breakpoint | Layout |
|---|---|
| Desktop (>960px) | 2-column hero, 3-column variations grid, 2-column custom grid, 3-column a11y grid |
| Tablet (640–960px) | Stacked hero, single-column variations, 2-column a11y grid |
| Mobile (<640px) | Single-column everything, hidden nav links, stacked CTAs |

## Usage

Open `demo.html` directly in any modern browser — no build step, no server required.

```bash
# From repo root
open submissions/examples/css-shimmer-sweep-accordion-neumorphic/demo.html
```

## Notes

- The shimmer `@keyframes shimmer-sweep` and `@keyframes panel-open` are **component-local** animations, not EaseMotion utility classes — they exist only in this component's `style.css` as required by the issue specification
- `ease-glass-card` is not used in this component — neumorphic styling is applied directly via `box-shadow` on the light background
- Closes Issue [#33206](https://github.com/saptarshi-coder/easemotion-css/issues/33206)
