# SCSS Utility: Micro-Interaction Button Ripple Effect Mixins (#28464)

A performant, CSS-only SCSS mixin for EaseMotion CSS that adds a Material Design-style ripple effect to buttons without requiring any JavaScript.

## 📦 What's included?

- `_micro-interaction-button-ripple-effect-mixins.scss`: The SCSS partial containing the `@mixin ease-button-ripple` and the generated utility classes (`.ease-btn-ripple-light` and `.ease-btn-ripple-dark`).
- `style.css`: The compiled CSS output for demonstration.
- `demo.html`: A self-contained browser demo showcasing light and dark ripples applied to various button styles.

## 🛠 Features

- **Zero JavaScript**: Most ripple effects require JS to calculate the exact X/Y coordinates of the mouse click. This utility provides a highly performant, CSS-only alternative that triggers on `:active` and expands perfectly from the center of the button.
- **Pseudo-Element Powered**: Injects the ripple via the `::after` pseudo-element, meaning you don't have to add extra `<span>` tags inside your button HTML.
- **Parametric Customization**: Pass a color (e.g. dark ripple for light buttons, white ripple for solid primary buttons) and a duration into the mixin.
- **Square-Proof**: Uses `padding-top: 100%` and `scale(2.5)` to mathematically guarantee the ripple expands as a perfect circle and covers the corners of rectangular buttons.

## 🚀 How to use

**As a utility class (HTML):**

Include the compiled CSS and apply the class to your buttons. Note: your button should preferably not have `overflow: hidden` already applied in a way that conflicts, though the class forces it.

```html
<button class="my-btn ease-btn-ripple-light">
  Click Me
</button>
```

**As an SCSS Mixin:**

Import the partial and `@include` it in your button component styles.

```scss
@import 'micro-interaction-button-ripple-effect-mixins';

.btn-primary {
  background-color: blue;
  color: white;
  
  // Creates a white ripple at 40% opacity that takes 0.5s
  @include ease-button-ripple(rgba(255, 255, 255, 0.4), 0.5s);
}
```

## 🎨 Why this fits EaseMotion

**EaseMotion** is about tactile feedback. When a user taps a button, a simple color swap (hover) feels digital. A spreading ripple, combined with a subtle physical scale down (`transform: translateY(2px) scale(0.98)` used in the demo), visually validates the user's action instantly. By doing this purely in CSS, we guarantee 60fps animations without Main Thread JS blocking.
