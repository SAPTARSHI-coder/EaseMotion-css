# Text Glitch Animation Effect

## What does this do?
This implements a cyberpunk-style "glitch" animation on text. The text momentarily distorts, splits into cyan and magenta layers, and stutters to simulate a digital error or interference.

## How is it used?
Apply the `.ease-text-glitch` class to a text element. **Crucially, you must provide the exact same text inside a `data-text` attribute** on the element so the CSS pseudo-elements can duplicate it for the effect.

Example:
```html
<h1 class="ease-text-glitch" data-text="CYBERPUNK">
  CYBERPUNK
</h1>
```

## Why is it useful?
- Creates highly stylized, attention-grabbing headings.
- Perfect for error pages (like 404s), gaming interfaces, or modern dark-mode themes.
- Uses pure CSS `clip-path` and `text-shadow` manipulation, meaning it's highly performant and requires zero JavaScript.
