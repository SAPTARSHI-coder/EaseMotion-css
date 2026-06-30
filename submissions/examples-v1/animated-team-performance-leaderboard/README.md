# Animated Team Performance Leaderboard

A premium, animation-first team leaderboard component built for the EaseMotion CSS library — designed to look like a native part of a modern SaaS analytics dashboard.

---

## 1. What does this do?

Displays a ranked team leaderboard with animated progress bars, glassmorphism cards, a floating trophy for the top performer, staggered entrance animations, and hover micro-interactions — all in pure HTML and CSS with zero JavaScript or external dependencies.

---

## 2. How is it used?

Link `style.css` in your page and drop in the markup below. Each `.leaderboard__card` is self-contained; add or remove cards freely.

```html
<section class="leaderboard">
  <!-- Champion card (#1) -->
  <article class="leaderboard__card leaderboard__card--champion">
    <div class="rank-ribbon rank-ribbon--gold"></div>
    <div class="champion-glow"></div>

    <div class="card__rank">
      <span class="rank-badge rank-badge--gold">#1</span>
      <span class="trophy">🏆</span>
    </div>

    <div class="card__avatar card__avatar--at">AT</div>

    <div class="card__identity">
      <span class="card__name">Aiko Tanaka</span>
      <span class="card__role">Lead Engineer</span>
    </div>

    <div class="card__metrics">
      <div class="card__score-row">
        <span class="card__score">98<small>%</small></span>
        <span class="card__trend card__trend--up">▲ 4.2%</span>
      </div>
      <div
        class="progress-bar"
        role="progressbar"
        aria-valuenow="98"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div
          class="progress-bar__fill progress-bar__fill--gold"
          style="--pct: 98%"
        ></div>
      </div>
    </div>

    <div class="card__badge badge badge--mvp">
      <span class="badge__dot"></span>MVP
    </div>
  </article>

  <!-- Regular card (#2–#N) -->
  <article class="leaderboard__card">
    <div class="rank-ribbon rank-ribbon--silver"></div>

    <div class="card__rank">
      <span class="rank-badge rank-badge--silver">#2</span>
    </div>

    <div class="card__avatar card__avatar--mo">MO</div>

    <div class="card__identity">
      <span class="card__name">Marcus Osei</span>
      <span class="card__role">Product Designer</span>
    </div>

    <div class="card__metrics">
      <div class="card__score-row">
        <span class="card__score">94<small>%</small></span>
        <span class="card__trend card__trend--up">▲ 2.1%</span>
      </div>
      <div
        class="progress-bar"
        role="progressbar"
        aria-valuenow="94"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div
          class="progress-bar__fill progress-bar__fill--silver"
          style="--pct: 94%"
        ></div>
      </div>
    </div>

    <div class="card__badge badge badge--top">
      <span class="badge__dot"></span>Top Rated
    </div>
  </article>
</section>
```

### Rank ribbon modifiers

| Class                 | Use                |
| --------------------- | ------------------ |
| `rank-ribbon--gold`   | #1 — golden accent |
| `rank-ribbon--silver` | #2 — silver accent |
| `rank-ribbon--bronze` | #3 — bronze accent |
| `rank-ribbon--indigo` | #4+ — brand indigo |

### Progress bar fill modifiers

| Class                        | Gradient                 |
| ---------------------------- | ------------------------ |
| `progress-bar__fill--gold`   | Gold → amber             |
| `progress-bar__fill--silver` | Steel blue → light slate |
| `progress-bar__fill--bronze` | Terracotta → peach       |
| `progress-bar__fill--indigo` | Indigo → violet          |

### Trend modifiers

| Class                  | Meaning       |
| ---------------------- | ------------- |
| `card__trend--up`      | Green, rising |
| `card__trend--down`    | Red, falling  |
| `card__trend--neutral` | Muted, flat   |

---

## 3. Why is it useful?

EaseMotion CSS is built on two principles: **animation-first** and **reusable**. This component embodies both.

**Animation-first:** Every visual layer is animated with intention. Cards stagger in on load using `card-enter` keyframes with individual `animation-delay` offsets, so the leaderboard "builds" itself rather than popping in. Progress bars animate from zero width using a `scaleX` transform, a pattern that can be lifted directly into any EaseMotion utility. The champion trophy runs a perpetual `trophy-float` loop, and badges enter with a spring-physics `badge-pop`. None of this requires JavaScript — it is declarative, CSS-only motion that degrades gracefully under `prefers-reduced-motion`.

**Reusable:** The design is token-driven. All colors, spacing, radii, and timing functions live in `:root` custom properties, so teams can retheme the entire component by overriding a handful of variables. The rank ribbon — the component's signature element, a 3px vertical accent stripe that changes color by rank — is a standalone modifier pattern (`rank-ribbon--gold`, `rank-ribbon--silver`, etc.) that other EaseMotion components can adopt. The progress bar's `--pct` custom property makes it trivially data-bindable: swap the inline style for a server-rendered or framework-interpolated value and it works immediately.

Together, the component demonstrates that production-grade SaaS UI — the kind you'd find in Linear, Vercel, or Stripe's dashboard — is achievable with EaseMotion CSS primitives alone.
