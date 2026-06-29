# Bi-Directional RTL Slide Animations Repair

An interaction repair patch targeting directional animation tokens (`.ease-animate-slide-left` and `.ease-animate-slide-right`) under issue #13300. This fixes broken transitions in localized international configurations.

## Bug Resolution Analysis

- **The Problem:** The existing slide-left and slide-right utilities used standard rigid `translateX` percentages. Under an RTL language context (`dir="rtl"`), moving an item by a positive percentage pushes it out the wrong side of the layout, reversing the logical animation flow.
- **The Solution:** Implements context-aware keyframe modifiers keyed to the `[dir="rtl"]` layout selector. This configuration re-maps the transformation boundaries, ensuring that regardless of whether a page is rendered in English or Arabic, "slide-left" consistently matches structural expectations across viewports.

## Usage Layout Structure
```html

<div dir="rtl">
  <div class="ease-animate-slide-left">Logical Safe Content</div>
</div>
```

Closes #13300
