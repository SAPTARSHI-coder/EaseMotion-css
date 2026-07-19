# Staggered Feature Grid

## Overview

A responsive dark feature grid with cards of varying heights, smooth hover lift, accent borders, and premium SaaS-style polish.

## Features

- Responsive staggered grid layout
- Hover lift with deeper shadow
- Accent line reveal on hover
- Color variants for visual differentiation
- Pure HTML + CSS implementation

## Usage example

```html
<link rel="stylesheet" href="style.css">
<article class="feature-card feature-blue">
  <span class="feature-icon">📊</span>
  <h2>Analytics toolkit</h2>
  <p>Track funnels, conversion trends, and product engagement with dashboard-ready insights.</p>
</article>
```

## Why it fits EaseMotion CSS

This component is self-contained, responsive, and animation-focused using only CSS. It delivers polished UI behavior and modern visual quality without any external dependencies, matching the curated submission model of EaseMotion CSS.

## Customization

- Change accent colors by editing the `--blue`, `--purple`, `--neon`, `--gradient-start`, `--gradient-end`, and `--green` variables.
- Adjust hover depth by modifying the `box-shadow` values on `.feature-card:hover`.
- Fine-tune the accent line reveal animation with the `width` transition on `.feature-card::before`.
