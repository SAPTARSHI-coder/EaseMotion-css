# Morphing Submit Button

## What does it do?
A submit button that morphs into a loading spinner on `:active` — pure CSS, no JavaScript.

## Features
- Shrinks from rectangle to circle on `:active`
- Text fades out, spinner fades in via `::after`
- Smooth transitions for the morph
- Enhances form UX with immediate CSS-only feedback

## Usage
```html
<button class="morph-btn">Submit</button>
```

```css
.morph-btn {
  transition: width 0.35s ease, border-radius 0.35s ease;
}
.morph-btn:active {
  width: 54px;
  border-radius: 50%;
  color: transparent;
}
.morph-btn::after {
  /* spinner styles */
  opacity: 0;
}
.morph-btn:active::after {
  opacity: 1;
  animation: spin 0.6s linear infinite;
}
```

## Browser Support
- Chrome 1+, Firefox 3.5+, Safari 3.1+

## Tech Stack
- HTML + CSS only, no JavaScript

## Preview
Open `demo.html` directly in browser.
