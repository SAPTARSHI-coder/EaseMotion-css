# Fade-Out Accordion — Marketing Landing Page

A pure CSS, zero-dependency **FAQ accordion** for landing pages where
"fade-out" works on two layers: while you move through the list, the
questions you're *not* on fade back so the one you're considering stands
out (spotlight dim); and in modern browsers, answers **fade out and
collapse smoothly** when a section closes, using the new
`::details-content` animation pattern. Built on native
`<details>`/`<summary>` — no JavaScript anywhere.

Resolves Issue: #33065

## ✨ Features

- **Spotlight dim (all browsers)** — while the pointer or keyboard focus
  is inside the list, closed items you're not on ease to
  `opacity: var(--fo-dim)`. At rest, everything is fully legible; open
  answers never dim, so nothing fades while being read.
- **Fading close (modern browsers)** — the answer fades and its
  `block-size` collapses to zero on close via `::details-content`,
  `interpolate-size: allow-keywords`, and
  `transition-behavior: allow-discrete` (so `content-visibility` waits
  for the fade to finish). Browsers without support simply drop the rule
  and close instantly — graceful degradation, not breakage.
- **Keyboard parity** — the spotlight is also driven by `:focus-within`,
  so Tab users get the same fade-out choreography; Enter/Space toggles
  natively; 2px accent `:focus-visible` ring on each question.
- **Native accordion semantics** — `<details name="fo-faq">` gives
  exclusive-open behavior (one answer at a time) with zero JS.
- **Landing-page-native details** — FAQ eyebrow badge, fluid `clamp()`
  headline, plus-to-minus marker drawn with two pseudo-element bars and
  rotated 135° on open, accent border on the active card.
- **Genuinely responsive** — fluid column up to 540px, fluid type,
  tightened paddings under 420px.
- **Tunable via custom properties** — dim level, dim duration, collapse
  duration, easing, and marker rotation time on `:root`.
- **Motion-safe** — `prefers-reduced-motion` removes the dim transition,
  the collapse animation, and the marker rotation.

## 🔧 Custom Properties

| Property                 | Default                          | Role                            |
| ------------------------ | -------------------------------- | ------------------------------- |
| `--fo-dim`               | `0.42`                           | Rest opacity of faded questions |
| `--fo-dim-duration`      | `220ms`                          | Spotlight fade time             |
| `--fo-collapse-duration` | `300ms`                          | Answer fade + collapse time     |
| `--fo-ease`              | `cubic-bezier(0.22, 1, 0.36, 1)` | Collapse curve                  |
| `--fo-toggle-duration`   | `220ms`                          | Marker rotation time            |

## 🚀 Usage

```html
<div class="fo-list">
  <details class="fo-item" name="my-faq">
    <summary class="fo-head">
      How does the free trial work?
      <span class="fo-marker" aria-hidden="true"></span>
    </summary>
    <p class="fo-answer">Every plan starts with 14 days free…</p>
  </details>
  <!-- more items -->
</div>
```

## 📂 Files

- `demo.html` — a landing-page FAQ block (four pricing/support questions).
- `style.css` — motion tokens, spotlight dim, `::details-content` collapse, a11y guards.
- `README.md` — this document.

## 📝 Note

The fading close uses `::details-content` + `interpolate-size`, currently
shipping in Chromium-based browsers (Chrome/Edge 131+) and progressing
elsewhere. The component is designed so that everything else — spotlight
fade-out, exclusive open, keyboard support — works identically in every
browser; only the close animation is an enhancement.
