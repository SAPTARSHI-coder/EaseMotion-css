# CSS Hyphenation Controls Example

## What does this do?

Demonstrates CSS hyphenation control properties for improved typography and text wrapping.

## How is it used?

```html
<p class="hyphenated" lang="en">
  internationalization accessibilityoptimization
</p>
```

```css
.hyphenated {
  hyphens: auto;
  hyphenate-character: "-";
  hyphenate-limit-chars: 6 3 3;
}
```

## Why is it useful?

Hyphenation improves readability by breaking long words more naturally, reducing overflow issues and improving layouts in narrow containers.
