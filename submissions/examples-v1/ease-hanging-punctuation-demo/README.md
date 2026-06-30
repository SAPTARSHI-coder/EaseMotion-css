# CSS Hanging Punctuation Component (`ease-hanging-punctuation-demo`)

A modern typographic refinement demonstrating the native CSS `hanging-punctuation` property, with a robust fallback for cross-browser support.

## 🚀 Features & Typography Showcase

- **Optical Alignment**: When starting a blockquote with a quotation mark, standard rendering pushes the first letter inwards. Hanging punctuation pulls the quote into the margin so the text creates a perfect vertical line.
- **Native Safari Support**: Uses `hanging-punctuation: first last;` natively where supported.
- **Graceful Fallback**: For Chrome and Firefox, an `@supports` query detects the lack of native support and gracefully falls back to a precise `text-indent: -0.45em` hack to simulate the exact same effect automatically.

## 🛠️ Usage

This demo is self-contained. Open `demo.html` in your browser. All required CSS is inside `style.css`.

### Usage in CSS:

```css
.ease-hanging-quote {
  /* Native Support */
  hanging-punctuation: first last;
}

/* Fallback for Chrome/Firefox/Edge */
@supports not (hanging-punctuation: first) {
  .ease-hanging-quote {
    text-indent: -0.45em;
    padding-left: 0.45em; /* Adjust based on your margin/padding needs */
  }
}
```
