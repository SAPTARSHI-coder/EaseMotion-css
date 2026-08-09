# ease-rotate-click-tabs-glassmorphism

Pure CSS tabs component with a frosted glass surface and a rotate-click panel transition. Zero JavaScript.

Resolves #50073.

## What it does

A tabbed interface where clicking a tab rotates the incoming panel in from a slight 3D tilt while fading up, then settles flat — a subtle "click" flourish — over a frosted glassmorphism surface (translucent background, blur, soft border).

## How to use it

Copy `style.css` into your project (or the relevant classes into your framework bundle), then mark up the tabs like this:

```html
<div class="ease-tabs-glass" style="--ease-tabs-glass-duration: 0.5s; --ease-tabs-glass-easing: cubic-bezier(0.34, 1.56, 0.64, 1); --ease-tabs-glass-rotate: 18deg;">

  <input type="radio" name="my-tabs" id="tab-1" class="ease-tabs-glass__input" checked>
  <input type="radio" name="my-tabs" id="tab-2" class="ease-tabs-glass__input">

  <div class="ease-tabs-glass__nav" role="tablist">
    <label for="tab-1" class="ease-tabs-glass__tab" role="tab">One</label>
    <label for="tab-2" class="ease-tabs-glass__tab" role="tab">Two</label>
  </div>

  <div class="ease-tabs-glass__panels">
    <div class="ease-tabs-glass__panel" id="panel-1">Content one</div>
    <div class="ease-tabs-glass__panel" id="panel-2">Content two</div>
  </div>

</div>
```

Glassmorphism reads best over a colorful or image background — open `demo.html` directly in a browser to see it running against a gradient backdrop, no build step or server needed.

### Customizing

Three CSS custom properties control the feel of the transition:

| Property | Default | Effect |
|---|---|---|
| `--ease-tabs-glass-duration` | `0.5s` | Length of the rotate/fade transition |
| `--ease-tabs-glass-easing` | `ease` | Timing function for the transition |
| `--ease-tabs-glass-rotate` | `16deg` | Starting 3D tilt (rotateX) of the incoming panel |

## Why it fits EaseMotion CSS

- **No JavaScript**: state is driven entirely by native `<input type="radio">` + the `:checked` pseudo-class, in line with the framework's zero-dependency philosophy.
- **Keyboard accessible**: Tab and Arrow keys move between tabs natively; a visible focus ring is shown via `:focus-visible`.
- **No layout jump**: panels are stacked in a single CSS Grid cell, so the container height stays fixed to the tallest panel across all tabs.
- **Respects `prefers-reduced-motion`** and stacks the tab nav vertically under 30rem width.

## Browsers tested

Chrome · Firefox · Edge (backdrop-filter has broad support in all three; a solid-fallback background color renders underneath for browsers without it)