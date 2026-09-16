# CSS Fade-In Modal for Fintech Dashboard Layouts

> Issue: [#59252](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/59252)

A pure CSS modal system for fintech dashboards. Overlays fade in over a blurred backdrop and the dialog lifts into place, driven entirely by the `:target` pseudo-class — no JavaScript.

## What it does

Three modal variants (standard, wide, destructive confirm) layered over a mock treasury console. Opening is an anchor to the overlay `id`; closing is an anchor to `#`, with the backdrop doubling as a full-bleed dismiss link.

## How it is used

```html
<a class="fm-trigger-ad" href="#fm-modal-payout-ad">Review payout batch</a>

<div class="fm-overlay-ad" id="fm-modal-payout-ad" role="dialog" aria-modal="true">
    <a class="fm-overlay-ad__dismiss" href="#" aria-label="Close dialog"></a>
    <div class="fm-modal-ad">
        <div class="fm-modal-ad__head">…</div>
        <div class="fm-modal-ad__body">…</div>
        <div class="fm-modal-ad__foot">…</div>
    </div>
</div>
```

## Key CSS custom properties

```css
--fm-fade-duration: 320ms;   /* overlay + dialog fade */
--fm-fade-delay:     60ms;   /* dialog trails the backdrop */
--fm-lift-distance:  14px;   /* dialog travel on entrance */
--fm-accent:       #22d3ee;
```

## Why it fits EaseMotion

The overlay stays inert with `visibility: hidden` + `pointer-events: none` rather than `display: none`, which keeps opacity interpolatable so the fade actually runs in both directions. Only `opacity` and `transform` are animated, so the entrance stays on the compositor. `backdrop-filter` is wrapped in `@supports` and degrades to a plain scrim. Full `prefers-reduced-motion: reduce` handling collapses all motion to 1ms while preserving the open/closed state change, and `forced-colors: active` restores borders for high-contrast users.
