# ease-morph-scroll — EaseMotion CSS Demo

A standalone demonstration of a scroll-linked border-radius morph effect: elements transition smoothly from a perfect circle (`border-radius: 50%`) to a sharp rectangle (`border-radius: 0%`) as they enter the viewport. Built with `IntersectionObserver`, a CSS `transition`, and zero keyframes.

---

## Screenshot Placeholder

> Open `demo.html` directly in any modern browser — no build tools, server, or dependencies required.

```
┌──────────────────────────────────────────────────────────┐
│  EaseMotion CSS · Scroll Demo                            │
│                                                          │
│           ease-morph-scroll                              │
│           Circle → Square                                │
│                                                          │
│   [○] ─ · · · · · ─ [□]   ← live preview              │
│                                                          │
│           ↓ Scroll to see the effect                     │
├──────────────────────────────────────────────────────────┤
│  01. Profile Image   ● → ▭   ratio: 0.72   br: 14%     │
│  02. Product Card    ● → ▭   ratio: 0.45   br: 27%     │
│  03. Gallery Image   ● → ▭   ratio: 0.00   br: 50%     │
├──────────────────────────────────────────────────────────┤
│  How It Works · Use Cases · Footer                       │
└──────────────────────────────────────────────────────────┘
```

---

## Folder Structure

```
ease-morph-scroll/
├── demo.html    ← Complete demo page
├── style.css    ← Layout, colour, typography, transitions (no @keyframes)
└── README.md    ← This file
```

---

## How the Effect Works

### 1. Fine-grained thresholds

The `IntersectionObserver` is created with 101 threshold values — every 1% from `0.00` to `1.00`. This means the callback fires at each 1% increment of visibility, giving smooth per-frame fidelity.

```js
const THRESHOLDS = Array.from({ length: 101 }, (_, i) => i / 100);
// [0, 0.01, 0.02, … 1.00]
```

### 2. Linear ratio mapping

Inside the callback, `entry.intersectionRatio` (a float between 0 and 1) is mapped linearly to a `border-radius` percentage:

```
ratio = 0.00  →  border-radius: 50%   (full circle)
ratio = 0.50  →  border-radius: 25%   (mid-morph)
ratio = 1.00  →  border-radius: 0%    (sharp square)
```

Formula: `radius = 50 - ratio * 50`

### 3. CSS transition fills the gaps

Even at 101 thresholds, callbacks don't fire on every pixel of scroll. The CSS `transition: border-radius 120ms ease-out` on the element interpolates between each JavaScript-set value, producing a perfectly smooth visual result.

```css
.morph-card {
  border-radius: 50%;             /* Initial state */
  transition: border-radius 120ms ease-out;
}
```

### 4. Reduced motion support

A `prefers-reduced-motion` media query skips the transition and jumps directly to `border-radius: 0` — so users who prefer reduced motion still see the correct final state without any animated change.

---

## Sections

| # | Section | Description |
|---|---|---|
| 1 | **Hero** | Title, description, live mini preview that tracks page scroll, scroll cue |
| 2 | **Demo Cards** | 3 live morph demos (Profile Image, Product Card, Gallery Image) with ratio readouts |
| 3 | **How It Works** | 3 code explanation cards with live syntax-highlighted snippets |
| 4 | **Why It Works** | 4 UX rationale cards (attention, performance, hierarchy, accessibility) |
| 5 | **Use Cases** | 6 use-case cards with mini hover-demo morph shapes |
| 6 | **Footer** | EaseMotion branding, GitHub, Docs, copyright |

---

## EaseMotion Classes Demonstrated

| Class | Used on |
|---|---|
| `ease-fade-in` | Hero chip, preview, scroll cue, footer |
| `ease-slide-up` | Hero title, description, tags |
| `ease-bounce` | Scroll-down arrow cue |
| `ease-hover-lift` | Explanation cards, use-case cards, why-items, product card CTA |
| `ease-hover-underline` | Footer links |

> Note: The core morph animation is **not** an EaseMotion class — it is implemented via `IntersectionObserver` + a CSS `transition` on `border-radius`, as specified in the issue requirements.

---

## Browser Support

| Browser | Support |
|---|---|
| Chrome / Edge 88+ | ✅ Full support |
| Firefox 55+ | ✅ Full support |
| Safari 12.1+ | ✅ Full support |
| Samsung Internet 8+ | ✅ Full support |
| IE 11 | ❌ No IntersectionObserver (polyfill required) |

The page degrades gracefully in unsupported browsers — elements simply remain at their initial `border-radius: 50%` (or `0` with the reduced-motion rule).

---

## Usage Instructions

1. Copy the `ease-morph-scroll/` folder anywhere.
2. Open `demo.html` directly in any modern browser.
3. The page links to EaseMotion CSS via `../../easemotion.css`. To use outside this repository:

```html
<link rel="stylesheet" href="/path/to/easemotion.css" />
```

### Applying the Effect to Your Own Elements

Add `data-morph` to any element and include the observer script:

```html
<!-- HTML -->
<div class="your-element" data-morph></div>
```

```css
/* CSS */
.your-element {
  border-radius: 50%;
  transition: border-radius 120ms ease-out;
}
```

```js
// JS
const THRESHOLDS = Array.from({ length: 101 }, (_, i) => i / 100);

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const radius = 50 - entry.intersectionRatio * 50;
    entry.target.style.borderRadius = `${radius.toFixed(1)}%`;
  });
}, { threshold: THRESHOLDS });

document.querySelectorAll('[data-morph]')
  .forEach(el => observer.observe(el));
```

### Customising the Range

Change the start or end radius to create different effects:

```js
// Softer morph: 30% → 8% (rounded rectangle entrance)
const radius = 30 - entry.intersectionRatio * 22;

// Pill entrance: 50% → 12%
const radius = 50 - entry.intersectionRatio * 38;

// Reverse (square → circle)
const radius = entry.intersectionRatio * 50;
```

---

## Technical Notes

- **No `@keyframes`** — zero animation declarations in `style.css`. The morph is driven entirely by JavaScript writing `style.borderRadius` and the CSS `transition` property.
- **No external libraries** — only native browser APIs: `IntersectionObserver`, `window.addEventListener`, `matchMedia`.
- **No build tools** — a single static HTML file, opens directly in any browser.
- **`will-change: border-radius`** is applied to morph targets, hinting to the browser to promote them to a compositor layer for GPU-accelerated rendering.
- **Reduced motion** — `prefers-reduced-motion: reduce` disables the transition and sets a final state immediately, ensuring full accessibility compliance.
