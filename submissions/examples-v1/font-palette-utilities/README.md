# CSS Font Palette Utilities

Relates to feature request **#41319**.

## 1. What does this do?

Introduces utility classes that leverage the CSS `@font-palette-values` rule for color fonts. Allows developers to easily switch between predefined font palettes and customize color font rendering with graceful `@supports not` fallbacks.

## 2. Why is this useful for EaseMotion CSS?

Color fonts are becoming increasingly popular for branding and expressive typography. Supporting font palettes would enable modern typographic effects while showcasing emerging CSS font technologies.

## 3. Utilities Provided

| Class | `font-palette` | Palette Used |
|---|---|---|
| `.ease-color-font` | `--brand` | `base-palette: 2` (issue snippet) |
| `.ease-palette-dark` | `--dark` | `base-palette: 0` |
| `.ease-palette-light` | `--light` | `base-palette: 1` |
| `.ease-palette-custom` | `--custom` | Custom `override-colors` |
| `.ease-no-palette` | `normal` | Browser default |

## 4. How is it used?

**HTML** (matching the issue's snippet exactly)
```html
<h1 class="ease-color-font">
  EaseMotion
</h1>
```

**CSS** (matching the issue's snippet exactly)
```css
@font-palette-values --brand {
  font-family: "ColorFont";
  base-palette: 2;
}

.ease-color-font {
  font-palette: --brand;
}
```

## 5. Overriding Individual Colors

Beyond selecting a base palette index, you can override specific colors within a palette using `override-colors`:

```css
@font-palette-values --custom {
  font-family: "ColorFont";
  base-palette: 0;
  override-colors:
    0 #6c63ff, /* Color slot 0 → purple */
    1 #38bdf8; /* Color slot 1 → blue */
}

.ease-palette-custom {
  font-palette: --custom;
}
```

## 6. Graceful Fallback

```css
@supports not (font-palette: normal) {
  .ease-color-font {
    color: #6c63ff; /* Plain text color for older browsers */
  }
}
```

## 7. Browser Support

| Browser | `@font-palette-values` | `font-palette` |
|---|---|---|
| Chrome | 101+ ✅ | 101+ ✅ |
| Firefox | 107+ ✅ | 107+ ✅ |
| Safari | 15.4+ ✅ | 15.4+ ✅ |
| Edge | 101+ ✅ | 101+ ✅ |

> **Note**: Color font support depends on the font format. COLR/CPAL fonts (like Bungee Shade) have the widest browser support. The demo uses [Bungee Shade](https://fonts.google.com/specimen/Bungee+Shade) from Google Fonts as a real color font example.
