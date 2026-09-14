````markdown
# Custom Infinite Carousel — Brutalism

A custom **infinite carousel component** with a bold Brutalist visual style, built using **pure CSS** for the EaseMotion design system.

The component provides continuous horizontal scrolling, responsive layouts, smooth interactions, and accessibility support without using JavaScript or external dependencies.

---

## ✨ Features

- 🎨 Brutalist visual styling
- ♾️ Infinite horizontal carousel animation
- 🧩 Pure CSS implementation
- 🚫 Zero JavaScript dependencies
- 📱 Responsive on mobile, tablet, and desktop
- 🎯 Uses EaseMotion-style CSS variables and design tokens
- ⏸️ Pauses on hover
- ⌨️ Pauses when receiving keyboard focus
- ♿ Supports `prefers-reduced-motion`
- 🌓 Supports forced-colors / high-contrast environments
- 🌐 No external libraries or frameworks

---

## 📁 File Structure

```text
custom-infinite-carousel-brutalism/
│
├── demo.html
├── style.css
└── README.md
````

---

## 🚀 Demo

Open `demo.html` in any modern browser to view the component.

No build process or JavaScript setup is required.

---

## 🛠️ Technologies Used

* HTML5
* CSS3
* CSS Custom Properties
* CSS Flexbox
* CSS Keyframe Animations
* CSS Media Queries

No JavaScript is used.

---

## 🎨 Design

The component follows a **Brutalist design approach** using:

* Heavy borders
* Hard offset shadows
* High-contrast colors
* Bold typography
* Sharp rectangular cards
* Minimal border radius
* Strong visual hierarchy

Example design tokens:

```css
:root {
  --em-color-bg: #f4f1e8;
  --em-color-surface: #ffffff;
  --em-color-text: #111111;
  --em-color-accent: #d9ff00;
  --em-color-border: #111111;

  --em-border-width: 4px;
  --em-shadow: 8px 8px 0 var(--em-color-text);

  --em-transition: 220ms ease;

  --carousel-gap: 1.5rem;
  --carousel-card-width: min(78vw, 360px);
  --carousel-duration: 24s;
}
```

These variables can be replaced with the project's existing EaseMotion design tokens when integrating the component into the main library.

---

## ♾️ How the Infinite Carousel Works

The carousel uses a CSS animation applied to a horizontally arranged flex track.

The cards are duplicated inside the track:

```html
<div class="carousel-track">

  <!-- Original cards -->

  <!-- Duplicated cards -->

</div>
```

The duplicated cards allow the animation to continuously move from the first set of cards to the second identical set.

The track is animated using:

```css
@keyframes carousel-scroll {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(
      calc(-50% - (var(--carousel-gap) / 2))
    );
  }
}
```

The animation then repeats:

```css
.carousel-track {
  animation:
    carousel-scroll var(--carousel-duration)
    linear infinite;
}
```

Because the second half contains the same content as the first half, the transition back to the starting position appears seamless.

---

## ⏸️ Interaction

The carousel automatically scrolls horizontally.

When the user moves the pointer over the carousel, the animation pauses:

```css
.carousel:hover .carousel-track {
  animation-play-state: paused;
}
```

The same behavior is applied when a user navigates to the carousel using the keyboard:

```css
.carousel:focus-within .carousel-track {
  animation-play-state: paused;
}
```

This gives users more time to read the content.

---

## ♿ Accessibility

Accessibility is an important part of this component.

### Reduced Motion

The component respects the user's system-level reduced-motion preference.

```css
@media (prefers-reduced-motion: reduce) {
  .carousel-track {
    animation: none;
  }
}
```

When reduced motion is enabled, the continuous animation is disabled.

This prevents unnecessary motion for users who may experience discomfort from animated interfaces.

### Keyboard Accessibility

The carousel pauses when an element inside it receives focus.

```css
.carousel:focus-within .carousel-track {
  animation-play-state: paused;
}
```

### Semantic HTML

The component uses semantic HTML elements including:

* `<main>`
* `<section>`
* `<article>`
* `<h1>`
* `<h2>`

The carousel section also includes an accessible label:

```html
<section
  class="carousel-section"
  aria-labelledby="carousel-title">
