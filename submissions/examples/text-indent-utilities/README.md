# Text Indentation Utilities

A collection of lightweight, reusable CSS text-indent utility classes designed to control the first-line horizontal indentation of block-level elements. It supports standard positive values for paragraph indentation, reset rules, and negative values to construct modern hanging indents.

## Features

- **Pure CSS implementation** (no JavaScript needed for core styles).
- **EaseMotion Naming Standard**: standard utility classes prefix (`ease-indent-`).
- **Flexible Spacing Scale**: covers small, medium, large, and extra-large spacing options.
- **Negative Indents Support**: makes it easy to build hanging indents for bibliographies or list designs.
- **Root Variable Tokens**: utilizes CSS custom properties (`:root`) for easy theme customization.
- **Cross-browser compatible** and print-friendly.

## Available Utility Classes

| Class Name | Text Indent Value | Description / Typical Use Case |
| :--- | :--- | :--- |
| `ease-indent-none` / `ease-indent-0` | `0` | Resets first-line indentation to zero (default browser behavior). |
| `ease-indent-sm` | `1rem` (16px) | Subtle editorial paragraph indent, ideal for narrow articles or mobile. |
| `ease-indent-md` | `2rem` (32px) | Standard print-like paragraph indentation for rich readability. |
| `ease-indent-lg` | `3rem` (48px) | Distinct indentation style for large display/editorial blocks. |
| `ease-indent-xl` | `4rem` (64px) | Extra-large indentation suitable for highlighted content or quotes. |
| `ease-indent-neg-sm` | `-1rem` (-16px) | Negative spacing, used to style small hanging indents. |
| `ease-indent-neg-md` | `-2rem` (-32px) | Negative spacing, used to style standard hanging indents. |
| `ease-indent-neg-lg` | `-3rem` (-48px) | Negative spacing, used to style large hanging indents. |
| `ease-indent-neg-xl` | `-4rem` (-64px) | Negative spacing, used to style extra-large hanging indents. |

## Usage Examples

### 1. Basic Paragraph Indentation
Standard paragraph layouts in publication and print style:

```html
<!-- Paragraph with medium indentation -->
<p class="ease-indent-md">
  This is the first line of a paragraph containing editorial content.
  The rest of the lines in the block align normally to the left margin.
</p>
```

### 2. Resetting Indentation
When inheriting text indentation in structural elements, reset it using:

```html
<p class="ease-indent-none">
  This paragraph has no indentation, starting exactly at the left margin.
</p>
```

### 3. Hanging Indents (Bibliographies or Lists)
A hanging indent is constructed by matching a positive left padding with a negative text-indent class:

```html
<!-- Hanging indent (medium) -->
<div class="ease-indent-neg-md" style="padding-left: 2rem;">
  <strong>Doe, J. (2026).</strong> <em>Exploring Modern CSS Architectures.</em> 
  This line hangs outward to the left, while the succeeding lines align nicely with the 2rem padding-left boundary.
</div>
```

## Why is it Useful?

1. **Enhanced Typography Rhythm**: Classic layout principles dictate indenting the first line of subsequent body text paragraphs to visually guide the reader.
2. **Improved Readability**: Giving a structured hierarchy to editorial sites reduces cognitive strain, making long articles easier to digest.
3. **No Layout Shifts**: Operates with hardware-accelerated text layout rendering, resulting in fluid page loads.
4. **Hanging Indent Support**: Extremely helpful when styling citations, list systems, glossary items, or legal documents.

## Browser Support

| Browser | Supported | Notes |
| :--- | :---: | :--- |
| **Chrome** | ✅ | Full support |
| **Firefox** | ✅ | Full support |
| **Safari** | ✅ | Full support |
| **Edge** | ✅ | Full support |
| **Opera** | ✅ | Full support |

---

**Submitted by:** @EaseMotion Community  
**Date:** 2026-06-23  
**Status:** Ready for review  
**Type:** Pure CSS Utilities / Typography  
