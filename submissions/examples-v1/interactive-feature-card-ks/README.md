# Interactive Feature Cards — Demo

## 1. What does this do?

Demonstrates four interactive card patterns suitable for landing pages, pricing tables, and product comparisons:

1. **Staggered Icon Reveal** — Hover slides the icon up, then each feature bullet fades in sequentially using CSS custom properties for stagger delays
2. **Animated Gradient Border** — A rotating conic gradient "spotlight" activates on hover, creating a premium card effect
3. **Compare Toggle Table** — Checkbox-driven plan comparison with a live-updating comparison panel
4. **Progressive Disclosure** — Click-to-expand cards using `grid-template-rows: 0fr → 1fr` for smooth height animation

## 2. How is it used?

```html
<!-- Pattern 1: Staggered Reveal -->
<article class="feature-card">
  <div class="card-icon-wrapper">
    <svg class="card-icon" ...><!-- icon --></svg>
  </div>
  <h3 class="card-title">Title</h3>
  <p class="card-desc">Description text</p>
  <ul class="card-features">
    <li class="card-feature" style="--i: 1">Feature one</li>
    <li class="card-feature" style="--i: 2">Feature two</li>
    <li class="card-feature" style="--i: 3">Feature three</li>
  </ul>
</article>
```

### Pattern 2: Gradient Border

```html
<article class="gradient-card">
  <div class="gradient-card-inner">
    <div class="card-badge">Popular</div>
    <h3>Pro Plan</h3>
    <button class="gradient-btn">Get Started</button>
  </div>
</article>
```

### Pattern 4: Progressive Disclosure

```html
<button class="disclosure-trigger" aria-expanded="false"
        aria-controls="content-id">
  <h3>Title</h3>
  <svg class="disclosure-chevron">...</svg>
</button>
<div class="disclosure-content" id="content-id"
     role="region" aria-hidden="true">
  <div class="disclosure-inner">...</div>
</div>
```

### Key CSS Patterns

| Pattern | Technique | Properties |
|---|---|---|
| Staggered bullets | CSS custom property `--i` for `transition-delay` | `calc(var(--i) * 0.08s)` |
| Gradient border | `::before` with `conic-gradient` rotating | `animation: rotate-gradient 4s linear infinite` |
| Compare toggle | `:checked + label` adjacent sibling | Hidden checkbox pattern |
| Disclosure height | `grid-template-rows: 0fr → 1fr` | No fixed height, works with any content |

## 3. Why is it useful?

Feature cards are one of the most widely used patterns in marketing and product pages, but EaseMotion CSS has no dedicated card-interaction demos beyond basic hover lift/shadow effects. This submission demonstrates:

- **Staggered micro-interactions** — Sequential reveals feel polished and guide the user's eye
- **Gradient spotlight borders** — A modern alternative to static borders that signals "premium" tiers
- **Compare toggles** — Standard UX pattern for plans/pricing that respects keyboard and screen reader interactions
- **Progressive disclosure** — Cards that reveal more content without page jumps, using `grid-template-rows` for smooth CSS-only height animation

All patterns include `prefers-reduced-motion` fallbacks, `:focus-visible` keyboard support, and semantic ARIA annotations (`aria-expanded`, `aria-controls`, `aria-live`).
