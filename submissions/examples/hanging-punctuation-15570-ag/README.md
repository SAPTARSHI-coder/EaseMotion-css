# CSS Hanging Punctuation Example

This typography showcase demonstrates the use of the CSS `hanging-punctuation` property to achieve professional editorial alignment for quotation marks.

---

## What is Hanging Punctuation?

When a paragraph or blockquote begins with quotation marks (`"`), standard browser rendering aligns the quotation marks to the left border, visually indenting the first line. 

By applying `hanging-punctuation: first last`, quotation marks and other symbols hang outside the text margins. This keeps the vertical reading column perfectly straight and aligned.

---

## Implementation Syntax

```css
blockquote, p {
  hanging-punctuation: first last;
  text-align: justify;
}
```

---

## Verification Steps

1. Open `demo.html` in Safari or an iOS web view engine.
2. Observe the comparison between "Standard Alignment" and "Hanging Punctuation".
3. In the "Hanging Punctuation" column, the quotation marks at the start of blockquotes and paragraphs should hang outside the left/right text boundary box.
