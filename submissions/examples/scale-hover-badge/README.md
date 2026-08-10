# Scale-Hover Badge

## What does this do?
A hang-tag style product badge (`New`, `Sale`, `Bestseller`) that scales up and rights itself with a gentle overshoot when its product card is hovered — like a paper price tag lifting off the shelf.

## How is it used?
Wrap your product image in a `position: relative` container and drop the badge inside it, adding one modifier class for its color:

```html
<div class="product-card__art">
  <span class="ease-badge-scale-nx ease-badge-scale-nx--new">New</span>
</div>

<div class="product-card__art">
  <span class="ease-badge-scale-nx ease-badge-scale-nx--sale">Sale −20%</span>
</div>

<div class="product-card__art">
  <span class="ease-badge-scale-nx ease-badge-scale-nx--best">Bestseller</span>
</div>
```

Customize via CSS custom properties on `:root` (`--badge-scale-hover`, `--badge-rotate-rest`, `--badge-duration`, `--badge-easing`, plus the `--em-*` color tokens) — see `style.css`.

## Why is it useful?
Most badge hovers are a flat color swap or a generic `scale(1.1)` with no personality. This one gives the motion a reason to exist — a tilted paper tag that straightens and lifts — while staying pure CSS, dependency-free, and driven entirely by custom properties, which is exactly the kind of small, expressive, easy-to-restyle motion component EaseMotion is built around. It also respects `prefers-reduced-motion`, so the effect degrades gracefully rather than being forced on everyone.