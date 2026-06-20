# Glitch Text Effect

## 1. What does this do?

Applies a CSS-only glitch animation to text using `::before` and `::after` pseudo-elements with `clip-path` and `translate` offsets. The effect creates a cyberpunk-style distortion with cyan and magenta color splits that trigger periodically.

## 2. How is it used?

Add the `glitch-text` class to any heading or text element. Set the `data-text` attribute to the same text content:

```html
<h1 class="glitch-text" data-text="GLITCH">GLITCH</h1>
```

### Speed variants

```html
<h1 class="glitch-text glitch-text-slow" data-text="SLOW">SLOW</h1>
<h1 class="glitch-text glitch-text-fast" data-text="FAST">FAST</h1>
```

### Color variants

```html
<h1 class="glitch-text glitch-text-green" data-text="GREEN">GREEN</h1>
<h1 class="glitch-text glitch-text-blue" data-text="BLUE">BLUE</h1>
```

## 3. Why is it useful?

- Pure CSS — no JavaScript required
- Works on any text element
- Composable speed and color variants
- Great for hero sections, 404 pages, game UIs, and cyberpunk-themed designs
- Fits naturally into EaseMotion's animation-first philosophy
