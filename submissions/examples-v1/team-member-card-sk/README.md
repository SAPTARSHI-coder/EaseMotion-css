# Hover-Reveal Team Member Card

## What does this do?
A team member card where hovering (or focusing, for keyboard users) reveals a profile overlay sliding up from beneath the photo — name, role, and social links fade in with a staggered delay. Responsive grid, three variants (default, minimal, bordered), full `prefers-reduced-motion` support.

## How to use it
```html
<div class="tmc-grid">
  <div class="tmc-card">
    <div class="tmc-photo"><img src="photo.jpg" alt="..."></div>
    <div class="tmc-overlay">
      <h3 class="tmc-name">Priya Sharma</h3>
      <p class="tmc-role">Lead Frontend Engineer</p>
      <div class="tmc-socials">
        <a href="#" class="tmc-social">GH</a>
        <a href="#" class="tmc-social">LI</a>
      </div>
    </div>
  </div>
</div>

<!-- Variants -->
<div class="tmc-card tmc-card--minimal">...</div>
<div class="tmc-card tmc-card--bordered">...</div>
```

## Variants
- `.tmc-card` — default: overlay fully hidden until hover, slides up from below
- `.tmc-card--minimal` — name always visible at the bottom; only social links reveal on hover
- `.tmc-card--bordered` — adds a border that highlights to the primary color on hover

## Key features
- **Social links reveal** — each `.tmc-social` icon staggers in with `transition-delay`, scaling up from 0.8 with a bounce easing
- **Profile overlay animation** — `.tmc-overlay` translates from `translateY(40%)` + `opacity: 0` to fully visible, with a bounce-eased slide
- **Responsive grid** — `auto-fit, minmax(220px, 1fr)` adapts from 1 to 4+ columns automatically
- **Multiple card variants** — default, minimal, bordered (see above)
- **Reduced motion support** — all transitions collapse to near-instant with delays removed under `prefers-reduced-motion: reduce`
- **Keyboard accessible** — `:focus-within` mirrors `:hover` so the reveal works for keyboard navigation through the social links, not just mouse hover

## Why it fits EaseMotion CSS
Team/about pages are one of the most common sections on any site, and a hover-reveal card with staggered social link entrance is a polished, frequently-requested pattern that demonstrates layered transition-delay choreography — a good example of composable animation timing for newcomers to study (`Beginner–Intermediate` difficulty per the issue).
