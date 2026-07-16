# STRIDE — Premium Footwear E-commerce Landing Page

A production-ready, copy-paste-ready full-page footwear e-commerce website built exclusively with **EaseMotion CSS** framework classes. Showcases a complete sneaker brand landing page that demonstrates extensive usage of the EaseMotion CSS animation and component system.

## What Does This Do?

This is a complete **footwear e-commerce landing page** for the fictional brand **STRIDE** — a premium performance footwear company. The page functions as a full marketing and sales website that potential customers can browse to discover products, learn about technology features, check release dates, read reviews, find their size, and subscribe for exclusive updates.

The demo is entirely self-contained within three files and works by simply opening `demo.html` in any modern browser.

## How Is It Used?

1. Open `demo.html` directly in any modern web browser.
2. The page automatically loads EaseMotion CSS from `../../../easemotion.css` (the repository root) and the custom `style.css` from the same directory.
3. Navigate through all sections:
   - **Hero** — Product showcase with animated CTA buttons
   - **Collections** — Browse by category (Running, Lifestyle, Basketball, Training, Outdoor, Limited Edition)
   - **Technology** — Feature cards with entrance animations
   - **Drop Calendar** — Upcoming sneaker releases with availability status
   - **Customer Reviews** — Testimonials with ratings and product references
   - **Size Guide** — Conversion table with fit recommendations
   - **Newsletter** — Email signup with animated subscribe button
   - **Footer** — Navigation, support links, social media, and copyright

4. To customize for a real brand:
   - Update the brand name, product names, prices, and descriptions
   - Replace SVG shoe illustrations with actual product images
   - Update the color palette in `style.css` CSS variables
   - Modify the size chart and review content
   - Connect the newsletter form to your email marketing service

## Why Is It Useful?

### For EaseMotion CSS Contributors & Reviewers

- **Comprehensive class demonstration** — Uses a wide range of EaseMotion CSS utilities, animations, components, and hover effects in a realistic production scenario
- **Real-world validation** — Tests the framework against actual e-commerce layout requirements
- **No custom keyframes or animation systems** — All animations use only existing EaseMotion CSS classes
- **Reference implementation** — Shows best practices for combining EaseMotion classes to build complex layouts

### For Developers

- **Copy-paste ready** — Works immediately with no build tools or configuration
- **Realistic content** — No lorem ipsum; all content is authentic e-commerce copy
- **Responsive** — Fully functional on mobile, tablet, and desktop
- **Accessible** — Semantic HTML5, ARIA labels, proper heading hierarchy, focus management
- **Maintainable** — Clean, well-commented code with logical section organization

### For Designers

- **Premium aesthetic** — Dark hero, vibrant gradients, card-based layouts, modern typography
- **Sneaker culture vibe** — Bold typography, energetic colors, streetwear-inspired design
- **Interaction-rich** — Entrance animations, hover effects, floating elements, glow rings

## Complete Section Overview

