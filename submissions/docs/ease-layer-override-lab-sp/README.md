# @layer Override Playground for Custom Theming

An interactive documentation lab proving that **`@layer easemotion-components` overrides win without `!important`** — helping users understand EaseMotion's cascade layer architecture.

> Submission track: `submissions/docs/ease-layer-override-lab-sp/`  
> Contributor suffix: `sp`  
> Resolves: Issue #44492

---

## What does this do?

EaseMotion CSS wraps framework styles in `@layer easemotion-base`, `easemotion-components`, and `easemotion-utilities`. Beginners often resort to `!important` when customizing components. This lab shows the correct layer override pattern in real time.

---

## Demo modes

| Mode | Result | Lesson |
|------|--------|--------|
| Default | Framework purple theme | Baseline component styles |
| ✓ Correct @layer | Teal theme applied | Override inside `easemotion-components` after CDN |
| ✗ Wrong layer | Orange ignored | `easemotion-base` loses to components layer |
| ✗ Before CDN | Orange ignored | Same-layer CSS before framework is overwritten |
| Plain CSS | Purple/violet theme | Unlayered CSS works but skips layer architecture |

---

## Override examples included

- **Button color** — `.ease-btn-primary` background + border
- **Card border** — `.ease-card` border width, color, radius
- **Tab underline** — `.ease-tab-underline` + active label color

---

## How is it used?

1. Open `demo.html` in a browser (requires internet for CDN).
2. Switch override strategies with the mode buttons.
3. Watch the live preview and verdict banner update.
4. Read the CSS editor panel for each strategy's code.
5. Copy the correct `@layer easemotion-components` snippet.

---

## Features

- Live component preview with default EaseMotion styles
- Custom `@layer easemotion-components` override demonstration
- Side-by-side comparison: default vs overridden styles
- Demonstration that wrong-layer / wrong-order CSS loses to framework
- Proof that correct `@layer` overrides win without `!important`
- Multiple override examples (button color, card border, tab underline)
- Copy-ready `@layer` override CSS snippets
- Educational notes on EaseMotion cascade layer architecture
- Responsive, accessible UI with keyboard-friendly controls

---

## Tech stack

| Asset | Source |
|-------|--------|
| EaseMotion CSS | jsDelivr CDN (`easemotion.min.css`) |
| Override rules + lab UI | `style.css` |
| Mode switching + copy | Inline JS in `demo.html` |

---

## Recommended override pattern

```css
@layer easemotion-components {
  .my-btn.ease-btn-primary {
    background-color: #0d9488;
    border-color: #0d9488;
  }
}
```

Load this **after** `easemotion.min.css` in your HTML or bundle.

---

## Files

| File | Purpose |
|------|---------|
| `demo.html` | Live preview, mode switcher, CSS editor |
| `style.css` | Layer overrides, layout, comparison UI |
| `README.md` | This document |

---

## Compliance notes

- Only **new files** inside `submissions/docs/ease-layer-override-lab-sp/`.
- No modifications to `core/`, `components/`, workflows, or existing files.
- All three required submission files included (`demo.html`, `style.css`, `README.md`).
- Total contribution exceeds the 250-line minimum policy threshold.
- Folder name carries the unique contributor suffix `-sp`.
