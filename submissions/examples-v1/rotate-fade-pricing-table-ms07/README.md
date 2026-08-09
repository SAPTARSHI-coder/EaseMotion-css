# 🎨 Rotate-Fade Pricing Table

A pure CSS/HTML pricing table for creative portfolio layouts. Cards enter with a
staggered **rotate + fade + scale** animation, and lift smoothly on hover. No JavaScript
required.

## 📁 Files

| File | Description |
|---|---|
| `demo.html` | Standalone showcase page with 3 pricing tiers |
| `style.css` | All styling and animation logic |
| `README.md` | This documentation |

## ✨ Features

- **Rotate-fade entrance animation** — cards spin in from a slight tilt while fading and scaling up
- **Staggered timing** via a per-card `--ease-delay` custom property
- **Hover lift effect** with soft glow shadow on desktop
- **Featured card variant** (`.ease-price-card--featured`) with gradient border and "Most Popular" badge
- **Fully responsive** — 3 columns → 2 columns (tablet) → 1 column (mobile), with the featured plan reordered to the top on small screens
- **`prefers-reduced-motion` support** — disables entrance animation, hover transforms, and transitions for users who opt out of motion
- **Pure CSS/HTML** — no frameworks, no JS dependencies

## 🚀 Usage

1. Copy `style.css` into your project and link it in your `<head>`:
   ```html
   <link rel="stylesheet" href="style.css">
   ```
2. Build your pricing grid using the EaseMotion class structure:
   ```html
   <div class="ease-pricing-grid">
     <div class="ease-price-card" style="--ease-delay: 0s;">
       <div class="ease-price-card__inner">
         <h2 class="ease-price-card__title">Plan Name</h2>
         <p class="ease-price-card__price">$0<span>/mo</span></p>
         <ul class="ease-price-card__features">
           <li>Feature one</li>
         </ul>
         <a href="#" class="ease-price-card__cta">Choose Plan</a>
       </div>
     </div>
   </div>
   ```
3. Mark one card as featured by adding the `ease-price-card--featured` modifier class
   and an optional badge:
   ```html
   <div class="ease-price-card ease-price-card--featured">
     <span class="ease-price-card__badge">Most Popular</span>
     ...
   </div>
   ```
4. Stagger entrances by incrementing `--ease-delay` inline on each card
   (e.g. `0s`, `0.15s`, `0.3s`).

## 🎛️ CSS Custom Properties

Override these on `:root` or on individual `.ease-price-card` elements to customize
the look and feel:

| Property | Default | Purpose |
|---|---|---|
| `--ease-primary` | `#6d5efc` | Primary accent color |
| `--ease-primary-dark` | `#4c3fd6` | CTA hover color |
| `--ease-bg` | `#0f0f1a` | Page background |
| `--ease-card-bg` | `#1a1a2e` | Card background |
| `--ease-card-bg-featured` | `#211f42` | Featured card inner background |
| `--ease-text` | `#f4f4f8` | Primary text color |
| `--ease-text-muted` | `#a8a8c0` | Secondary/muted text color |
| `--ease-border` | `rgba(255,255,255,0.08)` | Divider/border color |
| `--ease-duration` | `0.8s` | Entrance animation duration |
| `--ease-timing` | `cubic-bezier(0.22, 1, 0.36, 1)` | Entrance/hover easing curve |
| `--ease-rotate-start` | `-12deg` | Starting rotation angle for entrance |
| `--ease-scale-start` | `0.85` | Starting scale for entrance |
| `--ease-delay` | `0s` | Per-card animation delay (set inline for staggering) |
| `--ease-hover-lift` | `-8px` | Vertical translate on hover |
| `--ease-hover-duration` | `0.35s` | Hover transition duration |

## ♿ Accessibility

All animations and hover transforms are disabled when the user has enabled
`prefers-reduced-motion: reduce` at the OS/browser level, ensuring the pricing
table remains fully functional and comfortable for motion-sensitive users.

## 📱 Responsive Breakpoints

| Viewport | Layout |
|---|---|
| `> 900px` | 3-column grid |
| `600px – 900px` | 2-column grid |
| `< 600px` | Single column, featured card shown first |

## 🖌️ Difficulty

`level:intermediate`