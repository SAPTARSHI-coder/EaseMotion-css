# SCSS Utility: Dynamic Color Palette Shading & Tinting (#28414)

A powerful SCSS module for the EaseMotion CSS framework that automatically generates a full 9-step color palette (100 to 900) from a single base color using mathematical SCSS `mix()` functions.

## 📦 What's included?

- `_dynamic-color-palette-shading-tinting-mixins.scss`: The SCSS partial containing the tint/shade functions and variable generator mixin.
- `style.css`: The raw compiled CSS demonstrating the output of the generated CSS custom properties.
- `demo.html`: A visual showcase displaying the generated 100-900 scales side-by-side.

## 🛠 Usage in SCSS

Import the partial into your root styles. Provide a prefix name and a single hex color. The mixin will automatically generate CSS custom properties (`--prefix-100` through `--prefix-900`) targeting the `:root` element.

```scss
@import 'dynamic-color-palette-shading-tinting-mixins';

// Generate a complete color system from a single brand color
:root {
  @include generate-palette-variables('brand', #10b981);
}
```

This will automatically output the following compiled CSS:

```css
:root {
  --brand-100: #cff1e6;
  --brand-200: #9fdfcd;
  --brand-300: #70ceb3;
  --brand-400: #40bc9a;
  --brand-500: #10b981; /* Original Base Color */
  --brand-600: #0d9467;
  --brand-700: #0a6f4d;
  --brand-800: #064a34;
  --brand-900: #03251a;
}
```

## 🚀 Why this fits EaseMotion

The **EaseMotion** philosophy is about reducing developer friction. Setting up a comprehensive, visually cohesive color system usually requires designers to manually hand-pick 9 shades for every single brand color, leading to inconsistent contrasts and wasted time. 

By utilizing SCSS to mathematically calculate tints (mixing with white) and shades (mixing with black) automatically, developers can bootstrap entire design systems instantly. Furthermore, having predictable 100-900 scales makes creating hover animations (e.g., animating a button from `bg-brand-500` to `bg-brand-600` on hover) effortless and perfectly consistent across the entire application.
