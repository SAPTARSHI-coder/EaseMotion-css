# SCSS Utility: Staggered Entrance Delay Utility Classes (#28428)

A structural SCSS loop utility for the EaseMotion CSS framework that dynamically generates sequential `animation-delay` classes. Essential for creating cascading entrance animations for lists, grids, and dashboard panels.

## 📦 What's included?

- `_staggered-entrance-delay-utility-classes.scss`: The SCSS partial containing the `@for` loop generator and a complementary fade-up entrance keyframe.
- `style.css`: The compiled output of the generator loop (1-10 increments).
- `demo.html`: A cascading user-list demonstrating the staggered load-in effect.

## 🛠 Usage via SCSS Mixins

Import the partial and use the `generate-staggered-delays` mixin to create as many delay classes as you need for your project.

```scss
@import 'staggered-entrance-delay-utility-classes';

// @include generate-staggered-delays($prefix, $count, $step, $base-offset);

// Generate 20 classes starting with a 0.5s offset for a specific dashboard
@include generate-staggered-delays('dashboard-delay-', 20, 0.05s, 0.5s);
```

## 🛠 Usage via HTML Utility Classes

If your project is pre-compiled, simply attach the base entrance animation class (`ease-stagger-item`) and the specific delay index (`ease-delay-1`, `ease-delay-2`, etc.) to your HTML siblings.

```html
<ul>
  <li class="ease-stagger-item ease-delay-1">List Item 1</li>
  <li class="ease-stagger-item ease-delay-2">List Item 2</li>
  <li class="ease-stagger-item ease-delay-3">List Item 3</li>
  <li class="ease-stagger-item ease-delay-4">List Item 4</li>
</ul>
```

## 🚀 Why this fits EaseMotion

**EaseMotion** understands that choreographing motion is just as important as the motion itself. Having 10 items slide into the screen at the exact same moment feels artificial and heavy. "Staggering" the entrance of elements guides the user's eye naturally from top to bottom (or left to right).

Manually writing `animation-delay` rules for every child element in CSS is incredibly tedious and violates DRY principles. This SCSS utility provides a highly configurable loop that programmatically solves the staggering chore, making complex sequential animations effortless.
