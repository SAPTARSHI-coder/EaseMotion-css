# Fix: Rename --marquee-* Tokens to --ease-marquee-* Namespace

## Problem

`components/ease-marquee.css` used CSS custom properties without the `--ease-*` prefix:

```css
.ease-marquee {
  --marquee-speed: 20s;
  --marquee-gap: 2rem;
  --marquee-pause-on-hover: paused;
  --marquee-direction: normal;
}
```

The entire framework uses `--ease-*` prefixed tokens. Non-prefixed tokens break the naming convention and risk collision with user-defined or third-party CSS variables named `--marquee-*`.

## Solution

Rename all tokens to use the `--ease-marquee-*` prefix:

```css
.ease-marquee {
  --ease-marquee-speed: 20s;
  --ease-marquee-gap: 2rem;
  --ease-marquee-pause-on-hover: paused;
  --ease-marquee-direction: normal;
}
```

## Usage

```html
<!-- Custom speed via namespaced token -->
<div class="ease-marquee" style="--ease-marquee-speed: 5s;">
  <div class="ease-marquee-track">...</div>
</div>
```

```css
/* Global override */
:root {
  --ease-marquee-speed: 30s;
  --ease-marquee-gap: 3rem;
}
```

## Migration

If you were using `--marquee-*` tokens in your own CSS, rename them:

| Old | New |
|-----|-----|
| `--marquee-speed` | `--ease-marquee-speed` |
| `--marquee-gap` | `--ease-marquee-gap` |
| `--marquee-pause-on-hover` | `--ease-marquee-pause-on-hover` |
| `--marquee-direction` | `--ease-marquee-direction` |

## Why it fits EaseMotion CSS

EaseMotion CSS uses `--ease-*` as a namespace for all tokens to prevent collisions and maintain consistency. The marquee component should follow the same convention.

Fixes #10428
