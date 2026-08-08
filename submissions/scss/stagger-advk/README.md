# stagger-advk

SCSS mixins that generate cascade delays for a group of children, with a
reduced-motion path built in.

## Mixins

### `stagger($count, $step, $start, $child, $reduced-step)`

| Parameter | Default | Description |
|---|---|---|
| `$count` | `8` | Number of children to emit rules for. |
| `$step` | `70ms` | Delay added per item. |
| `$start` | `0ms` | Delay on the first item. |
| `$child` | `"> *"` | Selector for the children. |
| `$reduced-step` | `30ms` | Step used under `prefers-reduced-motion: reduce`. |

### `stagger-over($count, $total, $child)`

Spreads `$total` across the children, so a 4-item and a 20-item list finish
their cascade in the same wall-clock time.

### `stagger-reverse($count, $step, $child)`

Same cascade, last child first — useful for exit animations.

## Usage

```scss
@use "stagger-advk" as s;

.card-grid {
  > * {
    animation: ease-kf-slide-up 500ms both;
  }

  @include s.stagger($count: 12, $step: 60ms);
}

.menu {
  > li { animation: ease-kf-fade-in 400ms both; }

  @include s.stagger-over($count: 6, $total: 360ms, $child: "> li");
}
```

## Why it fits EaseMotion CSS

Staggered entrances are one of the most-requested effects and one of the most
tedious to hand-write, because every item needs its own `animation-delay` and the
rule count grows with the list. Generating them from a loop keeps the authored
source to one line while emitting exactly the CSS a browser needs, with no
runtime cost — which matches EaseMotion's zero-dependency, no-JavaScript posture.

The reason this belongs in the framework rather than in each project is the
reduced-motion half. Hand-written stagger rules almost always omit it, so a
20-item cascade at 70ms still runs for 1.4 seconds of sequential movement for a
user who asked for less motion. The mixin emits a compressed second set
automatically, so the ordering cue survives while the total duration shrinks —
the correct treatment, and impossible to forget when it is generated.

`stagger-over` exists because a fixed per-item step makes long lists feel broken:
at 70ms a 30-item list takes over two seconds before the last item begins.
Spreading a total keeps the effect proportionate as content grows.
