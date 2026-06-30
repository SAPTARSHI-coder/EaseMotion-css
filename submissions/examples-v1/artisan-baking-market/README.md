# ArtisanCrumb — Specialty Food E-Commerce

A full-page, fully responsive e-commerce landing page designed for an artisan bakery supply store. Built strictly using `EaseMotion` CSS utility classes to demonstrate seamless layouts, beautiful typography, and elegant motion design.

## 🎨 Theme & Aesthetic

**Warm Artisan Baking:**

- **Colors:** Terracotta/Rust (`#C84B31`), Warm Wheat (`#E6A15C`), Cream (`#FAF7F2`), Dark Cocoa (`#2C1E16`).
- **Typography:** `Playfair Display` (elegant serif headings) paired with `Lato` (clean, readable sans-serif body).
- **Vibe:** Professional, organic, warm, and inviting.

## 🚀 How to Run

This project requires **zero build steps**.

1. Clone or download the repository.
2. Ensure `demo.html` and `style.css` are in the same folder.
3. Open `demo.html` directly in your favorite web browser.

## 🛠️ EaseMotion CSS Classes Showcased

This project extensively utilizes the EaseMotion utility class system:

### Layout & Structure

- `ease-container`
- `ease-flex`, `ease-grid`
- `ease-grid-cols-2`, `ease-grid-cols-3`, `ease-grid-cols-4`
- `ease-gap-4`, `ease-gap-6`, `ease-gap-8`, `ease-gap-12`
- `ease-items-center`, `ease-justify-between`, `ease-justify-center`
- `ease-relative`

### Entrance Animations (On Load & Scroll)

- `ease-fade-in`
- `ease-slide-up`
- `ease-bounce-in`
- `ease-reveal`, `ease-reveal-up`, `ease-reveal-scale` (Triggered via IntersectionObserver)
- `ease-delay-100`, `ease-delay-200`, `ease-delay-300`, `ease-delay-500`

### Hover Interactions

- `ease-hover-lift` (Y-axis translation + shadow expansion)
- `ease-hover-grow` (Scale transformation)
- `ease-hover-underline` (Animated custom underline)

### Theming

- `ease-bg-surface`
- `ease-bg-light`
- `ease-text-primary`
- `ease-text-white`

## 📱 Responsiveness

The layout seamlessly downgrades from 4/3 column desktop grids to 2 column tablet grids, and finally to a stacked single-column layout on mobile devices. Fluid typography (`clamp()`) ensures headings scale beautifully across all screen sizes.
