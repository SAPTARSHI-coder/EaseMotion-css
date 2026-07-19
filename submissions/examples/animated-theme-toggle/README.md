# Animated Theme Toggle Switch

A modern light/dark theme toggle switch with a smooth sun-to-moon icon transition, built using pure HTML and CSS (no JavaScript).

## What it does

- A hidden checkbox drives all state via the `:checked` pseudo-class — no JS needed.
- The sliding thumb animates across the track with a springy easing curve.
- The sun icon (core + rays) fades out and the moon icon fades in as the switch is toggled.
- The track background transitions between a blue-sky gradient and a dark navy gradient.
- Fully responsive — track and thumb scale down on smaller screens.
- Keyboard accessible: shows a visible focus outline via `:focus-visible`.

## How to use

1. Copy `demo.html` and `style.css` into your project.
2. Open `demo.html` directly in a browser — no build step or server required.
3. Reuse the `.theme-toggle` label/checkbox structure anywhere you need a theme switch. Wrap your actual theme-switching logic (adding/removing a `dark` class on `<body>`, for example) around the checkbox's `change` event in your own JS if you want it to functionally switch themes — this component only handles the visual toggle.

## Why it fits EaseMotion CSS

- Pure HTML/CSS, no JavaScript required for the animation itself.
- Beginner-friendly: uses the well-known "checkbox hack" (`:checked ~ sibling`) pattern, with clear comments in the CSS.
- Meets all requirements from issue #48342: smooth sun/moon animation, pure HTML/CSS, responsive design, beginner-friendly, commented code.