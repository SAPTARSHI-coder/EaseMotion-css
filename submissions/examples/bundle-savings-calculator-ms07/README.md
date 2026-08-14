# 💰 Bundle Savings Calculator

A pure CSS product bundle card that displays an **animated, count-up savings
amount** — no JavaScript required. Built with `@property` and native CSS
counters, so the "You save $X" figure genuinely counts up from `0` to its
final value on page load.

## 📁 Files

| File | Description |
|---|---|
| `demo.html` | Standalone showcase page with two bundle cards |
| `style.css` | All styling, layout, and animation logic |
| `README.md` | This documentation |

## ✨ Features

- **CSS-only animated counter** — the savings amount counts up from `$0` to the
  real savings value using `@property` (registers a custom property as an
  animatable `<integer>`) combined with `counter-reset` / `counter()`
- **Staggered card entrance** — a soft fade + rise animation on load, with the
  counter kicking off slightly after the card settles (`--ease-count-delay`)
- **Hover lift effect** with a soft glow shadow
- **Featured bundle variant** (`.ease-bundle-card--featured`) with an accent
  border and "Best Value" tag
- **Fully responsive** — 2-column grid on desktop/tablet, single column on mobile
- **Accessible**:
  - Each card is a `<section>` labelled via `aria-labelledby`
  - The savings block uses `role="status"` with a plain-language
    `aria-label` (e.g. `"You save $24 with this bundle"`) so assistive tech
    announces the real number immediately, instead of reading the animating
    counter digit-by-digit
  - The visual counter itself is `aria-hidden="true"` since it's a decorative
    reflection of the `aria-label` value
  - All interactive elements (CTA links) have visible `:focus-visible` outlines
    and are reachable via standard Tab navigation — no custom `tabindex` or
    JS-driven focus traps needed
  - `prefers-reduced-motion` disables all animation, including the counter,
    which resolves instantly to its final value
- **Graceful fallback** — an `@supports` fallback resolves the counter to its
  final value immediately in browsers without `@property` support (e.g. older
  Firefox), so the component degrades safely rather than getting stuck at `$0`
- **Pure CSS/HTML** — no frameworks, no JS dependencies

## 🚀 Usage

1. Copy `style.css` into your project and link it in your `<head>`:
   ```html
   <link rel="stylesheet" href="style.css">
   ```
2. Build a bundle card, setting the final savings figure via the
   `--ease-savings-end` custom property inline on the card:
   ```html
   <section class="ease-bundle-card" style="--ease-savings-end: 24;" aria-labelledby="bundle-title">
     <h2 id="bundle-title" class="ease-bundle-card__title">Bundle Name</h2>

     <ul class="ease-bundle-card__items">
       <li>
         <span class="ease-bundle-card__item-name">Item name</span>
         <span class="ease-bundle-card__item-price">$19</span>
       </li>
     </ul>

     <div class="ease-bundle-card__pricing">
       <div class="ease-bundle-card__price-row">
         <span class="ease-bundle-card__label">Individual price</span>
         <span class="ease-bundle-card__original-price">$60</span>
       </div>
       <div class="ease-bundle-card__price-row">
         <span class="ease-bundle-card__label">Bundle price</span>
         <span class="ease-bundle-card__final-price">$36</span>
       </div>
     </div>

     <div class="ease-bundle-card__savings" role="status" aria-label="You save $24 with this bundle">
       <span class="ease-bundle-card__savings-label">You save</span>
       <span class="ease-bundle-card__savings-amount" aria-hidden="true">
         <span class="ease-bundle-card__savings-counter"></span>
       </span>
     </div>

     <a href="#" class="ease-bundle-card__cta">Add Bundle to Cart</a>
   </section>
   ```
3. **Important:** keep the `aria-label` on `.ease-bundle-card__savings` in sync
   with `--ease-savings-end` — the label is what screen readers announce, the
   animated counter is purely a decorative visual echo of that same number.
4. Mark a card as featured with `ease-bundle-card--featured`, and stagger
   multiple cards by setting `--ease-delay` inline (e.g. `0s`, `0.15s`).

## 🎛️ CSS Custom Properties

| Property | Default | Purpose |
|---|---|---|
| `--ease-savings-end` | `0` | **Required per card.** Final integer value the counter animates to |
| `--ease-savings-current` | `0` | Internal, registered via `@property`; do not set directly |
| `--ease-primary` | `#ff8a3d` | Primary accent color (tags, CTA) |
| `--ease-primary-dark` | `#e06a1c` | CTA hover color |
| `--ease-success` | `#2fbf71` | Savings block accent color |
| `--ease-bg` | `#0d1117` | Page background |
| `--ease-card-bg` | `#161b22` | Card background |
| `--ease-card-bg-featured` | `#1c1710` | Featured card background |
| `--ease-text` | `#f2f4f7` | Primary text color |
| `--ease-text-muted` | `#9aa4b2` | Secondary/muted text color |
| `--ease-border` | `rgba(255,255,255,0.08)` | Divider/border color |
| `--ease-duration` | `0.7s` | Card entrance animation duration |
| `--ease-timing` | `cubic-bezier(0.22, 1, 0.36, 1)` | Entrance/count easing curve |
| `--ease-fade-distance` | `20px` | Starting vertical offset for card entrance |
| `--ease-delay` | `0s` | Per-card entrance delay (for staggering) |
| `--ease-count-duration` | `1.6s` | Duration of the count-up animation |
| `--ease-count-delay` | `0.4s` | Extra delay before the counter starts, relative to `--ease-delay` |
| `--ease-hover-lift` | `-6px` | Vertical translate on hover |
| `--ease-hover-duration` | `0.3s` | Hover transition duration |

## ♿ Accessibility Notes

- The savings amount is exposed to assistive technology as a single,
  pre-computed `aria-label` on a `role="status"` container — this avoids
  screen readers narrating a rapidly changing number mid-animation.
- The animated digits themselves are marked `aria-hidden="true"`, since they
  duplicate the `aria-label` purely for sighted users.
- All links/buttons use native focus order and visible `:focus-visible`
  outlines — no keyboard traps, no custom tabindex.
- `prefers-reduced-motion: reduce` disables the entrance animation, hover
  transform, and the count-up entirely; the final savings value is shown
  immediately.

## 📱 Responsive Breakpoints

| Viewport | Layout |
|---|---|
| `> 720px` | 2-column grid |
| `≤ 720px` | Single column |

## 🌐 Browser Support

The count-up effect relies on `@property` (Baseline-supported in current
Chrome, Edge, and Safari). Browsers without `@property` support receive a
CSS `@supports` fallback that displays the final savings amount immediately,
with no broken or stuck state.

## 🖌️ Difficulty

`level:intermediate`