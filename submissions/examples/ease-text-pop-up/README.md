# ease-text-pop-up

## What does it do?
Each word pops upward into view one by one — a staggered entrance animation using `translateY(100%) → translateY(0)`.

## Features
- Each word span: `translateY(100%) → 0` with staggered `transition-delay`
- `overflow: hidden` on per-word container
- `--ease-word-stagger-delay` CSS custom property (default: 0.12s)
- Pure CSS, no JavaScript

## Usage
```css
.word-wrap {
  overflow: hidden;
}
.word {
  transform: translateY(100%);
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.container:hover .word {
  transform: translateY(0);
}
.word-wrap:nth-child(2) .word { transition-delay: 0.12s; }
/* repeat for each word */
```

## Browser Support
- Chrome 1+, Firefox 3.5+, Safari 3.1+

## Tech Stack
- HTML + CSS only, no JavaScript

## Preview
Open `demo.html` directly in browser.
