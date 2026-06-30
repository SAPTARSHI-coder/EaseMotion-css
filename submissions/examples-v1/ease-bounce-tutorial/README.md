# ease-bounce Tutorial

An interactive tutorial page for the `ease-bounce` animation utility in EaseMotion CSS.

## What's included

| File        | Purpose                                                      |
| ----------- | ------------------------------------------------------------ |
| `demo.html` | Full tutorial page — live demo, code snippets, playground    |
| `style.css` | Page styles matching the EaseMotion CSS dark design language |
| `README.md` | This file                                                    |

## Preview

The tutorial walks users through five steps:

1. **See it live** — three balls showing default, slow, and high-bounce variants
2. **Install** — CDN `<link>` tag with one-click copy
3. **Use it** — class usage snippets with CSS custom property overrides
4. **Playground** — live sliders for duration, height, and color with generated CSS output
5. **When to use it** — four real-world use cases (notifications, scroll cues, games, CTAs)

## How to run locally

```bash
# from the repo root
open submissions/examples/ease-bounce-tutorial/demo.html
```

The CDN link in `demo.html` points to `../../easemotion.min.css` (relative path for local dev). It will resolve correctly when placed at `submissions/examples/ease-bounce-tutorial/`.

## CSS custom properties

The tutorial introduces two override variables that the core class can expose:

| Variable          | Default | Description                   |
| ----------------- | ------- | ----------------------------- |
| `--bounce-dur`    | `0.9s`  | Full animation cycle duration |
| `--bounce-height` | `60px`  | Peak height of the bounce     |

## Author

Submitted as part of GSSoC 2026 contributions to EaseMotion CSS.
