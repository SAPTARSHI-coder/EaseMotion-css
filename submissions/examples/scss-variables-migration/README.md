# SCSS Variables Module Migration

A migration showcasing how EaseMotion CSS variables are refactored to use the modern Sass module system (`@use`) with `!default` declarations.

## What does this do?

This feature migrates the global variable system in `scss/_variables.scss` to a modular architecture with default flags (`!default`), allowing developers to load variables via Sass namespaces and customize animation/duration parameters dynamically.

## How is it used?

### Loading & Overriding in SCSS

Load the variables module inside your workspace theme files using the Sass `@use` statement with configuration map overrides:

```scss
// style.scss
@use '../../../scss/variables' with (
  $speed-fast: 150ms,
  $speed-medium: 600ms,
  $speed-slow: 1.5s,
  $ease-bounce: cubic-bezier(0.68, -0.6, 0.32, 1.6)
);

// Accessing the namespaced variables
.custom-card {
  transition: transform variables.$speed-medium variables.$ease-bounce;
}
```

### HTML Implementation

Apply the generated compiled transition classes to your HTML elements:

```html
<div class="card-container">
  <div class="animate-box animate-fast"></div>
  <button class="demo-btn" onclick="toggleActive()">Trigger</button>
</div>
```

## Why is it useful?

1. **Namespace Isolation**: Replaces outdated global imports (`@import`) with namespace scopes, preventing variable collisions across libraries.
2. **Configurable Tokens**: The addition of `!default` tags enables custom theme engines to redefine speed and acceleration curves at compilation time.
3. **DRY Framework Compiling**: Reuses the core duration structures within custom builds of secondary packages or companion integrations.
