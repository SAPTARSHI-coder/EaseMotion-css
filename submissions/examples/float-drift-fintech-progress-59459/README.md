# Float-Drift Fintech Progress Bars

## What does this do?

This pure HTML and CSS component displays fintech settlement progress with animated fills and gently drifting percentage markers.

## How is it used?

Set `--progress` and `--delay` on each semantic progress container, then provide matching ARIA values.

```html
<div
  class="float-progress"
  role="progressbar"
  aria-label="Card settlements"
  aria-valuemin="0"
  aria-valuemax="100"
  aria-valuenow="78"
  style="--progress: 78%; --delay: 0ms"
>
  <div class="float-progress__track">
    <span class="float-progress__fill"></span>
    <span class="float-progress__marker" aria-hidden="true">78%</span>
  </div>
</div>
```

The component exposes these main custom properties:

| Property          | Purpose                                  | Default            |
| ----------------- | ---------------------------------------- | ------------------ |
| `--progress`      | Completed percentage and marker position | Set per bar        |
| `--delay`         | Staggered fill and drift delay           | Set per bar        |
| `--fill-duration` | Track fill duration                      | `900ms`            |
| `--accent`        | Fill and marker color                    | Inherited per card |
| `--radius`        | Card corner radius                       | `8px`              |

## Why is it useful?

The pattern turns batch progress into a scannable fintech operations view without JavaScript. It fits EaseMotion CSS through reusable custom properties, transform-only fill and drift motion, semantic progress values, responsive layouts, forced-color support, and a `prefers-reduced-motion` fallback.
