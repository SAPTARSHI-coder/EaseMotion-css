# CSS Zoom-In Carousel for SaaS Showcase Layouts

> Issue: [#59464](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/59464)

A testimonial carousel where the active slide zooms forward from `0.9` scale while the outgoing slide recedes. Driven by radio inputs — no JavaScript.

## What it does

Four testimonial slides stacked in a single grid cell. Selecting a radio promotes its slide to full scale and opacity; the previous slide scales back down and fades. The indicator dot for the active slide widens into a pill.

## How it is used

```html
<section class="cz-ad" aria-roledescription="carousel">
    <input class="cz-ad__radio" type="radio" name="cz-slides-ad" id="cz-s1-ad" checked>
    <input class="cz-ad__radio" type="radio" name="cz-slides-ad" id="cz-s2-ad">

    <div class="cz-ad__stage">
        <article class="cz-ad__slide">…</article>
        <article class="cz-ad__slide">…</article>
    </div>

    <div class="cz-ad__dots">
        <label class="cz-ad__dot" for="cz-s1-ad" aria-label="Show testimonial 1"></label>
        <label class="cz-ad__dot" for="cz-s2-ad" aria-label="Show testimonial 2"></label>
    </div>
</section>
```

The radios **must precede** both the stage and the dots — each pairing is matched with `:nth-of-type(n):checked ~ …:nth-of-type(n)`. To add a fifth slide, extend the selector lists in sections 5 and 7.

## Key CSS custom properties

```css
--cz-zoom-duration-ad: 520ms;
--cz-zoom-rest-ad:       0.9;  /* inactive slide scale */
--cz-zoom-active-ad:       1;
--cz-slide-h-ad:       340px;  /* stage height */
--cz-accent-ad:      #c084fc;
```

## Why it fits EaseMotion

Slides share one grid cell via `grid-area: 1 / 1` rather than absolute positioning. The stage therefore keeps a real, stable box and never reflows between transitions, and slides stay in normal flow for sizing purposes.

Using radios rather than `:target` means arrow-key navigation works for free — a radio group is natively keyboard-operable, and the URL is never mutated. The focus ring is mirrored from each hidden radio onto its visible label.

`visibility` is transitioned alongside opacity, delayed by the zoom duration when leaving and `0s` when entering, so inactive slides are removed from the tab order and hit-testing without `display: none` — which would kill the transition. Under `prefers-reduced-motion` the resting scale is neutralised to `none` as well as shortening the transition, so no slide can be caught mid-transform.
