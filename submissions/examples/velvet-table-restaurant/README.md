# Lumière — Upscale Fine Dining E-Commerce

A stunning, single-page promotional and reservation website designed for an elite, Michelin-star level restaurant. Built exclusively utilizing the `EaseMotion` CSS utility class architecture to deliver a moody, elegant dark-mode aesthetic with delicate gold accents.

## 🍽️ Theme & Aesthetic
**Refined Elegance:**
* **Colors:** Obsidian Black (`#0C0C0C`), Charcoal Surface (`#141414`), Champagne Gold (`#D4AF37`), Ivory/Warm White (`#FDFBF7`).
* **Typography:** `Cormorant Garamond` (classic, high-contrast serif for headings and menus) paired with `Montserrat` (clean, wide sans-serif for UI elements and readability).
* **Vibe:** Exclusive, atmospheric, meticulous, and premium.

## 🚀 How to Run
This template requires **zero build steps**. 
1. Clone or download the repository.
2. Ensure `demo.html` and `style.css` are in the same directory.
3. Open `demo.html` in your favorite web browser.

## 🛠️ EaseMotion Classes Showcased
This project relies on the core EaseMotion CSS utility framework to build complex layouts and elegant micro-interactions without writing custom CSS logic in the HTML.

### Layout & Structure
* `ease-container`
* `ease-flex`, `ease-grid`
* `ease-grid-cols-2`, `ease-grid-cols-3`, `ease-grid-cols-4`
* `ease-gap-2`, `ease-gap-4`, `ease-gap-8`, `ease-gap-12`
* `ease-items-center`, `ease-justify-between`, `ease-justify-center`

### Theming Utilities
* `ease-bg-main`, `ease-bg-surface`
* `ease-text-light`, `ease-text-gold`, `ease-text-muted`
* `ease-border-gold`, `ease-border-y`
* `ease-font-serif`, `ease-text-italic`

### Animations & Scroll Reveals
* `ease-reveal`, `ease-reveal-up`, `ease-reveal-scale` (Intersection Observer triggered for smooth scroll-in)
* `ease-fade-in`, `ease-slide-up` (Initial page load transitions)
* `ease-delay-100` through `ease-delay-400` (Staggered element loading)

### Micro-Interactions (Hover)
* `ease-hover-lift` (Y-axis translation + gold shadow expansion for primary buttons)
* `ease-hover-scale` (Image zoom within a masked container for gallery items)
* `ease-hover-fade` (Subtle opacity shift on menu items)
* `ease-hover-underline` (Animated golden bottom border on navigation links)

## 📱 Responsiveness
The grid layout degrades gracefully from complex desktop structures (like the 4-column footer and 2-column menu) to a centralized, single-column design on mobile devices. Fluid typography (`clamp()`) ensures headings scale perfectly across all viewports without breaking layout.