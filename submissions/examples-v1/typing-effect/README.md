# Typing Text Effect

A pure CSS typewriter animation that simulates typing with a blinking cursor. Supports single line, multi-line, and loop variants.

## Demo

Open `demo.html` in any modern browser.

## Features

- ✅ **Pure CSS** — zero JavaScript
- ✅ **CSS variables** — configurable via inline styles
- ✅ **Blinking cursor** — classic pipe cursor animation
- ✅ **Multi-line** — sequential line typing with delays
- ✅ **Speed variants** — fast, normal, slow
- ✅ **Cursor styles** — pipe, block, or hidden
- ✅ **Loop animation** — repeats infinitely
- ✅ **Gradient text** — animated rainbow typing
- ✅ **Accessible** — respects `prefers-reduced-motion`

## Usage

### Basic Single Line

```html
&lt;span class="typing" style="--chars: 13; --duration: 3s;"&gt;
  Hello, World!
&lt;/span&gt;