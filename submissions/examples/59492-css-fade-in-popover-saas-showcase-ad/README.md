# CSS Fade-In Popover for SaaS Showcase Layouts

> Issue: [#59492](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/59492)

Anchored popovers that fade in on focus, holding genuinely interactive content. Three placements, an attached arrow, and no JavaScript.

## What it does

Provides `--bottom`, `--top` and `--bottom-end` placements sharing one panel component. Each fades in while drifting toward its trigger. Panels contain real buttons and lists — not just text — and stay open while focus is inside them.

## How it is used

```html
<span class="po-ad">
    <button class="po-btn-ad" type="button" aria-expanded="false">Plan usage</button>
    <div class="po-ad__panel po-ad__panel--bottom" role="dialog" aria-label="Plan usage">
        <p class="po-ad__panel-title">Current cycle</p>
        <ul class="po-ad__panel-list">
            <li>Seats used <span class="po-ad__panel-num">42 / 50</span></li>
        </ul>
        <div class="po-ad__panel-actions">
            <button class="po-btn-ad po-btn-ad--sm po-btn-ad--primary" type="button">Upgrade</button>
        </div>
    </div>
</span>
```

The panel **must be a child of `.po-ad`**, alongside the trigger — that containment is what makes `:focus-within` stay true when focus moves into the panel.

## Key CSS custom properties

```css
--po-duration-ad: 220ms;
--po-travel-ad:      7px;  /* drift toward trigger */
--po-gap-ad:        12px;  /* trigger-to-panel distance */
--po-width-ad:     280px;
--po-accent-ad: #2dd4bf;
```

## Why it fits EaseMotion

Opening is bound to `:focus-within` rather than `:hover`. This is the central decision: a popover holds interactive content, and a hover-driven panel closes the moment the pointer crosses the gap between trigger and panel — making the buttons inside effectively unreachable. Because the panel is a sibling of the trigger *inside* `.po-ad`, focus moving into it keeps `:focus-within` true, so the panel survives and its actions are clickable.

It also means keyboard and pointer behaviour are the same mechanism rather than two code paths, and dismissal is free — clicking away or tabbing out blurs the subtree and closes the panel.

`visibility` is transitioned alongside opacity, delayed by the fade duration on close and `0s` on open, so closed panels stay out of the tab order without `display: none` (which would break the fade). The `--bottom-end` variant right-aligns to the trigger so a popover on a trailing toolbar button cannot overflow the viewport, and below 560px the width clamps to `min(280px, 100vw - 2.5rem)`.
