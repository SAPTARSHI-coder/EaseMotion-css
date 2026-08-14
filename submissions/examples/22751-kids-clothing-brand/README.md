# Issue #22751 – Advanced: E-commerce – Kids Clothing Brand

## Folder Contents

This submission contains exactly three files inside `submissions/examples/22751-kids-clothing-brand/`:

- `demo.html` – standalone responsive landing page
- `style.css` – custom presentation layer for the page
- `README.md` – implementation notes and validation summary

## Overview

This submission delivers a production-quality responsive landing page for **Lumiere Little**, a premium children's clothing brand with a soft editorial aesthetic inspired by modern boutique fashion retailers.

The page is fully static, uses **no JavaScript**, and opens directly by double-clicking `demo.html`.

## EaseMotion Classes Used

The page uses existing EaseMotion CSS utility classes from the repository stylesheet:

- `ease-fade-in`
- `ease-slide-up`
- `ease-slide-in-right`
- `ease-slide-in-left`
- `ease-duration-slow`
- `ease-hover-lift`
- `ease-delay-100`
- `ease-delay-200`
- `ease-delay-300`

These utilities are used for subtle entrance motion, staggered sequencing, and premium hover polish.

## Features

- Premium boutique hero section with a fully inline SVG illustration
- Age-based collection cards for:
  - Baby (0–2)
  - Toddler (2–5)
  - Kids (6–10)
  - Pre-Teen (11–14)
- Product cards with:
  - clothing illustration
  - product name
  - category
  - age range
  - available colors
  - price
  - CTA button
- Responsive size guide table covering height, age, chest, and waist
- Safety certification badges:
  - OEKO-TEX®
  - Organic Cotton
  - Skin Friendly
  - Hypoallergenic
  - Machine Washable
- Elegant parent testimonial cards
- Gift finder call-to-action section
- Newsletter signup form
- Semantic footer
- Keyboard-friendly focus states and accessible structure

## Responsiveness

The landing page is designed for:

- Desktop
- Tablet
- Mobile

Layout shifts from multi-column editorial sections on large screens to stacked single-column layouts on small screens. Tables remain readable through horizontal overflow handling when needed.

## Accessibility

- Semantic landmarks: `header`, `main`, `section`, `nav`, `footer`
- Visible skip link for keyboard users
- Proper heading hierarchy
- Readable contrast on soft pastel surfaces
- Large tap/click targets for buttons and links
- Reduced-motion support via `prefers-reduced-motion`

## Browser Support

Tested as a standards-based static page intended for current modern browsers, including:

- Chrome
- Edge
- Firefox
- Safari

If `backdrop-filter` is unsupported, the page remains functional with graceful visual fallback.

## How to Open

1. Open `submissions/examples/22751-kids-clothing-brand/`
2. Double-click `demo.html`

The page will load directly in a browser without any build tools, package installation, or local server.

## Validation Summary

- Exactly 3 files are present in the submission folder
- No JavaScript is used
- No external images, SVG files, icon libraries, or frameworks are used
- All illustrations are inline SVG
- No repository files outside `submissions/examples/22751-kids-clothing-brand/` were modified
- All required sections from Issue #22751 are included
