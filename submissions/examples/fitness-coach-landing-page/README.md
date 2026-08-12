# Fitness Influencer / Coach Landing Page (Advanced Example)

A complete, high-energy, and ready-to-copy Personal Brand & Fitness Coaching landing page designed for personal trainers, influencers, and conditioning coaches. It showcases a premium athletic dark aesthetic (Vibrant Crimson Red and Orange accents) fully built using the **EaseMotion CSS** framework.

## Featured Sections

1. **Dismissible Announcement Bar**: Promotional banner dismissal handled without JavaScript using a checkbox hack.
2. **Glassmorphic Navigation Bar**: Skewed logo badge and navigation matching system dark and light modes.
3. **High-Impact Hero Header**: Strong uppercase typography, scroll entrance reveal animations, and a styled athlete portrait container.
4. **Social Proof Stats Bar**: High-performance metric cards (clients coached, body fat shredded, years experience) highlighting successful outcomes.
5. **Programs Grid**: Foundation Fit (Beginner), Hypertrophy & Shred (Featured POPULAR intermediate card), and Athletic Conditioning (Advanced) layout modules.
6. **Transformation before/after Gallery**: Side-by-side comparative split cards detailing client body fat and lean muscle transformations.
7. **Biography & Protocol Info**: Bio column and checklist cards outlining custom programming, macro nutrition, and accountability check-ins.
8. **Testimonial Scroll Carousel**: Touch-swipe responsive horizontal card carousel showing reviews.
9. **Modal Dialog Application**: Modal pop-up form booking system using `:target` pseudo-class and custom form fields.
10. **Scroll Progress Indicator**: fixed top red progress bar tracking page scroll depth.

---

## Showcase of EaseMotion CSS Classes

### 1. Variables & Branding Overrides

We override default values within `:root` inside `style.css` to brand components to a premium crimson red/orange athletic dark palette:

- `--ease-font-sans` (`'Outfit'`)
- `--ease-color-primary` (`#e11d48`), `--ease-color-secondary` (`#f97316`)
- `--ease-color-bg` (`#09090b`), `--ease-color-surface` (`#18181b`)
- `--ease-color-text` (`#f4f4f5`), `--ease-color-muted` (`#a1a1aa`)

### 2. Components Used

- **Navbar**: `.ease-navbar-glass`, `.ease-navbar-glass-sticky`, `.ease-navbar-glass-blur`, `.ease-navbar-menu`, `.ease-navbar-item`
- **Cards**: `.ease-card`, `.ease-card-body`, `.ease-card-title`, `.ease-card-hover`
- **Buttons**: `.ease-btn`, `.ease-btn-primary` (overriden with crimson), `.ease-btn-outline`
- **Forms**: `.ease-field`, `.ease-field-label`, `.ease-input`, `.ease-textarea`, `.ease-select`
- **Announcement Bar**: `.ease-announce-bar`, `.ease-announce-bar-dismiss`, `.ease-announce-bar-close`
- **Modals**: `.ease-modal-overlay`, `.ease-modal`, `.ease-modal-header`, `.ease-modal-body`, `.ease-modal-close`, `.ease-modal-zoom`
- **Scroll Gallery**: `.ease-scroll-gallery`, `.ease-scroll-gallery-wrapper`
- **Scroll Progress**: `.ease-scroll-progress`, `.ease-scroll-progress-root`

### 3. Animations & Interactions

- **Reveal on Scroll**: Requires `core/reveal.js`.
  - `.ease-reveal`, `.ease-reveal-fade`, `.ease-reveal-up`, `.ease-reveal-left`, `.ease-reveal-right`
  - `.ease-reveal-delay-1`, `.ease-reveal-delay-2`, `.ease-reveal-delay-3`
- **Interactive Hovers**:
  - `.ease-hover-grow` (Header logo)
  - `.ease-hover-underline` (Navbar text hover states)
  - `.ease-hover-lift` (Buttons)
  - `.ease-hover-morph-card` (Coach profile frame)
  - `.ease-hover-pulse-glow` (Primary action CTA buttons)

---

## Technical Stack

- **HTML5**: Semantic elements.
- **EaseMotion CSS**: Variables, components, and layout utilities.
- **Vibe JS**: `core/reveal.js` for scroll-triggered viewport detection.

## Preview

Open `demo.html` directly in any web browser to see it. System dark and light themes adapt automatically.
