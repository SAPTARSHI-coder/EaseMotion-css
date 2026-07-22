# CSS Loading Skeleton Animation

Responsive loading skeleton placeholders (avatar, text, and card/thumbnail shapes) with a smooth shimmer sweep animation, built using pure HTML and CSS.

## What it does

- Provides reusable skeleton shapes: avatar circle, title/subtitle lines, body text lines, and a card thumbnail block.
- Every shape shares a shimmer effect — a soft light gradient sweeps left to right on a loop.
- Fully responsive — card and thumbnail scale down on smaller screens.

## How to use

1. Copy `demo.html` and `style.css` into your project.
2. Open `demo.html` directly in a browser — no build step or server required.
3. Reuse the `.skeleton` base class on any shape you need, and pair it with `.skeleton-avatar`, `.skeleton-line`, or `.skeleton-thumbnail` for common shapes. Swap out the real content for these placeholders while your data is loading, then remove them once the actual content is ready.

## Why it fits EaseMotion CSS

- Pure HTML/CSS, no JavaScript or external dependencies.
- Beginner-friendly: one shared `.skeleton` shimmer class reused across all shapes.
- Meets all requirements from issue #48343: card placeholder, avatar placeholder, text placeholders, smooth shimmer effect, pure HTML & CSS.