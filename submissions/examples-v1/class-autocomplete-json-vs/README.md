# EaseMotion Autocomplete JSON Generator

A self-contained **tooling prototype** for [issue #13646](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/13646):
extract EaseMotion CSS class names, categorize them, and emit the structured JSON
that powers editor autocomplete / IntelliSense.

> Because core files are frozen, this is a demonstration-only submission inside
> `submissions/examples/`. No `core/`, `components/`, or framework code is touched.

---

## 1. What does this do?

It demonstrates a tooling pipeline that scans EaseMotion CSS source, extracts
every `.ease-*` class, groups each one into a category, and generates a JSON
array where every entry has `class`, `description`, and `category` — the exact
shape an editor extension consumes to offer autocomplete suggestions.

### Target JSON format

```json
[
  {
    "class": "ease-fade-in",
    "description": "Fades the element in from transparent on page load",
    "category": "animation"
  }
]
```

### Representative classes included (24 entries, 5 categories)

| Class                  | Category   | Source               |
| ---------------------- | ---------- | -------------------- |
| `ease-fade-in`         | animation  | `core/animations.css`|
| `ease-slide-up`        | animation  | `core/animations.css`|
| `ease-zoom-in`         | animation  | `core/animations.css`|
| `ease-flip`            | animation  | `core/animations.css`|
| `ease-pulse`           | animation  | `core/animations.css`|
| `ease-center`          | layout     | `core/utilities.css` |
| `ease-flex`            | layout     | `core/utilities.css` |
| `ease-grid`            | layout     | `core/utilities.css` |
| `ease-grid-cols-3`     | layout     | `core/utilities.css` |
| `ease-items-center`    | layout     | `core/utilities.css` |
| `ease-gap-4`           | layout     | `core/utilities.css` |
| `ease-padding-8`       | utility    | `core/utilities.css` |
| `ease-rounded-lg`      | utility    | `core/utilities.css` |
| `ease-shadow-lg`       | utility    | `core/utilities.css` |
| `ease-text-center`     | utility    | `core/utilities.css` |
| `ease-hidden`          | utility    | `core/utilities.css` |
| `ease-btn-primary`     | component  | `components/buttons.css`|
| `ease-card`            | component  | `components/cards.css`|
| `ease-card-glass`      | component  | `components/cards.css`|
| `ease-navbar-glass`    | component  | `components/navbar.css`|
| `ease-hover-grow`      | hover      | `core/animations.css`|
| `ease-hover-lift`      | hover      | `core/animations.css`|
| `ease-hover-glow`      | hover      | `core/animations.css`|
| `ease-hover-shimmer`   | hover      | `core/animations.css`|

The dashboard's three stats cards show the live counts: **total classes**,
**categories**, and **example suggestions** rendered in the mock IntelliSense box.

---

## 2. How is it used?

Open `demo.html` directly in a browser — no server, no build step, no
dependencies:

```
submissions/examples/class-autocomplete-json-vs/
├── demo.html      ← open this file
├── style.css      ← the dark IDE-style theme
└── README.md      ← this file
```

The page shows four things:

1. **Stats cards** — total classes extracted, category count, suggestion count.
2. **Generated JSON panel** — the `{ class, description, category }` output.
3. **Mock VS Code suggestion box** — how the JSON renders as autocomplete rows
   when a developer types `ease-` inside `class=""`.
4. **Extraction pipeline** — `core CSS → extract names → categorize → JSON`.

### How the JSON is generated (the pipeline this demo represents)

```
core/animations.css + core/utilities.css + components/*.css
        │  (regex / parser reads every .ease-* selector)
        ▼
   raw class name list  →  de-duplicated
        ▼
   categorize each name  (animation / layout / utility / component / hover)
        ▼
   attach a human description
        ▼
   JSON:  [ { "class", "description", "category" }, ... ]
```

A minimal extractor for that mapping looks like:

```js
const CATEGORIES = [
  { re: /ease-(fade|slide|zoom|flip|pulse|bounce|rotate|ping|wave)/, category: "animation" },
  { re: /ease-(center|flex|grid|stack|items|justify|place|gap|cols)/, category: "layout" },
  { re: /ease-(hover|card-lift)/, category: "hover" },
  { re: /ease-(btn|card|navbar|button)-?/, category: "component" },
];
function categorize(name) {
  return CATEGORIES.find((c) => c.re.test(name))?.category ?? "utility";
}
// match:  /\.ease-([\w-]+)/g   on the CSS source
// emit:   { class, description, category: categorize(class) }
```

The full, ready-to-ship JSON is embedded inside `demo.html` so the page is
fully self-contained and viewable offline.

---

## 3. Why is this useful?

EaseMotion CSS has 80+ utility classes and 20+ animation classes, and the count
keeps growing through the curated submission pipeline. Today a developer has to
**remember or look up** every class name. This tooling closes that gap:

- **Faster authoring** — type `ease-` and pick from categorized suggestions.
- **Discoverability** — `hover`, `layout`, and `component` classes are surfaced
  instead of being buried in source files.
- **Self-documenting** — each suggestion carries its description inline, so the
  class name literally *is* the documentation (the EaseMotion philosophy).
- **Stays in sync** — because the JSON is generated from the real CSS source,
  it can never drift from what the framework actually ships.

### How JSON powers autocomplete

Editors like VS Code drive IntelliSense from a static data file plus a
contribution point. The flow is:

```
generated classes.json  ──►  extension loads it on activation
        │
        ▼
CompletionItemProvider fires when the cursor is in class="..."
        │
        ▼
each JSON entry becomes a CompletionItem:
   label   = entry.class
   detail  = entry.category
   doc     = entry.description
        │
        ▼
VS Code renders the suggestion list (exactly what this demo mocks visually)
```

Because the data is plain JSON, the **same file** can power VS Code, Neovim
(LSP), JetBrains, and even a documentation site — one source of truth.

### How this could be used in a future VS Code extension

This prototype is the data-contract blueprint for a future
`easemotion-css-intellisense` extension:

1. **Build step** — a small script (the extractor above) reads `core/` and
   `components/` at release time and writes `classes.json` into the extension
   package. The maintainer already runs a standardization pass, so descriptions
   can be captured during that step.
2. **Activation** — the extension activates for `html`, `vue`, `svelte`, `php`,
   and `markdown` files.
3. **Trigger** — a `CompletionItemProvider` triggers on `class="` and `className="`.
4. **Rendering** — each entry becomes a `CompletionItem` with
   `kind = Class`, a colored category icon, and the description as
   `documentation`. Fuzzy match on `ease-f` → `ease-fade-in`.
5. **Bonus** — hover on an existing class shows its description; a diagnostic
   warns on unknown `ease-*` names (typo detection).

Everything the extension needs is already modeled in this demo's JSON shape and
in the mock suggestion box — the only missing piece is the packaging, which the
maintainer can add once core access reopens.

---

## Demo

Open `demo.html` directly in any modern browser. No internet connection required.

## Browser Support

Chrome, Firefox, Edge, Safari (evergreen). Uses only standard CSS — grid,
custom properties, and one keyframe animation.
