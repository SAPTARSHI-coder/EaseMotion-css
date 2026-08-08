# CSS Slide-Up Drawer for Fintech Dashboard Layouts

> Issue: [#59268](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/59268)

A bottom-sheet drawer that slides up from the viewport edge, holding its open state in a single hidden checkbox. No JavaScript.

## What it does

Presents a scrollable transfer feed in a bottom sheet over a mock accounts dashboard. Rows stagger in as the sheet settles. The scrim and the close button are both `<label>` elements bound to the same checkbox, so every dismiss route is pure CSS.

## How it is used

```html
<input class="dr-toggle-ad" type="checkbox" id="dr-sheet-toggle-ad">
<label class="dr-open-ad" for="dr-sheet-toggle-ad">Open recent movement</label>

<label class="dr-scrim-ad" for="dr-sheet-toggle-ad" aria-hidden="true"></label>

<aside class="dr-sheet-ad" role="dialog" aria-modal="true">
    <div class="dr-sheet-ad__grip"></div>
    <div class="dr-sheet-ad__head">…</div>
    <div class="dr-sheet-ad__body"><div class="dr-row-ad">…</div></div>
    <div class="dr-sheet-ad__foot">…</div>
</aside>
```

The trigger, scrim and sheet must be **siblings** of the checkbox — the general sibling combinator (`~`) is what drives the open state.

## Key CSS custom properties

```css
--dr-slide-duration: 380ms;  /* sheet travel */
--dr-scrim-duration: 260ms;  /* scrim fade, deliberately shorter */
--dr-stagger-step:    55ms;  /* per-row delay */
--dr-sheet-max-h:     78vh;  /* clamps tall content */
--dr-accent:       #a78bfa;
```

## Why it fits EaseMotion

The sheet animates only `transform: translateY(100%)` → `translateY(0)` — a percentage translate, so it stays fully off-screen at any sheet height without hardcoding pixels. Nothing touches layout, so the slide runs entirely on the compositor.

`visibility` is transitioned with a delay equal to the slide duration on close and `0s` on open. That keeps the closed sheet untabbable without using `display: none`, which would kill the transition outright.

`prefers-reduced-motion: reduce` collapses the slide, the scrim fade and the row stagger to 1ms while preserving the open/closed state change, and `forced-colors: active` restores explicit borders for high-contrast users.
