# Dance Studio Business Landing Page (#21805)

## 1. What does this do?

It provides a complete, browser-ready dance studio landing page for Velora Dance Studio with a premium hero, class categories, weekly schedule, instructor profiles, student performances, trial class form, testimonials, membership plans, FAQ, and footer.

## 2. How is it used?

Open `demo.html` directly in a browser and use the page as a standalone EaseMotion CSS submission. The layout relies on existing EaseMotion classes for buttons, cards, forms, and motion, for example:

```html
<a
  class="ease-btn ease-btn-primary ease-btn-lg ease-btn-pill ease-btn-hover ease-hover-shimmer"
  href="#trial-form"
>
  Join a Class
</a>
```

## 3. Why is it useful?

It shows how existing EaseMotion CSS components and animation utilities can be composed into a polished full-page business landing experience without JavaScript, build tooling, external images, or third-party assets.

## Folder Structure

```text
submissions/examples/21805-dance-studio-landing-gpt/
├── demo.html
├── style.css
└── README.md
```

## EaseMotion Classes Used

- `ease-fade-in`, `ease-slide-in-left`, `ease-slide-in-right`, `ease-slide-up`
- `ease-delay-100`, `ease-delay-200`, `ease-delay-300`, `ease-delay-400`, `ease-delay-500`
- `ease-btn`, `ease-btn-primary`, `ease-btn-outline`, `ease-btn-lg`, `ease-btn-pill`, `ease-btn-hover`
- `ease-hover-shimmer`, `ease-hover-lift`, `ease-hover-grow`, `ease-hover-glow`
- `ease-card`, `ease-card-shadow`, `ease-card-hover`, `ease-card-glass`
- `ease-field`, `ease-field-label`, `ease-input`, `ease-select`

## Responsive Behaviour

- The hero switches from a two-column composition to a stacked layout on narrower screens.
- CTA buttons expand to full width on mobile for cleaner tap targets.
- Class, instructor, performance, testimonial, and pricing grids collapse progressively from 3 columns to 2 and then 1.
- The weekly schedule remains readable on small screens through horizontal overflow instead of forcing cramped columns.

## Animations

- Hero content uses entrance motion with `ease-slide-in-left` and `ease-slide-in-right`.
- Section cards use staggered `ease-slide-up` timing helpers for progressive reveal.
- Buttons and cards use existing EaseMotion hover effects such as `ease-hover-shimmer`, `ease-hover-lift`, `ease-hover-grow`, and `ease-hover-glow`.

## Accessibility Considerations

- Semantic landmarks are used for header, main content, sections, navigation, and footer.
- A skip link is included for keyboard users.
- The schedule is marked up as a real data table with `caption`, `thead`, and row headers.
- Form fields use explicit labels.
- The hero illustration is embedded inline in `demo.html`, so the page does not depend on external assets to render.

## Issue #21805 Section Checklist

- Hero with dance-themed imagery and primary CTAs
- Class categories: Ballet, Hip-Hop, Contemporary, Salsa, Classical, Kids
- Weekly schedule
- Instructor profiles
- Student performances showcase
- Trial class form
- Testimonials
- Membership plans
- FAQ
- Footer
