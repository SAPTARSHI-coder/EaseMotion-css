# Full Photographer Portfolio Landing Page (`ease-page-photography`)

An elegant, dark-themed, image-first portfolio template demonstrating how CSS-only interactivity (lightboxes, filtering) pairs perfectly with EaseMotion's entrance animations.

## 🚀 Features & EaseMotion Showcase

This landing page integrates multiple core `.ease-*` classes alongside several pure-CSS techniques to create a professional photography showcase:

- **CSS-Only Lightbox**: Introduces the `.ease-lightbox` component. This utilizes the CSS `:target` pseudo-class to open high-resolution images in a full-screen overlay without requiring JavaScript. It uses `.ease-fade-in` for the entrance animation.
- **CSS Masonry Filtering**: Uses the "Radio Button Hack" combined with the CSS general sibling combinator (`~`) to filter the portfolio masonry grid by category (All, Weddings, Portraits, Landscapes) completely without Javascript.
- **Elegant Entrances**: Utilizes `.ease-slide-up` and `.ease-fade-in` with slower timing structures and staggered delays to create a sophisticated, cinematic reveal of the hero text and portfolio items.

## 🛠️ Usage

This demo is entirely self-contained. You can open `demo.html` directly in your browser. All required EaseMotion CSS classes have been defined at the top of the `style.css` file for immediate testing. 

If using this as a template for a real project, simply migrate the HTML structure into your application and ensure your global CSS bundle includes the `ease-*` utility classes.

## 🔗 Related Issue
Resolves Issue #14802
