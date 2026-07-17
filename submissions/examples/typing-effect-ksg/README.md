# Typing Effect with Cursor

## What does this do?
Simulates a typewriter effect that reveals text character-by-character using the CSS `steps()` timing function, with a blinking cursor rendered via `border-right` — no JavaScript needed for the animation.

## How is it used?

Add the `.typing-effect` class to any inline element and set two CSS custom properties:

- `--typing-steps` — the exact character count of your text
- `--typing-speed` — how long the full reveal takes (e.g. `2.8s`)

```html
<!-- Hero headline -->
<span class="typing-effect" style="--typing-steps: 19; --typing-speed: 3s; max-width: 19ch;">
  Build. Ship. Scale.
</span>

<!-- Chat bubble -->
<span class="typing-effect" style="--typing-steps: 24; --typing-speed: 1.6s; max-width: 24ch;">
  Hey! How can I help you?
</span>
```

For a looping variant (types, erases, and repeats):

```html
<span class="typing-effect-loop" style="--typing-steps: 15; max-width: 15ch;">
  Hello, World!
</span>
```

For sequential multi-line reveals (e.g. a code terminal), use staggered `animation-delay` on sibling elements sharing the same keyframe pattern.

## Why is it useful?
The `steps()` timing function is a native CSS feature that is rarely demonstrated in isolation. This submission shows three practical patterns — hero headings, developer code terminals, and chat interfaces — making it a reference for contributors who want to understand how `overflow: hidden` + `white-space: nowrap` + `steps()` work together to produce a pixel-perfect typewriter illusion. It fits EaseMotion CSS because it is purely declarative: a developer adds a class and two CSS variables, and the effect is handled entirely by the browser without any runtime JavaScript or third-party libraries.

## Tech Stack
- HTML
- CSS only (no JavaScript, no external frameworks)

## Preview
Open `demo.html` directly in any modern browser to see all three demos.

## Demos included
| Demo | Description |
|------|-------------|
| Hero Headline | Single `.typing-effect` element inside an `h1`-style layout |
| Code Terminal | Three sequentially staggered lines simulating code being typed |
| Chat Interface | Reusable `.typing-effect` inside chat bubbles with offset delays |

## Accessibility
- A `@media (prefers-reduced-motion: reduce)` block disables all animations and makes full text visible immediately.
- Interactive chat bubbles carry `aria-label` attributes so screen readers announce the full message without waiting for the animation.

## Contribution Notes
- Class naming was chosen by the contributor; the maintainer will rename to `ease-*` convention before merging.
- Only files inside `submissions/examples/typing-effect-ksg/` have been created — no core or component files were modified.
