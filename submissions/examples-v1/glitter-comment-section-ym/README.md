# Glitter Comment Section

A pure-CSS comment section component for **EaseMotion CSS**, styled with a
glitter/sparkle motion language: shimmering avatar rings and a star-burst
"like" interaction — no JavaScript required.

## Preview

Open `demo.html` in any browser to see it live.

- Hover a comment card → it lifts slightly and its border catches a lilac glow.
- Click the ✦ like button → a burst of six gold/rose/lilac sparkle fragments
  fires outward and fades, driven entirely by a hidden checkbox + CSS
  (`:checked ~ selector`).
- The avatar has a continuous soft shimmer sweep across it, powered by an
  `ease-*` keyframe.

## Files

glitter-comment-section-ym/
├── demo.html   → standalone live demo (loads style.css)
├── style.css   → component styles, tokens, and keyframes
└── README.md   → this file

## EaseMotion tokens used

Defined at the top of `style.css`, scoped so they won't collide with the rest
of the library:

| Token | Purpose |
|---|---|
| `--ease-glitter-out` | Smooth deceleration for hovers, shimmer sweep, form transitions |
| `--ease-glitter-in` | Acceleration curve reserved for entrance states |
| `--ease-sparkle` | Overshoot/"pop" curve (back-ease) used for the like burst and submit button |

Keyframes:
- `ease-shimmer-sweep` — the light sweep across each avatar
- `ease-sparkle-pop` — the six-point star burst on like

## How to use

1. Copy `style.css` into your project (or merge its rules into your existing
   EaseMotion CSS stylesheet).
2. Copy the markup structure from `demo.html`'s `<section class="glitter-comments">`
   block into your page.
3. Each comment needs a unique checkbox `id`/`for` pair (`like-1`, `like-2`, …)
   for the like interaction to work independently per comment.

## Accessibility

- Semantic structure: `<ul>`/`<li>` for the comment list, `<time>` for
  timestamps, a real `<form>` with a labelled `<textarea>`.
- The like control is a native checkbox + `<label>`, so it's keyboard
  operable (Tab + Space/Enter) and screen-reader friendly; decorative sparkle
  and icon spans are `aria-hidden`, with an `sr-only` label describing the
  action per commenter.
- Visible focus states on the like control, reply button, textarea, and
  submit button.
- Respects `prefers-reduced-motion`: the shimmer sweep, sparkle burst, hover
  lift, and button transitions are all disabled for users who request less
  motion.

## Responsive behavior

Below 480px, padding tightens and the "Post" button stretches to full width
for easier tapping; the layout otherwise reflows naturally since it's a
single-column flex structure throughout.

## Browser support

Uses standard CSS (flexbox, `clip-path`, custom properties, the checkbox
sibling-selector trick). No JavaScript, no build step — works in all current
evergreen browsers.