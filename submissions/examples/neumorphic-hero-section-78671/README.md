# Neumorphic Hero Section

Documentation showcase for EaseMotion CSS issue #78671.

## Overview

This example presents a tactile hero section built with a single soft surface and layered light and dark shadows. The component keeps the visual language subtle while preserving readable content, clear actions, and responsive spacing.

## Structure

```text
submissions/examples/neumorphic-hero-section-78671/
├── demo.html
├── style.css
└── README.md
```

## Features

- Layered neumorphic shadows.
- Responsive headline sizing.
- Primary and secondary actions.
- Semantic hero heading and content.
- Feature indicators.
- Keyboard-visible focus states.
- Reduced-motion fallback.
- No JavaScript dependency.

## Usage

Open `demo.html` directly in a browser or copy the `.hero-card` section into an existing page and include `style.css`.

The example uses generic content so the component can be adapted for product pages, landing pages, documentation portals, or application dashboards.

## Customization

Change the `--surface`, `--text`, `--muted`, `--light`, and `--dark` variables in `style.css` to match the host interface. Keep the light and dark shadow relationship balanced when changing the base surface color.

## Accessibility

The example uses a semantic `<section>` with a labelled heading and native anchor elements for navigation. Focus indicators are retained for keyboard users. Reduced-motion preferences disable the CTA transition.

## Responsive Behavior

The hero uses fluid typography and padding. On narrow screens the action controls become full-width and stack vertically, while the feature indicators wrap naturally.

## Files

- `demo.html` — semantic hero markup and example content.
- `style.css` — surface treatment, shadows, layout, responsive rules, and motion.
- `README.md` — implementation and usage documentation.

## Issue Reference

Created for **EaseMotion CSS issue #78671 — Neumorphic Hero Section**.
