# Glassmorphism Card

Documentation showcase for EaseMotion CSS issue #78670.

## Overview

This example demonstrates a reusable glassmorphism content card built with semantic HTML and CSS. The surface combines transparency, backdrop blur, subtle borders, layered lighting, and responsive spacing without requiring JavaScript.

## Structure

```text
submissions/examples/glassmorphism-card-78670/
├── demo.html
├── style.css
└── README.md
```

## Features

- Translucent glass surface.
- Backdrop blur with a safe visual fallback.
- Layered background lighting.
- Responsive card spacing and typography.
- Feature chips for secondary metadata.
- Hover elevation and link interaction.
- Visible keyboard focus state.
- Reduced-motion support.

## Usage

Open `demo.html` directly in a browser, or copy the `<article>` component into an existing page and include `style.css`.

The sample content is intentionally generic. Replace the title, description, metadata, and action with content appropriate for the application.

## Customization

The main colors, surface opacity, border treatment, and shadow values are exposed as CSS custom properties near the top of `style.css`. This makes it straightforward to adapt the component to an existing design system.

The card width and internal spacing use responsive values so the same component works on desktop and mobile layouts.

## Accessibility

The card uses a semantic `<article>` with a labelled heading. The action remains a normal anchor, which preserves native keyboard navigation and browser behavior. The link receives a visible `:focus-visible` treatment, and reduced-motion users are given a static interaction state.

## Responsive Behavior

At smaller widths the card reduces its outer padding, stacks footer content vertically, and preserves readable text widths. The feature chips wrap naturally rather than overflowing the card.

## Browser Notes

`backdrop-filter` provides the strongest glass effect in supporting browsers. The translucent background and border remain useful visual fallbacks when blur is unavailable.

## Files

- `demo.html` — complete semantic component showcase.
- `style.css` — glass surface, lighting, interaction, responsive layout, and motion rules.
- `README.md` — implementation, usage, accessibility, and customization documentation.

## Issue Reference

Created for **EaseMotion CSS issue #78670 — Glassmorphism Card**.
