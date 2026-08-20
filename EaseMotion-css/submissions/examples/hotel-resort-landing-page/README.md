# Hotel & Resort Landing Page (Lumiere Resort & Spa)

## What does this do?

This is a premium, highly-polished, and fully responsive Hotel & Resort landing page example demonstrating the capabilities of the **EaseMotion CSS** framework. It showcases:

1. **Glassmorphic Navigation Header** that stays sticky at the top of the viewport.
2. **Scroll-Driven Entrance Animations** utilizing EaseMotion's native reveal system on load and scroll.
3. **Responsive Grid Layouts** for accommodation choices, curated resort experiences, and property galleries.
4. **Interactive Testimonials Carousel** built on EaseMotion's `.ease-scroll-gallery` snap-scroll container.
5. **A Pure CSS Booking Modal** controlled using the `:target` hash modifier overlay pattern.
6. **Luxury Brand Typography & Theme adaptation** utilizing HSL-tailored css variable overrides, including elegant serif headers and champagne-gold accents with automatic dark mode support.

---

## How to Run & Preview

To view the example page:

1. Open the [demo.html](demo.html) file directly in any modern web browser.
2. You can also start the local development server if running in the workspace:
   ```bash
   npm run dev
   ```
   And navigate to the submissions examples folder.

---

## Showcased EaseMotion CSS Classes

This example serves as a reference implementation for the following EaseMotion features:

### 1. Navigation & Global Layout

- `.ease-navbar-glass-sticky` / `.ease-navbar-glass`: Creates the sticky glassmorphic navbar.
- `.ease-navbar-glass-blur`: Applies standard backdrop-blur effects.
- `.ease-scroll-progress-root`: Renders a top-anchored viewport scroll progress bar.

### 2. Animations & Scroll Reveal

- `.ease-reveal`: Initializer class for scroll-driven animations.
- `.ease-reveal-fade`: Fades elements in on scroll.
- `.ease-reveal-left` / `.ease-reveal-right`: Slides elements horizontally into place.
- `.ease-reveal-up`: Slides elements vertically upwards.
- `.ease-reveal-delay-1` / `.ease-reveal-delay-2` / `.ease-reveal-delay-3`: Delays animations to stagger content reveals.

### 3. Components

- **Dismissible Announcement Bar**: `.ease-announce-bar`, `.ease-announce-bar-dismiss`, `.ease-announce-bar-close` utilizing a pure HTML checkbox trigger.
- **Card System**: `.ease-card`, `.ease-card-hover`, `.ease-card-body`.
- **Modals (Pure CSS)**: `.ease-modal-overlay`, `.ease-modal`, `.ease-modal-zoom`, `.ease-modal-header`, `.ease-modal-close`, `.ease-modal-body`.
- **Carousel Gallery**: `.ease-scroll-gallery-wrapper` and `.ease-scroll-gallery` for snap-scroll behavior.

### 4. Interactive Hovers & Micro-interactions

- `.ease-hover-pulse-glow`: Elegant glowing pulse effect for CTA buttons.
- `.ease-hover-lift`: Shifts elements slightly upwards on hover.
- `.ease-hover-grow`: Expands buttons/logos slightly.
- `.ease-hover-morph-card`: Morphs graphic frames with gentle rotation/scale.
- `.ease-hover-underline`: Animates an underline reveal.

---

## Why is it useful?

It provides a production-grade template for landing pages, showing how developer-friendly utilities, smooth animations, and clean components can be combined to produce a premium visual design without relying on bulky Javascript libraries or custom keyframes. All styling is pure CSS and responsive out-of-the-box.
