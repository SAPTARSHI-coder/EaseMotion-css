# ease-code-snippet-fade

> Issue #36559 — Code snippet with fade-in line reveals.

Lines of code fade and slide in sequentially, creating a smooth typewriter-like reveal effect.

## CSS Custom Properties

| Property          | Default    | Description                                |
| ----------------- | ---------- | ------------------------------------------ |
| `--snippet-bg`    | `#1e1e2e`  | Background of the snippet container        |
| `--line-color`    | `#cdd6f4`  | Text colour of each line                   |
| `--fade-duration` | `0.5s`     | Duration of the fade-in animation per line |
| `--line-delay`    | `0.08s`    | Stagger delay between each line            |

## Usage

```html
<link rel="stylesheet" href="https://unpkg.com/easemotion/css/code-snippet-fade.css" />

<div class="code-snippet-fade">
  <span class="snippet-line">const x = 1;</span>
  <span class="snippet-line">const y = 2;</span>
</div>
```

Each line must be wrapped in a `<span class="snippet-line">`. Lines animate on page load. To replay, remove and re-add the `snippetFadeIn` animation.

## Animation

`snippetFadeIn` fades from `opacity: 0; translateY(6px)` to `opacity: 1; translateY(0)`. Lines target up to the 10th child with incremental `animation-delay` using `--line-delay`.
