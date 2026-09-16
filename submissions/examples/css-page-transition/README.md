# CSS Page Transition Effect

A lightweight page transition effect using the modern **CSS View Transitions API**.

The component provides smooth fade and slide animations during document navigation without requiring an external JavaScript animation library.

## ✨ Features

* Pure HTML and CSS
* CSS View Transitions API
* Fade and slide page transitions
* No external dependencies
* Responsive design
* CSS Custom Properties
* Keyboard-friendly navigation
* Visible focus states
* `prefers-reduced-motion` support
* Progressive enhancement

## 📂 Folder Structure

```text
css-page-transition/
├── demo.html
├── style.css
└── README.md
```

## 🚀 Usage

Add the stylesheet to the page:

```html
<link rel="stylesheet" href="style.css">
```

The transition is enabled with:

```css
@view-transition {
    navigation: auto;
}
```

For pages using the same transition setup, the browser can animate the old and new document states during navigation.

## 🎬 Transition Effects

The example includes:

* Fade-out for the previous page
* Fade-in for the new page
* Horizontal slide transition
* Smooth CSS keyframe animations

Example:

```css
::view-transition-new(page-content) {
    animation: pageSlideIn 420ms ease both;
}
```

## 🎨 CSS Custom Properties

The component uses CSS variables for easy customization:

| Variable          | Purpose                      |
| ----------------- | ---------------------------- |
| `--bg`            | Main page background         |
| `--surface`       | Card background              |
| `--surface-soft`  | Secondary background         |
| `--text`          | Primary text color           |
| `--muted`         | Secondary text               |
| `--primary`       | Accent color                 |
| `--primary-dark`  | Dark accent                  |
| `--primary-soft`  | Accent background            |
| `--border`        | Border color                 |
| `--radius`        | Component radius             |
| `--content-width` | Maximum content width        |
| `--transition`    | Interaction transition speed |

## ♿ Accessibility

The example uses semantic HTML, descriptive headings, accessible navigation, and visible keyboard focus states.

The transition is decorative and does not affect access to page content.

## Reduced Motion

Users who prefer reduced motion receive a static experience:

```css
@media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
        animation: none !important;
        transition: none !important;
    }
}
```

This prevents unnecessary motion for users who have enabled reduced-motion preferences.

## 🌐 Browser Support

The basic page layout works without the View Transitions API.

The enhanced transition requires browser support for the CSS View Transitions API. Unsupported browsers simply display the page without the enhanced transition rather than preventing navigation.

## ⚡ Performance

The component uses native browser CSS capabilities:

* CSS animations
* CSS View Transitions API
* No JavaScript framework
* No external dependencies
* Minimal DOM structure

## 🧪 Testing Checklist

* [x] Desktop layout
* [x] Tablet layout
* [x] Mobile layout
* [x] Fade transition
* [x] Slide transition
* [x] Keyboard focus
* [x] Reduced-motion support
* [x] No external dependencies

## 📄 License

This example follows the same license as the EaseMotion CSS project.
