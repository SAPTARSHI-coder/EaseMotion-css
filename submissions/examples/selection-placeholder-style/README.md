# Selection &amp; Placeholder Styling

## What does it do?

A pure-CSS demo showing how to customize text selection highlights and input placeholder text using `::selection` and `::placeholder` pseudo-elements.

## Features

- **Global Selection** — default purple highlight for all page text
- **Per-Section Selection** — teal, gold, and rose highlight colors in different sections
- **Code Selection** — distinct selection style for `<code>` blocks
- **Placeholder Colors** — purple italic and teal bold placeholders
- **Placeholder on Focus** — placeholder fades to transparent on input focus

## Usage

```css
/* Global selection */
::selection {
  background: #8b5cf6;
  color: #ffffff;
}

/* Section-specific selection */
.sel-teal ::selection {
  background: #14b8a6;
  color: #0f0f0f;
}

/* Placeholder styling */
.pl-purple::placeholder {
  color: #a78bfa;
  font-style: italic;
}

/* Placeholder transition on focus */
.pl-fade::placeholder {
  transition: color 0.3s ease;
}
.pl-fade:focus::placeholder {
  color: transparent;
}
```

## Classes

- `.sel-teal`, `.sel-gold`, `.sel-rose` — section-specific selection colors
- `.pl-purple`, `.pl-teal`, `.pl-fade` — placeholder style variants

## Browser Support

- `::selection` — Chrome 1+, Firefox 62+, Safari 1.1+
- `::placeholder` — Chrome 57+, Firefox 51+, Safari 10.1+

## Tech Stack

- HTML + CSS only, no JavaScript

## Preview

Open `demo.html` directly in browser.