| Section | Description | EaseMotion Classes Used |
|---------|-------------|------------------------|
| **Navigation** | Sticky header with brand logo, nav links, search, cart, and mobile menu toggle | `ease-container`, `ease-flex`, `ease-items-center`, `ease-justify-between`, `ease-py-4`, `ease-gap-*`, `ease-text-2xl`, `ease-font-bold`, `ease-gradient-text`, `ease-bg-primary`, `ease-rounded-lg`, `ease-text-muted`, `ease-hover-underline`, `ease-btn`, `ease-btn-ghost`, `ease-btn-icon`, `ease-btn-primary`, `ease-btn-sm`, `ease-btn-pill`, `ease-btn-hover`, `ease-hidden`, `ease-lg-hidden` |
| **Hero** | Full-viewport hero with gradient background, product card, CTAs, and stats | `ease-relative`, `ease-overflow-hidden`, `ease-container`, `ease-z-raised`, `ease-flex`, `ease-flex-col`, `ease-lg-flex-row`, `ease-items-center`, `ease-gap-12`, `ease-py-8`, `ease-lg-py-16`, `ease-flex-1`, `ease-text-center`, `ease-lg-text-left`, `ease-inline-flex`, `ease-bg-primary`, `ease-rounded-full`, `ease-text-white`, `ease-text-sm`, `ease-font-medium`, `ease-mb-4`, `ease-slide-in-from-left`, `ease-delay-*`, `ease-pulse`, `ease-text-4xl`, `ease-gradient-text`, `ease-text-lg`, `ease-text-muted`, `ease-mt-4`, `ease-mb-8`, `ease-btn-lg`, `ease-btn-pill`, `ease-btn-hover`, `ease-hover-pulse-glow`, `ease-btn-outline`, `ease-card-hover`, `ease-rounded-xl`, `ease-shadow-xl`, `ease-p-6`, `ease-slide-in-from-right`, `ease-slide-in-from-top`, `ease-block`, `ease-text-2xl`, `ease-float`, `ease-aspect-square`, `ease-bg-neutral`, `ease-rounded-lg`, `ease-flex-wrap`, `ease-bg-success`, `ease-text-xs`, `ease-font-bold`, `ease-uppercase`, `ease-px-3`, `ease-py-1`, `ease-rounded`, `ease-z-raised`, `ease-absolute`, `ease-relative`, `ease-w-full` |
| **Collections** | 6-column grid of collection category cards with icons | `ease-py-16`, `ease-bg-white`, `ease-text-center`, `ease-mb-12`, `ease-fade-in`, `ease-text-3xl`, `ease-grid`, `ease-grid-cols-2`, `ease-md-grid-cols-3`, `ease-lg-grid-cols-6`, `ease-gap-6`, `ease-card`, `ease-card-hover`, `ease-card-shadow`, `ease-w-16`, `ease-h-16`, `ease-mx-auto`, `ease-bg-neutral`, `ease-rounded-xl`, `ease-mb-4`, `ease-center`, `ease-font-bold`, `ease-text-lg`, `ease-text-sm`, `ease-text-muted`, `ease-text-xs`, `ease-delay-*` |
| **Technology** | Feature cards with icon, title, description in 3-column grid | `ease-bg-surface`, `ease-grid-cols-1`, `ease-md-grid-cols-2`, `ease-lg-grid-cols-3`, `ease-gap-8`, `ease-slide-up`, `ease-w-14`, `ease-h-14`, `ease-mb-2`, `ease-rounded-xl` |
| **Drop Calendar** | 4-column product release cards with dates, badges, prices, and notify buttons | `ease-aspect-video`, `ease-overflow-hidden`, `ease-absolute`, `ease-top-3`, `ease-right-3`, `ease-bg-primary`, `ease-bg-success`, `ease-bg-warning`, `ease-bg-danger`, `ease-text-xl`, `ease-font-bold`, `ease-btn-block`, `ease-btn-sm`, `ease-mt-4` |
| **Customer Reviews** | 3-column testimonial cards with star ratings, quotes, and author avatars | `ease-card-shadow`, `ease-flex`, `ease-gap-1`, `ease-text-primary`, `ease-w-10`, `ease-h-10`, `ease-rounded-full`, `ease-bg-info`, `ease-bg-warning`, `ease-bg-danger`, `ease-font-semibold`, `ease-text-xs` |
| **Size Guide** | Full conversion table with fit recommendations and width guidance | `ease-overflow-x-auto`, `ease-w-full`, `ease-border`, `ease-sr-only`, `ease-padding-3`, `ease-text-left`, `ease-font-semibold`, `ease-border-b`, `ease-bg-neutral`, `ease-stack-sm`, `ease-card-accent`, `ease-mt-4` |
| **Newsletter** | Dark section with email input, subscribe button, and gradient background | `ease-bg-primary`, `ease-text-white`, `ease-opacity-*`, `ease-mx-auto`, `ease-input`, `ease-input-lg`, `ease-border-none`, `ease-field`, `ease-mb-0`, `ease-w-full`, `ease-sm-w-auto`, `ease-hover-grow` |
| **Footer** | 5-column footer with brand, navigation, support, shipping, and legal links | `ease-py-12`, `ease-bg-neutral-900`, `ease-text-white`, `ease-sm-grid-cols-2`, `ease-lg-grid-cols-5`, `ease-col-span-*`, `ease-opacity-*`, `ease-border-white`, `ease-my-8`, `ease-gap-6`, `ease-hover-underline`, `ease-hover-grow`, `ease-rounded-full`, `ease-stack-sm`, `ease-uppercase`, `ease-tracking-wider` |

## Responsive Design Notes

- **Mobile-first** approach throughout with responsive breakpoints at 640px (sm), 768px (md), 1024px (lg), and 1280px (xl)
- **Navigation** collapses to hamburger menu on screens below 1024px with JavaScript toggle
- **Grid layouts** adapt from single column on mobile to full multi-column on desktop:
  - Collections: 2 → 3 → 6 columns
  - Technology: 1 → 2 → 3 columns
  - Drop Calendar: 1 → 2 → 4 columns
  - Reviews: 1 → 2 → 3 columns
  - Footer: 1 → 2 → 5 columns
- **Hero** stacks vertically on mobile, side-by-side on desktop
- **Typography** uses `clamp()` for fluid sizing and adjusts heading sizes on small screens
- **Spacing** reduces padding on mobile via framework breakpoints
- **Size table** becomes horizontally scrollable on narrow screens
- **Newsletter form** stacks vertically on mobile, inline on desktop
- **Footer** columns collapse from 5 to 2 on tablet, 1 on mobile
- **Touch targets** — buttons and links sized appropriately for mobile interaction

