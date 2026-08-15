# Fix: Document CSS Custom Property Limitation on Breakpoint Tokens

## Problem

`core/variables.css` defines breakpoint tokens:

```css
--ease-bp-sm: 640px;
--ease-bp-md: 768px;
--ease-bp-lg: 1024px;
--ease-bp-xl: 1280px;
```

These tokens give a false impression that they can be used in `@media` queries via `var()` — but this **does not work in any browser**. CSS custom properties cannot be used as `@media` query values.

```css
/* ❌ Does NOT work — silently ignored in all browsers */
@media (min-width: var(--ease-bp-md)) { ... }
```

## Solution

Add clear documentation (warning comment block) in `variables.css` explaining the limitation, correct usage, and how to access the values in JavaScript.

## Correct Usage

**In CSS — copy the raw value:**
```css
@media (min-width: 768px) { ... }   /* sm: 640px, md: 768px, lg: 1024px, xl: 1280px */
```

**In JavaScript — read via getComputedStyle:**
```js
const bp = getComputedStyle(document.documentElement)
             .getPropertyValue('--ease-bp-md').trim(); // "768px"
```

## Breakpoint Reference

| Token | Value | @media usage |
|-------|-------|-------------|
| `--ease-bp-sm` | 640px | `@media (min-width: 640px)` |
| `--ease-bp-md` | 768px | `@media (min-width: 768px)` |
| `--ease-bp-lg` | 1024px | `@media (min-width: 1024px)` |
| `--ease-bp-xl` | 1280px | `@media (min-width: 1280px)` |

## Why it fits EaseMotion CSS

EaseMotion CSS aims to be developer-friendly. Undocumented limitations lead to silent failures that are hard to debug. Clear documentation in the token definitions prevents this mistake.

Fixes #10245
