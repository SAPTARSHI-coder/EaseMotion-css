# Modern Animated Login Form

A stylish login form with floating labels and smooth focus/hover animations, built using pure HTML and CSS.

## What it does

- Card fades and slides in on load.
- Floating labels rise above the input on focus or once filled.
- Inputs get a soft glow border on focus.
- Sign-in button lifts slightly on hover.
- Fully responsive — card shrinks to fit smaller screens.

## How to use

1. Copy `demo.html` and `style.css` into your project.
2. Open `demo.html` directly in a browser — no build step or server required.
3. Reuse the `.login-card`, `.input-group`, `.login-input`, and `.login-label` markup/classes; keep the `placeholder=" "` attribute on inputs, since it's required for the floating-label CSS trick to detect empty vs. filled state.

## Why it fits EaseMotion CSS

- Pure HTML/CSS, no JavaScript or external dependencies.
- Beginner-friendly: relies on the well-known `:not(:placeholder-shown)` floating-label pattern.
- Meets all requirements from issue #47330: floating labels, animated buttons, responsive layout, pure HTML/CSS.