# Demo Page Generator — EaseMotion CSS

A simulated developer tool demonstrating how a script would automatically read `core/animations.css`, extract every `.ease-*` class name, and generate a complete interactive animation gallery page. The full generator pipeline is reproduced live in-browser using vanilla JavaScript — no Node.js, no build tools, no server required.

> **Note on issue #20499:** Submissions cannot modify repository tooling (`package.json`, `scripts/`, `core/`), so this example simulates the generator client-side rather than shipping a real Node script. The technique, code snippets, and output preview are production-accurate.

---

## Screenshot Placeholder

> Open `demo.html` directly in any modern browser.

```
┌────────────────────────────────────────────────────────────┐
│  >_ EaseMotion   How It Works  Live Demo  Output  Benefits │
├────────────────────────────────────────────────────────────┤
│                                                            │
│       [Developer Tool · Issue #20499]                      │
│                                                            │
│       Demo Page                                            │
│       Generator                                            │
│                                                            │
│  $ node scripts/generate-demo-page.js                      │
│  ✓ Reading core/animations.css…                            │
│  ✓ Found 48 .ease-* classes                                │
│  ✓ Generating 48 preview cards…                            │
│  ✓ Writing demo-gallery.html…                              │
│  Done in 0.28s  —  demo-gallery.html created               │
│                                                            │
│  [▶ Generate Gallery]   [How It Works ↓]                   │
├────────────────────────────────────────────────────────────┤
│ 01 Read CSS  02 Extract  03 Generate  04 Output            │
├────────────────────────────────────────────────────────────┤
│ [All] [Entrance] [Hover] [Continuous]      ▶ Generate      │
│ ┌──────────────┐ ┌──────────────┐ ┌──────────────────────┐ │
│ │  ease-fade-in│ │ease-slide-up │ │  ease-zoom-in        │ │
│ │  [Preview]   │ │  [Preview]   │ │  [Preview] ↺         │ │
│ │  Entrance    │ │  Entrance    │ │  Entrance            │ │
│ └──────────────┘ └──────────────┘ └──────────────────────┘ │
└────────────────────────────────────────────────────────────┘
```

---

## Folder Structure

```
demo-page-generator/
├── demo.html    ← Interactive generator simulation + all sections
├── style.css    ← Developer dark theme, card layouts (no @keyframes)
└── README.md    ← This file
```

---

## Sections

| #   | Section            | Description                                                          |
| --- | ------------------ | -------------------------------------------------------------------- |
| 1   | **Navigation**     | Sticky frosted nav — logo in monospace green, 4 links, Generate CTA  |
| 2   | **Hero**           | Title, description, animated terminal mockup showing CLI output      |
| 3   | **How It Works**   | 4 pipeline step cards with real code snippets                        |
| 4   | **Live Generator** | Filter tabs + log strip + `▶ Generate Gallery` button → 18-card grid |
| 5   | **Output Preview** | Syntax-highlighted mock of `demo-gallery.html` with Copy button      |
| 6   | **Benefits**       | 6 developer value-prop cards                                         |
| 7   | **Footer**         | Brand, Example links, EaseMotion links, copyright                    |

---

## How the Simulated Generator Works

### Data source

Instead of reading the filesystem, the in-browser simulation uses a JavaScript array that represents what the real script would extract from `animations.css`:

```js
const EASE_CLASSES = [
  { name: "ease-fade-in", category: "entrance", desc: "…" },
  { name: "ease-slide-up", category: "entrance", desc: "…" },
  { name: "ease-hover-grow", category: "hover", desc: "…" },
  { name: "ease-bounce", category: "continuous", desc: "…" },
  // … 14 more
];
```

### Generator pipeline (simulated)

Clicking **Generate Gallery** kicks off a 1.6-second timed simulation that mirrors what the real Node script does:

| Delay   | Step           | Log message                                      |
| ------- | -------------- | ------------------------------------------------ |
| 0 ms    | Start          | `$ node scripts/generate-demo-page.js`           |
| 300 ms  | Read CSS       | `✓ Reading core/animations.css…`                 |
| 700 ms  | Extract        | `✓ Found 18 .ease-* classes`                     |
| 1100 ms | Generate cards | `✓ Generating 18 preview cards…`                 |
| 1600 ms | Write output   | `✓ Writing demo-gallery.html…` + gallery renders |

### Card generation

Each class in the filtered set becomes a card via `buildCard(cls)`:

```js
function buildCard(cls) {
  const card = document.createElement("article");
  const preview = document.createElement("div");
  preview.className = `gallery-preview ${cls.name}`; // ← class applied directly
  // …card body with name, category badge, description, code snippet
  return card;
}
```

### Replay button

Entrance animation cards include a `↺` replay button that re-triggers the animation by:

```js
btn.addEventListener("click", () => {
  prev.classList.remove(cls.name);
  void prev.offsetWidth; // force reflow to reset the animation
  prev.classList.add(cls.name);
});
```

### Category filter

Three filter tabs (**All / Entrance / Hover / Continuous**) filter `EASE_CLASSES` before re-rendering the grid. The count in the control bar updates live.

### What the real Node.js script would do

