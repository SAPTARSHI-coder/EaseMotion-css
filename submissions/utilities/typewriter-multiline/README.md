# Multi-line CSS Typewriter Effect

## Description
This submission resolves Issue #68985 by providing an advanced typewriter effect capable of handling multi-line, wrapping text. Traditional CSS typewriter effects rely on animating the `width` of a container, which entirely breaks when text needs to wrap onto multiple lines. This solution uses a `.ease-typewriter-mask` pseudo-element approach combined with a staggered reveal across `<span>` words.

## Features
- True multi-line support: text naturally wraps according to container width without breaking the animation.
- Pure CSS animation using a mask (`::after`) that shrinks from left to right, revealing the text underneath.
- Uses `nth-child` generated staggered delays so that the mask animations happen sequentially across words.
- Customizable typing speed via `--type-speed` and custom masking color via `--bg-color`.

## Usage
Wrap your text inside a container with the `.ease-typewriter-multiline` class. 
Crucially, wrap the individual segments (words, or even characters) in `<span>` tags. 

```html
<!-- Ensure --bg-color matches the background of the container -->
<p class="ease-typewriter-multiline" style="--type-speed: 0.15s; --bg-color: #121212;">
  <span>This</span> <span>is</span> <span>a</span> <span>multi-line</span> 
  <span>string</span> <span>that</span> <span>will</span> <span>wrap</span> 
  <span>naturally</span> <span>across</span> <span>the</span> <span>screen.</span>
</p>
```

### How it works
Each `<span>` receives a `::after` pseudo-element that acts as a mask, completely covering the span with `var(--bg-color)`. The mask then animates by shrinking its left edge (`left: 100%`), revealing the text underneath it exactly like a typewriter. The staggering delay ensures the masks animate sequentially.
