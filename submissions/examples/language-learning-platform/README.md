# LingoEase - Gamified Language Learning Platform (EdTech Landing Page Showcase)

A complete, premium, ready-to-copy EdTech SaaS landing page designed in a friendly, global, Duolingo-inspired aesthetic. Built exclusively using **EaseMotion CSS** layout tokens, animation utilities, and core component styles.

This landing page serves as a copy-pasteable showcase of how to build visual business structures utilizing the EaseMotion library classes.

---

## 🎨 Showcased Sections
1. **Announcement Bar**: Special offer announcement using EaseMotion banner conventions.
2. **Interactive Header Navigation**: Clean header logo and CTA triggers.
3. **Friendly Hero Section**: Split-grid layout with auto-animating cycling words, colored country flags, and a bouncing mascot owl.
4. **Feature Grid**: Composed using custom hover-lift feature cards showcasing lessons, speech coach guides, and AI tutors.
5. **Course Catalog Grid**: Language cards displaying mock telemetry and learner counts with hover zoom effects.
6. **Pricing Tiers**: Free vs Premium interactive price table with a functional yearly/monthly billing cycle toggle switch.
7. **Success Stories**: Realistic testimonial quotes complete with user avatar badges and streak metrics.
8. **App Download Block**: Encouraging mobile download layout featuring an interactive mobile phone lesson preview mockup.
9. **FAQ Accordion**: Clean toggle accordions that slide open and close smoothly.
10. **Toast Feedback Overlay**: Instant notifications triggered from CTA clicks at the bottom right.

---

## 🚀 Showcased EaseMotion CSS Classes

### 1. Animations & Interactions
- `.ease-fade-in`: Entrance animation on hero badges.
- `.ease-slide-in-left` & `.ease-slide-in-right`: Clean entrance animations for hero text and visual assets.
- `.ease-bounce`: Looping bounce animation on the owl mascot, floating badges, and the selected quiz check button.
- `.ease-float`: Smooth floating looping translation applied to the mascot and the app mockup screen.
- `.ease-reveal` (with `core/reveal.js`): Triggers scroll entrance transitions.
- `.ease-reveal-up`, `.ease-reveal-scale`, `.ease-reveal-left`, `.ease-reveal-right`: Composable entrance directions.
- `.ease-reveal-delay-1` to `.ease-reveal-delay-6`: Staggered timing delays for grid lists.

### 2. Layout & Spacings
- Layout layers wrapping components: `@layer easemotion-base`, `easemotion-components`, `easemotion-utilities`.
- Flex utilities: `.ease-flex`, `.ease-flex-col`, `.ease-items-center`, `.ease-justify-between`, `.ease-center`.
- Grid layout: `.ease-grid`.
- Custom design token margins: `var(--ease-space-1)` through `var(--ease-space-16)`.

### 3. Components
- `.ease-card`: Base layout card wraps.
- `.ease-card-hover`: Dynamic lifting translate hover state with deep box-shadows.
- `.ease-card-glow`: Premium border-glow outline.
- `.ease-card-title` & `.ease-card-subtitle`: Typographic semantic structure helpers.
- `.ease-btn`, `.ease-btn-primary`, `.ease-btn-outline`: Highly styled, accessible button variants.
- `.ease-badge`, `.ease-badge-success`, `.ease-badge-warning`, `.ease-badge-primary`: Composed indicator tags.
- `.ease-announce-bar`, `.ease-announce-bar-primary`: Header alert strip.
- `.ease-toast`, `.ease-toast-success`, `.ease-toast-danger`, `.ease-toast-info`, `.ease-toast-fixed-bottom-right`: Interactive system toasts.

---

## 📂 File Structure
```bash
language-learning-platform/
├── demo.html    # Main page showing sections, mock telemetry script & interactive events
├── style.css    # Typography, specific design tokens, app mockup styles & responsiveness
└── README.md    # Showcase list and documentation
```

## 🛠️ Usage
No build steps required. Simply open `demo.html` directly in any web browser to view the premium interactive animations, transitions, and full responsive design.
