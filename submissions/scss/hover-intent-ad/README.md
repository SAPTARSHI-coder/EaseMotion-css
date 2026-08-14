# Hover Intent mixin

> Issue: [#61720](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/61720)

A SCSS mixin for hover-revealed content with an asymmetric delay — slow to open, instant to close — plus touch-device and keyboard handling built in.

## What it does

Applies a closed state to a selector and an open state under `:hover` **and** `:focus-within`, with the opening delay applied only in one direction.

That asymmetry is the whole idea. A symmetric delay makes revealed content trail the cursor around the page: you leave a tooltip and it lingers behind you. Delaying only the *open* transition filters out incidental pointer travel across a dense UI, while dismissal stays immediate.

## Mixins

### `hover-intent($delay, $duration, $easing, $props)`

```scss
.tooltip {
    @include hover-intent($delay: 320ms, $duration: 180ms) {
        transform: translateY(0);
    }
}
```

| Parameter | Type | Default | Description |
|---|---|---|---|
| `$delay` | `Number` | `320ms` | Opening delay. Never applied on close. Errors if not a number. |
| `$duration` | `Number` | `180ms` | Transition duration, both directions. |
| `$easing` | `String` | `cubic-bezier(0.16, 1, 0.3, 1)` | Timing function. |
| `$props` | `List` | `(opacity, transform)` | Properties to transition. |

`@content` is emitted into the **open** state, so the block is where you put the revealed transform.

### `hover-intent-parent($child, ...)`

For the common case where the trigger is a parent and the revealed element is a descendant.

```scss
.menu {
    @include hover-intent-parent(".menu__panel", $delay: 250ms);
}
```

| Parameter | Type | Default | Description |
|---|---|---|---|
| `$child` | `String` | — | Selector for the revealed descendant. |
| `$delay` / `$duration` / `$easing` | | as above | |

## Configuration

```scss
@use "hover-intent" with (
    $hover-intent-delay: 280ms,
    $hover-intent-duration: 160ms
);
```

## Why it fits EaseMotion

Three details do real work here.

**The `hover: none` guard is not polish.** On a touch device there is no hover-out event, so a `:hover`-revealed panel latches open on first tap with no way to dismiss it. The mixin zeroes the delay there so a tap reveals immediately rather than after a delay the user cannot perceive the purpose of.

**`:focus-within` is included by default**, not left to the caller. A hover-only reveal is simply unreachable by keyboard, and making that opt-in guarantees some consumers ship it broken.

**The intent delay is deliberately preserved under `prefers-reduced-motion`.** It is an interaction filter, not decoration — removing it would make content flicker on every incidental pointer movement, which is worse for motion-sensitive users, not better. Only the transition *duration* collapses.

`visibility` is transitioned alongside opacity, delayed by the duration on close and by `$delay` on open, so revealed content is never hittable before it is visible and never untabbable while still fading out.
