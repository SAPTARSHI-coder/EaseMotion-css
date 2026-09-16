# Responsive Hero Banner Section Component with Material Design Styling (`ease-hero-banner-material`)

A pure HTML + Vanilla CSS Responsive Hero Banner Section component featuring Google Material Design 3 surface containers (`28px` border-radius), Material purple color palette (`#6750a4`), responsive 2-column grid layout, primary and outlined pill CTA buttons (`.material-btn`), interactive visual showcase card with performance stat badge ("99.9% Performance"), keyboard focus states, dark/light theme adaptation, and reduced motion fallbacks without any JavaScript or external dependencies.

## Features

- **Pure HTML + CSS**: 100% responsive Material Design Hero Banner Section UI without JavaScript, external fonts, canvas engines, or build scripts. Works offline.
- **Material Design 3 Aesthetic**: Material surface containers (`border-radius: 28px`), Material purple primary accent, elevation shadows, eyebrow text badge, and pill-shaped CTA buttons.
- **100% Accessible**: Uses semantic HTML5 `<section class="ease-hero-banner-material">`, `<h1>`, `<p>`, and `<a class="material-btn">`. Includes explicit focus rings (`:focus-visible`) and `@media (prefers-reduced-motion: reduce)` fallbacks (`transition: none !important; animation: none !important;`).
- **Theme Adaptability**: Supports light Material default presentation (`#fef7ff`) and dark mode adaptation (`@media (prefers-color-scheme)`).

## Usage

Include `style.css` and use semantic HTML:

```html
<section class="ease-hero-banner-material">
  <div class="hero-content-wrapper">
    <div class="hero-text-block">
      <span class="eyebrow-badge">MATERIAL DESIGN 3 UTILITY</span>
      <h1 class="hero-headline">Build Next-Gen Apps With Seamless Motion</h1>
      <p class="hero-description">
        Experience Google Material Design principles engineered with zero
        JavaScript dependencies...
      </p>
      <div class="hero-cta-group">
        <a href="#get-started" class="material-btn btn-primary">Get Started</a>
        <a href="#documentation" class="material-btn btn-outlined"
          >Explore Docs</a
        >
      </div>
    </div>
  </div>
</section>
```

### Customization Variables

```css
.ease-hero-banner-material {
  --md-surface: #ffffff;
  --md-surface-variant: #f3edf7;
  --md-primary: #6750a4;
  --md-text: #1c1b1f;
}
```

## How to View

Open [`demo.html`](file:///Users/tanvitiwari/EaseMotion-css/submissions/examples/85615-responsive-hero-banner-material/demo.html) directly in any modern web browser to view the Responsive Material Hero Banner Section UI offline.
