# Glitch Flicker Drawer

A responsive navigation drawer featuring a subtle glitch flicker animation built with pure HTML and CSS.

## Features

- Pure HTML & CSS
- Responsive drawer layout
- Glitch flicker hover animation
- CSS-only toggle using checkbox
- Accessible with `prefers-reduced-motion`
- Customizable using CSS variables

## Folder

```
submissions/examples/glitch-flicker-drawer/
```

## Files

- demo.html
- style.css
- README.md

## Usage

```html
<input type="checkbox" id="drawer-toggle" hidden>

<label for="drawer-toggle" class="gf-btn">
    ☰ Open Drawer
</label>

<aside class="gf-drawer">
    ...
</aside>
```

## CSS Variables

```css
--primary
--bg
--drawer
--text
--duration
--width
```

## Accessibility

- Responsive layout
- Keyboard accessible checkbox toggle
- Supports `prefers-reduced-motion`
- No JavaScript required

## Why EaseMotion CSS?

This component follows EaseMotion CSS's lightweight, animation-first philosophy using reusable CSS classes and modern responsive design.