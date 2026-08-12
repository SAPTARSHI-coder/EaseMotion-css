# Motion Guard mixin

> Issue: [#61718](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/61718)

A SCSS mixin that wraps any motion block and generates the matching `prefers-reduced-motion: reduce` override automatically — using the *correct* strategy for the kind of animation being guarded.

## What it does

Reduced-motion handling has two distinct failure modes that are routinely conflated:

| Animation kind | Correct strategy | What happens if you get it wrong |
|---|---|---|
| Entrance using `animation-fill-mode: both` | **Shorten** the duration | Removing it leaves the fill holding the element at its `from` frame — typically `opacity: 0`. The element vanishes for exactly the users who opted out of motion. |
| Looping / `infinite` animation | **Remove** it outright | Shortening only makes the loop faster, which is worse than leaving it alone. |

`motion-guard` takes a `$mode` argument so the author picks deliberately, and `@error`s on anything else rather than silently emitting nothing.

## Mixins

### `motion-guard($mode: shorten)`

```scss
.card {
    @include motion-guard($mode: shorten) {
        animation: card-rise 420ms cubic-bezier(0.16, 1, 0.3, 1) both;
    }
}

.live-dot {
    @include motion-guard($mode: remove) {
        animation: pulse 2s ease-in-out infinite;
    }
}
```

| Parameter | Type | Default | Description |
|---|---|---|---|
| `$mode` | `String` | `shorten` | `shorten` collapses duration and delay to `1ms`; `remove` sets `animation: none`. Any other value raises a build error. |

### `motion-guard-transform($reset: none)`

For hover/active states that animate `transform`. Neutralises the transform *as well as* shortening the transition, so an element cannot be left rendered mid-transform when the transition collapses.

```scss
.tile:hover {
    @include motion-guard-transform {
        transform: scale(1.04);
        transition: transform 300ms ease;
    }
}
```

| Parameter | Type | Default | Description |
|---|---|---|---|
| `$reset` | `String` | `none` | Transform value to fall back to under reduced motion. |

### `motion-guard-stagger($count, $step: 60ms, $from: 1)`

Emits `nth-child` delays for a staggered entrance and collapses them all under reduced motion. Always uses the `shorten` strategy, because staggered entrances effectively always use `both` fill.

```scss
.grid > .item {
    @include motion-guard-stagger(8, 70ms);
}
```

| Parameter | Type | Default | Description |
|---|---|---|---|
| `$count` | `Number` | — | How many children to emit delays for. Must be positive; errors otherwise. |
| `$step` | `Number` | `60ms` | Delay increment per child. |
| `$from` | `Number` | `1` | Starting index. Use `2` when the stagger should trail a parent's own entrance rather than race it. |

## Configuration

```scss
@use "motion-guard" with ($motion-guard-instant: 1ms);
```

`$motion-guard-instant` is deliberately non-zero: `animationend` and `transitionend` listeners still fire at `1ms`, but would not at `0s`. Any JavaScript sequencing off those events keeps working under reduced motion.

## Why it fits EaseMotion

EaseMotion is animation-first, which makes accessible motion a framework-level concern rather than a per-component one. This mixin makes the accessible path the default path: an author writes motion once and the fallback is generated, correctly, without having to remember which of the two strategies applies.

The `@error` on an unknown `$mode` matters more than it looks — a typo'd mode in a hand-written media query fails silently and ships. Here it fails the build.
