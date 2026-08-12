# Shadow Lift on Hover

Shadow lifts and spreads on hover, creating a "lift off the page" effect — pure CSS.

## Features
- box-shadow offset + spread increase on hover
- translateY lift for depth
- Pure CSS, no JavaScript

## Usage
```css
.shadow-card { box-shadow: 0 4px 6px rgba(0,0,0,0.3); transition: box-shadow 0.3s, transform 0.3s; }
.shadow-card:hover { box-shadow: 0 20px 40px rgba(99,102,241,0.4); transform: translateY(-4px); }
```

## Browser Support
- Chrome 1+, Firefox 3.5+, Safari 3.1+

## Tech Stack
- HTML + CSS only, no JavaScript

## Preview
Open `demo.html` directly in browser.
