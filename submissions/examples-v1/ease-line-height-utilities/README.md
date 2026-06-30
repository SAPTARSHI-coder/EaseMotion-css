# Line Height Utilities (`ease-line-height-utilities`)

A demonstration of CSS `line-height` utilities (often called "leading" in typography) used to control vertical rhythm and legibility of text.

## 🚀 Features & EaseMotion Showcase

- **Proportional Scaling**: These utilities use unitless multipliers (like `1.5` instead of `24px`). This ensures that the line height perfectly scales with the font size. If the text size changes on mobile, the line-height mathematically adapts automatically!
- **Accessibility & Rhythm**: Standard paragraphs should generally use `.ease-leading-normal` (1.5) for optimal reading accessibility. Conversely, massive `<h1>` tags often look broken and disjointed with normal line-height, and should be tightened using `.ease-leading-tight` (1.25) or `.ease-leading-none` (1).

## 🛠️ Usage

This demo is self-contained. Open `demo.html` in your browser. All required CSS is inside `style.css`.

To apply a line height:

```html
<h1 class="ease-leading-tight">A Massive Headline</h1>
<p class="ease-leading-normal">A standard reading paragraph.</p>
```
