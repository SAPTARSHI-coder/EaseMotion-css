# Web Components Wrapper for EaseMotion Classes

A self-contained example providing **`<ease-button>`** and **`<ease-card>`** custom elements that encapsulate EaseMotion CSS classes — making the framework easier to use in vanilla HTML without repeating long class strings.

> Submission track: `submissions/examples/ease-web-component-kit-sp/`  
> Contributor suffix: `sp`  
> Resolves: Issue #43657

---

## What does this do?

EaseMotion CSS is class-based and works great with plain HTML, but beginners often repeat the same long combinations like `ease-btn ease-btn-primary ease-hover-grow`.

This example wraps common patterns into reusable Web Components with an attribute-based API.

---

## How is it used?

1. Open `demo.html` in a browser (requires internet for CDN assets).
2. See **`<ease-button>`** variants, sizes, hover, and entrance animations.
3. See **`<ease-card>`** shadow, glass, accent, and hover variants.
4. Review the **attribute → class mapping** table.
5. Copy the usage snippets for buttons and cards.
6. Include the inline `<script>` from `demo.html` on your own pages.

---

## Features

- `<ease-button>` custom element with variant support (primary, success, danger, outline, ghost)
- `<ease-card>` custom element with style variants (shadow, glass, accent, hover)
- Attribute-based API (`variant`, `size`, `animation`, `hover`, `accent`)
- Internal mapping from attributes to EaseMotion CSS classes
- Entrance animation support (`ease-fade-in`, `ease-slide-up`) via attributes
- Hover animation support (`ease-hover-grow`, `ease-hover-lift`) via attributes
- Slot/content support for flexible inner markup (light DOM)
- Copy-ready usage examples for each custom element
- Responsive, accessible demo page

---

## Quick examples

```html
<ease-button variant="primary" size="lg" hover="grow" animation="fade-in">
  Get Started
</ease-button>

<ease-card variant="shadow" animation="slide-up">
  <h3>Card title</h3>
  <p>Your content here.</p>
</ease-card>
```

---

## Why is it useful?

- **Shorter HTML** — attributes instead of 4–6 class names per element.
- **Consistent mapping** — one source of truth for variant → class logic.
- **Vanilla-friendly** — no React, Vue, or build step required.
- **Extensible** — add more custom elements following the same pattern.
- **Self-contained** — no edits to `core/`, `components/`, or existing files.

---

## Tech stack

| Asset | Source |
|-------|--------|
| EaseMotion CSS | jsDelivr CDN (`easemotion.min.css`) |
| Web Components | Custom Elements API in `demo.html` |
| Demo layout | `style.css` |

---

## Files

| File | Purpose |
|------|---------|
| `demo.html` | Custom elements, live demos, copy snippets |
| `style.css` | Demo page layout and typography |
| `README.md` | This document |

---

## Compliance notes

- Only **new files** inside `submissions/examples/ease-web-component-kit-sp/`.
- Uses light DOM so global EaseMotion CSS applies correctly.
- No modifications to `core/`, `components/`, workflows, or existing files.
- All three required submission files included (`demo.html`, `style.css`, `README.md`).
- Total contribution exceeds the 250-line minimum policy threshold.
- Folder name carries the unique contributor suffix `-sp`.
