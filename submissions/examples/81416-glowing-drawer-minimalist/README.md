# Glowing Drawer

Glowing Drawer is a minimalist navigation drawer built with semantic HTML and pure CSS. It uses a restrained glow to communicate interaction without overwhelming the content.

## Features

- Semantic `<aside>` and `<nav>` landmarks.
- Native links that remain keyboard accessible.
- Clear `:focus-visible` states.
- Subtle hover and focus motion using EaseMotion timing variables.
- Responsive width behavior for mobile, tablet, and desktop screens.
- Reduced-motion support.
- Zero JavaScript dependencies.

## Usage

```html
<aside class="drawer" aria-label="Account navigation">
  <nav aria-label="Workspace links">
    <a href="#overview">Overview</a>
    <a href="#projects">Projects</a>
  </nav>
</aside>
```

Adjust `--ease-duration` and `--ease-timing` to align the drawer interaction with the surrounding interface.

## Demo

Open `demo.html` directly in a modern browser. No framework, JavaScript, or build step is required.
