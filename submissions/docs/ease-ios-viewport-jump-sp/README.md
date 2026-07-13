# iOS Safari 100vh + Fixed Navbar Jump with Entrance Animations

A documentation showcase that reproduces and documents the **viewport jump** when `ease-fade-in` hero sections use `100vh` on mobile Safari — where the collapsing URL bar changes viewport height mid-animation.

> Submission track: `submissions/docs/ease-ios-viewport-jump-sp/`  
> Contributor suffix: `sp`

---

## What does this do?

On iOS Safari, `100vh` heroes with `ease-fade-in` and a fixed navbar visibly jump when the URL bar collapses. This showcase reproduces the issue and documents workaround patterns.

## How is it used?

1. Open `demo.html` in a browser (best on iOS Safari).
2. Review the **live viewport readout** (innerHeight, vh, dvh, svh).
3. Click **Simulate iOS URL bar collapse** to see broken vs fixed heroes.
4. Compare **Broken 100vh** vs **Fixed 100dvh/svh** phone frames.
5. Copy workaround snippets from the tabbed panel.

## Features

- Reproducible `ease-fade-in` hero + `100vh` + fixed navbar jump demo
- Side-by-side broken vs fixed comparison
- Live viewport height readout panel
- Workaround patterns: `100dvh`, `100svh`, `-webkit-fill-available`, JS `--vh`
- Browser support notes and educational content
- Copy-ready CSS snippets
- Responsive, accessible UI
- Uses EaseMotion CSS CDN

## Files

| File | Purpose |
|------|---------|
| `demo.html` | Interactive viewport jump demo |
| `style.css` | Lab layout and phone frame styling |
| `README.md` | This document |

## Compliance notes

- Only **new files** inside `submissions/docs/`.
- No edits to `core/`, `components/`, or existing project files.
