# ease-letter-spacing-scroll

Letter spacing expands from tight to normal as element scrolls into viewport.

## How it works

- letter-spacing animates from `-0.1em` to `0` based on intersection ratio
- Uses IntersectionObserver with threshold array [0, 0.05, ..., 1.0]
- Creates a dramatic heading reveal effect on scroll

## Usage

Add class `ease-letter-spacing-scroll` to any heading element.

```html
<h1 class="ease-letter-spacing-scroll">Your Heading</h1>
```

## Files

- `demo.html` — Interactive demo
- `style.css` — CSS styles
