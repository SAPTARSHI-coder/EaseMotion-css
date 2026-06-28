# 3D Book Cover Flip Showcase

## What it does
This is a realistic 3D book model showcase component. When a user hovers over the book, the front cover smoothly swings open on its left hinge. It reveals the inner pages with a realistic depth (thickness) and casts a dynamic, shifting shadow behind the book to enhance the 3D perspective.

## How to use it
1. Clone or download the repository.
2. Navigate to the `submissions/examples/3d-book-flip-your-initials/` directory.
3. Open the `demo.html` file directly in any modern web browser. No local server is required.
4. Hover over the book to see the interactive 3D flip animation.

## Why it fits EaseMotion CSS
This component aligns perfectly with the goal of EaseMotion CSS by utilizing **pure CSS** for complex micro-interactions. It relies solely on modern CSS features like `transform-style: preserve-3d`, `rotateY`, `translateZ`, and smooth `cubic-bezier` transitions without needing any JavaScript. It also includes the `prefers-reduced-motion` media query to ensure accessibility for all users.