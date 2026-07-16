# Delay Class Gap Finder

An educational documentation lab for EaseMotion CSS explaining the `ease-delay-*` utility classes: what they do, how 200ms/250ms/300ms compare side by side, and how to reach for a custom delay value without touching the framework's source files. Built entirely with HTML and CSS — no JavaScript.

## 🧩 Project Overview

Staggering animated elements (cards, list items, nav links) usually means picking both a delay value *and* a sensible gap between consecutive items. This lab documents EaseMotion CSS's answer to the first problem — a small family of `ease-delay-*` classes, each setting a single `--ease-delay` custom property that any animation utility can read — and gives visual guidance on the second: how big a gap actually reads as intentional sequencing rather than simultaneous or sluggish.

The page walks through four things in order:

1. What the delay classes are and how they plug into animation utilities like `ease-fade-in`
2. A live, side-by-side comparison of the 200ms, 250ms, and 300ms classes, with a timeline visualization marking where each one starts
3. How to set a one-off custom delay with an inline `--ease-delay` override, with no framework file edits required
4. Practical guidance on choosing a gap size, as Do/Avoid callout cards

## ✨ Features

- Clear explanation of the `ease-delay-*` → `--ease-delay` → `animation-delay: var(--ease-delay)` mechanism
- A comparison table of all five built-in delay classes with their millisecond values and typical use cases
- Live animated comparison cards for 200ms, 250ms, and 300ms delays, all sharing the identical fade-up animation so only the timing differs
- A CSS-only timeline visualization marking each delay's start point on a shared scale
- A worked example of overriding `--ease-delay` inline for a one-off custom value (375ms), demonstrated without editing any framework file
- Do/Avoid callout cards with practical guidance on choosing stagger gap sizes
- Semantic documentation structure: a table of contents, labelled sections, a real `<table>` for the class reference, and `<pre><code>` blocks for every example
- `prefers-reduced-motion` support disables all animation
- Fully responsive: three-column comparison grid on desktop, two on tablet, one on mobile, with the reference table scrolling horizontally on small screens instead of squeezing illegibly

## 📁 Folder Structure

submissions/docs/ease-delay-gap-lab-sp/
├── demo.html   # The full documentation lab page
├── style.css   # Design tokens, the ease-delay-* classes, docs styling, responsive rules
└── README.md   # This file

## ⚙ Installation

No build tools or dependencies are required — this is a static HTML/CSS documentation page.

```bash
# Clone the repository
git clone https://github.com/your-username/easemotion-css.git

# Navigate to this lab's folder
cd easemotion-css/submissions/docs/ease-delay-gap-lab-sp

# Open the page directly in your browser
open demo.html   # macOS
# or
start demo.html  # Windows
```

## 🚀 Usage

1. Open `demo.html` in any modern browser.
2. Use the table of contents at the top to jump to any section.
3. Reload or revisit the page to re-watch the comparison cards animate in sequence — see the note below on why a "replay" button isn't included.
4. Reference the class table and code blocks when deciding which `ease-delay-*` class (or custom `--ease-delay` value) to reach for in your own project.

**Note on replaying the animation:** CSS animations only play once per element unless something changes to re-trigger them. Adding an on-demand "replay" control that resets a finished animation requires JavaScript (e.g. removing and re-adding the animating class), which is intentionally out of scope for this pure-CSS lab. Reloading the page is the way to re-watch the comparison here.

## 🎨 Customization

The delay classes themselves are trivial to extend — each one only sets a custom property:

```css
.ease-delay-400 { --ease-delay: 400ms; }
```

Any animation utility that reads `var(--ease-delay, 0ms)` for its `animation-delay` will automatically support the new class with no further changes.

## ♿ Accessibility

- A skip link lets keyboard and screen reader users bypass the table of contents and jump straight to the main content.
- The table of contents, headings, and table use real semantic elements (`<nav>`, `<h2>`, `<table>` with `<caption>` and `scope` attributes) rather than styled `<div>`s.
- The timeline visualization is marked `role="img"` with a complete `aria-label` describing what it shows, since its meaning is conveyed visually through position rather than through its child text nodes.
- All interactive links (table of contents entries) have a visible `:focus-visible` outline.
- All animation is disabled under `prefers-reduced-motion: reduce`.
- Text and background colour pairs, including inside the callout cards, were chosen for strong contrast.

## 🌐 Browser Compatibility

Built entirely with broadly supported CSS features:

- CSS custom properties (`var()`), including the `var(--ease-delay, 0ms)` fallback pattern — supported in all current major browsers
- CSS Grid and Flexbox — broadly supported
- `:focus-visible` — supported in all current major browsers

No experimental or vendor-prefixed features are used.

## 📄 License

This project is part of the EaseMotion CSS documentation and follows the repository's existing license.