# Marquee Pause on Hover

## What does this do?

A single utility class `.marquee-pause-hover` that pauses a scrolling
marquee when the user hovers over it — pure CSS, zero JavaScript.

## How is it used?

Add the class alongside your existing marquee container:

```html
<div class="marquee marquee-pause-hover">
  <div class="marquee-track">...</div>
</div>
```

Works with any element using `animation` — the utility sets
`animation-play-state: paused` on the element and all its descendants
on `:hover`.

## Why is it useful?

Marquees scroll past content users may want to read or interact with.
Pausing on hover is the expected accessibility behaviour and a common
UX pattern. The existing `ease-marquee` component has no built-in way
to do this — this utility fills that gap in one line of CSS.

## Tech Stack

- CSS only (no JavaScript, no frameworks)

## Preview

Open `demo.html` directly in your browser.
