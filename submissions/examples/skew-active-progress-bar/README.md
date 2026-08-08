# CSS Skew-Active Progress Bar

A lightweight **Skew-Active Progress Bar** built with pure HTML and CSS for minimalist technology-focused layouts.

The component combines an angled progress fill, smooth entrance animation, and a continuous highlight sweep to create an active and modern progress indicator.

## ✨ Features

- ⚡ Pure HTML and CSS
- 📊 Skewed active progress effect
- ✨ Animated highlight sweep
- 🎨 CSS custom properties for easy customization
- 📱 Responsive across desktop, tablet, and mobile
- ♿ `prefers-reduced-motion` accessibility support
- 🚫 No JavaScript or external dependencies

## 📁 Folder Structure

```text
skew-active-progress-bar/
├── demo.html
├── style.css
└── README.md
```

## 🚀 Usage

Include the stylesheet in your HTML:

```html
<link rel="stylesheet" href="style.css">
```

Then add the progress bar markup:

```html
<div class="progress-track">
    <div class="progress-fill">
        <span class="progress-value">78%</span>
    </div>
</div>
```

Change the progress amount by modifying the width of `.progress-fill`:

```css
.progress-fill {
    width: 78%;
}
```

Make sure the final value in the animation also matches the desired progress:

```css
@keyframes skew-active {
    from {
        width: 0;
    }

    to {
        width: 78%;
    }
}
```

## 🎨 CSS Custom Properties

The component provides customizable CSS variables:

```css
:root {
    --ease-bg: #0f172a;
    --ease-card: #1e293b;
    --ease-track: #334155;
    --ease-primary: #38bdf8;
    --ease-secondary: #6366f1;
    --ease-text: #f8fafc;
    --ease-muted: #94a3b8;
    --ease-radius: 16px;
}
```

### Customization

You can change the appearance without modifying the component styles:

```css
:root {
    --ease-primary: #22c55e;
    --ease-secondary: #14b8a6;
    --ease-card: #111827;
}
```

## 🎬 Animations

### Skew-Active Entrance

The progress fill starts from zero and expands to its configured width while maintaining the angled skew effect.

```css
@keyframes skew-active {
    from {
        width: 0;
        transform: skewX(-12deg) scaleX(0.85);
    }

    to {
        width: 78%;
        transform: skewX(-12deg) scaleX(1);
    }
}
```

### Active Highlight Sweep

A subtle light sweep continuously travels across the active progress area.

```css
@keyframes active-sweep {
    0% {
        left: -35%;
    }

    55% {
        left: 120%;
    }

    100% {
        left: 120%;
    }
}
```

## ♿ Accessibility

The component respects the user's reduced-motion preference:

```css
@media (prefers-reduced-motion: reduce) {
    .progress-fill {
        animation: none;
    }

    .progress-fill::after {
        animation: none;
    }
}
```

When reduced motion is enabled, the progress bar remains visible without animated movement.

## 📱 Responsive Design

The component adapts to:

- Desktop screens
- Laptops
- Tablets
- Mobile devices

Responsive breakpoints adjust the card padding, progress-bar height, and typography for smaller screens.

## 🌐 Browser Support

Works in modern versions of:

- Chrome
- Firefox
- Edge
- Safari
- Opera

## 🧩 Use Cases

This component can be used for:

- Technology dashboards
- Software deployment progress
- Upload indicators
- Project completion status
- System processing states
- Minimalist landing pages
- Developer portfolios

## 📄 License

This component is provided as a CSS/HTML showcase for the EaseMotion CSS project.