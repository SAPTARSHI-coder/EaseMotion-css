# Glassmorphism Shine/Reflection Animation

This submission provides a CSS utility to add a dynamic, moving light reflection to glassmorphism UI elements.

## Features

- **Pure CSS**: Uses `::before` pseudo-elements and CSS animations to create a sweeping light effect.
- **Hover or Loop**: Provides utility classes for triggering the shine on hover (`.em-glass-shine`) or running it on a slow, continuous loop (`.em-glass-shine-loop`).
- **Contained**: Leverages `overflow: hidden` on the parent card to ensure the shine doesn't spill out of the component.
- **Accessibility**: Uses `prefers-reduced-motion: reduce` to completely disable the sweeping animation for users with vestibular disorders.

## Usage

1. Include `style.css` in your project.
2. Apply the `.em-glass-card` class to establish the base glassmorphism styles (blur, semi-transparent background).
3. Apply `.em-glass-shine` to add a hover-triggered reflection.
4. Optionally add `.em-glass-shine-loop` to make the reflection sweep across the card infinitely.
