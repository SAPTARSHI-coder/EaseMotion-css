# CSS Elastic-Slide Carousel for Minimalist Tech Layouts

A pure HTML5 and CSS3 showcase component implementing elastic overshooting carousel sliding transitions for cloud platforms, tech product suites, and developer portals.

---

## 1. Overview

The **CSS Elastic-Slide Carousel** delivers a responsive sliding carousel featuring an authentic elastic spring curve (`cubic-bezier(0.68, -0.55, 0.265, 1.55)`). Operating completely without JavaScript, it utilizes pure HTML5 radio controls linked with `<label>` arrow and dot pagination controls to adhere to **EaseMotion CSS** standards.

---

## 2. Features

- **Pure HTML5 & CSS3**: 100% dependency-free HTML and CSS.
- **Elastic Eased Transition**: Overshooting spring transition curve creating a polished elastic bounce slide.
- **Glassmorphism Slide Cards**: Dark mode glassmorphism card viewport with accent status indicators.
- **Arrow & Dot Pagination**: Dual navigation systems using pure CSS sibling combinator state matching.
- **Accessibility Ready**: `role="region"`, `role="slide"`, `aria-roledescription="carousel"` markup, keyboard focus visible states, and `prefers-reduced-motion` support.
- **Fully Responsive**: Mobile-optimized control layout and responsive metric grids.

---

## 3. Folder Structure

```text
submissions/examples/css-elastic-slide-carousel-64419/
├── demo.html    # Interactive HTML showcase page
├── style.css    # Complete CSS stylesheet
└── README.md    # Documentation and usage guide
```

---

## 4. Usage

To integrate the **CSS Elastic-Slide Carousel** into your project:

1. Include `style.css` in your HTML `<head>`.
2. Add radio input controllers (`<input type="radio" name="elastic-slides">`).
3. Connect `<label>` arrow and pagination controls to corresponding radio `id` attributes.

---

## 5. HTML Example

```html
<div class="elastic-carousel-wrapper" role="region" aria-roledescription="carousel">
  <!-- Radio Controllers -->
  <input type="radio" name="elastic-slides" id="slide-radio-1" class="carousel-radio" checked aria-hidden="true">
  <input type="radio" name="elastic-slides" id="slide-radio-2" class="carousel-radio" aria-hidden="true">

  <!-- Viewport & Track -->
  <div class="carousel-viewport">
    <div class="carousel-track">
      <article class="carousel-slide slide-1" aria-roledescription="slide">
        <h2>Quantum Compute Engine</h2>
      </article>
      <article class="carousel-slide slide-2" aria-roledescription="slide">
        <h2>Global Mesh Ingress</h2>
      </article>
    </div>
  </div>

  <!-- Pagination -->
  <nav class="carousel-pagination">
    <label for="slide-radio-1" class="dot-btn dot-1" tabindex="0" role="button"></label>
    <label for="slide-radio-2" class="dot-btn dot-2" tabindex="0" role="button"></label>
  </nav>
</div>
```

---

## 6. CSS Custom Properties

| Property | Default Value | Description |
| :--- | :--- | :--- |
| `--bg-primary` | `#07090e` | Overall page background color |
| `--bg-card` | `rgba(17, 24, 39, 0.85)` | Glass viewport background |
| `--accent-cyan` | `#00f0ff` | Glowing cyan active accent |
| `--accent-emerald` | `#10b981` | Status green accent |
| `--accent-purple` | `#a855f7` | Secondary purple status accent |
| `--transition-elastic` | `0.65s cubic-bezier(0.68, -0.55, 0.265, 1.55)` | Elastic overshooting spring easing curve |

---

## 7. Customization

Customize transition curves or glowing accents by overriding CSS custom properties:

```css
.elastic-carousel-wrapper {
  --accent-cyan: #ff0055;
  --transition-elastic: 0.5s ease-out;
}
```

---

## 8. Accessibility

- **Keyboard Navigation**: Arrow buttons and pagination dots include `:focus-visible` focus outlines.
- **ARIA Attributes**: Built with `role="region"`, `aria-roledescription="carousel"`, and `aria-roledescription="slide"`.
- **Reduced Motion**: Disables elastic overshooting easing curves under `@media (prefers-reduced-motion: reduce)`.

---

## 9. Responsive Behaviour

- **Desktop**: Floating side arrow navigation with multi-column slide metric cards.
- **Mobile/Tablet**: Bottom inline arrow navigation controls with responsive stacked metric layouts.

---

## 10. Browser Compatibility

- Google Chrome (latest)
- Mozilla Firefox (latest)
- Apple Safari (latest)
- Microsoft Edge (latest)
