# CSS Scale-Hover Carousel for Minimalist Tech Layouts

A pure HTML5 and CSS3 showcase component implementing interactive scale-hover slide transforms and zoom reveals for developer suites and cloud tools.

---

## 1. Overview

The **CSS Scale-Hover Carousel** provides a responsive slide interface where viewport slide cards scale dynamically on hover (`transform: scale(1.03)`) and reveal with an animated scale-up entrance keyframe (`@keyframes slide-scale-entrance`). Operating completely without JavaScript, it uses HTML radio input controls paired with CSS custom properties to adhere to **EaseMotion CSS** standards.

---

## 2. Features

- **Pure HTML5 & CSS3**: 100% dependency-free HTML and CSS.
- **Interactive Scale-Hover Slide Cards**: Dynamic scaling transforms on hover and active state selection.
- **Glassmorphism Viewport**: Dark mode glassmorphism card viewport with accent status indicators.
- **Arrow & Dot Pagination**: Dual navigation systems linked via pure CSS sibling combinator matching.
- **Accessibility Ready**: `role="region"`, `role="slide"`, and `aria-roledescription="carousel"` markup, keyboard focus visible indicators, and `prefers-reduced-motion` support.
- **Fully Responsive**: Mobile-optimized control layout and responsive feature grids.

---

## 3. Folder Structure

```text
submissions/examples/css-scale-hover-carousel-64414/
├── demo.html    # Interactive HTML showcase page
├── style.css    # Complete CSS stylesheet
└── README.md    # Documentation and usage guide
```

---

## 4. Usage

To integrate the **CSS Scale-Hover Carousel** into your project:

1. Link `style.css` in your HTML `<head>`.
2. Add radio input controllers (`<input type="radio" name="scale-slides">`).
3. Connect `<label>` arrow and dot pagination controls to radio `id` attributes.

---

## 5. HTML Example

```html
<div class="scale-carousel-wrapper" role="region" aria-roledescription="carousel">
  <!-- Radio Controllers -->
  <input type="radio" name="scale-slides" id="slide-radio-1" class="carousel-radio" checked aria-hidden="true">
  <input type="radio" name="scale-slides" id="slide-radio-2" class="carousel-radio" aria-hidden="true">

  <!-- Viewport & Track -->
  <div class="carousel-viewport">
    <div class="carousel-track">
      <article class="carousel-slide slide-1" aria-roledescription="slide">
        <h2>Developer Tooling Suite</h2>
      </article>
      <article class="carousel-slide slide-2" aria-roledescription="slide">
        <h2>Database Mesh Sharding</h2>
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
| `--bg-primary` | `#07090e` | Overall background color |
| `--bg-card` | `rgba(17, 24, 39, 0.85)` | Glass viewport background |
| `--accent-cyan` | `#00f0ff` | Glowing cyan active accent |
| `--accent-emerald` | `#10b981` | Status green accent |
| `--accent-purple` | `#a855f7` | Secondary purple status accent |
| `--transition-scale` | `0.35s cubic-bezier(0.16, 1, 0.3, 1)` | Scale-hover transition curve |

---

## 7. Customization

Customize scale timing or accent glowing shades by overriding custom properties:

```css
.scale-carousel-wrapper {
  --accent-cyan: #ff0055;
  --transition-scale: 0.25s ease-out;
}
```

---

## 8. Accessibility

- **Keyboard Focus**: Focus visible rings (`:focus-visible`) provide clear focus states on control labels.
- **ARIA Attributes**: Built with `role="region"`, `aria-roledescription="carousel"`, and `aria-roledescription="slide"`.
- **Reduced Motion**: Disables scale transforms and keyframe scaling under `@media (prefers-reduced-motion: reduce)`.

---

## 9. Responsive Behaviour

- **Desktop**: Floating side arrow navigation controls with multi-column slide metric cards.
- **Mobile/Tablet**: Bottom inline arrow navigation controls with responsive single-column layout.

---

## 10. Browser Compatibility

- Google Chrome (latest)
- Mozilla Firefox (latest)
- Apple Safari (latest)
- Microsoft Edge (latest)
