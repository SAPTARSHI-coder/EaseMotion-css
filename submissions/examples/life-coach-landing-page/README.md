# Life Coach / Consultant Landing Page (Advanced Example)

A complete, polished, and ready-to-copy Personal Brand & Services landing page designed for professional life coaches, mentors, and consultants. It demonstrates a premium organic aesthetic (Terracotta and Sage Green branding) fully built using the **EaseMotion CSS** framework.

## Featured Sections

1. **Dismissible Announcement Bar**: Dismissible bar without JavaScript using built-in HTML checkbox triggers.
2. **Glassmorphic Navigation Bar**: A sticky, blurred glass backdrop header matching system light/dark settings.
3. **Philosophical Hero Header**: Bold typography with staggered entrance scroll transitions and a custom framed profile picture wrapper.
4. **Services Grid**: Highlighting 1-on-1 private coaching, Group mastermind circles, and Self-paced courses with interactive hover animations.
5. **About Coach Biography**: credentials list and value-focused column layout showcasing signature frameworks.
6. **Detailed Comparison Table**: An animated check/cross side-by-side capability list to compare offerings.
7. **Client Success Stories**: Narrative card blocks showcasing past results.
8. **Testimonial Scroll Carousel**: Native touch/drag swipe gallery showcasing client reviews.
9. **Newsletter Lead Magnet Form**: Clean signup form offering a free resource workbook.
10. **Application modal popup**: A modal popup booking system built with `:target` and premium form controls.
11. **Scroll Progress Indicator**: Top fixed scroll bar tracking scroll-driven progression.

---

## Showcase of EaseMotion CSS Classes

### 1. Variables & Branding Overrides

We override default values within `:root` inside `style.css` to brand components to our terracotta/sage coaching aesthetic:

- `--ease-font-sans`, `--ease-font-serif`
- `--ease-color-primary` (`#c27d58`), `--ease-color-secondary` (`#4a6b5d`)
- `--ease-color-bg` (`#faf7f2`), `--ease-color-surface` (`#ffffff`)

### 2. Components Used

- **Navbar**: `.ease-navbar-glass`, `.ease-navbar-glass-sticky`, `.ease-navbar-glass-blur`, `.ease-navbar-menu`, `.ease-navbar-item`
- **Cards**: `.ease-card`, `.ease-card-body`, `.ease-card-title`, `.ease-card-hover`
- **Buttons**: `.ease-btn`, `.ease-btn-primary`, `.ease-btn-outline`
- **Forms**: `.ease-field`, `.ease-field-label`, `.ease-input`, `.ease-textarea`, `.ease-select`
- **Announcement Bar**: `.ease-announce-bar`, `.ease-announce-bar-dismiss`, `.ease-announce-bar-close`
- **Modals**: `.ease-modal-overlay`, `.ease-modal`, `.ease-modal-header`, `.ease-modal-body`, `.ease-modal-close`, `.ease-modal-zoom`
- **Scroll Gallery**: `.ease-scroll-gallery`, `.ease-scroll-gallery-wrapper`
- **Scroll Progress**: `.ease-scroll-progress`, `.ease-scroll-progress-root`
- **Compare Table**: `.ease-compare-table`, `.ease-compare-row-header`, `.is-featured`, `.is-featured-label`, `.ease-icon-check`, `.ease-icon-cross`

### 3. Animations & Interactions

- **Reveal on Scroll**: Requires `core/reveal.js` to observe elements.
  - `.ease-reveal` (Base wrapper)
  - `.ease-reveal-fade`, `.ease-reveal-up`, `.ease-reveal-left`, `.ease-reveal-right`
  - `.ease-reveal-delay-1`, `.ease-reveal-delay-2`, `.ease-reveal-delay-3`
- **Interactive Hovers**:
  - `.ease-hover-grow` (Brand logo)
  - `.ease-hover-underline` (Navbar text link states)
  - `.ease-hover-lift` (Card buttons and secondary link)
  - `.ease-hover-morph-card` (Coach profile image frame)
  - `.ease-hover-pulse-glow` (Call to Action buttons)

---

## Technical Stack

- **HTML5**: Semantic tags structure (`header`, `section`, `footer`, etc.).
- **EaseMotion CSS**: Main styling, variables, components, and layout utilities.
- **Vibe JS**: `core/reveal.js` for scroll-triggered viewport detection.

## Preview

Open `demo.html` directly in any web browser to explore. Works seamlessly with system light & dark mode settings out-of-the-box.
