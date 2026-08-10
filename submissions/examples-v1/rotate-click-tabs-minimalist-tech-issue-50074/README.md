# ease-rotate-click-tabs-minimal-tech

Pure CSS tabs component with a flat, monochrome, minimalist tech surface and a quick rotate-click panel transition. Zero JavaScript.

Resolves #50074.

## What it does

A tabbed interface where clicking a tab snaps the incoming panel in with a quick horizontal rotate-and-settle — no bounce, no shadow flourish — over a flat dark surface with hairline borders, sharp corners, and a monospace type treatment.

## How to use it

Copy `style.css` into your project (or the relevant classes into your framework bundle), then mark up the tabs like this:

```html
<div class="ease-tabs-tech" style="--ease-tabs-tech-duration: 0.3s; --ease-tabs-tech-easing: linear; --ease-tabs-tech-rotate: 12deg;">

  <input type="radio" name="my-tabs" id="tab-1" class="ease-tabs-tech__input" checked>
  <input type="radio" name="my-tabs" id="tab-2" class="ease-tabs-tech__input">

  <div class="ease-tabs-tech__nav" role="tablist">
    <label for="tab-1" class="ease-tabs-tech__tab" role="tab">01 / ONE</label>
    <label for="tab-2" class="ease-tabs-tech__tab" role="tab">02 / TWO</label>
  </div>

  <div class="ease-tabs-tech__panels">
    <div class="ease-tabs-tech__panel" id="panel-1">Content one</div>
    <div class="ease-tabs-tech__panel" id="panel-2">Content two</div>
  </div>

</div>
```

Open `demo.html` directly in a browser to see it running — no build step or server needed.

### Customizing

Three CSS custom properties control the feel of the transition:

| Property | Default | Effect |
|---|---|---|
| `--ease-tabs-tech-duration` | `0.3s` | Length of the rotate/fade transition |
| `--ease-tabs-tech-easing` | `linear` | Timing function for the transition |
| `--ease-tabs-tech-rotate` | `10deg` | Starting 3D tilt (rotateY) of the incoming panel |

## Why it fits EaseMotion CSS

- **No JavaScript**: state is driven entirely by native `<input type="radio">` + the `:checked` pseudo-class, in line with the framework's zero-dependency philosophy.
- **Keyboard accessible**: Tab and Arrow keys move between tabs natively; a visible focus ring is shown via `:focus-visible`.
- **No layout jump**: panels are stacked in a single CSS Grid cell, so the container height stays fixed to the tallest panel across all tabs.
- **Respects `prefers-reduced-motion`** and stacks the tab nav vertically under 30rem width.
- Distinct from the framework's other tab variants (e.g. neumorphic, glassmorphism) by using a flat, sharp-cornered, monospace-driven tech aesthetic with `rotateY` instead of `rotateX`, and a linear/mechanical easing rather than a spring.

## Browsers tested

Chrome · Firefox · Edge