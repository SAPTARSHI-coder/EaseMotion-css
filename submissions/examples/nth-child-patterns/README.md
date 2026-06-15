# :nth-child Patterns

## What does it do?
A pure-CSS demo showing `:nth-child()` An+B selector patterns for targeting elements by position — no JavaScript required.

## Features
- **odd / even** — alternating row styling with `:nth-child(odd/even)`
- **Every 3rd** — `:nth-child(3n)` targets every third element
- **Offset patterns** — `:nth-child(3n+1)` starts from element 1
- **First N elements** — `:nth-child(-n+4)` targets the first 4
- **From end** — `:nth-last-child(-n+2)` targets last 2 elements

## Usage
```css
/* Alternating rows */
tr:nth-child(even) { background: #f5f5f5; }

/* Every third item */
li:nth-child(3n) { color: red; }

/* First three items */
li:nth-child(-n+3) { font-weight: bold; }
```

## Browser Support
- `:nth-child()` — Chrome 1+, Firefox 3.5+, Safari 3.2+
- `:nth-last-child()` — Chrome 1+, Firefox 3.5+, Safari 3.2+

## Tech Stack
- HTML + CSS only, no JavaScript

## Preview
Open `demo.html` directly in browser.
