# Animated Typewriter Text Effect Collection

A pure-CSS typewriter animation component for [EaseMotion CSS](https://github.com/SAPTARSHI-coder/EaseMotion-css).  
No JavaScript. No dependencies. Zero runtime cost.

---

## Files

```
submissions/examples/typewriter-text-collection/
├── style.css   ← all keyframes & class definitions
├── demo.html   ← live demo of every variant
└── README.md   ← this file
```

---

## How It Works

The effect uses three CSS techniques together:

| Technique | Purpose |
|---|---|
| `width: 0 → 100%` with `steps()` | Reveals characters one-by-one |
| `overflow: hidden` + `white-space: nowrap` | Hides unrevealved text |
| `border-right` + `@keyframes ease-caret-blink` | Blinking cursor |

---

## Classes

| Class | Behavior |
|---|---|
| `ease-typewriter` | Base typewriter — types once, keeps caret |
| `ease-typewriter-loop` | Repeating type → pause → erase → repeat |
| `ease-typewriter-fast` | 1.2 s typing speed |
| `ease-typewriter-slow` | 4 s typing speed |
| `ease-typewriter-no-caret` | Typing animation without blinking cursor |

### Delay helpers

| Class | Delay |
|---|---|
| `ease-delay-100` | 100 ms |
| `ease-delay-200` | 200 ms |
| `ease-delay-300` | 300 ms |
| `ease-delay-500` | 500 ms |
| `ease-delay-700` | 700 ms |
| `ease-delay-1000` | 1000 ms |

### Char-count helpers

The `steps()` count must match the number of characters in your text.  
Use a helper class or the CSS variable directly:

```html
<!-- Helper class (multiples of 5/10) -->
<span class="ease-typewriter ease-chars-20">Twenty chars here!!</span>

<!-- Or inline CSS variable for exact counts -->
<span class="ease-typewriter" style="--ease-typewriter-chars: 13">Hello, World!</span>
```

| Class | Chars |
|---|---|
| `ease-chars-10` | 10 |
| `ease-chars-15` | 15 |
| `ease-chars-20` | 20 |
| `ease-chars-25` | 25 |
| `ease-chars-30` | 30 (default) |
| `ease-chars-40` | 40 |
| `ease-chars-50` | 50 |

---

## Usage Examples

### Basic

```html
<link rel="stylesheet" href="style.css">

<h1 class="ease-typewriter ease-chars-13">Hello, World!</h1>
```

### Loop variant

```html
<span class="ease-typewriter-loop ease-chars-20">Type. Erase. Repeat.</span>
```

### Speed modifiers

```html
<span class="ease-typewriter ease-typewriter-fast ease-chars-20">Fast as lightning ⚡</span>
<span class="ease-typewriter ease-typewriter-slow ease-chars-20">Slow and deliberate...</span>
```

### No caret

```html
<span class="ease-typewriter ease-typewriter-no-caret ease-chars-15">No cursor here.</span>
```

### Staggered lines

```html
<p class="ease-typewriter ease-chars-20">Animation-first.</p>
<p class="ease-typewriter ease-chars-10 ease-delay-700">Zero deps.</p>
<p class="ease-typewriter ease-chars-9  ease-delay-1000">Ship it.</p>
```

### Custom caret colour

```html
<span class="ease-typewriter ease-chars-20"
      style="--ease-typewriter-caret-color: #a78bfa">
  Purple caret!
</span>
```

---

## CSS Custom Properties Reference

| Property | Default | Description |
|---|---|---|
| `--ease-typewriter-chars` | `30` | Number of characters (must match text length) |
| `--ease-typewriter-duration` | `2.4s` | Typing animation duration |
| `--ease-typewriter-erase-duration` | `1.8s` | Erase animation duration (loop only) |
| `--ease-typewriter-delay` | `0s` | Start delay |
| `--ease-typewriter-caret-color` | `currentColor` | Caret colour |
| `--ease-typewriter-caret-width` | `2px` | Caret thickness |
| `--ease-caret-blink-duration` | `0.75s` | Blink speed |

---

## Browser Support

Works in all browsers that support CSS animations and `steps()` — Chrome 43+, Firefox 16+, Safari 9+, Edge 12+.

---

## Contributor

- **GitHub:** [@thakurakanksha288](https://github.com/thakurakanksha288)
- **Programme:** GSSoC 2026