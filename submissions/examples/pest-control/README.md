# BugShield Environmental - Pest Control Landing Page

A complete, no-nonsense residential home services business page built using **EaseMotion CSS** layout tokens, animation utilities, and core component styles.

This landing page serves as a showcase of clean typography (Plus Jakarta Sans and Inter) and high-trust, eco-friendly design aesthetics.

---

## 🎨 Showcased Sections
1. **Emergency Service CTA**: High-priority alert banner at the top of the header.
2. **Hero Section**: Features custom guarantee trust messaging beside a floating visual Home Protection status monitor shield widget.
3. **Services Grid**: Lists target treatments (Rodent Exclusion, Termites, Insects) with card-glow highlights.
4. **Treatment Process Timeline**: Composes a clean vertical 4-step timeline demonstrating structural inspection, targeted application, and entry sealing processes.
5. **Coverage Area Map**: Side-by-side local suburban maps showing active dispatch zones with zipcode verification logic.
6. **Pricing Plans**: Compares one-time vs quarterly seasonal contracts.
7. **Customer Reviews**: Feedback from homeowners who restored peace of mind.
8. **Inspection Booking Card**: Integrated form requesting detailed inspection quotes.
9. **Toast Notifications**: System notifications reflecting zipcode checking outcomes.

---

## 🚀 Showcased EaseMotion CSS Classes

### 1. Entrance & Interactive Hover Animations
- `.ease-fade-in`: Entrance transitions on tiny trust badges.
- `.ease-slide-in-left` & `.ease-slide-in-right`: Slide-in transitions for hero typography and visual mockup components.
- `.ease-float`: Looping floating translation applied to the home status widget.
- `.ease-bounce`: Custom bouncing animations on action buttons.
- `.ease-reveal` (with `core/reveal.js`): Automatically triggers scroll-entrance classes.
- `.ease-reveal-up`, `.ease-reveal-scale`, `.ease-reveal-left`, `.ease-reveal-right`: Composed reveal direction behaviors.
- `.ease-reveal-delay-1` to `.ease-reveal-delay-4`: Staggered timing for listing sequences.
- `.ease-pulse`: Blinking pulses applied to the emergency phone icon and scanner nodes.

### 2. Layout & Spacings
- Cascade layer safety: `@layer easemotion-base`, `easemotion-components`, `easemotion-utilities`.
- Flex utilities: `.ease-flex`, `.ease-flex-col`, `.ease-items-center`, `.ease-justify-between`, `.ease-center`.
- Grid layout: `.ease-grid`.
- Custom margins/padding tokens: `var(--ease-space-1)` through `var(--ease-space-16)`.

### 3. Components
- `.ease-card`: Base layout card wrap.
- `.ease-card-hover`: Composed dynamic card hover transitions.
- `.ease-card-glow`: Custom teal border glow.
- `.ease-card-title` & `.ease-card-subtitle`: Typographic semantic structure helpers.
- `.ease-btn`, `.ease-btn-primary`, `.ease-btn-outline`: Highly styled, accessible button variants.
- `.ease-badge`, `.ease-badge-success`, `.ease-badge-primary`: Composed indicator tags.
- `.ease-announce-bar`, `.ease-announce-bar-warning`: Alert bars.
- `.ease-toast`, `.ease-toast-success`, `.ease-toast-danger`, `.ease-toast-info`, `.ease-toast-fixed-bottom-right`: Interactive system toasts.
- `.ease-form-group`, `.ease-form-label`, `.ease-form-input`, `.ease-form-select`: Form input states.

---

## 📂 File Structure
```bash
pest-control/
├── demo.html    # Core page layout, zipcode checker scripts & quotes forms
├── style.css    # Typography, design tokens, maps & timeline layout styling
└── README.md    # Showcase list and documentation
```

## 🛠️ Usage
No build steps required. Simply open `demo.html` directly in any web browser to view the premium interactive animations, transitions, and full responsive design.
