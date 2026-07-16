# CSS Text Wrap Balance Utilities

Relates to feature request **#41289**.

## 1. What does this do?

Adds utility classes built around the CSS `text-wrap: balance` and `text-wrap: pretty` properties to improve heading and paragraph wrapping automatically across different viewport sizes — with zero JavaScript and no manual `<br>` tags.

## 2. Why is this useful for EaseMotion CSS?

Balanced text wrapping creates cleaner typography without manual `<br>` tags. Including these utilities would help developers build polished hero sections, documentation, and marketing pages using native CSS. The properties are widely supported in modern browsers (Chrome 114+, Firefox 121+, Safari 17.4+).

## 3. Utilities Provided

| Class | Property | Best For |
|---|---|---|
| `.ease-balance` | `text-wrap: balance` | Headings, card titles, short labels (≤6 lines) |
| `.ease-pretty` | `text-wrap: pretty` | Body paragraphs, long descriptions, articles |
| `.ease-nowrap` | `text-wrap: nowrap` | Single-line elements (badges, table cells) |

## 4. How is it used?

**HTML** (matching the issue's snippet exactly)
```html
<h1 class="ease-balance">
  Build beautiful interfaces with EaseMotion CSS
</h1>
```

**CSS** (matching the issue's snippet exactly)
```css
.ease-balance {
  text-wrap: balance;
}

.ease-pretty {
  text-wrap: pretty;
}
```

## 5. When to Use Which

| | `balance` | `pretty` |
|---|---|---|
| **Use for** | Headings, CTAs, short titles | Body text, long paragraphs |
| **What it does** | Equalizes all line lengths | Prevents orphaned last words |
| **Performance** | ⚠️ Expensive for long text | ✅ Optimized for long text |
| **Line limit** | Works best ≤6 lines | No limit |

> **Rule of thumb**: Use `balance` for headings. Use `pretty` for paragraphs. Never use `balance` on long articles — use `pretty` instead.
