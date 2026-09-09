````markdown
# CSS Countdown Alert

A polished, responsive countdown alert component built with pure HTML and CSS.

The component provides a visual warning notification with an animated progress bar, countdown indicator, dismiss control, responsive layout, and reduced-motion support.

## ✨ Features

- Pure HTML and CSS
- No JavaScript dependencies
- Animated countdown progress bar
- Warning/status indicator
- Responsive design
- Keyboard-accessible dismiss button
- Visible focus state
- Semantic alert structure
- `prefers-reduced-motion` support
- Lightweight and dependency-free
- Modern card-based UI

## 📁 Files

```text
css-countdown-alert/
├── demo.html
├── style.css
└── README.md
````

## 🚀 Usage

Copy both files into your project:

```html
<link rel="stylesheet" href="style.css">
```

Then use the component structure from `demo.html`.

## 🧩 Basic Structure

```html
<section
  class="countdown-alert"
  role="alert"
  aria-live="polite"
>
  <div class="alert-icon" aria-hidden="true">
    !
  </div>

  <div class="alert-content">
    <div class="alert-heading">
      <h2>Session expiring soon</h2>
      <span class="status-badge">Warning</span>
    </div>

    <p>
      Your session will expire automatically.
    </p>

    <div class="countdown">
      <span class="countdown-value">10</span>
      <span class="countdown-label">
        seconds remaining
      </span>
    </div>

    <div class="progress-track" aria-hidden="true">
      <span class="progress-bar"></span>
    </div>
  </div>

  <button
    class="dismiss-button"
    type="button"
    aria-label="Dismiss countdown alert"
  >
    <span aria-hidden="true">&times;</span>
  </button>
</section>
```

## 🎨 Customization

The component uses CSS custom properties so colors, spacing, radius, and shadows can be customized easily.

```css
:root {
  --accent: #f59e0b;
  --accent-dark: #b45309;
  --accent-soft: #fff7e6;
  --radius-lg: 20px;
}
```

### Change the countdown duration

The default progress animation runs for 10 seconds.

```css
.progress-bar {
  animation:
    countdown-progress 10s linear forwards;
}
```

For a 5-second countdown:

```css
.progress-bar {
  animation:
    countdown-progress 5s linear forwards;
}
```

For a 30-second countdown:

```css
.progress-bar {
  animation:
    countdown-progress 30s linear forwards;
}
```

## ♿ Accessibility

The component includes several accessibility considerations:

* Uses semantic HTML.
* Uses `role="alert"` for important notification content.
* Uses `aria-live="polite"` for announcement support.
* The dismiss control is a native `<button>`.
* The button includes an accessible label.
* Keyboard focus is clearly visible.
* Decorative icons are hidden from assistive technology.
* Reduced-motion users are respected through:

```css
@media (prefers-reduced-motion: reduce) {
  /* Reduced animation */
}
```

## 📱 Responsive Behavior

The layout adapts across screen sizes:

* Desktop: three-column alert layout
* Tablet: compact two-column layout
* Mobile: stacked alert layout
* Small mobile screens: optimized spacing and typography

## ⚡ Performance

This component has:

* No JavaScript
* No external dependencies
* No images
* No third-party UI libraries
* CSS-only animation
* Minimal DOM structure

## 🛠️ Browser Support

Designed for modern evergreen browsers supporting:

* CSS custom properties
* CSS animations
* CSS Grid
* CSS Flexbox
* `prefers-reduced-motion`

Internet Explorer is not supported.

## 🎯 Use Cases

The countdown alert can be used for:

* Session expiration warnings
* Temporary notifications
* Limited-time actions
* Download completion notices
* Security warnings
* Temporary status messages
* Form/session timeout indicators

## 📌 Implementation Note

The visual countdown is implemented using CSS animation.

CSS can animate the progress indicator without JavaScript, while a continuously changing numeric value generally requires scripting or predefined content states.

This implementation intentionally keeps the component dependency-free and JavaScript-free in accordance with the component requirements.

## 📄 License

This example is contributed to EaseMotion CSS under the project's existing license.

```
```
