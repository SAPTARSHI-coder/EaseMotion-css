# Card Radius Token

A lightweight demonstration of the `--ease-card-radius` CSS variable. This design token acts as a single source of truth for card border-radius values, making global customization simple and consistent.

## Features

- Pure CSS implementation
- Centralized border-radius token
- Easy theme customization
- Lightweight and reusable
- Cross-browser compatible
- No JavaScript required

## Usage

```css
:root {
  --ease-card-radius: 16px;
}
.ease-card {
  border-radius: var(--ease-card-radius);
}

## Behavior

* All cards reference a single radius variable
* Changing one value updates every card
* Supports consistent design systems
* Easy to customize without editing component styles

## Browser Support

| Browser | Supported |
| :--- | :---: |
| **Chrome** | ✅ |
| **Firefox** | ✅ |
| **Safari** | ✅ |
| **Edge** | ✅ |

## Why is it Useful?

Using a centralized radius token improves maintainability and consistency across a UI. Developers can globally adjust card corner styles from one location without modifying individual components.

---

**Submitted by:** @Muditapandey26
**Date:** 2026-05-31
**Status:** Ready for review
```
