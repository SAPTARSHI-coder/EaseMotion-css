# Glitch-Flicker Carousel

A pure CSS carousel with a glitch/flicker transition effect, designed
for gaming-hub style layouts — featured titles, tournament banners,
or patch/update highlights.

## 1. What does this do?

Renders an image-free carousel where each slide transitions in with a
short RGB-split "glitch" flicker (staggered opacity steps plus offset
cyan/magenta text ghosts) instead of a plain fade or slide, giving it
a gaming/cyberpunk aesthetic. Slides can be changed with the dot
navigation or the hover-revealed prev/next arrows.

## 2. How is it used?

Open `demo.html` directly in any browser — no build step, server, or
JavaScript required. The carousel is driven entirely by hidden radio
inputs and the `:checked` CSS selector:

```html
<div class="glitch-carousel">
  <input type="radio" name="glitch-slide" id="slide-1" class="glitch-radio" checked>
  <input type="radio" name="glitch-slide" id="slide-2" class="glitch-radio">

  <div class="glitch-track">
    <div class="glitch-slide glitch-slide-1">
      <div class="glitch-slide-inner" data-text="YOUR TITLE">
        <span class="glitch-slide-title">YOUR TITLE</span>
        <span class="glitch-slide-sub">Your subtitle</span>
      </div>
      <label for="slide-2" class="glitch-arrow glitch-arrow-prev">&#10094;</label>
      <label for="slide-2" class="glitch-arrow glitch-arrow-next">&#10095;</label>
    </div>
  </div>

  <div class="glitch-nav">
    <label for="slide-1" class="glitch-dot"></label>
    <label for="slide-2" class="glitch-dot"></label>
  </div>
</div>
```

Each `.glitch-slide-inner` needs a `data-text` attribute matching its
visible title text — this is what the `::before`/`::after` glitch
ghost layers read via `content: attr(data-text)`. To add more slides,
add another `input[type="radio"]` with a unique `id`, a matching
`.glitch-slide`, and a `.glitch-dot` label, and update each slide's
prev/next `label[for]` targets to point at its correct neighbors.

## 3. Features

- **Pure CSS / HTML** — no JavaScript, driven entirely by radio
  `:checked` state.
- **Glitch-flicker transition** — a stepped-opacity keyframe
  (`glitch-flicker-in`) combined with two offset, color-tinted text
  ghosts (`glitch-shift-a` / `glitch-shift-b`) simulating an RGB
  channel split.
- **Fully responsive** — uses `aspect-ratio` and `clamp()` for fluid
  sizing, with an adjusted aspect ratio and smaller controls under
  `560px`.
- **`prefers-reduced-motion` support** — disables the glitch
  keyframes and ghost layers, falling back to a plain, short opacity
  crossfade.
- **Accessible controls** — dot and arrow navigation are real
  `<label>` elements tied to radio inputs, with `aria-label`s
  describing each action.

Fixes #56390.
