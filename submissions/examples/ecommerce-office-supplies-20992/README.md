# App Landing: Office Supplies & Desk Accessories E-commerce (`ecommerce-office-supplies-20992`)

This proposal provides a complete, copy-paste ready B2C landing page template designed for a premium, minimalist office supplies brand (e.g., Grovemade, Muji), built entirely with HTML/CSS and standard EaseMotion utility classes.

## 📌 Feature Overview

A premium physical products brand needs to project clarity, sophistication, and focus. This template achieves a minimalist aesthetic using lots of white space, a clean typography stack (`Inter`), subtle off-white backgrounds (`#FAFAFA`, `#F0EFEA`), and stark contrasting accents. 

The layout includes:
- A top Announcement Bar.
- A sticky Navigation with blur backdrop filter.
- A Hero section featuring a CSS-abstracted desk setup image with animated product hotspots (tooltips).
- A 3-column "Shop by Category" grid with image scale-on-hover effects.
- A Split-layout Bundle promotion section.
- A dark-mode Setup Guides (Inspiration) grid.
- A Review grid.
- A central CTA Banner for business accounts.

### Showcased Classes
The template leverages the following EaseMotion animation and interaction utilities, specifically configured with a slow, highly-controlled `cubic-bezier(0.16, 1, 0.3, 1)` to mimic premium, high-end e-commerce interactions:
- `.ease-reveal-right` / `.ease-reveal-left` (Uses a `clip-path` inset animation combined with a scale down to create a sophisticated "unveiling" effect for product imagery).
- `.ease-fade-up` / `.ease-slide-up` (Configured for slow, deliberate text entrances).
- `.ease-zoom-in` (Applied to the product hotspots to make them pop elegantly over the hero image).
- `.ease-hover-opacity` (Standard interaction for text links, fading out slightly).
- `.ease-hover-lift` (Applied to category cards to lift the whole element on hover).

## ⚙️ How to Use

To view this full-page template locally, simply open the `demo.html` file in your web browser. 

The CSS handles the layout, the sophisticated image reveal effects (using `clip-path`), and the abstract mock imagery. The standard `ease-*` interaction classes are attached directly to HTML elements to provide the premium entrance animations. The design is fully responsive and requires zero JavaScript.

*Note: As per the contributing guidelines, this proposal is implemented inside a unique `submissions/examples/ecommerce-office-supplies-20992/` directory to avoid modifying core files directly and to ensure zero deletions.*

## 🔗 Related Issue
Closes Issue #20992
