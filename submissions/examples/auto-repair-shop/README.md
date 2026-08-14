# Precision Auto Care - Certified Auto Repair Shop Landing Page

A complete, trustworthy, ready-to-copy automotive repairs business page built using **EaseMotion CSS** layout tokens, animation utilities, and core component styles.

This page features a highly structured, technical design aesthetic using Chakra Petch and Inter typography, with safety-yellow accents to reflect automotive diagnostics.

---

## 🎨 Showcased Sections
1. **Technical Hero Section**: Prominent service CTAs next to a floating mock OBD2 Diagnostic Check Scanner telemetry widget.
2. **Services Grid**: Structured service cards displaying descriptions and pricing for synthetic oil changes, brake repairs, and diagnostics.
3. **Why Choose Us Section**: Outline of customer guarantees (24/24 warranty, shuttle service) next to a mechanical certified shop card.
4. **Pricing Coupons Grid**: Styled seasonal promotion coupons with dashed cut-out borders, hover shimmer effects, and mock claim clicks.
5. **Customer Reviews**: Testimonials from car owners who rely on Precision Auto for scheduled vehicle maintenance.
6. **Appointment Booking Card**: Easy registration form to reserve service time slots and load coupon codes.
7. **dealership Location & Hours**: Hours of operation card.
8. **Toast Notifications**: System notifications reflecting slot reservation feedbacks.

---

## 🚀 Showcased EaseMotion CSS Classes

### 1. Entrance & Interactive Hover Animations
- `.ease-fade-in`: Entrance transitions on tiny trust badges.
- `.ease-slide-in-left` & `.ease-slide-in-right`: Slide-in transitions for hero typography and visual mockup components.
- `.ease-float`: Looping floating translation applied to the diagnostic scanner widget.
- `.ease-bounce`: Looping bounce applied to icons and headers.
- `.ease-reveal` (with `core/reveal.js`): Automatically triggers scroll-entrance classes.
- `.ease-reveal-up`, `.ease-reveal-scale`, `.ease-reveal-left`, `.ease-reveal-right`: Composed reveal direction behaviors.
- `.ease-reveal-delay-1` to `.ease-reveal-delay-3`: Staggered timing for listing sequences.
- `.ease-hover-shimmer`: Dynamic overlay light swipe applied to coupon cards on hover.

### 2. Layout & Spacings
- Cascade layer safety: `@layer easemotion-base`, `easemotion-components`, `easemotion-utilities`.
- Flex utilities: `.ease-flex`, `.ease-flex-col`, `.ease-items-center`, `.ease-justify-between`, `.ease-center`.
- Grid layout: `.ease-grid`.
- Custom margins/padding tokens: `var(--ease-space-1)` through `var(--ease-space-16)`.

### 3. Components
- `.ease-card`: Base layout card wrap.
- `.ease-card-hover`: Composed dynamic card hover transitions.
- `.ease-card-glow`: Custom safety-yellow border glow.
- `.ease-card-title` & `.ease-card-subtitle`: Typographic semantic structure helpers.
- `.ease-btn`, `.ease-btn-primary`, `.ease-btn-outline`: Highly styled, accessible button variants.
- `.ease-badge`, `.ease-badge-success`, `.ease-badge-primary`: Composed indicator tags.
- `.ease-toast`, `.ease-toast-success`, `.ease-toast-danger`, `.ease-toast-info`, `.ease-toast-fixed-bottom-right`: Interactive system toasts.
- `.ease-form-group`, `.ease-form-label`, `.ease-form-input`, `.ease-form-select`, `.ease-form-textarea`: Form layout inputs.

---

## 📂 File Structure
```bash
auto-repair-shop/
├── demo.html    # Core page layout, coupon binders & appointment scripts
├── style.css    # Typography, design tokens & mechanical-themed styling
└── README.md    # Showcase list and documentation
```

## 🛠️ Usage
No build steps required. Simply open `demo.html` directly in any web browser to view the premium interactive animations, transitions, and full responsive design.
