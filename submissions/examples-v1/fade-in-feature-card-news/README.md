# Fade In Feature Card — News Portal

A news portal-inspired feature card component with staggered fade-in animations, built with EaseMotion CSS.

## Overview

This component features a hero article card and a grid of smaller article cards that fade in with a staggered upward reveal animation. The design follows a clean, editorial news portal aesthetic.

## Features

- **Fade-in-up animation**: Cards animate in from below with opacity transition using `ease-fade-in-up` keyframe
- **Staggered reveals**: Grid cards use CSS `--fade-delay` custom property for staggered timing
- **Pure CSS animations**: All reveal animations are CSS-only, no JavaScript required
- **Hero + Grid layout**: Features a prominent hero card above a 2-column grid of smaller cards
- **Hover effects**: Subtle lift and shadow enhancement on hover
- **Accessibility**: Focus-within outlines, semantic HTML with `<article>`, proper ARIA labels
- **Responsive**: Grid collapses to single column on mobile
- **Reduced motion**: Respects `prefers-reduced-motion` preference

## Usage

1. Include EaseMotion CSS in your project
2. Add the HTML structure from `demo.html`
3. Include the styles from `style.css`
4. Adjust the `--fade-delay` values on each card for custom stagger timing

## EaseMotion Integration

- Uses `--ease-*` CSS custom properties for design tokens
- `--ease-radius-*` for border radius tokens
- `--ease-font-*` for typography tokens
- Custom `@keyframes ease-fade-in-up` follows EaseMotion naming conventions
- `--fade-delay` custom property for per-element animation delay

## Card Types

| Type     | Description                          | Animation Delay |
|----------|--------------------------------------|-----------------|
| Hero     | Full-width featured article with image | 0s (immediate) |
| Grid SM  | Compact cards in 2-column grid       | 0.15s - 0.6s (staggered) |

## Browser Support

Works in all modern browsers that support CSS custom properties, keyframe animations, and CSS Grid.
