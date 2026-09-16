# CSS Glassmorphism Dashboard

A modern responsive analytics dashboard built entirely with HTML and CSS. The component uses glassmorphism styling, translucent panels, backdrop blur, responsive grids, and lightweight CSS animations.

## ✨ Features

* Pure HTML and CSS
* No JavaScript required
* Glassmorphism card design
* `backdrop-filter` blur effects
* Responsive dashboard layout
* Analytics/statistics cards
* Performance chart visualization
* Recent activity panel
* Progress indicator
* Quick action card
* CSS-only animations
* Hover effects
* Keyboard-accessible controls
* Semantic HTML
* Reduced-motion support
* No external dependencies

## 📂 Folder Structure

```text
css-glassmorphism-dashboard/
├── demo.html
├── style.css
└── README.md
```

## 🚀 Usage

Add the stylesheet to your HTML:

```html
<link rel="stylesheet" href="style.css">
```

Then use the dashboard structure from `demo.html`.

The component does not require any JavaScript framework or external library.

## 🎨 Glassmorphism Design

The dashboard uses transparent backgrounds combined with borders and backdrop blur to create the glass effect.

```css
.glass-card {
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.16);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
}
```

This allows the background gradients and decorative elements to remain visible through the cards.

## 📊 Dashboard Sections

The example contains:

### Statistics Cards

Four cards display:

* Revenue
* Users
* Conversion rate
* Sessions

### Performance Panel

A CSS-only bar chart represents weekly performance.

### Recent Activity

A list of recent events demonstrates how activity information can be presented inside a glass panel.

### Monthly Target

A progress bar displays the current monthly goal.

### Quick Action

A call-to-action panel provides an example of an interactive dashboard section.

## 📱 Responsive Design

The layout adapts to different screen sizes.

### Desktop

* Four-column statistics layout
* Two-column dashboard content
* Two-column bottom section

### Tablet

* Two-column statistics layout
* Single-column content sections

### Mobile

* Single-column statistics
* Stacked dashboard cards
* Reduced chart height
* Optimized spacing and typography

## ♿ Accessibility

The component includes accessibility considerations such as:

* Semantic `<main>`, `<section>`, `<article>`, and `<header>` elements
* Descriptive `aria-label` attributes
* Keyboard-focus styles
* Accessible button labels
* Accessible progress bar
* Decorative visual content separated from meaningful content

## 🛡️ Reduced Motion

The dashboard respects the user's system motion preference.

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

This disables decorative animations for users who prefer reduced motion.

## ⚡ Performance

The component is intentionally lightweight:

* No JavaScript
* No external dependencies
* No chart libraries
* No external images
* CSS gradients for visual effects
* CSS animations for chart and progress effects

## 🎨 Customization

The main theme can be customized through CSS variables.

```css
:root {
    --background: #07111f;
    --background-secondary: #101d31;
    --glass: rgba(255, 255, 255, 0.08);
    --text: #f8fafc;
    --muted: #94a3b8;
    --accent: #38bdf8;
    --accent-secondary: #818cf8;
}
```

You can change these values to create different glassmorphism themes.

## 🧪 Testing Checklist

* [x] Desktop layout tested
* [x] Tablet layout tested
* [x] Mobile layout tested
* [x] Glassmorphism effect implemented
* [x] Responsive cards
* [x] CSS-only chart
* [x] CSS-only progress bar
* [x] Hover interactions
* [x] Keyboard focus states
* [x] Reduced-motion support
* [x] No JavaScript dependencies

## 📄 License

This example follows the same license as the EaseMotion CSS project.
