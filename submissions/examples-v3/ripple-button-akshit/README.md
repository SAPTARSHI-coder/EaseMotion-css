# CSS-Only Ripple Button

A hover-triggered ripple effect — pure CSS, no JavaScript.

Uses `::before` + `@keyframes` + `transform: scale()`. The button has `overflow: hidden` so the wave stays clipped. All colours and timing are CSS variables so it's easy to customise.

---

## Files

```
ripple-button-akshit/
├── demo.html   ← open this in a browser
├── style.css   ← the actual component
└── README.md
```

---

## Usage

```html
<link rel="stylesheet" href="style.css">

<button class="ease-ripple-btn ease-ripple-btn--blue" type="button">
  <span class="ease-ripple-effect">Click Me</span>
</button>
```

The inner `<span class="ease-ripple-effect">` is optional but keeps the label above the wave at all times.

Three variants out of the box: `--blue`, `--green`, `--purple`. Works on `<a>` tags too.

---

## Customisation

Override any of these CSS variables on your own class (or inline):

| Variable | Default | What it controls |
|---|---|---|
| `--ripple-bg` | variant | background |
| `--ripple-bg-hover` | variant | background on hover |
| `--ripple-text` | variant | label colour |
| `--ripple-wave` | `rgba(255,255,255,0.35)` | wave colour |
| `--ripple-border-radius` | `9999px` | corner radius |
| `--ripple-padding-y` | `0.75rem` | vertical padding |
| `--ripple-padding-x` | `2rem` | horizontal padding |
| `--ripple-font-size` | `1rem` | — |
| `--ripple-font-weight` | `600` | — |
| `--ripple-transition-duration` | `0.6s` | animation speed |
| `--ripple-easing` | `cubic-bezier(0.25, 0.46, 0.45, 0.94)` | easing |
| `--ripple-shadow` | `0 4px 14px …` | resting shadow |
| `--ripple-shadow-hover` | `0 8px 24px …` | hover shadow |

**Custom colour example:**

```css
.btn-brand {
  --ripple-bg: #e11d48;
  --ripple-bg-hover: #be123c;
  --ripple-text: #ffffff;
  --ripple-wave: rgba(255, 255, 255, 0.4);
  --ripple-transition-duration: 0.5s;
}
```

```html
<button class="ease-ripple-btn btn-brand" type="button">
  <span class="ease-ripple-effect">Brand Button</span>
</button>
```

Speed modifiers:

```css
.ease-ripple-btn--fast { --ripple-transition-duration: 0.4s; }
.ease-ripple-btn--slow { --ripple-transition-duration: 0.8s; }
```

Square corners:

```css
.ease-ripple-btn--square { --ripple-border-radius: 0.5rem; }
```

---

## How it works

1. `.ease-ripple-btn` has `position: relative` + `overflow: hidden` to contain the wave
2. `::before` starts at `scale(0)`, `opacity: 0` — invisible
3. On `:hover`, `ease-ripple-expand` fires: scales from 0 → 2.8 while fading out
4. `.ease-ripple-effect` sits at `z-index: 1` so the label stays on top

---

## Browser support

Works in all modern browsers (Chrome 49+, Firefox 31+, Safari 9.1+). IE 11 doesn't support CSS custom properties so you'd need to hard-code the colours as a fallback — but honestly, don't bother for IE.

---

MIT licence. Part of [EaseMotion CSS](https://github.com/SAPTARSHI-coder/EaseMotion-css).
