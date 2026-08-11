# Responsive Aspect Ratio Utility

This submission implements responsive aspect-ratio utility specifications matching SCSS utility mixin requirements.

---

## Technical Overview: SCSS Aspect Ratio Mixin

Defining rigid container sizes breaks flexible cards on smaller screen dimensions. Generating aspect-ratio utilities via SCSS mixins ensures containers preserve aspect boundaries automatically:

```scss
// SCSS Aspect Ratio Generator Mixin
@mixin aspect-ratio($width, $height) {
  aspect-ratio: $width / $height;
  @supports not (aspect-ratio: $width / $height) {
    // Fallback block for older browsers
    position: relative;
    &::before {
      content: "";
      display: block;
      padding-top: ($height / $width) * 100%;
    }
  }
}

// Utility Classes
.aspect-video { @include aspect-ratio(16, 9); }
.aspect-square { @include aspect-ratio(1, 1); }
```

---

## Verification Steps

1. Open `demo.html` in a browser.
2. Observe 16:9, 4:3, 1:1, and 21:9 layouts scaling to fit browser widths perfectly while maintaining exact proportions.
