# Liquid Button Border

## What does this do?

It creates an organic morphing button border animation that continuously shifts its corner values to simulate a liquid, fluid boundary.

## How is it used?

Apply the `liquid-button-uj` class to your button, badge, or card container:

```html
<button class="liquid-button-uj">
  Morphing Border
</button>
```

You can customize the morphing speed by overriding the animation duration property:

```css
.liquid-button-uj {
  animation-duration: 8s; /* slower, more relaxed fluid motion */
}
```

## Why is this useful?

This micro-interaction brings a playful, organic feel to action buttons and tag indicators on landing pages. It operates entirely within CSS using hardware-accelerated transitions, avoids layout recalculation costs, and reverts to a stable rectangular border configuration when the user requests reduced motion.
