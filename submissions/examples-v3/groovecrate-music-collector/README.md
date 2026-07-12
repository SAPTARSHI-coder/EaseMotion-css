# GrooveCrate — Retro Vinyl E-Commerce

A full-page, fully responsive e-commerce landing page designed for an independent, vintage music collector store. Built exclusively utilizing the `EaseMotion` CSS utility class architecture to deliver an authentic, retro, and warm aesthetic.

## 🎵 Theme & Aesthetic
**Retro Vinyl Culture:**
* **Colors:** Warm Parchment/Cream (`#F4EEDD`), Deep Vinyl Black (`#1A1A1A`), Retro Amber/Rust (`#E07A5F`), and Soft Faded Grey (`#6B6B6B`).
* **Typography:** `Rokkitt` (a vintage, slab-serif providing an authentic, printed-press feel) paired with `DM Sans` (a clean, modern geometric sans-serif for high legibility in product data).
* **Vibe:** Nostalgic, tactile, curated, and premium.

## 🚀 How to Run
This template requires **zero build steps**. 
1. Clone or download the repository.
2. Ensure `demo.html` and `style.css` are in the same directory.
3. Open `demo.html` directly in your favorite web browser.

## 🛠️ EaseMotion Classes Showcased
This project relies entirely on the core EaseMotion CSS utility framework to build complex grids and smooth micro-interactions without custom CSS logic in the HTML.

### Layout & Structure
* `ease-container`
* `ease-flex`, `ease-grid`
* `ease-grid-cols-2`, `ease-grid-cols-3`, `ease-grid-cols-4`
* `ease-gap-4`, `ease-gap-6`, `ease-gap-8`, `ease-gap-12`
* `ease-items-center`, `ease-justify-between`, `ease-justify-center`
* `ease-relative`

### Theming Utilities
* `ease-bg-main`, `ease-bg-surface`, `ease-bg-primary`, `ease-bg-dark`
* `ease-text-main`, `ease-text-primary`, `ease-text-white`, `ease-text-muted`
* `ease-border`, `ease-border-primary`, `ease-border-y`
* `ease-font-bold`, `ease-font-display`

### Animations & Scroll Reveals
* `ease-reveal`, `ease-reveal-up`, `ease-reveal-scale` (Intersection Observer triggered for smooth scroll-in)
* `ease-fade-in`, `ease-slide-up`, `ease-bounce-in` (Initial page load transitions)
* `ease-delay-100` through `ease-delay-500` (Staggered element loading)

### Micro-Interactions (Hover)
* `ease-hover-lift` (Y-axis translation + vintage shadow expansion for buttons and record cards)
* `ease-hover-scale` (Image zoom effect applied to genre grids and artist spotlight cards)
* `ease-hover-fade` (Subtle opacity shift on logos)
* `ease-hover-underline` (Animated retro bottom border on navigation links)

## 📱 Responsiveness
The layout adapts smoothly across all devices. The 4-column genre grids and 3-column product grids smoothly degrade to a 2-column view on tablets and a stacked, single-column design on mobile devices to ensure a seamless record-shopping experience. Typography utilizes `clamp()` to scale heading sizes perfectly across viewports.