# SCSS Utility: Neumorphic Soft Shadow Elevation Mixin (#28418)

An advanced SCSS utility for the EaseMotion CSS framework that dynamically calculates perfect Neumorphic (soft-UI) shadows. By supplying a single background color, the mixin calculates the exact highlight and shadow tones to create realistic 3D extrusion or indentation effects.

## 📦 What's included?

- `_neumorphic-soft-shadow-elevation-mixin.scss`: The SCSS partial containing the mathematical color scaling mixin.
- `style.css`: The raw compiled CSS proving the math and inset box-shadow logic.
- `demo.html`: A stunning visual showcase of the extruded, pressed, and interactive button states.

## 🛠 Usage via SCSS Mixins

Import the partial into your project. To create a neumorphic effect, the background color of the element **must match** the background color of its parent container.

```scss
@import 'neumorphic-soft-shadow-elevation-mixin';

// @include ease-neumorphism($bg-color, $distance, $blur, $type);

.my-card {
  // Creates a raised surface
  @include ease-neumorphism(#e0e5ec, 10px, 20px, 'extruded');
}

.my-input {
  // Creates an indented surface for form fields
  @include ease-neumorphism(#e0e5ec, 5px, 10px, 'pressed');
}
```

## 🛠 Usage via HTML Utility Classes

If your project is pre-compiled using the default `#e0e5ec` background, you can use the preset classes directly:

```html
<!-- An extruded card -->
<div class="ease-neu-extruded">
  <h2>Card Title</h2>
</div>

<!-- A pressed, indented well -->
<div class="ease-neu-pressed">
  <p>Inner content</p>
</div>

<!-- A button that presses down when clicked -->
<button class="ease-neu-interactive">
  Submit
</button>
```

## 🚀 Why this fits EaseMotion

The **EaseMotion** philosophy is about reducing the friction required to build stunning, modern interfaces. Neumorphism is incredibly difficult to hand-code because it requires calculating two perfectly balanced shadows (one dark shadow, one light highlight) based specifically on the underlying background hex code. If the background color changes even slightly, the shadows must be manually recalculated. By moving this math into an SCSS `color.scale()` mixin, developers can theme entire Neumorphic applications instantly just by changing a single `$bg-color` variable, keeping the focus entirely on smooth, interactive animations.
