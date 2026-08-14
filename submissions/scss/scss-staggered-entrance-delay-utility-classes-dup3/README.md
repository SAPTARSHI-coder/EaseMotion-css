# SCSS Utility: Staggered Entrance Delay Utilities (#28408)

A comprehensive SCSS module for the EaseMotion CSS framework that dynamically generates animation-delay utility classes. This removes the need for developers to manually write dozens of CSS delay classes or inline `style="animation-delay: Xms"` tags.

## 📦 What's included?

- `_staggered-entrance-delay-utility-classes.scss`: The SCSS partial containing the generator mixins.
- `style.css`: The raw compiled CSS utility classes (`.ease-delay-100` through `1000`).
- `demo.html`: A self-contained demo page demonstrating the staggered entrance effect.

## 🛠 Usage via SCSS Mixins

Import the partial into your project. You can either generate your own custom delay classes, or apply dynamic delays directly to children of a container.

```scss
@import 'staggered-entrance-delay-utility-classes';

// 1. Generate custom utility classes (e.g. .my-delay-50, .my-delay-100...)
@include generate-delay-utilities('my-delay-', 50, 500, 50);

// 2. Automatically stagger children of a specific container
.photo-gallery {
  // Staggers up to 15 children, adding 0.2s delay to each, with a 0.5s initial wait
  @include stagger-children-delay(15, 0.2s, 0.5s);
  
  .photo {
    animation: fade-in 1s forwards;
  }
}
```

## 🛠 Usage via HTML Utility Classes

If your project is pre-compiled, you can use the default utility classes immediately.

**Method 1: Explicit Classes**
```html
<div class="animate-fade-in ease-delay-100">Item 1</div>
<div class="animate-fade-in ease-delay-200">Item 2</div>
<div class="animate-fade-in ease-delay-300">Item 3</div>
```

**Method 2: Auto-Stagger Wrapper**
```html
<div class="ease-stagger-children">
  <div class="animate-fade-in">Item 1</div>
  <div class="animate-fade-in">Item 2</div>
  <div class="animate-fade-in">Item 3</div>
</div>
```

## 🚀 Why this fits EaseMotion

The **EaseMotion** philosophy is about making animation intuitive and reducing boilerplate. Staggering the entrance of lists, grids, and dashboard cards is one of the most common UI animation patterns. By providing a mathematical SCSS loop to generate these delays, we keep the compiled CSS lightweight while saving developers from writing tedious, repetitive keyframe delays by hand.
