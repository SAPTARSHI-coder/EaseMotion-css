# CSS View Transitions API Utilities

This submission introduces utility classes and animations designed to streamline the usage of the new **Document-level View Transitions API**.

## Features

- **Utility Classes**: Pre-defined classes (`.em-view-transition-header`, `.em-view-transition-card`, `.em-view-transition-hero`) that assign unique `view-transition-name` properties.
- **Custom Keyframes**: Enhances the default crossfade behavior of the View Transitions API by providing smooth sliding and morphing `@keyframes` attached to `::view-transition-old()` and `::view-transition-new()` pseudo-elements.
- **Accessibility**: Automatically disables the transitions for users who prefer reduced motion.

## Usage

1. Include `style.css` in your project.
2. Apply the `em-view-transition-*` classes to elements that should persist or animate seamlessly between DOM state changes.
3. Trigger a DOM state change inside the `document.startViewTransition()` method in JavaScript. The CSS pseudo-elements will automatically pick up the customized animations.
