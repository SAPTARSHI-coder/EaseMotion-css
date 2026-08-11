# ease-stagger

Submission for Issue #3839

## What this adds

CSS utility that automatically applies incremental animation delays
to child elements using CSS :nth-child selectors. Supports up to
10 children. Zero JavaScript required.

## Classes

### Wrapper (apply to parent)
| Class | Step |
|---|---|
| `ease-stagger` | 100ms step (default) |
| `ease-stagger--50` | 50ms step |
| `ease-stagger--200` | 200ms step |

### Direction Variants (apply to parent)
| Class | Animation |
|---|---|
| `ease-stagger--up` | Fade up (default) |
| `ease-stagger--down` | Fade down |
| `ease-stagger--left` | Fade from right |
| `ease-stagger--right` | Fade from left |
| `ease-stagger--pop` | Scale pop entrance |

## Usage

```html
<!-- Default 100ms stagger, fade up -->
<ul class="ease-stagger">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>

<!-- 50ms stagger, scale pop -->
<ul class="ease-stagger ease-stagger--50 ease-stagger--pop">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>

<!-- 200ms stagger, fade down -->
<ul class="ease-stagger ease-stagger--200 ease-stagger--down">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

## Delay Table (default 100ms)

| Child | Delay |
|---|---|
| :nth-child(1) | 0ms |
| :nth-child(2) | 100ms |
| :nth-child(3) | 200ms |
| ... | ... |
| :nth-child(10) | 900ms |

## Accessibility

Respects `prefers-reduced-motion` — all stagger animations fall
back to a simple opacity fade with no transform.
