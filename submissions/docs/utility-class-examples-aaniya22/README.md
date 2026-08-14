# Utility Class Examples (issue #63963)

## What does this do?

Provides live, self-contained, and actually working demos for the six utility
classes requested in #63963 — Fade In, Slide Up, Zoom In, Bounce, Delay
utilities, and Duration utilities — each with a "Replay" button and the
matching HTML snippet.

## How is it used?

```html
<div class="ease-fade-in">Fade In</div>
<div class="ease-slide-up">Slide Up</div>
<div class="ease-zoom-in">Zoom In</div>
<div class="ease-bounce-in">Bounce In</div>

<!-- Delay: stagger a group of entrances -->
<div class="ease-fade-in ease-delay-100">First</div>
<div class="ease-fade-in ease-delay-300">Second</div>
<div class="ease-fade-in ease-delay-500">Third</div>

<!-- Duration: control how long the animation takes -->
<div class="ease-slide-up ease-duration-fast">Fast</div>
<div class="ease-slide-up ease-duration-medium">Medium</div>
<div class="ease-slide-up ease-duration-slow">Slow</div>
```

## Why is it useful?

#63963 asks for a documentation example with code snippets and a live demo
for exactly these utility classes, since the current docs introduce them
without showing them in action. This closes that gap with a page that
opens directly in a browser (no server, no build) and lets a developer see
and replay each effect before committing to it. Also respects
`prefers-reduced-motion`, consistent with the rest of EaseMotion CSS.

## Note on an existing folder

`submissions/docs/utility-class-examples/` already exists and covers four
of the six requested classes, but its `demo.html` links to a `dist/` path
that isn't part of the repo and its `style.css` never defines `.fade-in`,
`.slide-up`, `.zoom-in`, or `.bounce` — so opening it shows static,
non-animated cards. Per the contribution guide's naming rule, I didn't
edit that folder; this one is a separate, working submission that also
adds the two utility categories (Delay, Duration) the issue asks for that
weren't covered yet.
