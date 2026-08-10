# CSS Bounce-Pulse Carousel for Minimalist Tech Layouts

A pure HTML5 and CSS3 showcase component implementing elastic bounce scale slide reveals and pulsing beacon indicators for telemetry hubs and developer consoles.

---

## 1. Overview

The **CSS Bounce-Pulse Carousel** provides a responsive slide interface where active content panels reveal with an elastic spring bounce scale keyframe (`@keyframes slide-bounce-in`) and pulsing beacon rings (`@keyframes beacon-ring-pulse`). Built operating without JavaScript dependencies, it uses standard HTML radio controls paired with CSS custom properties to adhere to **EaseMotion CSS** standards.

---

## 2. Features

- **Pure HTML5 & CSS3**: 100% dependency-free HTML and CSS.
- **Elastic Bounce Slide Reveal**: Spring scale keyframe reveals on active slide transitions.
- **Pulsing Beacon Ring**: Radial expanding pulse rings on active pagination controls.
- **Glassmorphism Viewport**: Dark mode glassmorphism card viewport with accent status indicators.
- **Accessibility Ready**: `role="region"`, `role="slide"`, and `aria-roledescription="carousel"` markup, keyboard focus visible indicators, and `prefers-reduced-motion` support.
- **Fully Responsive**: Touch-friendly navigation controls and responsive slide metric layouts.

---

## 3. Folder Structure

```text
submissions/examples/css-bounce-pulse-carousel-64418/
├── demo.html    # Interactive HTML showcase page
├── style.css    # Complete CSS stylesheet
└── README.md    # Documentation and usage guide
```

---

## 4. Usage

To integrate the **CSS Bounce-Pulse Carousel** into your project:

1. Include `style.css` in your HTML `<head>`.
2. Add radio input controllers (`<input type="radio" name="bounce-slides">`).
3. Associate `<label>` arrow and dot pagination controls to radio `id` attributes.

---

## 5. HTML Example

```html
<div class="bounce-carousel-wrapper" role="region" aria-roledescription="carousel">
  <!-- Radio Controllers -->
  <input type="radio" name="bounce-slides" id="slide-radio-1" class="carousel-radio" checked aria-hidden="true">
  <input type="radio" name="bounce-slides" id="slide-radio-2" class="carousel-radio" aria-hidden="true">

  <!-- Viewport & Track -->
  <div class="carousel-viewport">
    <div class="carousel-track">
      <article class="carousel-slide slide-1" aria-roledescription="slide">
        <h2>Telemetry Stream Engine</h2>
      </article>
      <article class="carousel-slide slide-2" aria-roledescription="slide">
        <h2>Event Hub Router</h2>
      </article>
    </div>
  </div>

  <!-- Pagination -->
  <nav class="carousel-pagination">
    <label for="slide-radio-1" class="dot-btn dot-1" tabindex="0" role="button">
      <span class="beacon-ring" aria-hidden="true"></span>
    </label>
    <label for="slide-radio-2" class="dot-btn dot-2" tabindex="0" role="button">
      <span class="beacon-ring" aria-hidden="true"></span>
    </label>
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
| `--transition-spring` | `0.45s cubic-bezier(0.34, 1.56, 0.64, 1)` | Elastic bounce spring curve |

---

## 7. Customization

Customize bounce timing or accent colors by overriding custom properties:

```css
.bounce-carousel-wrapper {
  --accent-cyan: #ff0055;
  --transition-spring: 0.35s ease-out;
}
```

---

## 8. Accessibility

- **Keyboard Focus**: Focus visible rings (`:focus-visible`) provide clear focus states on control labels.
- **ARIA Attributes**: Built with `role="region"`, `aria-roledescription="carousel"`, and `aria-roledescription="slide"`.
- **Reduced Motion**: Disables elastic bounce keyframes and beacon pulse rings under `@media (prefers-reduced-motion: reduce)`.

---

## 9. Responsive Behaviour

- **Desktop**: Floating side arrow controls with multi-column slide metric cards.
- **Mobile/Tablet**: Bottom inline arrow controls with responsive single-column layout.

---

## 10. Browser Compatibility

- Google Chrome (latest)
- Mozilla Firefox (latest)
- Apple Safari (latest)
- Microsoft Edge (latest)
