# CSS 3D-Flip Carousel for Minimalist Tech Layouts

A pure HTML5 and CSS3 showcase component implementing 3D perspective card flip slide reveals for developer consoles, cloud orchestrators, and AI pipelines.

---

## 1. Overview

The **CSS 3D-Flip Carousel** delivers a responsive slide carousel featuring 3D perspective viewport depth (`perspective: 1200px`) and Y-axis card rotation entrance reveals (`@keyframes slide-3d-flip-entrance`). Operating completely without JavaScript dependencies, it uses standard HTML radio controls paired with CSS custom properties adhering to **EaseMotion CSS** standards.

---

## 2. Features

- **Pure HTML5 & CSS3**: 100% dependency-free HTML and CSS.
- **3D Perspective Flip Motion**: Realistic 3D Y-axis card flip rotation reveals on active slide transitions.
- **Glassmorphism Viewport**: Dark mode glassmorphism card viewport with accent status indicators.
- **Arrow & Dot Pagination**: Dual navigation controls powered by pure CSS sibling combinator matching.
- **Accessibility Ready**: `role="region"`, `role="slide"`, and `aria-roledescription="carousel"` markup, keyboard focus visible indicators, and `prefers-reduced-motion` support.
- **Fully Responsive**: Mobile-optimized control layout and responsive metric grids.

---

## 3. Folder Structure

```text
submissions/examples/css-3d-flip-carousel-64415/
├── demo.html    # Interactive HTML showcase page
├── style.css    # Complete CSS stylesheet
└── README.md    # Documentation and usage guide
```

---

## 4. Usage

To integrate the **CSS 3D-Flip Carousel** into your application:

1. Include `style.css` in your HTML `<head>`.
2. Add radio input controllers (`<input type="radio" name="flip-slides">`).
3. Connect `<label>` arrow and dot pagination controls to radio `id` attributes.

---

## 5. HTML Example

```html
<div class="flip-carousel-wrapper" role="region" aria-roledescription="carousel">
  <!-- Radio Controllers -->
  <input type="radio" name="flip-slides" id="slide-radio-1" class="carousel-radio" checked aria-hidden="true">
  <input type="radio" name="flip-slides" id="slide-radio-2" class="carousel-radio" aria-hidden="true">

  <!-- Viewport & Track -->
  <div class="carousel-viewport-3d">
    <div class="carousel-track">
      <article class="carousel-slide slide-1" aria-roledescription="slide">
        <h2>Kubernetes Cluster Orchestrator</h2>
      </article>
      <article class="carousel-slide slide-2" aria-roledescription="slide">
        <h2>Neural Compute Pipeline</h2>
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
| `--perspective-depth` | `1200px` | 3D Perspective viewport depth |
| `--transition-3d` | `0.55s cubic-bezier(0.34, 1.56, 0.64, 1)` | Transition curve for 3D flip card reveal |

---

## 7. Customization

Customize 3D perspective depth or active glow colors by overriding custom properties:

```css
.flip-carousel-wrapper {
  --perspective-depth: 1000px;
  --accent-cyan: #ff0055;
}
```

---

## 8. Accessibility

- **Keyboard Focus**: Focus visible rings (`:focus-visible`) provide clear focus states on control labels.
- **ARIA Attributes**: Built with `role="region"`, `aria-roledescription="carousel"`, and `aria-roledescription="slide"`.
- **Reduced Motion**: Disables 3D perspective depth and flip rotation keyframes under `@media (prefers-reduced-motion: reduce)`.

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
