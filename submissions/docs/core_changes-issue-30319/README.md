# Typography Scale Utilities — EaseMotion CSS

**Issue:** [#30319 — Add font size scale utility classes (ease-text-xs to ease-text-7xl)](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/30319)

A comprehensive typography utility system for EaseMotion CSS including font size scale, font weights, line heights, letter spacing, text alignment, text transform, and text wrapping utilities.

## Structure

```
submissions/docs/core_changes-issue-30319/
├── demo.html       # Live demo page showing all utilities
├── style.css       # Utility styles
└── README.md       # This file
```

## Classes

### Font Size Scale

| Class | Default Size |
|-------|-------------|
| `.ease-text-xs` | 0.75rem (12px) |
| `.ease-text-sm` | 0.875rem (14px) |
| `.ease-text-base` | 1rem (16px) |
| `.ease-text-lg` | 1.125rem (18px) |
| `.ease-text-xl` | 1.25rem (20px) |
| `.ease-text-2xl` | 1.5rem (24px) |
| `.ease-text-3xl` | 1.875rem (30px) |
| `.ease-text-4xl` | 2.25rem (36px) |
| `.ease-text-5xl` | 3rem (48px) |
| `.ease-text-6xl` | 3.75rem (60px) |
| `.ease-text-7xl` | 4.5rem (72px) |

### Font Weight

`ease-font-thin` (100) through `ease-font-black` (900), plus `ease-font-normal` (400), `ease-font-medium` (500), `ease-font-semibold` (600), `ease-font-bold` (700).

### Line Height

`ease-leading-none` (1) through `ease-leading-loose` (2).

### Letter Spacing

`ease-tracking-tighter` (-0.05em) through `ease-tracking-widest` (0.1em).

### Text Alignment & Utilities

Alignment: `ease-text-left`, `ease-text-center`, `ease-text-right`, `ease-text-justify`, `ease-text-start`, `ease-text-end`. Text wrap: `ease-text-balance`, `ease-text-pretty`, `ease-text-nowrap`. Transform: `ease-uppercase`, `ease-lowercase`, `ease-capitalize`. Utility: `ease-truncate`, `ease-text-clip`.

### Responsive Variants

Breakpoint-prefixed variants available: `ease-sm:`, `ease-md:`, `ease-lg:` for font size and text alignment.

## Features

- All sizes customizable via `--ease-text-*` CSS variables
- Responsive breakpoint variants (sm, md, lg)
- `@layer easemotion-utilities` for proper cascade ordering
- `ease-text-balance` and `ease-truncate` for modern text handling
