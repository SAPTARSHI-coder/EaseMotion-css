# Ease Hero Typography

A pure CSS hero typography component utilizing modern CSS `text-wrap` features (`balance` and `pretty`) to create visually harmonious text layouts without JavaScript.

## 1. What does this do?

This component provides styled hero headings and body paragraphs with enhanced line-wrapping behavior:
- `.ease-hero-heading` uses `text-wrap: balance` to automatically balance line lengths across multi-line titles.
- `.ease-article-paragraph` uses `text-wrap: pretty` to intelligently prevent solitary single-word widows on the final line of paragraphs.

## 2. How is it used?

Include `style.css` in your project and apply the CSS classes to your header container, hero heading, and paragraph elements:

```html
<header class="ease-hero-wrapper">
  <h1 class="ease-hero-heading">Your Impactful Hero Title Here</h1>
  <p class="ease-article-paragraph">Your engaging introduction paragraph content goes here...</p>
</header>
```

## 3. Why is it useful?

1. **`text-wrap: balance`**: Solves the common web design issue of uneven heading lines. It balances the number of characters per line in headings (up to ~4 lines), creating visually appealing headline blocks automatically regardless of screen width.
2. **`text-wrap: pretty`**: Solves typographic "widows" (a single word left alone on the last line of a paragraph) by adjusting text layout to keep at least two words on the final line, improving readability.
3. **Performance & Simplicity**: Achieves pixel-perfect editorial typography purely through modern native CSS with zero JavaScript overhead.
