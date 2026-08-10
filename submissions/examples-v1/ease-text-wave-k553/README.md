# ease-text-wave

A lightweight, reusable CSS utility that animates text in a smooth wave sequence — each character bounces in sequence, creating a flowing wave effect.

## Use Cases
- Hero headings
- Loading messages
- Landing pages
- Portfolio websites

## Usage

Wrap each character of your text in a `<span>`, inside a parent element with the class `ease-text-wave`:

<h1 class="ease-text-wave">
  <span>H</span><span>e</span><span>l</span><span>l</span><span>o</span>
</h1>

Then include the stylesheet:

<link rel="stylesheet" href="style.css" />

## How It Works

Each `<span>` is animated independently using `nth-child` selectors with staggered `animation-delay` values, producing the wave-like motion as characters rise and fall in sequence.

## Files
- `demo.html` — live example
- `style.css` — animation styles
- `README.md` — this file

## Notes
- Currently supports up to 12 characters with unique delays (`nth-child(1)` through `nth-child(12)`). For longer strings, extend the delay list following the same 0.1s increment pattern.
- Spaces should also be wrapped in `<span>&nbsp;</span>` to preserve stagger timing across words.