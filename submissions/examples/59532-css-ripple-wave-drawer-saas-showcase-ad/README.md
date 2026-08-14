# CSS Ripple-Wave Drawer for SaaS Showcase Layouts

> Issue: [#59532](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/59532)

A right-side drawer whose trigger emits two concentric ripple shockwaves as the panel slides in, with staggered item reveal. Pure CSS.

## What it does

Opening the drawer fires two offset ripples from the centre of the trigger, slides a 380px panel in from the right, and staggers five service rows in behind it. The scrim, close button and footer action all dismiss it.

## How it is used

```html
<input class="rw-toggle-ad" type="checkbox" id="rw-drawer-toggle-ad">

<label class="rw-open-ad" for="rw-drawer-toggle-ad">Review integrations</label>
<label class="rw-scrim-ad" for="rw-drawer-toggle-ad" aria-hidden="true"></label>

<aside class="rw-drawer-ad" role="dialog" aria-modal="true">
    <div class="rw-drawer-ad__head">…</div>
    <div class="rw-drawer-ad__body"><div class="rw-item-ad">…</div></div>
    <div class="rw-drawer-ad__foot">…</div>
</aside>
```

The checkbox **must precede** the trigger, scrim and drawer — all three are matched with the general sibling combinator.

## Key CSS custom properties

```css
--rw-slide-duration-ad:  420ms;
--rw-ripple-duration-ad: 900ms;
--rw-ripple-scale-ad:        4;  /* shockwave growth factor */
--rw-stagger-ad:          65ms;  /* per-item delay */
--rw-drawer-w-ad:        380px;
--rw-accent-ad:        #f59e0b;
```

## Why it fits EaseMotion

The ripple scales a fixed 120px circle from `scale(0)` to `scale(4)` rather than animating `width` and `height`. Animating box dimensions would force layout and paint on every frame; scaling a stable box keeps the whole shockwave on the compositor. The two waves are offset by 160ms so the burst reads as concentric rather than as one flat pulse.

Ripples are keyed to `:checked`, so they fire on open and not on close — a shockwave firing as the panel leaves would read as a second, contradictory event.

The reduced-motion handling is deliberately split. The ripple is **removed outright** — an expanding shockwave is exactly the kind of effect motion-sensitive users opt out of. The slide and item stagger are only **shortened**, because those animations use `animation-fill-mode: both`, and removing them would leave every drawer item stranded at `opacity: 0`. Two different failure modes, two different fixes.
