# Rotate-Fade SaaS Card Grid

## What does this do?

This pure HTML and CSS component presents SaaS capabilities in a responsive card grid that rotates and fades into place with staggered timing.

## How is it used?

Add cards to the `feature-grid`, then set each card's starting angle and delay with the `--tilt` and `--delay` custom properties.

```html
<section class="feature-grid" aria-label="Platform features">
  <article class="feature-card" style="--tilt: -4deg; --delay: 0ms">
    <h2>Pipeline Pulse</h2>
    <p>Spot conversion changes before they affect the quarter.</p>
    <a href="#pipeline">Explore</a>
  </article>
</section>
```

The visual system can be customized through the color, radius, shadow, and motion properties declared in `:root`.

| Property   | Purpose                      | Default                                |
| ---------- | ---------------------------- | -------------------------------------- |
| `--tilt`   | Initial card rotation        | Set per card                           |
| `--delay`  | Staggered entrance delay     | Set per card                           |
| `--motion` | Entrance duration and easing | `620ms cubic-bezier(0.2, 0.8, 0.2, 1)` |
| `--radius` | Card corner radius           | `8px`                                  |
| `--shadow` | Resting card elevation       | `0 18px 45px rgba(39, 55, 79, 0.12)`   |

## Why is it useful?

The pattern gives SaaS feature pages clear information hierarchy and expressive motion without JavaScript. It fits EaseMotion CSS by using composable, human-readable classes and transform/opacity animation, while preserving keyboard focus, responsive layouts, and a `prefers-reduced-motion` fallback.
