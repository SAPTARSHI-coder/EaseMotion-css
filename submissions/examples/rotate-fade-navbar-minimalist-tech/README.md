# Rotate-Fade Navbar — Minimalist Tech Layouts

A sticky navigation bar with a rotating underline reveal effect on hover. Each nav link gets a small teal underline that scales in from the left with a slight rotation, while the text lifts and shifts color.

## How It Works

The underline is a `::after` pseudo-element with `transform: scaleX(0) rotate(-12deg)`. On hover it transitions to `scaleX(1) rotate(0deg)` using a spring-eased cubic-bezier. The text itself transitions color and translates upward by 1px for a subtle depth cue.

The brand dot rotates 180 degrees on hover. The CTA button uses a `::before` overlay that slides up from below to create a color-fill transition.

## Customization

Override `--rfn-teal` to change the accent color. Adjust `--rfn-nav-h` for a taller or shorter bar. The underline rotation angle is hardcoded in the hover rule for `::after`.

## Accessibility

- Focus-visible outlines on all interactive elements
- `prefers-reduced-motion` disables all transitions
- Semantic `<nav>` with `aria-label`
