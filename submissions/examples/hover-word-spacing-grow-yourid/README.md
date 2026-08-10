# Hover Word Spacing Grow

A simple hover effect that smoothly increases the spacing between words.

## Features

- Expands `word-spacing` from `0` to `0.1em`
- Smooth `0.3s ease` transition
- Works with text, headings, buttons, and links

## Usage

```html
<p class="hover-word-spacing-grow">
  Hover over this text
</p>
```

## CSS

```css
.hover-word-spacing-grow {
  word-spacing: 0;
  transition: word-spacing 0.3s ease;
}

.hover-word-spacing-grow:hover {
  word-spacing: 0.1em;
}
```

## Acceptance Criteria

- ✅ `word-spacing: 0 → 0.1em`
- ✅ Smooth `0.3s` transition