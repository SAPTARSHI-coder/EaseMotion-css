# Glassmorphism Accordion (FAQ) Example This is a self-contained example demonstrating how to build a modern, smooth, and fully accessible accordion component using pure CSS and native HTML `<details>`/`<summary>` elements, styled with **EaseMotion CSS** utilities. ## Features - 🪟 **Glassmorphism Design:** Uses `backdrop-filter: blur()` and semi-transparent backgrounds. - 🎬 **Smooth Pure CSS Animation:** Utilizes the modern `grid-template-rows` trick for buttery-smooth height transitions without JavaScript. - ♿ **100% Accessible:** Native keyboard navigation (Tab, Enter, Space) and screen-reader friendly. Respects `prefers-reduced-motion`# Glassmorphism Accordion (FAQ) Example

This is a self-contained example demonstrating how to build a modern, smooth, and fully accessible accordion component using pure CSS and native HTML `<details>`/`<summary>` elements, styled with **EaseMotion CSS** utilities.

## Features
- 🪟 **Glassmorphism Design:** Uses `backdrop-filter: blur()` and semi-transparent backgrounds.
- 🎬 **Smooth Pure CSS Animation:** Utilizes the modern `grid-template-rows` trick for buttery-smooth height transitions without JavaScript.
- ♿ **100% Accessible:** Native keyboard navigation (Tab, Enter, Space) and screen-reader friendly. Respects `prefers-reduced-motion`.
- ⚡ **EaseMotion Integration:** Uses utility classes for layout, spacing, typography, and entrance animations (`ease-fade-in`, `ease-delay-*`).
- 🚫 **Zero JavaScript:** Entirely driven by HTML and CSS.

## How to Use
1. Ensure the EaseMotion CSS CDN is linked in your `<head>`.
2. Link the `style.css` file.
3. Copy the `<details class="glass-accordion">` block and customize the text/content.

## How the Animation Works
Instead of animating `height` or `max-height` (which can be buggy with dynamic content), this component uses a CSS Grid trick:
- Closed state: `grid-template-rows: 0fr`
- Open state: `grid-template-rows: 1fr`
This allows the browser to smoothly animate to the exact natural height of the content.. - ⚡ **EaseMotion Integration:** Uses utility classes for layout, spacing, typography, and entrance animations (`ease-fade-in`, `ease-delay-*`). - 🚫 **Zero JavaScript:** Entirely driven by HTML and CSS. ## How to Use 1. Ensure the EaseMotion CSS CDN is linked in your `<head>`. 2. Link the `style.css` file. 3. Copy the `<details class="glass-accordion">` block and customize the text/content. ## How the Animation Works Instead of animating `height` or `max-height` (which can be buggy with dynamic content), this component uses a CSS Grid trick: - Closed state: `grid-template-rows: 0fr` - Open state: `grid-template-rows: 1fr` This allows the browser to smoothly animate to the exact natural height of the content.