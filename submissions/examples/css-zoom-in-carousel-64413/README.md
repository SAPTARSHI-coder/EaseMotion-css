# CSS Zoom-In Carousel for Minimalist Tech Layouts

A pure HTML5 and CSS3 showcase component implementing scale zoom-in slide reveals for cloud telemetry platforms and real-time analytics consoles.

---

## 1. Overview

The **CSS Zoom-In Carousel** provides a responsive slide interface where active content panels reveal with an animated scale zoom-in keyframe (`@keyframes slide-zoom-in`). Built operating completely without JavaScript dependencies, it uses standard HTML radio controls paired with CSS custom properties adhering to **EaseMotion CSS** standards.

---

## 2. Features

- **Pure HTML5 & CSS3**: 100% dependency-free HTML and CSS.
- **Dynamic Scale Zoom-In Entrance**: Active slide cards scale up smoothly into view.
- **Glassmorphism Viewport**: Dark mode glassmorphism card viewport with accent status indicators.
- **Arrow & Dot Pagination**: Dual navigation systems linked via pure CSS sibling combinator matching.
- **Accessibility Ready**: `role="region"`, `role="slide"`, and `aria-roledescription="carousel"` markup, keyboard focus visible indicators, and `prefers-reduced-motion` support.
- **Fully Responsive**: Mobile-optimized control layout and responsive metric grids.

---

## 3. Folder Structure

```text
submissions/examples/css-zoom-in-carousel-64413/
├── demo.html    # Interactive HTML showcase page
├── style.css    # Complete CSS stylesheet
└── README.md    # Documentation and usage guide
```

---

## 4. Usage

To integrate the **CSS Zoom-In Carousel** into your project:

1. Link `style.css` in your HTML `<head>`.
2. Add radio input controllers (`<input type="radio" name="zoom-slides">`).
3. Connect `<label>` arrow and dot pagination controls to radio `id` attributes.

---

## 5. HTML Example

```html
<div class="zoom-carousel-wrapper" role="region" aria-roledescription="carousel">
  <!-- Radio Controllers -->
  <input type="radio" name="zoom-slides" id="slide-radio-1" class="carousel-radio" checked aria-hidden="true">
  <input type="radio" name="zoom-slides" id="slide-radio-2" class="carousel-radio" aria-hidden="true">

  <!-- Viewport & Track -->
  <div class="carousel-viewport">
    <div class="carousel-track">
      <article class="carousel-slide slide-1" aria-roledescription="slide">
        <h2>Sub-Second Metrics Ingestion</h2>
      </article>
      <article class="carousel-slide slide-2" aria-roledescription="slide">
        <h2>Autonomous Incident Remediation</h2>
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
| `--transition-zoom` | `0.45s cubic-bezier(0.34, 1.56, 0.64, 1)` | Zoom-in transition curve |

---

## 7. Customization

Customize zoom timing or accent glowing shades by overriding custom properties:

```css
.zoom-carousel-wrapper {
  --accent-cyan: #ff0055;
  --transition-zoom: 0.35s ease-out;
}
```

---

## 8. Accessibility

- **Keyboard Focus**: Focus visible rings (`:focus-visible`) provide clear focus states on control labels.
- **ARIA Attributes**: Built with `role="region"`, `aria-roledescription="carousel"`, and `aria-roledescription="slide"`.
- **Reduced Motion**: Disables zoom-in keyframe scaling under `@media (prefers-reduced-motion: reduce)`.

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