## Accessibility Considerations

- **Semantic HTML5** — Uses `<header>`, `<nav>`, `<section>`, `<article>`, `<blockquote>`, `<footer>` with proper landmarks
- **ARIA attributes** — `role="banner"`, `role="region"`, `aria-label`, `aria-expanded`, `aria-hidden`
- **Heading hierarchy** — Single `<h1>`, followed by `<h2>` for sections, `<h3>` for cards, maintaining logical document outline
- **Screen reader support** — `.ease-sr-only` class for screen-reader-only captions and labels
- **Focus management** — Visible focus indicators on all interactive elements; navigation links receive focus styles
- **Color contrast** — White text on dark backgrounds, dark text on light surfaces, accessible badge colors
- **Reduced motion** — All animations respect `prefers-reduced-motion: reduce` via both EaseMotion CSS and custom overrides
- **Keyboard navigation** — All interactive elements are accessible via keyboard
- **Form labels** — Email input has an associated `<label>` (visually hidden with `.ease-sr-only` for cleaner design)
- **Images** — Decorative SVGs have `aria-hidden="true"` to prevent screen reader announcement
- **Lists** — Navigation menus use `<ul>` and `<li>` for proper list semantics
- **Quote elements** — Testimonials use `<blockquote>` for semantic quotation

## Sneaker-Inspired Design Goals

- **Bold, premium aesthetic** — Dark hero section with gradient overlays creates a dramatic, high-end feel reminiscent of major sneaker brand marketing
- **Energetic purple/indigo palette** — The primary `#6c63ff` purple conveys creativity, ambition, and premium quality — aligning with sneaker culture's vibrant identity
- **Gradient accents** — Multiple gradient styles throughout sections add visual depth and modern energy
- **Card-based layouts** — Clean, structured content presentation with hover elevation effects mirroring product browsing experiences
- **Large visual hierarchy** — Oversized headline with gradient text treatment commands attention
- **Performance-focused language** — Copy emphasizes innovation, technology, and athletic performance — speaking to both athletes and fashion-conscious consumers
- **Social proof** — Reviews, stats counters, and verified buyer badges build trust and credibility
- **Scarcity markers** — "Limited", "Selling Fast", "Almost Gone" badges create urgency
- **Fluid animations** — Staggered entrance animations guide the user's eye down the page naturally
- **Floating product card** — Animated float effect on the hero product image creates dynamic visual interest

## EaseMotion CSS Classes Showcased

### Entrance Animations
- `ease-fade-in` — Fade in with scale
- `ease-slide-up` — Slide up while fading in
- `ease-slide-in-from-left` — Slide in from left edge
- `ease-slide-in-from-right` — Slide in from right edge
- `ease-slide-in-from-top` — Slide in from top edge
- `ease-float` — Continuous floating animation
- `ease-pulse` — Pulsing opacity animation
- `ease-delay-*` — Staggered animation delays (75ms through 1000ms)

### Hover Interactions
- `ease-hover-underline` — Animated underline on hover
- `ease-hover-grow` — Scale up on hover
- `ease-hover-pulse-glow` — Combined pulse and glow on hover
- `ease-hover-lift` — Lift with shadow on hover
- `ease-btn-hover` — Button lift + glow on hover
- `ease-card-hover` — Card lift with elevated shadow on hover
- `ease-squish-button` — Squish animation on button click

### Card Components
- `ease-card` — Base card with border, radius, padding
- `ease-card-hover` — Hoverable card with lift effect
- `ease-card-shadow` — Card with shadow variant
- `ease-card-accent` — Card with colored left border accent

### Button Components
- `ease-btn` — Base button component
- `ease-btn-primary` — Primary colored button
- `ease-btn-outline` — Outline style button
- `ease-btn-ghost` — Ghost (transparent) button
- `ease-btn-hover` — Hover lift + glow effect
- `ease-btn-sm` — Small button size
- `ease-btn-lg` — Large button size
- `ease-btn-pill` — Fully rounded button
- `ease-btn-icon` — Icon-only button
- `ease-btn-block` — Full width button

### Grid System
- `ease-grid` — Display grid
- `ease-grid-cols-1` through `ease-grid-cols-6` — Column count
- `ease-gap-*` — Gap spacing (1, 2, 3, 4, 6, 8)
- `ease-col-span-*` — Column span utilities
- `ease-grid-auto` — Auto-fit responsive columns

