# Retro Pixel Toggle Switch — Quickstart Guide

A lightweight, fully accessible, pure CSS toggle switch styled with a retro 8-bit aesthetic.

---

## 1. Quickstart HTML Markup

Wrap the component in a native `<label>` element to ensure native tap and click support across devices.

```html
<label class="pixel-toggle" for="game-sound">
  <input type="checkbox" id="game-sound" class="pixel-toggle__input">
  <span class="pixel-toggle__track" aria-hidden="true">
    <span class="pixel-toggle__thumb"></span>
  </span>
  <span class="pixel-toggle__label">Sound Effects</span>
</label>