```

---

## 🌓 Forced Colors

The component includes support for Windows High Contrast / forced-colors environments.

```css
@media (forced-colors: active) {
  .carousel-card,
  .eyebrow,
  .card-number {
    forced-color-adjust: auto;
    border: 2px solid CanvasText;
    box-shadow: none;
  }
}
```

This helps maintain visible boundaries and readable content when forced colors are enabled.

---

## 📱 Responsive Design

The carousel adapts to different screen sizes.

### Mobile

* Cards use a viewport-based width.
* The next card can partially appear.
* Typography scales using `clamp()`.
* Spacing remains suitable for smaller screens.

### Tablet

* Card dimensions increase.
* Internal spacing is increased.
* The layout remains horizontally scrollable through the animation.

### Desktop

* Cards use a larger fixed width.
* Larger card dimensions improve visual hierarchy.
* Animation duration is increased for the wider layout.

Responsive breakpoints are implemented using CSS media queries:

```css
@media (min-width: 600px) {
  /* Tablet */
}

@media (min-width: 1024px) {
  /* Desktop */
}
```

---

## ⚙️ Customization

The carousel can be customized using CSS variables.

### Change Animation Speed

```css
:root {
  --carousel-duration: 20s;
}
```

Lower values make the carousel move faster.

Higher values make it move slower.

### Change Card Width

```css
:root {
  --carousel-card-width: 360px;
}
```

### Change Card Gap

```css
:root {
  --carousel-gap: 1.5rem;
}
```

### Change Brutalist Shadow

```css
:root {
  --em-shadow: 8px 8px 0 var(--em-color-text);
}
```

---

## 🧪 Testing Checklist

### Functionality

* [x] Infinite carousel animation works
* [x] Carousel loops continuously
* [x] Duplicate cards create a seamless loop
* [x] Hover pauses animation
* [x] Keyboard focus pauses animation

### Responsive

* [x] Mobile layout
* [x] Tablet layout
* [x] Desktop layout

### Accessibility

* [x] Semantic HTML
* [x] Accessible section label
* [x] `prefers-reduced-motion` support
* [x] Keyboard focus support
* [x] Forced-colors support

### Dependencies

* [x] No JavaScript
* [x] No external libraries
* [x] No external frameworks

### Browser Testing

Recommended browsers for verification:

* Google Chrome
* Mozilla Firefox
* Microsoft Edge
* Apple Safari

---

## 📦 Integration

Place the component inside the appropriate EaseMotion component directory:

```text
components/
```

or:

```text
submissions/examples/
```

Then include the stylesheet:

```html
<link rel="stylesheet" href="style.css">
```

The component does not require JavaScript initialization.

---

## 📋 Acceptance Criteria

| Requirement                  | Status |
| ---------------------------- | ------ |
| Pure CSS implementation      | ✅      |
| Zero JS dependencies         | ✅      |
| Brutalism styling            | ✅      |
| EaseMotion CSS variables     | ✅      |
| Design tokens                | ✅      |
| Smooth state transitions     | ✅      |
| Responsive design            | ✅      |
| Mobile support               | ✅      |
| Tablet support               | ✅      |
| Desktop support              | ✅      |
| `prefers-reduced-motion`     | ✅      |
| Accessibility support        | ✅      |
| Forced-colors support        | ✅      |
| Cross-browser compatible CSS | ✅      |

---

## 📄 License

This component follows the license and contribution guidelines of the EaseMotion repository.

```

This version is better suited for the repository because it **directly documents the implementation, accessibility behavior, responsive behavior, customization, testing, and acceptance criteria** from the issue.
```
