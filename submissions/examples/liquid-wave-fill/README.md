# Liquid Wave Fill Glass Effect

A smooth glassmorphism UI component featuring an animated **Liquid Wave Fill** effect. The component combines translucent glass, flowing wave layers, soft gradients, and subtle motion to create a modern fluid interface.

Built entirely with **HTML and Vanilla CSS** with no JavaScript or external dependencies.

## ✨ Features

* 🌊 Animated liquid wave layers
* 🪟 Glassmorphism surface
* 💧 Fluid wave-fill animation
* ✨ Soft glow and gradient effects
* 🎨 Modern translucent design
* 🌙 Dark-mode friendly
* ⚡ Hardware-accelerated animations
* 📱 Responsive layout
* ♿ Reduced-motion support
* 🧩 Pure HTML and CSS
* 🚫 No external dependencies

## 📁 Files

```text
liquid-wave-fill/
├── index.html
├── style.css
└── README.md
```

## 🚀 Usage

Add the stylesheet:

```html
<link rel="stylesheet" href="style.css">
```

Then add the component:

```html
<article class="liquid-card">
  <div class="liquid-wave liquid-wave-one" aria-hidden="true"></div>
  <div class="liquid-wave liquid-wave-two" aria-hidden="true"></div>

  <div class="liquid-content">
    <span class="liquid-badge">LIQUID UI</span>

    <h2>Liquid Wave</h2>

    <p>
      A glassmorphism surface enhanced with smooth,
      flowing liquid wave animations.
    </p>

    <div class="liquid-progress" aria-label="Loading progress">
      <span></span>
    </div>

    <button class="liquid-button" type="button">
      Explore
    </button>
  </div>
</article>
```

## 🎨 Customization

The component can be customized using CSS variables:

```css
:root {
  --liquid-bg: #071522;
  --liquid-surface: rgba(255, 255, 255, 0.08);
  --liquid-border: rgba(255, 255, 255, 0.18);

  --liquid-primary: #35d6ff;
  --liquid-secondary: #6878ff;
  --liquid-accent: #a855f7;

  --liquid-radius: 24px;
}
```

Change the variables to create different color themes.

## 🌊 Wave Animation

The liquid effect is created using multiple absolutely positioned elements.

Each wave uses CSS transforms and animations to produce continuous movement:

```css
@keyframes liquid-wave {
  0% {
    transform: translateX(-20%) translateY(8px) rotate(0deg);
  }

  50% {
    transform: translateX(10%) translateY(-8px) rotate(2deg);
  }

  100% {
    transform: translateX(-20%) translateY(8px) rotate(0deg);
  }
}
```

Multiple waves with different animation durations create a more natural fluid appearance.

## ✨ Glass Effect

The glass surface uses:

* `backdrop-filter`
* Transparent backgrounds
* Semi-transparent borders
* Gradient overlays
* Box shadows

Example:

```css
.liquid-card {
  position: relative;
  overflow: hidden;

  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: var(--liquid-radius);

  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);

  box-shadow:
    0 20px 60px rgba(0, 0, 0, 0.25);
}
```

## 🖱️ Interaction

The component provides a subtle hover interaction:

```css
.liquid-card {
  transition:
    transform 300ms ease,
    border-color 300ms ease;
}

.liquid-card:hover {
  transform: translateY(-6px);
}
```

The button also provides visible hover and focus states.

## ♿ Accessibility

Accessibility considerations include:

* Semantic `<article>` structure
* Proper heading hierarchy
* Keyboard-accessible button
* Visible `:focus-visible` state
* Decorative wave layers use `aria-hidden="true"`
* Progress information can use accessible labels
* Reduced-motion support

For users who prefer reduced motion:

```css
@media (prefers-reduced-motion: reduce) {
  .liquid-wave {
    animation: none;
  }

  .liquid-card,
  .liquid-button {
    transition: none;
  }
}
```

## 📱 Responsive Design

The component adapts to different screen sizes.

On smaller screens:

* Card width becomes fluid
* Padding is reduced
* Typography scales down
* Buttons remain accessible
* Wave animations remain contained within the component

## ⚡ Performance

The animation is designed around GPU-friendly properties such as:

* `transform`
* `opacity`

Decorative layers are isolated using absolute positioning, while the animation avoids unnecessary JavaScript-driven updates.

## 🌙 Dark Mode

The default design works well with dark interfaces.

For custom themes, override the CSS variables:

```css
@media (prefers-color-scheme: light) {
  :root {
    --liquid-bg: #eef7ff;
    --liquid-surface: rgba(255, 255, 255, 0.55);
    --liquid-border: rgba(0, 0, 0, 0.12);
  }
}
```

## 🧩 Dependencies

None.

This component uses only:

* HTML5
* CSS3
* CSS custom properties
* CSS gradients
* CSS animations
* `backdrop-filter`

## 🌐 Browser Support

Modern browsers supporting:

* CSS custom properties
* CSS animations
* CSS gradients
* `backdrop-filter`

If `backdrop-filter` is unavailable, the translucent background and border still provide a usable visual fallback.

## 📄 License

This component follows the license and contribution guidelines of the parent **EaseMotion-css** repository.

## 🤝 Contribution

Contributions and improvements are welcome.

Please follow the repository's contribution guidelines before submitting a pull request.
