# Animated FAQ Accordion

A responsive, accessible FAQ accordion where each question expands to reveal its answer with a smooth height + icon-rotation animation, built using pure HTML and CSS (no JavaScript).

## What it does

- Each FAQ item uses a hidden checkbox and the "checkbox hack" (`:checked ~ sibling`) to toggle open/closed state.
- The `+` icon rotates into an `x` shape when a panel is open.
- The answer panel animates smoothly via a `max-height` transition rather than an abrupt show/hide.
- Built with semantic `<label>`/`<input>` pairing so it's keyboard-focusable, with a visible `:focus-visible` outline.
- Fully responsive — padding and font size shrink on smaller screens.

## How to use

1. Copy `demo.html` and `style.css` into your project.
2. Open `demo.html` directly in a browser — no build step or server required.
3. Duplicate a `.faq-item` block for each question, giving the checkbox and its `for`/`id` pair a unique value (`faq-1`, `faq-2`, etc.).

## Why it fits EaseMotion CSS

- Pure HTML/CSS, no JavaScript required.
- Beginner-friendly: reuses the well-known checkbox-hack pattern seen elsewhere in the library, with clear comments.
- Meets all requirements from issue #48345: expand/collapse effect, responsive design, accessible HTML structure, pure HTML & CSS, well-commented code.