# Component Anatomy Explorer (Buttons / Cards / Tabs)

An interactive documentation showcase that lets you **click any part** of a live EaseMotion component preview and instantly see its required HTML structure, optional modifiers, CSS token dependencies, and compatible animation classes.

> Submission track: `submissions/docs/ease-component-anatomy-sp/`  
> Contributor suffix: `sp`  
> Resolves: Issue #43658

---

## What does this do?

EaseMotion CSS ships composable components — but beginners often struggle to understand which HTML structure is required, which modifier classes are optional, and which design tokens or animation utilities can be safely combined.

This explorer works like a **plain-HTML Storybook**:

| You click | You learn |
|-----------|-----------|
| `.ease-btn` | Required base + variant classes |
| `.ease-card-header` | Where it sits in the card anatomy |
| `.ease-tab-underline` | Which tokens drive the sliding indicator |
| Any part | Compatible `ease-fade-in` / `ease-hover-grow` add-ons |

---

## How is it used?

1. Open `demo.html` in a browser (requires internet for CDN assets).
2. Choose a **component** — Button, Card, or Tabs.
3. Toggle **Minimal** vs **Full-featured** to compare simple and production-ready markup.
4. **Click or focus** any dashed-outline region in the live preview.
5. Read the anatomy breakdown in the right panel (classes, tokens, animations).
6. Press **Copy HTML** to grab the ready-to-use snippet.

---

## Features

- Component selector for **Buttons**, **Cards**, and **Tabs**
- Live interactive preview with click-to-highlight anatomy map
- **Minimal** vs **Full-featured** side-by-side example modes
- Required HTML structure notes per part
- Optional modifier class lists (variants, sizes, shapes, states)
- CSS token dependency panel (`--ease-color-primary`, `--ease-radius-md`, etc.)
- Compatible animation class suggestions (`ease-fade-in`, `ease-hover-grow`, etc.)
- Copy-to-clipboard HTML snippets per component + variant
- Keyboard accessible (Tab + Enter/Space to select parts)
- Responsive layout (panels stack on mobile)
- `prefers-reduced-motion` respected

---

## Explored components

### Button
- Base: `.ease-btn` + variant (`.ease-btn-primary`)
- Modifiers: `.ease-btn-lg`, `.ease-btn-pill`, `.ease-btn-outline`, etc.
- Animations: `.ease-hover-grow`, `.ease-fade-in`

### Card
- Sections: `.ease-card-header`, `.ease-card-body`, `.ease-card-footer`
- Helpers: `.ease-card-title`, `.ease-card-subtitle`
- Modifiers: `.ease-card-shadow`, `.ease-card-hover`, `.ease-card-glass`

### Tabs
- Structure: hidden `.ease-tab-input` radios → `.ease-tabs-nav` → `.ease-tabs-content`
- Parts: `.ease-tab-label`, `.ease-tab-underline`, `.ease-tab-panel`
- Variant: `.ease-tabs-auto` for variable-width labels

---

## Why is it useful?

- **Beginner-friendly** — click a component part instead of reading long docs.
- **Framework-native** — teaches real EaseMotion class names and token usage.
- **Production patterns** — full-featured snippets show realistic markup, not toy examples.
- **Self-contained** — no backend, no build step, no changes to `core/` or `components/`.

---

## Tech stack

| Asset | Source |
|-------|--------|
| EaseMotion CSS | jsDelivr CDN (`easemotion.min.css`) |
| Tabs helper | jsDelivr CDN (`core/tabs.js`) — dynamic underline support |
| Layout & explorer UI | `style.css` (uses `--ease-*` tokens) |
| Anatomy data & interactivity | Inline JS in `demo.html` |

---

## Files

| File | Purpose |
|------|---------|
| `demo.html` | Explorer UI, live previews, anatomy data, copy logic |
| `style.css` | Layout, preview stage, tag chips, snippet panel |
| `README.md` | This document |

---

## Compliance notes

- Only **new files** inside `submissions/docs/ease-component-anatomy-sp/`.
- No modifications to `core/`, `components/`, workflows, or existing files.
- All three required submission files included (`demo.html`, `style.css`, `README.md`).
- Total contribution exceeds the 250-line minimum policy threshold.
- Folder name carries the unique contributor suffix `-sp`.
