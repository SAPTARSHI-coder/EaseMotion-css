# Gaming Peripherals Store — NovaGear Gaming

A production-quality, copy-paste-ready **Gaming Hardware E-commerce Website** built for the GSSoC EaseMotion CSS contribution challenge. Built entirely with semantic HTML5 and custom CSS — no JavaScript, no frameworks, no CSS keyframes. All motion comes from **EaseMotion CSS classes**.

---

## Project Overview

**NovaGear Gaming** is a premium gaming peripherals brand website designed to showcase and sell esports-grade hardware. It uses a futuristic dark gaming aesthetic — deep blacks, electric cyan, neon purple, and RGB accents — inspired by Razer, Logitech G, SteelSeries, ASUS ROG, and Corsair.

**Brand:** NovaGear Gaming  
**Persona:** Premium gaming peripherals e-commerce brand  
**Design style:** Dark gaming dashboard UI, glassmorphism, neon glows

---

## Features

### Sections

| Section | Description |
|---|---|
| **Hero** | Full-screen dark gaming hero with grid-line background, purple/cyan/green orbs, setup mockup (monitor with HUD, keyboard with RGB gradient, mouse), floating spec chips (36,000 DPI, 240Hz / 1ms), 6 floating tech badges (RGB, 8K Polling, Esports, Ultra Low Latency, Wireless, Pro Series), dual CTA |
| **Products Grid** | 8 product cards: Nova X9 Pro Mouse, BladeStrike TKL Keyboard, EchoWave 7.1 Headset, VoidView 27" Monitor (with sale price), FluxPad XL, VoiceCore USB Mic, ThroneX Ergo Chair, SonicPulse 2.0 Speakers — with badges (RGB/NEW/PRO/WIRELESS/HOT/BESTSELLER), wishlist button, star ratings, and Add to Cart |
| **Performance Specs** | 8 specification cards: Max DPI, Polling Rate, Response Time, Switch Type, Refresh Rate, RGB Zones, Weight, Battery Life — each with value, detail text, and a filled progress bar |
| **Pro Endorsements** | 3 pro gamer testimonial cards: kyro (Team Liquid), Zest (T1 Valorant), Rekkles (G2 Esports) — each with avatar, team tag, quote, and gear tags |
| **Bundle Deals** | 4 bundle cards: Starter ($219.99 — $69 savings), Competitive ($549.99 — $170 savings, featured), Pro Streamer ($449.99), Ultimate RGB ($899.99 — $380 savings) with included product lists and savings badges |
| **Customer Reviews** | Rating overview (4.8 / 14,200+ reviews), 5-bar star breakdown (72% five-star), 97% recommendation rate, and 3 featured customer reviews with Verified Purchase badges |
| **Product Drops** | Newsletter section with live drop timer badge, 4 subscriber perks, email input form, and giveaway announcement |
| **Footer** | Dark gaming CTA band ("Your Setup Is Holding You Back"), brand info, 4 social icons (Twitter/X, Discord, Twitch, YouTube), Shop / Categories / Support nav columns, legal links, back-to-top |

### Design Highlights

- **Complete dark gaming aesthetic** — distinct from all other submissions in this repo (light themes used elsewhere)
- Grid-line hero background using CSS `background-image` repeating lines — zero JavaScript
- CSS glassmorphism on all product cards, spec cards, bundle cards, review cards, and the newsletter section
- `--gradient-rgb` used as subtle overlay on product images and keyboard mock
- Cyan glow (`box-shadow`) on all interactive elements for neon gaming UI feel
- Font family switches to `JetBrains Mono` / monospace for all headings, labels, prices, and badges — instantly gaming-coded
- RGB progress bars using CSS custom property `--fill` driven by inline style
- Live indicator dot on newsletter section (green glow)
- Purple-featured variant cards for the hero monitor product and Competitive bundle
- Cart icon with badge counter in nav — pure CSS
- Distinct product image gradient backgrounds using `radial-gradient` per product category
- Cyan scrollbar and text selection

