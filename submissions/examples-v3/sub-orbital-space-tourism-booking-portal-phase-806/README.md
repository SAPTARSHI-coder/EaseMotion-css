# Sub-Orbital Space Tourism Booking Portal — Phase #806

**EaseMotion CSS Showcase** · `submissions/examples/sub-orbital-space-tourism-booking-portal-phase-806/`

A complete, single-page, responsive HTML/CSS UI design showcase for a premium sub-orbital space tourism booking platform — **AetherVoyage**.

---

## Live Preview

Open `demo.html` directly in any modern browser (no build step required):

```bash
open submissions/examples/sub-orbital-space-tourism-booking-portal-phase-806/demo.html
```

---

## Design Theme

| Token | Value | Purpose |
|---|---|---|
| `--clr-void` | `#03060f` | Page background (deep space) |
| `--clr-nebula-a` | `#6c63ff` | Primary brand / interactive |
| `--clr-nebula-b` | `#c084fc` | Accent violet |
| `--clr-nebula-c` | `#06b6d4` | Cyan highlight |
| `--clr-aurora-a` | `#10b981` | Success / available green |
| `--clr-gold` | `#f59e0b` | Pricing / premium |
| `--font-display` | Orbitron | Headings and brand |
| `--font-body` | Inter | Body text |

---

## Component Breakdown

### 1. Animated Starfield & Nebula Background
- **Technique**: Two CSS `::before` / `::after` pseudo-elements on `.starfield` generate a dense dot grid via stacked `radial-gradient()` patterns.
- **Animation**: `star-drift-slow` (120s) and `star-drift-fast` (60s) drift the layers at different speeds for parallax depth — compositor-only `transform: translateY`.
- **Nebula blobs**: Floating radial-gradient ellipses on `.nebula-bg`, pulsed with `nebula-pulse` keyframes for an ambient glow effect.

### 2. Navigation Bar
- Fixed position with `backdrop-filter: blur(16px)` glassmorphism.
- Brand logo with gradient clipped text (`-webkit-background-clip: text`).
- CTA button with hover lift (`translateY(-1px)`) and smooth background transition.

### 3. Hero Section
- Two-column grid: **left** (text + stats) / **right** (orbit visualiser).
- **Orbit visualiser**: CSS-only planetary rings (`border-radius: 50%` + `rotateX(60deg)`) with two spacecraft animating on independent circular paths via `transform: rotate(Ndeg) translateX(radius)` trick.
- **Countdown badge**: Live JS clock (`requestAnimationFrame`) updating `hh:mm:ss` — the only JS in the file and only used for UI display.
- **Stats strip**: Uses gradient-clipped numbers on a `font-family: Orbitron` font.
- All elements animate in via `ease-kf-fade-in` with staggered `animation-delay`.

### 4. Mission Cards
- 3-column responsive grid (`auto-fit, minmax(320px, 1fr)`).
- **Hover lift**: `translateY(-8px) scale(1.01)` with `cubic-bezier(0.34,1.56,0.64,1)` spring easing.
- **Thumbnail zoom**: Inner thumb div scales `1.08` on parent hover via CSS child selector.
- Gradient thumbnail placeholders built from CSS radial/linear-gradient + decorative planet blobs.
- Meta grid (duration, altitude, crew) in `dl`/`dt`/`dd` for semantic HTML.
- Price uses gradient-clipped text in Orbitron.

### 5. Seat Class Picker
- Pure CSS interactive selection using **hidden `<input type="radio">` + sibling `<label>`** pattern.
- `:checked + .seat-card` applies a glowing outline box-shadow and spring lift.
- Three tiers: Observer (cyan), Pioneer (violet gradient, pre-checked), Commander (gold).
- Feature lists use `✓` / `×` accessibility-friendly icons with `aria-hidden="true"`.

### 6. Three-Step Booking Form (CSS Tabs)
- **Zero JavaScript** tab switching via `<input type="radio">` + CSS `:checked ~` sibling selectors.
- Step 1: Passenger details (name, email, phone, DOB, passport, nationality, mission).
- Step 2: Interactive seat map — 6×6 grid with four visual states (`seat-free`, `seat-taken`, `seat-selected`, `seat-vip`). Each cell has `:hover` spring scale.
- Step 3: Order summary with line-item breakdown + payment form.
- Forward/back navigation uses `<label for="tab-N">` to switch state without JS.

### 7. Feature Cards
- 6-card responsive grid with glassmorphism panel style.
- Icon wraps have a `rotate(-5deg)` spring tilt on parent hover via `.feature-card:hover .feature-icon-wrap`.

### 8. Testimonials
- `<blockquote>` semantic HTML with `<footer>` for attribution.
- Avatar initials rendered in gradient circles.
- Hover lift animation consistent with card language.

### 9. Launch Schedule Table
- `<table>` with `<thead>` / `<tbody>` semantic structure.
- Four status badges: Open (green), Filling Fast (gold), Sold Out (red), Upcoming (cyan).
- `overflow-x: auto` wrapper for mobile horizontal scroll.

### 10. CTA Banner
- Full-width rounded panel with layered radial + linear gradients and a `::before` overlay glow.

### 11. Footer
- 4-column responsive grid collapsing to 2 → 1 at breakpoints.
- Social icon buttons with hover glow ring.
- Semantic `<nav>` blocks with `aria-label`.

---

## EaseMotion CSS Techniques Used

| Technique | Applied To |
|---|---|
| `transform: translateY` entrance | All sections (`.animate-in`, `.delay-N`) |
| `transform: translateY + scale` hover lift | Mission cards, feature cards, seat cards |
| CSS `::before` / `::after` decoration | Starfield, nebula, orbit rings |
| `backdrop-filter: blur` glassmorphism | Nav, countdown panel, altitude badge, form panels |
| Gradient text clip (`background-clip: text`) | Logo, hero title, stats, prices, seat prices |
| `animation: orbit-ship-spin` circular orbit | Hero spacecraft |
| Radio + `:checked ~` tab trick | Booking form steps, seat class selection |
| `cubic-bezier(0.34, 1.56, 0.64, 1)` spring | Card hovers, button presses |
| `animation: gentle-float` | Altitude badge, countdown panel |
| `animation: dot-blink` | Hero live indicator |
| `animation: nebula-pulse` | Background nebula blobs |
| `animation: star-drift` | Starfield layers |
| `@media (prefers-reduced-motion: reduce)` | Global — disables all animation |

---

## Accessibility

- Semantic landmark elements: `<nav>`, `<main>` via `<section>`, `<article>`, `<blockquote>`, `<footer>`, `<table>`.
- All decorative elements carry `aria-hidden="true"`.
- Form fields linked to labels via `for`/`id`.
- Interactive seat map cells have `role="gridcell"` and `tabindex="0"`.
- Focus-visible styles inherited from browser defaults (not suppressed).
- `@media (prefers-reduced-motion: reduce)` sets all animation/transition duration to `0.01ms`.

---

## File Structure

```
sub-orbital-space-tourism-booking-portal-phase-806/
├── demo.html   — Full single-page portal UI
├── style.css   — Design system + all animations
└── README.md   — This file
```

---

## Browser Support

Targets evergreen browsers (Chrome 110+, Firefox 110+, Safari 16+, Edge 110+).

| Feature | Notes |
|---|---|
| `backdrop-filter` | Full support in target browsers |
| `background-clip: text` | Requires `-webkit-` prefix (included) |
| CSS `:checked ~` selectors | Universally supported |
| `radial-gradient` starfield | Universally supported |
| CSS custom properties | Universally supported |
