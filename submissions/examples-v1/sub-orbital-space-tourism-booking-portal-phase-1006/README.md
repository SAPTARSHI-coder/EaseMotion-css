# Sub-Orbital Space Tourism Booking Portal — Phase #1006

A complete, copy-paste ready single-page booking portal for a fictional sub-orbital spaceflight operator **APOGEE**. Built as a standalone `demo.html` — no build step, no external dependencies beyond Google Fonts.

## Live Preview

Open `demo.html` directly in any modern browser. The live countdown, star field, seat selector, and scroll reveals all run on vanilla JS.

## Sections

| Section | Description |
|---|---|
| Navigation | Fixed with live launch CTA pulsing in amber |
| Hero | Animated star field, floating Earth + orbit, shimmer headline, live stats |
| Countdown Banner | Real-time countdown to next launch date |
| Flight Packages | Three-tier pricing cards with feature lists |
| Seat Map | Interactive SVG capsule diagram + clickable 4×4 grid |
| Destinations | Three trajectory cards with themed visuals |
| Safety Metrics | Animated progress bar stats |
| Technology | Propulsion system cards |
| Testimonials | Three alumni quote cards |
| Client Logos | Organisation row |
| Booking Form | Full inquiry form with validation-ready fields |
| Footer | Four-column with legal links |

## EaseMotion CSS Classes Showcased

### Entrance Animations
- `.ease-fade-up` — Used on section headings, cards, labels; scroll-triggered via IntersectionObserver
- `.ease-fade-in` — Hero badge entrance
- `.ease-float` — Spacecraft visual floating animation
- `.ease-pulse-glow` — Plasma glow pulse on Earth visual

### Hover Interactions
- `.ease-hover-lift` — Package cards, destination cards, technology cards
- `.ease-hover-glow-border` — Border lights up with plasma colour on hover
- `.ease-hover-scale` — Seat map cells, package buttons, form submit

### Continuous Animations
- `.ease-shimmer` — Hero gradient headline
- `.ease-rotate-slow` — Orbital craft path animation
- `.ease-star-twinkle` — Individual star field elements, hero badge dot
- `.ease-throb-amber` — Nav CTA button heartbeat

### Stagger System
- `.delay-1` through `.delay-6` — Cascade cards, stats, and list items into view

### Keyframes Defined
`ease-fade-up`, `ease-fade-in`, `ease-pulse-glow`, `ease-float`, `ease-orbit`, `ease-throb-amber`, `ease-star-twinkle`, `ease-scan-line`, `ease-rotate-slow`, `ease-shimmer`, `ease-progress-fill`, `ease-countdown-tick`

## Design Tokens

```
--space-void:  #03060f   Deep space background
--space-deep:  #070d1a   Card surfaces
--nebula:      #120824   Gradient mid-tone
--electric:    #0066ff   Primary action blue
--plasma:      #00d4ff   Accent cyan / highlights
--amber:       #ff9500   CTA / launch warning
--star:        #e8f4ff   Primary text
--star-dim:    #8ba4c8   Secondary text
--star-faint:  #3a4f6e   Tertiary / disabled text
```

## Responsive Breakpoints
- **Desktop** (> 900px): Full layout with hero visual, nav links, side-by-side booking form
- **Tablet** (≤ 900px): Hero visual hidden, single-column booking, condensed nav
- **Mobile** (≤ 600px): Stacked hero actions, single-column footer, compact countdown

## Accessibility
- `prefers-reduced-motion` disables all animations with a single media query
- All interactive elements have `:hover` and `:focus` states
- Seat map includes legend; taken seats have `cursor: not-allowed`
- Form labels are explicit (not placeholder-only)

## Files

```
submissions/examples/sub-orbital-space-tourism-booking-portal-phase-1006/
├── demo.html     # Complete single-page portal — open directly in browser
├── style.css     # All tokens, keyframes, component styles, responsive rules
└── README.md     # This file
```

---
Crafted with 💜 by **[pari-dubey1](https://github.com/pari-dubey1)**