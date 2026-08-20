# Glassmorphic Pricing Cards

This submission demonstrates a modern, responsive 3-column pricing grid featuring a "glassmorphism" aesthetic, built entirely with **EaseMotion CSS** for animations and layout.

## 🌟 Features Implemented
- **Staggered Entrance**: Utilizes `ease-slide-up` and `ease-fade-in` with cascading `ease-delay-*` classes so the cards and text load sequentially.
- **Interactive Hover States**: Cards lift gracefully on hover using `ease-hover-lift`, and buttons scale up with `ease-hover-grow`. The popular card also gets a subtle `ease-hover-glow`.
- **Layout Utilities**: Uses `ease-grid`, `ease-grid-cols-3`, and `ease-gap-6` for the responsive desktop layout, gracefully falling back to a single column on mobile.
- **Component Base**: Built on top of the core `ease-card` and `ease-btn` utility classes.

## 🛠️ How to Test
1. Open `demo.html` in your browser.
2. Notice the staggered slide-up animation as the page loads.
3. Hover over the cards to see the lift effect and shadow transitions.
4. Resize the window to see the responsive grid collapse into a single column.

## 📦 Technologies
- HTML5
- Custom CSS (Glassmorphism styling)
- EaseMotion CSS (CDN for layout, animations, and utilities)