### Flexbox Utilities
- `ease-flex` — Display flex
- `ease-flex-col` / `ease-flex-row` — Direction
- `ease-flex-wrap` — Wrap behavior
- `ease-flex-1` — Flex grow shorthand
- `ease-items-center` / `ease-items-start` — Cross-axis alignment
- `ease-justify-center` / `ease-justify-between` — Main-axis alignment
- `ease-center` — Center everything shorthand
- `ease-stack-sm` / `ease-stack` — Vertical stack with gap
- `ease-hstack` — Horizontal stack with gap

### Text & Typography
- `ease-text-xs` through `ease-text-4xl` — Font size scale
- `ease-font-light` through `ease-font-bold` — Font weight
- `ease-text-center` / `ease-text-left` — Text alignment
- `ease-text-primary` / `ease-text-muted` / `ease-text-white` / `ease-text-warning` — Color
- `ease-uppercase` / `ease-font-semibold` — Text transform and weight
- `ease-truncate` / `ease-truncate-2` / `ease-truncate-3` — Text truncation
- `ease-gradient-text` / `ease-gradient-text-animated` — Gradient text
- `ease-shimmer-text` — Animated shimmer on text
- `ease-highlight-text` — Highlighted text background
- `ease-text-stroke` — Text stroke effect

### Spacing Utilities
- `ease-p-6`, `ease-px-3`, `ease-py-*`, `ease-padding-3` — Padding
- `ease-m-*`, `ease-mt-*`, `ease-mb-*`, `ease-mx-auto`, `ease-my-8` — Margin
- `ease-gap-*` — Gap (1-16 spacing scale)

### Layout & Display
- `ease-container` — Responsive container with max-width
- `ease-block` / `ease-inline` / `ease-hidden` — Display
- `ease-w-full` / `ease-w-auto` — Width
- `ease-h-full` / `ease-h-screen` — Height
- `ease-relative` / `ease-absolute` / `ease-sticky` — Positioning
- `ease-overflow-hidden` / `ease-overflow-x-auto` — Overflow control
- `ease-z-raised` — Z-index layer

### Visual Enhancements
- `ease-rounded` / `ease-rounded-sm` / `ease-rounded-lg` / `ease-rounded-xl` / `ease-rounded-full` — Border radius
- `ease-shadow` / `ease-shadow-sm` / `ease-shadow-lg` / `ease-shadow-xl` — Box shadow
- `ease-border` / `ease-border-b` — Border helpers
- `ease-bg-primary` / `ease-bg-success` / `ease-bg-danger` / `ease-bg-warning` / `ease-bg-info` / `ease-bg-neutral` / `ease-bg-white` / `ease-bg-surface` — Background colors
- `ease-opacity-*` — Opacity scale (0, 25, 50, 75, 100)
- `ease-cursor-pointer` — Cursor style
- `ease-aspect-square` / `ease-aspect-video` — Aspect ratio
- `ease-object-cover` — Object fit
- `ease-sr-only` — Screen reader only
- `ease-backdrop-blur` / `ease-backdrop-blur-sm` — Backdrop blur
- `ease-gradient-rotation` — Animated gradient background

### Form Components
- `ease-field` — Form field container
- `ease-input` / `ease-input-lg` — Text input
- `ease-sr-only` — Screen reader label

### Responsive Variants (sm, md, lg, xl)
- `ease-sm-flex-row`, `ease-sm-hidden`, `ease-sm-w-auto`, `ease-sm-grid-cols-*`
- `ease-md-grid-cols-*`, `ease-md-flex-row`, `ease-md-inline`
- `ease-lg-flex-row`, `ease-lg-hidden`, `ease-lg-grid-cols-*`, `ease-lg-w-full`
- `ease-xl-grid-cols-*`

### Reveal System
- `ease-reveal` / `ease-reveal-active` — Scroll-triggered reveal
- `ease-reveal-up` / `ease-reveal-down` / `ease-reveal-left` / `ease-reveal-right` / `ease-reveal-scale` — Directional reveals
- `ease-reveal-fade` / `ease-reveal-slide-up` / `ease-reveal-slide-down` / `ease-reveal-slide-left` / `ease-reveal-slide-right` / `ease-reveal-zoom` / `ease-reveal-blur` — Convenience reveal classes
- `ease-reveal-delay-*` — Reveal delay variants

## File Structure

```
submissions/examples/footwear-ecommerce-page-nb/
├── demo.html     ← Complete footwear e-commerce landing page
├── style.css     ← Custom styles (brand colors, responsive, animations)
└── README.md     ← This documentation file
```

## Browser Support

Works in all modern browsers that support CSS Grid, Flexbox, CSS custom properties, and `backdrop-filter`:
- Chrome 84+
- Firefox 80+
- Safari 14+
- Edge 84+

## License

Part of the EaseMotion CSS repository example submissions.