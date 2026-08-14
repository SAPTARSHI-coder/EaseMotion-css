# marquee-track-qz9k

Sass mixins for a CSS-only infinite marquee (logo wall, ticker), pausable on
hover and disabled entirely under `prefers-reduced-motion`.

## Usage

```scss
@use 'marquee-track' as *;

.logo-track {
  @include marquee-track($duration: 25s);
}

.logo-track .logo-group {
  @include marquee-group($duration: 25s);
}
```

```html
<div class="logo-track">
  <div class="logo-group">
    <img src="a.svg" /><img src="b.svg" /><img src="c.svg" />
  </div>
  <div class="logo-group" aria-hidden="true">
    <img src="a.svg" /><img src="b.svg" /><img src="c.svg" />
  </div>
</div>
```

| Param | Default | Description |
|---|---|---|
| `$duration` | `20s` | Time for one full scroll cycle. |
| `$gap` | `2rem` | Spacing between items within a group, and between the two groups. |

## Why is it useful?

A marquee built from one copy of the content that animates from `0` to
`-100%` and then jumps back to `0` produces a visible snap at the loop
point, because there's a hard cut the instant the animation restarts. The
standard fix — duplicating the content into a second identical group placed
immediately after the first, both scrolling together — means that by the
time the first group has scrolled fully out of view, the second group has
scrolled into exactly the position the first one started in, so the loop
point is visually seamless with no jump. This is a markup requirement, not
something the mixin alone can provide: the duplicated `.logo-group` must
exist in the HTML (with the copy marked `aria-hidden="true"` so screen
readers don't announce the logos twice).

`animation-play-state: paused` on `:hover` lets a user actually read a
ticker item without it scrolling away mid-read, and the reduced-motion
branch removes the animation entirely rather than just slowing it, since a
marquee is exactly the kind of large-scale, continuous motion that
preference is meant to suppress.

## Sizing the gap consistently

The `$gap` parameter is used in two places that both need to agree: the
`gap` between items *within* a group, and the `gap` between the two
duplicated groups in the track. If the between-groups gap doesn't match the
within-group item gap, the loop point becomes visually detectable as a
slightly different spacing where the two groups meet, which defeats the
seamlessness the duplication was meant to provide.

```scss
.testimonial-track {
  @include marquee-track($duration: 30s, $gap: 1.5rem);
}

.testimonial-track .marquee-group {
  @include marquee-group($duration: 30s, $gap: 1.5rem);
}
```

Passing the same `$gap` value to both mixin calls (as shown) keeps that
spacing consistent without hard-coding the number twice in unrelated
places.

## Vertical marquees

The mixins as written animate along the X-axis. A vertical ticker (a news
feed, a changelog scroller) needs `flex-direction: column` on the track and
group, plus a `translateY` keyframe instead:

```scss
.vertical-ticker {
  @include marquee-track($duration: 15s);
  flex-direction: column;
  height: 8rem;
}

.vertical-ticker .marquee-group {
  @include marquee-group($duration: 15s);
  flex-direction: column;
}

@keyframes marquee-scroll-vertical {
  from { transform: translateY(0); }
  to { transform: translateY(calc(-100% - var(--marquee-gap, 2rem))); }
}

.vertical-ticker .marquee-group {
  animation-name: marquee-scroll-vertical;
}
```

The same duplicate-content requirement applies: two identical `.marquee-group`
elements stacked vertically, only one marked visible to assistive tech.

## Performance note

The animation only ever touches `transform`, never `left`/`top`/`margin`,
which keeps the marquee on the compositor thread in every modern browser —
a scroll effect implemented via a `left` or `margin-left` animation instead
forces layout recalculation on every frame, which is far more likely to
visibly stutter on lower-powered devices once the track contains more than
a handful of items.