---

## Folder Structure

```text
submissions/
└── examples/
    └── gaming-peripherals-store/
        ├── demo.html     — Complete single-page gaming store (all 8 sections)
        ├── style.css     — Full dark gaming design system stylesheet
        └── README.md     — This file
```

---

## Responsive Design

| Breakpoint | Behaviour |
|---|---|
| **Desktop** (> 1200px) | Two-column hero, four-column products grid, four-column specs grid, four-column bundles |
| **Laptop** (≤ 1200px) | Three-column products, two-column specs, two-column bundles, three-column footer |
| **Tablet** (≤ 900px) | Single-column hero (centred), two-column products, stacked testimonials and reviews, hidden spec chips |
| **Small Tablet** (≤ 640px) | Two-column products, two-column specs, single-column bundles, stacked footer and newsletter |
| **Mobile** (≤ 420px) | Single-column for all content grids |

---

## EaseMotion CSS Classes Showcased

All animations use EaseMotion classes exclusively. No `@keyframes`, `animation`, or motion-CSS rules exist in `style.css`.

### Navigation — Hover Effects
| Class | Element |
|---|---|
| `ease-hover-grow` | NovaGear logo in navbar and footer |
| `ease-hover-underline` | All nav links and footer shop/support links |
| `ease-hover-lift` | "Shop Now" CTA, all primary and outline buttons |
| `ease-hover-glow` | Cart icon, "Shop Now" CTA, all Add to Cart buttons, Back to Top |

### Entrance Animations
| Class | Usage |
|---|---|
| `ease-fade-right` | Hero text content |
| `ease-fade-left` | Hero gaming setup visual |
| `ease-fade-up` | Section headers, product cards, spec cards, bundle cards, review cards |
| `ease-pop` | Hero availability badge, floating spec chips (DPI, Hz), pricing popular badge |
| `ease-stagger` | Tech badge cloud, product cards, spec cards, pro testimonials, bundles, reviews (using `--stagger` CSS custom property) |

### Continuous Animations
| Class | Usage |
|---|---|
| `ease-float` | Hero gaming setup frame (gentle float) |
| `ease-bounce` | Hero scroll-cue arrow |
| `ease-pulse` | Newsletter "Live Drop" indicator badge |

### Interactive Hover Effects
| Class | Usage |
|---|---|
| `ease-hover-lift` | Product cards, spec cards, pro gamer cards, bundle cards, review cards, all buttons |
| `ease-hover-glow` | CTA buttons, Add to Cart, Cart icon, Back to Top, newsletter subscribe button |
| `ease-hover-scale` | Wishlist heart buttons on product cards |
| `ease-hover-rotate` | Footer social icon buttons (Twitter, Discord, Twitch, YouTube) |

---

## Browser Compatibility

| Browser | Support |
|---|---|
| Chrome 100+ | ✅ Full |
| Firefox 100+ | ✅ Full |
| Safari 15.4+ | ✅ Full (`backdrop-filter` supported) |
| Edge 100+ | ✅ Full |
| Opera 85+ | ✅ Full |
| Safari < 15.4 | ⚠️ Glassmorphism degrades gracefully (opaque fallback, no blur) |
| IE 11 | ❌ Not supported (CSS Grid, custom properties, `clamp()`) |

---

## Credits

- **Website design & content:** NovaGear Gaming persona / GSSoC EaseMotion CSS submission
- **Animation library:** [EaseMotion CSS](https://github.com/GSSoC/easemotion-css)
- **Typography:** Inter + JetBrains Mono via system fonts
- **Icons:** Inline SVG only — no external icon library
- **Design inspiration:** Razer, Logitech G, SteelSeries, ASUS ROG, Corsair, Alienware, HyperX

---

Crafted with 💜 by **[pari-dubey1](https://github.com/pari-dubey1)**