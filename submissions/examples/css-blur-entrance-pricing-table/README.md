# CSS Blur-Entrance Pricing Table

A pure CSS pricing table showcase featuring a modern, minimalist tech aesthetic with a staggered "blur-entrance" animation. Designed for **EaseMotion CSS**.

## ✨ Features

- **Pure CSS / HTML**: No JavaScript required for animations or layouts.
- **Blur-Entrance Animation**: A visually appealing entrance effect utilizing CSS `filter: blur()`, `opacity`, and `transform`.
- **Staggered Delays**: Uses inline CSS custom properties (`--stagger: n`) to elegantly sequence the entrance of elements.
- **Glassmorphism Influences**: Subtle background blurs and tech-focused color palette.
- **Fully Responsive**: Adapts seamlessly from mobile devices to large desktop screens.
- **Accessible**: Full support for `prefers-reduced-motion` to instantly disable animations for users who prefer it.

## 🚀 Usage

Simply open `demo.html` in your web browser to view the pricing table showcase.

### HTML Structure

The animation relies on adding the `.blur-entrance` class and a `--stagger` custom property for sequencing:

```html
<div class="pricing-card blur-entrance" style="--stagger: 1;">
  <!-- Pricing card content -->
</div>
<div class="pricing-card blur-entrance" style="--stagger: 2;">
  <!-- Pricing card content -->
</div>
```

### CSS Custom Properties

You can customize the animation variables inside the `:root` pseudo-class in `style.css`:

```css
:root {
  /* Colors */
  --em-bg-primary: #0a0a0c;
  --em-accent: #3b82f6;
  
  /* Animation Timing */
  --em-anim-duration: 0.8s;
  --em-anim-delay-base: 0.15s;
  --em-transition: 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
```

## 🛠️ Difficulty Level
**Intermediate**
