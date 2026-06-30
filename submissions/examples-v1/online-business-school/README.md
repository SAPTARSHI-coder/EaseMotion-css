# Online Business School Landing Page (Advanced Education Example)

This directory contains a complete, production-ready, fully responsive landing page for an elite business education platform named **Vanguard Business School**. It demonstrates how to leverage **EaseMotion CSS** utility classes, pre-defined components, and transition delays to build a premium, visual-heavy educational portal.

## What does this do?

This example showcases a full-page educational platform containing:
- **Interactive Navigation**: Sticky, glassmorphic header navigation using EaseMotion navbar layouts.
- **Hero Section**: Executive business education headline, student success stat summaries, and a glass placement matrix card.
- **Programs Section**: Three academic major tracks (Entrepreneurship, Strategic Marketing, Corporate Finance) styled inside a responsive grid with lift hover states.
- **Faculty Profiles**: Cards featuring expert academic profiles using EaseMotion's `.ease-hover-grow` micro-interactions.
- **Curriculum Preview**: A responsive 3-phase curriculum preview roadmap demonstrating core courses, specialized tracks, and executive capstones.
- **Tuition & Financial Aid Section**: Pricing details, payment schedules, and a multi-column statistic panel that increments numbers using EaseMotion's `.ease-count-up` animations on load.
- **Alumni Success Stories**: Customer testimonials detailing placement records.
- **Interactive Enrollment Form**: Configured with responsive grid-cols, floating placeholders, selection controls, and custom-styled check boxes.
- **Accredited Footer**: Detailed footer grid listing registrar contact details and SVG social icons.

## Tech Stack
- **HTML5**: Semantic tags, optimized meta structures, Google Fonts, and inline social SVGs.
- **Vanilla CSS**: Extends EaseMotion tokens. In compliance with core constraints, **no custom keyframe animations are defined in style.css**.
- **JavaScript**: Integrates `core/reveal.js` for Intersection Observer viewport reveals.

## How to Preview

Open [demo.html](file:///e:/Project_space/EaseMotion-css/submissions/examples/online-business-school/demo.html) directly in your browser.

---

## EaseMotion CSS Classes Showcase

This landing page leverages the following EaseMotion tokens and utilities:

### 1. Variables (`core/variables.css`)
- **Typography**: `var(--ease-font-sans)`, `var(--ease-text-lg)`, `var(--ease-text-base)`, `var(--ease-text-sm)`, `var(--ease-text-xs)`.
- **Transitions**: `var(--ease-speed-fast)`, `var(--ease-speed-medium)`, `var(--ease-speed-slow)`, `var(--ease-ease)`.
- **Spacers**: Modular layout spacers (`var(--ease-space-1)` to `var(--ease-space-12)`).
- **Z-Index**: `var(--ease-z-overlay)` for sticky navigation tracking.
- **Breakpoints**: Responsive breakpoints (`--ease-bp-*`).

### 2. Utilities (`core/utilities.css`)
- **Flexbox & Grid**: `.ease-flex`, `.ease-flex-col`, `.ease-flex-wrap`, `.ease-items-center`, `.ease-justify-between`, `.ease-grid`, `.ease-grid-cols-2`, `.ease-grid-cols-3`, `.ease-grid-cols-4`, `.ease-gap-4`, `.ease-gap-6`.
- **Spacing**: `.ease-px-8`, `.ease-py-4`, `.ease-py-8`, `.ease-mx-auto`, `.ease-mb-2`, `.ease-mb-4`, `.ease-mb-6`, `.ease-mb-8`, `.ease-my-4`.
- **Display**: `.ease-inline-block`, `.ease-block`, `.ease-relative`, `.ease-overflow-hidden`.
- **Typography & Color**: `.ease-text-xl`, `.ease-text-lg`, `.ease-text-base`, `.ease-text-sm`, `.ease-text-xs`, `.ease-font-bold`, `.ease-font-semibold`, `.ease-text-center`, `.ease-text-muted`, `.ease-text-success`, `.ease-text-white`.
- **Scrollbar**: `.ease-scrollbar-thin` for premium browser scroll columns.

### 3. Animations (`core/animations.css`)
- **Entrance transitions**: `.ease-fade-in`, `.ease-slide-up`, `.ease-slide-down`, `.ease-zoom-in`.
- **Stagger delays**: `.ease-delay-100`, `.ease-delay-200`, `.ease-delay-300`, `.ease-delay-400`.
- **Duration overrides**: `.ease-duration-slow`.
- **Scroll reveal**: `.ease-reveal`, `.ease-reveal-up`, `.ease-reveal-left`, `.ease-reveal-right`, `.ease-reveal-scale` combined with staggered transition delays (`.ease-reveal-delay-1` through `.ease-reveal-delay-3`).
- **Interactive Counters**: `.ease-count-up` triggered with custom targets (`--ease-count-target: 12`, `85`, `100`).
- **Looping animations**: `.ease-float` on the hero visual card widget.

### 4. Interactive Hover Styles (`core/animations.css`)
- `.ease-hover-grow` on brand names, faculty cards, and tuition boxes.
- `.ease-hover-underline` on navbar items.
- `.ease-hover-shimmer` on primary CTA buttons.
- `.ease-card-hover` on academic program cards and alumni quotes.

### 5. Components (`components/`)
- **Buttons** (`components/buttons.css`): `.ease-btn`, `.ease-btn-primary`, `.ease-btn-outline`, `.ease-btn-sm`, `.ease-btn-lg`, `.ease-btn-hover`.
- **Cards** (`components/cards.css`): `.ease-card`, `.ease-card-glass`, `.ease-card-stat`, `.ease-stat-value`, `.ease-stat-label`.
- **Navbar** (`components/navbar.css`): `.ease-navbar-glass`, `.ease-navbar-glass-sticky`, `.ease-navbar-glass-blur`, `.ease-navbar-brand`, `.ease-navbar-menu`, `.ease-navbar-item`.
- **Footer** (`components/footer.css`): `.ease-footer`, `.ease-footer-grid`, `.ease-footer-col-title`, `.ease-footer-links`, `.ease-footer-social`, `.ease-footer-bottom`.
