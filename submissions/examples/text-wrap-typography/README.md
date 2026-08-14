# Text Wrap &amp; Hyphenation

## What does it do?
A pure-CSS demo showing modern CSS text layout properties: `text-wrap` variants and `hyphens` — no JavaScript required.

## Features
- **text-wrap: balance** — balanced line wrapping for headings and short text blocks
- **text-wrap: pretty** — optimized paragraph wrapping with fewer orphans
- **text-wrap: stable** — content stability preventing layout shifts
- **hyphens: auto** — automatic hyphenation for justified text

## Usage
```css
h2 { text-wrap: balance; }
p  { text-wrap: pretty;  }
article { hyphens: auto; }
```

## Classes
- `.tw-unset` — default wrapping
- `.tw-balanced` — balanced wrapping
- `.tw-pretty` — optimized paragraph wrapping
- `.tw-stable` — stable content wrapping
- `.hyphens` — automatic hyphenation
- `.justify` — justified text alignment

## Browser Support
- `text-wrap: balance` — Chrome 114+, Firefox 121+, Safari 17.5+
- `text-wrap: pretty` — Chrome 117+, Firefox 121+, Safari 17.5+
- `text-wrap: stable` — Chrome 117+, Firefox 121+, Safari 17.5+
- `hyphens` — Chrome 88+, Firefox 6+, Safari 5.1+

## Tech Stack
- HTML + CSS only, no JavaScript

## Preview
Open `demo.html` directly in browser.
