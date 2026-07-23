# ease-fade-tabs-neumorphic

Pure CSS tabs component with a soft neumorphic surface and fade-in panel transitions. Zero JavaScript.

Resolves #50019.

## What it does

A tabbed interface where switching tabs cross-fades the panel content in place, styled with a soft neumorphic look — inset/outset shadows, muted background, no harsh borders. The active tab appears as a raised "pressed-in" pill against the recessed nav track.

## How to use it

Copy `style.css` into your project (or the relevant classes into your framework bundle), then mark up the tabs like this:

```html
<div class="ease-tabs" style="--ease-tabs-duration: 0.45s; --ease-tabs-easing: cubic-bezier(0.22, 1, 0.36, 1); --ease-tabs-scale: 0.97;">

  <input type="radio" name="my-tabs" id="tab-1" class="ease-tabs__input" checked>
  <input type="radio" name="my-tabs" id="tab-2" class="ease-tabs__input">

  <div class="ease-tabs__nav" role="tablist">
    <label for="tab-1" class="ease-tabs__tab" role="tab">One</label>
    <label for="tab-2" class="ease-tabs__tab" role="tab">Two</label>
  </div>

  <div class="ease-tabs__panels">
    <div class="ease-tabs__panel" id="panel-1">Content one</div>
    <div class="ease-tabs__panel" id="panel-2">Content two</div>
  </div>

</div>
```

Open `demo.html` directly in a browser to see it running — no build step or server needed.

### Customizing

Three CSS custom properties control the feel of the transition:

| Property | Default | Effect |
|---|---|---|
| `--ease-tabs-duration` | `0.4s` | Length of the fade/scale transition |
| `--ease-tabs-easing` | `ease` | Timing function for the transition |
| `--ease-tabs-scale` | `0.98` | Starting scale of the incoming panel |

## Why it fits EaseMotion CSS

- **No JavaScript**: state is driven entirely by native `<input type="radio">` + the `:checked` pseudo-class, in line with the framework's zero-dependency philosophy.
- **Keyboard accessible**: Tab and Arrow keys move between tabs natively; a visible focus ring is shown via `:focus-visible`.
- **No layout jump**: panels are stacked in a single CSS Grid cell, so the container height stays fixed to the tallest panel across all tabs.
- **Respects `prefers-reduced-motion`** and stacks the tab nav vertically under 30rem width.

## Browsers tested

Chrome · Firefox · Edge