# ease-color-mix-button

## 1. What does this do?
The `ease-color-mix-button` component utilizes the native CSS `color-mix()` function to dynamically compute interactive button states (hover, active/pressed, and focus-visible outlines) from a single CSS variable (`--brand-color`). Rather than requiring separate color values for each pseudo-class state, the native browser engine automatically calculates hover darkening, active pressing tones, and semi-transparent focus rings in real-time.

## 2. How is it used?
Simply assign the `.ease-color-mix-button` class to any button element and define the `--brand-color` CSS custom property (inline or via stylesheet). The button's base background and all interactive states adapt automatically.

```html
<!-- Example usage with inline CSS custom property -->
<button class="ease-color-mix-button" style="--brand-color: #3b82f6;">Primary Blue</button>
<button class="ease-color-mix-button" style="--brand-color: #ec4899;">Neon Pink</button>
<button class="ease-color-mix-button" style="--brand-color: #10b981;">Emerald Green</button>
```

```css
/* Or set via custom CSS class */
.my-custom-button {
  --brand-color: #8b5cf6;
}
```

## 3. Why is it useful?
Using native CSS `color-mix()` permanently eliminates the need for Sass/SCSS preprocessors (such as `darken()`, `lighten()`, or `mix()`) and avoids overhead from runtime JavaScript color manipulation functions. It allows full, real-time user-defined theme customization directly in pure CSS, improving maintainability, bundle size, and render performance across modern browsers.
