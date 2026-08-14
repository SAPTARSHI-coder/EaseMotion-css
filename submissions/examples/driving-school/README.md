# DriveSafe Academy - Certified Driving School Landing Page

A complete, professional, ready-to-copy driving school landing page built using **EaseMotion CSS** layout tokens, animation utilities, and core component styles.

This page features a friendly, encouraging, and trustworthy automotive/education design aesthetic using Montserrat and Inter typography.

---

## 🎨 Showcased Sections
1. **Friendly Hero Section**: Features custom badges and a floating simulated lesson telemetry widget dashboard.
2. **Course Packages Grid**: Offers 3 clear, styled tiered cards (Starter Permit, License Booster, Master Driver) complete with active glow variants.
3. **Instructor Profiles**: Showcases qualified certified instructors using avatar tags, pass rates, and custom details.
4. **Student Success Stats**: Dynamic stats count-up section that automatically triggers when scrolled into view.
5. **Interactive Calendar Scheduler**: Weekly day-by-day practice slot selector with functional selection, hover feedbacks, and lock state logic.
6. **Student Testimonials**: Quotes from past students highlight their driving course experiences.
7. **Enrollment Form**: Interactive student registration card using clean styled input fields.
8. **Toast Notifications**: Interactive toast alerts that slide in when booking actions occur.

---

## 🚀 Showcased EaseMotion CSS Classes

### 1. Entrance & Looping Animations
- `.ease-fade-in`: Subtitle and small indicator badge transitions.
- `.ease-slide-in-left` & `.ease-slide-in-right`: Slide-in transitions for the hero typography and mockup containers.
- `.ease-float`: Looping floating animation applied to the mock telemetry widget.
- `.ease-bounce`: Custom hover loops and check trigger effects on hero highlights.
- `.ease-reveal` (with `core/reveal.js`): Triggers section entrance classes when scrolled.
- `.ease-reveal-up`, `.ease-reveal-scale`, `.ease-reveal-left`, `.ease-reveal-right`: Composed directions.
- `.ease-reveal-delay-1` to `.ease-reveal-delay-4`: Staggered timing for listing sequences.

### 2. Layout & Utilities
- Composed layout wrappers: `@layer easemotion-base`, `easemotion-components`, `easemotion-utilities`.
- Flex utilities: `.ease-flex`, `.ease-flex-col`, `.ease-items-center`, `.ease-justify-between`, `.ease-center`.
- Grid utilities: `.ease-grid`.
- Custom margins/padding design tokens: `var(--ease-space-1)` to `var(--ease-space-16)`.

### 3. Components
- `.ease-card`: Base layout card wrap.
- `.ease-card-hover`: Composed lifting card states.
- `.ease-card-glow`: Orange colored border-glow outline.
- `.ease-card-title` & `.ease-card-subtitle`: Typographic semantic structure helpers.
- `.ease-btn`, `.ease-btn-primary`, `.ease-btn-outline`: Highly styled, accessible button variants.
- `.ease-badge`, `.ease-badge-success`, `.ease-badge-primary`: Composed indicator tags.
- `.ease-toast`, `.ease-toast-success`, `.ease-toast-danger`, `.ease-toast-info`, `.ease-toast-fixed-bottom-right`: Interactive system toasts.
- `.ease-form-group`, `.ease-form-label`, `.ease-form-input`, `.ease-form-select`, `.ease-form-textarea`: Form control styles.

---

## 📂 File Structure
```bash
driving-school/
├── demo.html    # Core page layout, stats count-up script & interactive scheduler
├── style.css    # Typography, specific design tokens, calendar & dashboard widget styling
└── README.md    # Showcase list and documentation
```

## 🛠️ Usage
No build steps required. Simply open `demo.html` directly in any web browser to view the premium interactive animations, transitions, and full responsive design.
