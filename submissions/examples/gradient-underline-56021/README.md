# Animated Gradient Swoop Text Underline

## What does this do?
A beautiful, highly-performant hover effect for inline text links. When hovered, a thick gradient underline sweeps in from left to right underneath the text. When un-hovered, it sweeps out cleanly to the right side.

## How is it used?
```html
<a href="#" class="ease-gradient-link">Hover Me</a>
```

## Why does it fit EaseMotion CSS?
It avoids creating pseudo-elements like `::after` (which can occasionally conflict with flex or grid layouts when attached to links) by utilizing `background-image` and transitioning `background-size` instead. The transition trick with `background-position` makes it swoop in and out directionally, which is a classic, premium micro-interaction.

## Tech Stack
- HTML
- CSS (No JavaScript)
