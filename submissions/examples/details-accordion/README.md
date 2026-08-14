## What

An FAQ accordion built with native HTML `<details>` / `<summary>` elements. Six questions with expandable answers, animated open/close using CSS `interpolate-size: allow-keywords` for smooth height transitions, and a rotating chevron indicator — no JavaScript required.

## How

- Each `<details class="faq-item">` wraps a `<summary>` (the question) and a `.faq-answer` (the content).
- Smooth height animation is achieved via `interpolate-size: allow-keywords` on `<details>`, which lets CSS transition `height` from `0` to `auto`.
- A `@supports (interpolate-size: allow-keywords)` block provides the animated path, while a fallback gives instant open/close for unsupported browsers.
- The `.chevron` rotates 90° when `<details open>` using `rotate` on the `summary` marker replacement.
- `prefers-reduced-motion` disables all transitions and rotations.
- No JavaScript — all interactivity is built into the `<details>` / `<summary>` elements.

## Why

The `<details>` / `<summary>` elements are the only truly zero-JS way to build an accordion. Historically, animating the open/close was impossible because `height: auto` cannot transition. `interpolate-size: allow-keywords` finally solves this, making smooth native accordions possible. This example demonstrates the technique with a robust `@supports` fallback.
