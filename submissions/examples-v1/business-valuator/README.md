# Business Valuator Webpage (Professional Services Example)

This directory contains a complete, production-ready, fully responsive landing page for a premium Financial Consulting and Business Valuation firm called **Aequitas Partners**. It serves as an advanced example of using the **EaseMotion CSS** framework to build a modern, high-converting professional services website.

## What does this do?

This example showcases a full-page business valuation services website containing:

- **Interactive Navigation**: Sticky, glassmorphic header navigation using EaseMotion components.
- **Hero Section**: A high-impact hero with a business growth theme featuring an interactive valuation multiples bar chart.
- **Services Showcase**: Detailed cards highlighting _M&A valuations_, _exit planning_, and _litigation support_ with lift-on-hover animations.
- **Sectors Served Grid**: A clean, responsive grid of focus industries (SaaS/Tech, Healthcare, Manufacturing, Professional Services) with slide-up reveals and zoom effects.
- **Interactive Methodology Timeline**: A step-by-step layout explaining the 4-phase audit and modeling workflow.
- **Accreditation and Credentials Counter**: Certified appraiser credentials with counting animations (`ease-count-up`) and professional badges.
- **Confidential Inquiry Form**: Confidentially structured contact form with floating inputs, selection dropdowns, and interactive focus states.
- **Structured Footer**: Sitemap, legal disclosures, and SVG social icons powered by EaseMotion's footer layout.

## Tech Stack

- **HTML5**: Semantic tags, optimized meta tags, Google Fonts, and custom SVGs.
- **Vanilla CSS**: Compliant with EaseMotion guidelines (no Tailwind, raw custom classes linking to parent variables).
- **JavaScript**: Leveraging `core/reveal.js` for Intersection Observer-driven scroll animation reveals.

## How to Preview

Open [demo.html](file:///e:/Project_space/EaseMotion-css/submissions/examples/business-valuator/demo.html) directly in your web browser.

---

## EaseMotion CSS Classes & Features Used

This page relies heavily on EaseMotion's core variables, layout utilities, components, and animation classes:

### 1. Variables (`core/variables.css`)

- **Typography**: `var(--ease-font-sans)`, `var(--ease-text-lg)`, `var(--ease-text-base)`, `var(--ease-text-sm)`, `var(--ease-text-xs)`.
- **Transitions**: `var(--ease-speed-fast)`, `var(--ease-speed-medium)`, `var(--ease-speed-slow)`, `var(--ease-ease)`, `var(--ease-ease-bounce)`.
- **Spacers**: Spacing scales (`var(--ease-space-1)` through `var(--ease-space-12)`).
- **Z-Index**: `var(--ease-z-overlay)` for the sticky header.
- **Breakpoints**: `--ease-bp-*` values for tablet/mobile responsiveness.

### 2. Utilities (`core/utilities.css`)

- **Flexbox & Grid**: `.ease-flex`, `.ease-flex-col`, `.ease-flex-wrap`, `.ease-items-center`, `.ease-justify-center`, `.ease-justify-between`, `.ease-grid`, `.ease-grid-cols-2`, `.ease-grid-cols-3`, `.ease-grid-cols-4`, `.ease-gap-4`, `.ease-gap-6`.
- **Spacing**: `.ease-px-8`, `.ease-py-4`, `.ease-py-8`, `.ease-mx-auto`, `.ease-mb-2`, `.ease-mb-4`, `.ease-mb-6`, `.ease-mb-8`, `.ease-mb-10`.
- **Display**: `.ease-inline-block`, `.ease-block`, `.ease-relative`, `.ease-overflow-hidden`.
- **Typography & Color**: `.ease-text-xl`, `.ease-text-lg`, `.ease-text-base`, `.ease-text-sm`, `.ease-text-xs`, `.ease-font-bold`, `.ease-font-semibold`, `.ease-text-center`, `.ease-text-muted`, `.ease-text-success`, `.ease-text-white`.
- **Scrollbar**: `.ease-scrollbar-thin` on the body wrapper.

### 3. Animations (`core/animations.css`)

- **Entrance animations**: `.ease-fade-in`, `.ease-slide-up`, `.ease-slide-down`.
- **Staggered loading**: `.ease-delay-100`, `.ease-delay-200`, `.ease-delay-300`.
- **Duration modifiers**: `.ease-duration-slow`.
- **Scroll Reveal**: `.ease-reveal`, `.ease-reveal-up`, `.ease-reveal-left`, `.ease-reveal-right`, `.ease-reveal-scale` with transition-delay stagger helpers (`.ease-reveal-delay-1` through `.ease-reveal-delay-4`).
- **Interactive Counters**: `.ease-count-up` triggered with custom targets (`--ease-count-target: 4`, `350`, `18`, `100`).
- **Loop animations**: `.ease-float` on the hero visual card.

### 4. Interactive Hover Styles (`core/animations.css`)

- `.ease-hover-grow` on brand names, industry cards, and credentials.
- `.ease-hover-underline` on navigation links.
- `.ease-hover-shimmer` on primary CTA buttons.
- `.ease-card-hover` on service and testimonial cards.

### 5. Components (`components/`)

- **Buttons** (`components/buttons.css`): `.ease-btn`, `.ease-btn-primary`, `.ease-btn-outline`, `.ease-btn-sm`, `.ease-btn-lg`, `.ease-btn-hover` (for smooth scale + shadow glow lift).
- **Cards** (`components/cards.css`): `.ease-card`, `.ease-card-glass`, `.ease-card-stat`, `.ease-stat-value`, `.ease-stat-label`.
- **Navbar** (`components/navbar.css`): `.ease-navbar-glass`, `.ease-navbar-glass-sticky`, `.ease-navbar-glass-blur`, `.ease-navbar-brand`, `.ease-navbar-menu`, `.ease-navbar-item`.
- **Footer** (`components/footer.css`): `.ease-footer`, `.ease-footer-grid`, `.ease-footer-col-title`, `.ease-footer-links`, `.ease-footer-social`, `.ease-footer-bottom`.
