# CSS Shimmer Sweep Accessible Accordion

**AccessAccord** is a professional, WCAG 2.1 AA-compliant, CSS-only accordion showcase built with EaseMotion CSS. It prioritises accessibility, readability, and semantic HTML above visual ornamentation — resembling a government or public-service documentation site — while adding a subtle shimmer sweep interaction for modern polish.

## Folder Structure

```
css-shimmer-sweep-accessible-accordion/
├── demo.html    — Full page showcase (open directly in browser)
├── style.css    — Accessible colour palette, layout, accordion styles, shimmer keyframes
└── README.md    — This file
```

## Features

- **CSS-only accordion** — `<details>` / `<summary>` semantic HTML, no JavaScript
- **WCAG 2.1 AA compliant** — all text contrast ≥ 4.5:1; UI components ≥ 3:1
- **Skip link** — first focusable element on the page bypasses navigation
- **Shimmer sweep** — a blue-tinted highlight slides across each card on hover and on open; implemented as a component-local `@keyframes` animation
- **Five CSS custom properties** — retheme colour, radius, timing, and focus ring without editing source
- **Reduced motion** — all animations suppressed via `prefers-reduced-motion: reduce`
- **Large touch targets** — all accordion headers have `min-height: 72px`
- **Visible focus rings** — 3px solid outline on every interactive element via `:focus-visible`

## Visual Design

This component deliberately **avoids neumorphic styling**. It uses:

- White card background (`#ffffff`) with a thin border (`1px solid #e2e8f0`)
- A blue left-border accent (`3px solid #1d4ed8`) on open items
- Blue-tinted header background (`#eff6ff`) when a panel is open
- A dark footer (`#111827`) for strong contrast
- Syntax-highlighted dark code blocks for documentation panels

## Sections

1. **Navigation** — sticky white nav with blue CTA; visible skip link
2. **Hero** — blue-tinted gradient background, live 3-item preview accordion
3. **Live Demo** — full six-item accordion with documentation content
4. **Accessibility Features** — six WCAG criterion cards
5. **Custom Variables** — reference table and three annotated code override examples
6. **Best Practices** — eight numbered guidelines for responsible accordion use
7. **Footer** — dark footer with Component, Standards, and More link columns

## Accordion Items (Live Demo)

| # | Panel | Content |
|---|---|---|
| 1 | Installation | CDN / HTML setup, feature checklist |
| 2 | Keyboard Navigation | Key reference table (Tab, Enter, Space, Shift+Tab) |
| 3 | Screen Reader Support | Tested AT list: NVDA, JAWS, VoiceOver, TalkBack |
| 4 | Focus Management | Focus style table + `--accordion-focus` override example |
| 5 | Custom Properties | Full variable table + government theme code snippet |
| 6 | Browser Compatibility | Browser grid + graceful degradation notes |

## Shimmer Sweep Animation

The shimmer uses a `::before` pseudo-element on `.accordion-item` containing a `linear-gradient` with a blue tint:

```css
background: linear-gradient(
  105deg,
  transparent,
  rgba(255, 255, 255, 0.4) 25%,
  var(--accordion-highlight) 50%,  /* rgba(219,234,254,0.82) */
  rgba(255, 255, 255, 0.4) 75%,
  transparent
);
```

It is triggered by `:hover::before` and `[open]::before`. Speed is controlled by `--accordion-duration`; highlight tint by `--accordion-highlight`. Fully suppressed under `prefers-reduced-motion`.

## CSS Custom Properties

| Property | Default | Controls |
|---|---|---|
| `--accordion-radius` | `10px` | Card corner radius |
| `--accordion-duration` | `0.36s` | Shimmer and transition speed |
| `--accordion-highlight` | `rgba(219,234,254,0.82)` | Shimmer highlight tint and opacity |
| `--accordion-focus` | `#2563eb` | Focus ring colour (all interactive elements) |
| `--accordion-border` | `#e2e8f0` | Default card border colour |

Override on any ancestor element:

```css
.my-section {
  --accordion-focus:     #0891b2;  /* teal */
  --accordion-highlight: rgba(204, 251, 241, 0.75);
  --accordion-radius:    6px;
}
```

## Accessibility Highlights

| Feature | Implementation | WCAG Criterion |
|---|---|---|
| Skip link | First focusable element, reveals on focus | SC 2.4.1 |
| Keyboard navigation | Browser-native `<details>` / `<summary>` | SC 2.1.1 |
| Focus indicators | 3px solid outline via `:focus-visible` | SC 2.4.7 / 2.4.11 |
| Screen reader state | Native "expanded/collapsed" via `<details>` | SC 4.1.2 |
| Decorative elements | `aria-hidden="true"` on chevron and icons | SC 1.1.1 |
| Colour contrast | All text ≥ 4.5:1 on white background | SC 1.4.3 |
| Touch target size | `min-height: 72px` on all headers | SC 2.5.5 / 2.5.8 |
| Reduced motion | `prefers-reduced-motion` disables animation | SC 2.3.3 |

## EaseMotion Classes Demonstrated

### Entrance (scroll-revealed via IntersectionObserver)
- `ease-fade-in` — nav, hero eyebrow badge
- `ease-slide-up` — section headings, feature cards, best-practice cards
- `ease-slide-in-right` — hero preview accordion panel
- `ease-zoom-in` — main live demo accordion container

### Hover / Interactive
- `ease-hover-lift` — nav CTA, accessibility feature cards, best-practice cards, footer social links
- `ease-hover-grow` — secondary CTA button
- `ease-hover-underline` — footer navigation links

### Delay Utilities
- `ease-delay-100` through `ease-delay-300` — stagger entrance on feature and best-practice grids

## Responsive Breakpoints

| Breakpoint | Layout |
|---|---|
| Desktop (>960px) | 2-column hero, 3-column feature grid, 2-column vars/best-practices |
| Tablet (640–960px) | Stacked hero, 2-column feature grid, single-column vars |
| Mobile (<640px) | Single-column everything, hidden nav links, stacked CTAs, 2-column browser grid |

## Differences from the Neumorphic Accordion

This component (`css-shimmer-sweep-accessible-accordion`) differs intentionally from the neumorphic version (`css-shimmer-sweep-accordion-neumorphic`):

| Aspect | Neumorphic | Accessible |
|---|---|---|
| Background | `#e0e5ec` soft gray | `#ffffff` white |
| Card depth | Dual box-shadow technique | Border + shadow |
| Open state | Inset shadow | Blue left border + tinted header |
| Shimmer tint | White highlight | Blue-tinted (`rgba(219,234,254,…)`) |
| Focus ring | `2px` accent colour | `3px` high-contrast blue |
| Touch target | 44px min-height | 72px min-height |
| Skip link | Not present | Yes — first focusable element |

## Usage

Open `demo.html` directly in any modern browser — no build step, no server required.

```bash
# From repo root
open submissions/examples/css-shimmer-sweep-accessible-accordion/demo.html
```

## Notes

- `@keyframes shimmer-sweep` and `@keyframes panel-open` are **component-local** — not EaseMotion utility classes
- No `ease-glass-card` is used — card styling uses a direct border and box-shadow approach
- Closes Issue [#33208](https://github.com/saptarshi-coder/easemotion-css/issues/33208)
