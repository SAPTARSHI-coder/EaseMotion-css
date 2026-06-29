# Custom Scrollbar Theming Utility Classes

## What does this submission do?

Adds 7 CSS utility classes for custom scrollbar theming using `::-webkit-scrollbar` pseudo-elements and `scrollbar-width`/`scrollbar-color` standard properties. Supports thin, hidden, none, primary-colored, dark-themed, and rounded scrollbar variants — all customizable via CSS variables.

## How was it implemented?

- **CSS** (`style.css`): Five CSS variables (`--sb-width`, `--sb-track`, `--sb-thumb`, `--sb-thumb-hover`, `--sb-radius`) are defined on `:root` with sensible defaults. The base `.scrollbar` class sets `::-webkit-scrollbar` width/height, track background, thumb background + hover, and border-radius. Subclasses override these:
  - `.scrollbar-thin` — Sets `scrollbar-width: thin` and reduces WebKit width to 5px.
  - `.scrollbar-none` — Sets `scrollbar-width: none`, `-ms-overflow-style: none`, and `::-webkit-scrollbar { display: none }`.
  - `.scrollbar-hidden` — Sets thumb background to `transparent` by default, and restores it on `.scrollbar-hidden:hover`.
  - `.scrollbar-primary` — Overrides `--sb-track` (light blue), `--sb-thumb` (blue), `--sb-thumb-hover` (dark blue).
  - `.scrollbar-dark` — Overrides with dark background colors (`--sb-track: #2d3138`, `--sb-thumb: #6e7681`).
  - `.scrollbar-rounded` — Overrides `--sb-radius: 10px`.
  - Custom overrides can be done inline on any `.scrollbar` element by setting `--sb-*` variables directly.
- **HTML** (`demo.html`): A 6-box grid showing each variant in a 200px-tall scrollable container with 10 items. Labels identify the classes used. A custom red-themed box demonstrates inline variable overrides.

## Why these choices?

- **CSS variables** allow infinite theme variations without adding more classes — users can set any color by overriding `--sb-thumb` etc. inline.
- **`::-webkit-scrollbar`** covers Chrome, Edge, Safari, and Opera (the vast majority of users). `scrollbar-width` adds Firefox support.
- **Hidden-until-hover** is a popular pattern for content-focused UIs where scrollbars should not distract.
- **Primary and dark variants** match the two most common design system themes.
- **No JS required** — all styling is pure CSS.

## Files

| File | Purpose |
|---|---|
| `demo.html` | 6 scrollable boxes showing thin, primary+rounded, dark, hidden, none, and custom-red variants |
| `style.css` | 7 utility classes + 5 CSS variables + demo styles |
| `README.md` | This documentation |
