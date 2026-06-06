# Modern Timeline Component

**Category:** Components — Narrative & History  
**Type:** Pure CSS (Zero JavaScript)  
**Folder:** `submissions/examples/ease-timeline-component/`

---

## 1. What does this do?

The **Modern Timeline Component** renders a responsive, animated vertical timeline. Items alternate left and right along a central spine, each anchored by a glowing colored dot marker. On page load, each card fades and slides upward in a staggered cascade. Hovering a card lifts it gently off the surface.

### Core visual capabilities:
- **Alternating card layout** — odd items appear left of the spine, even items right.
- **Connector nubs** — each card has a small rotated square arrow pointing inward toward its dot.
- **Animated dot rings** — a pulse ring expands outward from each dot on a staggered delay, creating an organic "heartbeat" feel.
- **Staggered entrance** — six items animate in with `0.08s` incremental delays so the timeline cascades top-to-bottom on load.
- **Hover card lift** — `translateY(-4px)` plus a brightened border glow on hover.
- **Per-item accent palette** — each timeline entry sets `--dot-color` / `--dot-rgb` inline, so colors stay self-contained with zero class duplication.

---

## 2. How is it used?

### Minimal HTML Structure

```html
<ol class="ease-timeline" aria-label="Milestone Timeline">

  <!-- ODD item — card appears on the LEFT -->
  <li class="ease-tl-item">
    <article class="ease-tl-card"
      style="--dot-color: #6366f1; --dot-rgb: 99, 102, 241;">
      <div class="ease-tl-date">January 2024</div>
      <h2 class="ease-tl-title-item">Product Launched</h2>
      <p class="ease-tl-desc">We shipped v1.0 to 500 beta testers.</p>
      <span class="ease-tl-chip"
        style="--dot-color: #6366f1; --dot-rgb: 99, 102, 241;">Launch</span>
    </article>

    <div class="ease-tl-dot" aria-hidden="true">
      <div class="ease-tl-dot__inner"
        style="--dot-color: #6366f1; --dot-glow: rgba(99,102,241,0.3); --dot-delay: 0s;">
        🚀
      </div>
    </div>

    <div class="ease-tl-blank"></div>
  </li>

  <!-- EVEN item — card appears on the RIGHT -->
  <li class="ease-tl-item">
    <div class="ease-tl-blank"></div>

    <div class="ease-tl-dot" aria-hidden="true">
      <div class="ease-tl-dot__inner"
        style="--dot-color: #10b981; --dot-glow: rgba(16,185,129,0.3); --dot-delay: 0.5s;">
        💰
      </div>
    </div>

    <article class="ease-tl-card"
      style="--dot-color: #10b981; --dot-rgb: 16, 185, 129;">
      <div class="ease-tl-date">June 2024</div>
      <h2 class="ease-tl-title-item">Series A Closed</h2>
      <p class="ease-tl-desc">Raised $10M to scale engineering.</p>
      <span class="ease-tl-chip"
        style="--dot-color: #10b981; --dot-rgb: 16, 185, 129;">Fundraising</span>
    </article>
  </li>

</ol>
```

### Key class reference

| Class | Role |
|---|---|
| `.ease-timeline` | Outer `<ol>` — draws the center spine with `::before` |
| `.ease-tl-item` | One `<li>` row — 3-column grid for left / dot / right |
| `.ease-tl-card` | The visible card — hover effect, connector nub |
| `.ease-tl-dot` | Center column wrapper |
| `.ease-tl-dot__inner` | Colored circle marker with pulse ring |
| `.ease-tl-blank` | Empty spacer column on the opposite side from the card |
| `.ease-tl-date` | Accent-colored date string |
| `.ease-tl-title-item` | Card heading |
| `.ease-tl-desc` | Body paragraph |
| `.ease-tl-chip` | Category tag badge |

---

## 3. Why is it useful?

Timeline components appear across nearly every product website, SaaS onboarding portal, and engineering changelog. This implementation solves common pain points:

1. **Zero JavaScript** — No intersection-observer-based reveal scripts, no scroll listeners, no positional JS. The cascade uses CSS `animation-delay` on `nth-child` selectors, executing synchronously at parse time.

2. **GPU-composited 60 FPS** — All animations use `transform` and `opacity` exclusively, keeping rendering in the compositor thread with no layout thrashing.

3. **Self-contained per-item theming** — Inline CSS custom properties (`--dot-color`, `--dot-rgb`, `--dot-glow`) let each timeline entry carry its own accent color without modifier classes or specificity battles. Swap colors by changing three inline values.

4. **Responsive by default** — Below `720px` the layout collapses to a clean single-column stack with the spine shifted to the far left. No extra HTML required.

5. **Accessibility** — Respects `prefers-reduced-motion` by disabling all animations and transitions; decorative dots and nubs carry `aria-hidden="true"`; the outer list uses `aria-label`; `<article>` and semantic heading hierarchy are preserved.
