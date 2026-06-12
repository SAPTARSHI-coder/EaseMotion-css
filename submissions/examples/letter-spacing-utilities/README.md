# Letter Spacing Utilities

A lightweight collection of CSS letter-spacing utility classes that provide precise control over text character spacing, also known as tracking in typography.

## Features

- Pure CSS implementation
- Human-readable utility class names following EaseMotion conventions
- Lightweight and reusable
- Cross-browser compatible
- No JavaScript required
- Ideal for typography-driven designs and responsive text styling
- Aligns with design system best practices

## Available Classes

| Class                  | Letter Spacing | Use Case                                        |
| ---------------------- | -------------- | ----------------------------------------------- |
| `ease-tracking-tight`  | -0.025em       | Condensed, modern, headline-style text          |
| `ease-tracking-normal` | 0em            | Default, body text, standard readability        |
| `ease-tracking-wide`   | 0.05em         | Subtle emphasis, luxury brand aesthetics        |
| `ease-tracking-widest` | 0.1em          | Dramatic spacing, brand headlines, display text |

## Usage

### Basic Text Spacing

```html
<!-- Tight spacing for headlines -->
<h1 class="ease-tracking-tight">Bold Headline</h1>

<!-- Normal spacing for body text -->
<p class="ease-tracking-normal">
  Body copy remains readable with standard letter spacing.
</p>

<!-- Wide spacing for subtle emphasis -->
<p class="ease-tracking-wide">
  Luxury product descriptions often use wider tracking.
</p>

<!-- Widest spacing for dramatic effect -->
<h2 class="ease-tracking-widest">FEATURED</h2>
```

### Combining with Other Utilities

```html
<!-- Use with text size and color utilities -->
<h1 class="ease-tracking-tight ease-text-2xl ease-text-primary">
  Premium Brand Title
</h1>

<!-- Use with padding for styled tags or badges -->
<span class="ease-tracking-wide ease-padding-2 ease-rounded"> EXCLUSIVE </span>
```

### Responsive Letter Spacing

The utilities use static values; for responsive behavior, combine with media queries:

```css
@media (max-width: 768px) {
  h1 {
    letter-spacing: -0.01em; /* Tighter on mobile */
  }
}
```

## Browser Support

| Browser                  | Supported | Notes                                   |
| :----------------------- | :-------: | :-------------------------------------- |
| **Chrome**               |    ✅     | Full support                            |
| **Firefox**              |    ✅     | Full support                            |
| **Safari**               |    ✅     | Full support                            |
| **Edge**                 |    ✅     | Full support                            |
| **Internet Explorer 11** |    ✅     | Basic support (letter-spacing property) |

## Why is it Useful?

Letter spacing (tracking) is a powerful typography tool often overlooked in CSS frameworks. These utilities make it easy to:

- **Control headline impact** — Use `ease-tracking-tight` to make titles feel bold and modern
- **Improve readability** — Adjust tracking for body text based on font size and design requirements
- **Add brand identity** — Luxury brands often use wider tracking to convey elegance
- **Create visual hierarchy** — Pair with text sizes to make text appear closer or more spacious
- **Enhance accessibility** — Proper tracking improves readability for users with dyslexia

The utilities follow EaseMotion CSS naming conventions (`ease-` prefix, kebab-case) and integrate seamlessly with the framework's design system.

---

**Submitted by:** @EaseMotion Community  
**Date:** 2026-06-01  
**Status:** Ready for review  
**Type:** Pure CSS Utilities
