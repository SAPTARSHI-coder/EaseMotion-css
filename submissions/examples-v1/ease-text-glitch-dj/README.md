# Cyberpunk Glitch Text Effect (`ease-text-glitch-dj`)

A pure CSS utility class that generates a cyberpunk-style digital glitch effect. The animation simulates screen distortion, RGB channel separation, random slice artifacts, and monitor flickering — entirely without JavaScript.

## Features

- **Pure CSS** — zero JavaScript required
- **Dual pseudo-element layers** (`::before` / `::after`) for realistic RGB channel separation
- **Clip-path slicing** — random horizontal slices jump between keyframes using `steps()`
- **`skewX()` distortion** — simulates physical screen tearing
- **Flicker animation** — mimics monitor instability
- **CSS variable** (`--glitch-bg`) for solid-background slice mode
- **Accessible** — fully disables when `prefers-reduced-motion` is set
- **Responsive** — works at any font size, from small labels to giant hero headings

## Demo

Open [`demo.html`](./demo.html) directly in any browser — no server needed.

## Usage

### Step 1 — Link the stylesheet

```html
<link rel="stylesheet" href="style.css">
```

### Step 2 — Apply the class

> ⚠️ **Important:** The `data-text` attribute **must exactly match** the element's inner text. The CSS pseudo-elements use `content: attr(data-text)` to duplicate the text layers.

```html
<h1 class="ease-text-glitch-dj" data-text="GLITCH">GLITCH</h1>
```

## Customization

### Font Size

Control size with any CSS font-size value — the effect scales automatically:

```html
<h1 class="ease-text-glitch-dj" data-text="SYSTEM FAILURE"
    style="font-size: 5rem;">SYSTEM FAILURE</h1>
```

### Solid Background Slice Mode

By default, pseudo-element backgrounds are transparent (so underlying elements show through the slices). To get clean, opaque slices, pass your page background color via the `--glitch-bg` variable:

```html
<h1 class="ease-text-glitch-dj"
    data-text="CORRUPTED"
    style="--glitch-bg: #0a0a0f; font-size: 4rem;">CORRUPTED</h1>
```

### Custom Colors

Override the default cyan/magenta RGB split with your own colors:

```css
.my-glitch {
  color: white;
  text-shadow: 2px 0 #ff0040, -2px 0 #00ff9f; /* main layer */
}
.my-glitch::before { text-shadow: -2px 0 #ff0040; } /* channel A */
.my-glitch::after  { text-shadow:  2px 0 #00ff9f; } /* channel B */
```

### Animation Speed

Override animation durations with CSS variables or inline styles:

```css
/* Faster, more chaotic glitch */
.ease-text-glitch-dj {
  animation-duration: 2s;
}
.ease-text-glitch-dj::before { animation-duration: 0.8s; }
.ease-text-glitch-dj::after  { animation-duration: 1.2s; }
```

## How It Works

| Layer | Technique | Purpose |
|-------|-----------|---------|
| Base element | `text-shadow: 2px 0 cyan, -2px 0 magenta` + flicker `@keyframes` | Main text with RGB halo and monitor instability |
| `::before` | `clip-path: inset()` + `skewX()` + cyan shadow | Simulates horizontal screen slice — channel A |
| `::after` | `clip-path: inset()` + `skewX()` + magenta shadow | Simulates horizontal screen slice — channel B |

Both pseudo-elements use `animation-timing-function: step-end` so slices snap instantly between positions rather than interpolating — this creates the authentic digital glitch look.

## Accessibility

When the user has `prefers-reduced-motion: reduce` set in their OS/browser:

- All animations are disabled (`animation: none`)
- Pseudo-elements are hidden (`display: none`)
- Text shadows are removed
- Only the clean, static text is shown

```css
@media (prefers-reduced-motion: reduce) {
  .ease-text-glitch-dj {
    animation: none;
    text-shadow: none;
  }
  .ease-text-glitch-dj::before,
  .ease-text-glitch-dj::after {
    display: none;
  }
}
```

## Why It Fits EaseMotion CSS

EaseMotion CSS is a collection of lightweight, reusable CSS animation utilities. This submission follows all conventions:

- Single, namespaced utility class (`.ease-text-glitch-dj`)
- All keyframe names are namespaced (`ease-text-glitch-dj-*`) to avoid collisions
- No JavaScript dependencies
- Fully self-contained in `style.css`
- Accessibility support included
- Works with any font family, size, or color scheme

## Browser Support

| Browser | Support |
|---------|---------|
| Chrome 88+ | ✅ Full |
| Firefox 90+ | ✅ Full |
| Edge 88+ | ✅ Full |
| Safari 14+ | ✅ Full |
| Opera 74+ | ✅ Full |

> Requires `clip-path: inset()` support — available in all modern browsers.
