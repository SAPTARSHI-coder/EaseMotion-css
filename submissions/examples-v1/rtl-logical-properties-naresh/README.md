# RTL Writing Direction & Logical Properties Guide

## 1. What does this do?
This submission serves as a developer guide documenting the horizontal slide animation direction bug that occurs in Right-to-Left (RTL) locales (such as Arabic, Hebrew, Urdu, Farsi, etc.), and details how to implement writing-direction-aware logical translations in CSS.

## 2. The Horizontal Slide Direction Bug
By default, horizontal entrance animations (like `.ease-slide-left` or `.ease-slide-right`) are defined with hardcoded pixel or percentage offsets:

```css
/* Traditional slide-left always translates from -80px (the physical left) */
@keyframes traditionalSlideLeft {
  from { transform: translateX(-80px); }
  to { transform: translateX(0); }
}
```

In LTR layouts, this correctly slides from the reading-start edge (left). However, in RTL layouts (where text and page hierarchy read from right-to-left), translating from `-80px` means the element slides in from the reading-end edge (left), cutting across existing content blocks and disrupting user focus.

---

## 3. The Fix: Logical Variable Multipliers

To resolve this without writing duplicate sets of keyframes for RTL layouts, you can define a direction-aware multiplier variable `--ease-direction` at the root and invert it for RTL scopes:

### CSS Implementation

```css
:root {
  --ease-direction: 1; /* 1 for LTR, -1 for RTL */
}

/* Reverse the multiplier for RTL tags */
[dir="rtl"] {
  --ease-direction: -1;
}

/* Define keyframes using calc with the direction variable */
@keyframes logicalSlideLeft {
  from {
    /* Multiplies offset by -1 in RTL to translate from +80px (physical right) */
    transform: translateX(calc(-80px * var(--ease-direction)));
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.ease-slide-left {
  animation: logicalSlideLeft 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
```

---

## 4. Why is it useful?
Supporting multi-lingual locales is critical for global applications. Adopting writing-direction-aware logical CSS architectures ensures slide, drift, and parallax transitions behave correctly regardless of layout, improving accessibility and maintaining high-end visual standards for international users.