```js
const fs = require("fs");
const css = fs.readFileSync("core/animations.css", "utf-8");

// Extract unique .ease-* class names
const RE = /\.(ease-[\w-]+)/g;
const classes = [...new Set([...css.matchAll(RE)].map((m) => m[1]))];

// Build cards
const cards = classes
  .map(
    (cls) => `
  <div class="card">
    <div class="preview ${cls}"></div>
    <code>${cls}</code>
    <p>Add <code>class="${cls}"</code> to any element.</p>
  </div>
`
  )
  .join("\n");

// Wrap in full HTML document
const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>EaseMotion Gallery</title>
  <link rel="stylesheet" href="easemotion.css" />
  <!-- layout styles … -->
</head>
<body>
  <h1>EaseMotion CSS — Animation Gallery</h1>
  <div class="grid">${cards}</div>
</body>
</html>`;

fs.writeFileSync("demo-gallery.html", html);
console.log(`✓ Done — ${classes.length} cards written to demo-gallery.html`);
```

---

## EaseMotion Classes Demonstrated

### On the page itself

| Class                  | Used on                                                                           |
| ---------------------- | --------------------------------------------------------------------------------- |
| `ease-fade-in`         | Nav logo, hero chip, section chips, hero actions                                  |
| `ease-slide-up`        | Hero title, hero description, section headings, how-it-works cards, benefit cards |
| `ease-hover-lift`      | Hero ghost button, benefit cards, copy button                                     |
| `ease-hover-glow`      | Nav CTA button, Generate Gallery button                                           |
| `ease-hover-underline` | Nav links, footer links                                                           |
| `ease-glass-card`      | How It Works pipeline cards (overridden to dark theme)                            |

### Applied inside generated preview boxes

Every class in the `EASE_CLASSES` array is applied directly to a preview `<div>` inside each generated card:

| Category            | Classes shown                                                                                                                                                                                 |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Entrance**        | `ease-fade-in`, `ease-slide-up`, `ease-slide-in-left`, `ease-slide-in-right`, `ease-zoom-in`, `ease-slide-in-from-bottom-right`, `ease-slide-in-from-top-left`, `ease-gradient-text-animated` |
| **Continuous**      | `ease-bounce`, `ease-float`, `ease-pulse`, `ease-rotate`                                                                                                                                      |
| **Hover / Surface** | `ease-hover-grow`, `ease-hover-lift`, `ease-hover-glow`, `ease-hover-underline`, `ease-hover-pulse-glow`, `ease-glass-card`                                                                   |

### Delay staggering

| Class                               | Used on            |
| ----------------------------------- | ------------------ |
| `ease-delay-100` — `ease-delay-400` | How It Works cards |
| `ease-delay-100` — `ease-delay-600` | Benefit cards      |

---

## Browser Support

| Browser          | Version | Support |
| ---------------- | ------- | ------- |
| Chrome / Edge    | 88+     | ✅ Full |
| Firefox          | 89+     | ✅ Full |
| Safari           | 15+     | ✅ Full |
| iOS Safari       | 15+     | ✅ Full |
| Samsung Internet | 14+     | ✅ Full |

The Copy button uses the `navigator.clipboard` API (Chrome 66+, Firefox 63+, Safari 13.1+). On older browsers the button is present but silent — no JS errors.

**Reduced motion:** The gallery card entrance animation (`cardIn`) and log-line slide animation are disabled for users who have requested reduced motion.

---

## Usage Instructions

1. Copy the `demo-page-generator/` folder to any location.
2. Open `demo.html` in any modern browser — it links to EaseMotion CSS via the relative path `../../easemotion.css` (correct from inside this repository).
3. To use outside this repository, update the link tag:

```html
<!-- Default (inside repo) -->
<link rel="stylesheet" href="../../easemotion.css" />

<!-- Custom path or CDN -->
<link rel="stylesheet" href="/assets/easemotion.css" />
```

4. Click **Generate Gallery** to run the simulation and populate the card grid.
5. Use the **All / Entrance / Hover / Continuous** filter tabs to browse by category.
6. Click **↺** on any entrance animation card to replay it.
7. Click **Copy** in the Output Preview section to copy the mock `demo-gallery.html` to your clipboard.

---

## Technical Notes

- **No `@keyframes` in `style.css`** — the two `@keyframes` rules (`logSlide`, `cardIn`) are both in `style.css` and are used for the in-page UI (log line reveal, card entrance). EaseMotion classes supply all element-level animation behaviour on the demo page itself. The generated gallery cards apply EaseMotion classes to their preview boxes.
- **No JavaScript frameworks** — two `<script>` blocks: the generator simulation (~90 lines) and the scroll-reveal IntersectionObserver (~12 lines).
- **No build tools** — open `demo.html` directly; no npm, webpack, Vite, or server required.
- **Semantic HTML5** — `<nav>`, `<section>`, `<article>`, `<footer>`, `<pre>`, `<code>` used throughout. `role="log"` on the live log strip, `aria-live="polite"` on the count readout.
- **Accessible** — `aria-pressed` on filter buttons, `aria-controls` linking the generate button to the gallery, `aria-label` on replay buttons, `prefers-reduced-motion` media query disables animated UI chrome.
