# Apex Motors - Premium Car Dealership Landing Page

A complete, high-performance, ready-to-copy automotive sales business landing page built using **EaseMotion CSS** layout tokens, animation utilities, and core component styles.

This page showcases a bold, sleek dark-mode aesthetic with vibrant red highlights using Rajdhani and Inter typography.

---

## 🎨 Showcased Sections

1. **Sleek Hero Section**: Bold sales typography side-by-side with a floating premium sports car specification widget.
2. **Inventory Grid**: Vehicle cards displaying engine specs (HP, 0-60, transmission) featuring hover zoom and card-glow outlines.
3. **Interactive Financing Section**: A finance calculator UI that automatically estimates monthly payments based on vehicle price, down payment, APR, and term inputs.
4. **Trade-In Estimator Section**: Quick valuation estimator form displaying instant value ranges on submission.
5. **Customer Reviews**: Testimonials from clients who upgraded their garages with Apex Motors.
6. **Appointment Scheduler**: Registration form to book defensive highway or guided track test-drive experiences.
7. **Dealership Location & Hours**: Integrated card containing headquarters details and weekly hours.
8. **Toast Notifications**: System notifications showing reservation feedback alerts.

---

## 🚀 Showcased EaseMotion CSS Classes

### 1. Entrance & Interactive Hover Animations

- `.ease-fade-in`: Entrance transitions on tiny badges.
- `.ease-slide-in-left` & `.ease-slide-in-right`: Slide-in transitions for hero details and visual mockup.
- `.ease-float`: Looping floating translation applied to the supercar showcase widget.
- `.ease-bounce`: Custom bouncing animations on hero action points.
- `.ease-reveal` (with `core/reveal.js`): Automatically triggers scroll-entrance classes.
- `.ease-reveal-up`, `.ease-reveal-scale`, `.ease-reveal-left`, `.ease-reveal-right`: Composed reveal direction behaviors.
- `.ease-reveal-delay-1` to `.ease-reveal-delay-3`: Staggered timing for grid animations.
- `.ease-hover-grow`: Interactive zoom effect applied to vehicle card images.

### 2. Layout & Spacings

- Cascade layer safety: `@layer easemotion-base`, `easemotion-components`, `easemotion-utilities`.
- Flex utilities: `.ease-flex`, `.ease-flex-col`, `.ease-items-center`, `.ease-justify-between`, `.ease-center`.
- Grid layout: `.ease-grid`.
- Custom margins/padding tokens: `var(--ease-space-1)` through `var(--ease-space-16)`.

### 3. Components

- `.ease-card`: Base layout card wrap.
- `.ease-card-hover`: Composed dynamic card hover transitions.
- `.ease-card-glow`: Sleek red-colored outline border glows.
- `.ease-card-title` & `.ease-card-subtitle`: Typographic semantic structure helpers.
- `.ease-btn`, `.ease-btn-primary`, `.ease-btn-outline`: Highly styled, accessible button variants.
- `.ease-badge`, `.ease-badge-success`, `.ease-badge-primary`: Composed indicator tags.
- `.ease-toast`, `.ease-toast-success`, `.ease-toast-danger`, `.ease-toast-info`, `.ease-toast-fixed-bottom-right`: Interactive system toasts.
- `.ease-form-group`, `.ease-form-label`, `.ease-form-input`, `.ease-form-select`: Form input states.

---

## 📂 File Structure

```bash
car-dealership/
├── demo.html    # Core page layout, calculators & valuation scripts
├── style.css    # Typography, design tokens & dashboard-themed styling
└── README.md    # Showcase list and documentation
```

## 🛠️ Usage

No build steps required. Simply open `demo.html` directly in any web browser to view the premium interactive animations, transitions, and full responsive design.
