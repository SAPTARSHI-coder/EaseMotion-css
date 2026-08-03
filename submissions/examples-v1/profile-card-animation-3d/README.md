# 3D Flip Profile Card

A responsive profile card that flips in 3D on hover to reveal social links and a short bio, built using pure HTML and CSS.

## What it does

- Front face shows a profile photo, name, and role.
- Hovering triggers a smooth 3D flip (`rotateY`) to reveal the back face.
- Back face shows a short bio and animated social icon links.
- Fully responsive — card scales down on smaller screens.

## How to use

1. Copy `demo.html` and `style.css` into your project.
2. Open `demo.html` directly in a browser — no build step or server required.
3. Reuse the `.flip-card`, `.flip-card-inner`, `.flip-card-front`, and `.flip-card-back` markup/classes, swapping in your own image, name, bio, and links.

## Why it fits EaseMotion CSS

- Pure HTML/CSS, no JavaScript or external dependencies.
- Beginner-friendly: uses standard `perspective` + `rotateY` + `backface-visibility` pattern.
- Meets all requirements from issue #47327: front/back faces, smooth 3D flip, social icons, responsive layout.