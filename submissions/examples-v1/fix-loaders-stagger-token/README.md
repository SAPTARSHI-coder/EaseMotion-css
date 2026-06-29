# Fix: Expose --ease-loader-stagger Token for Dot Loader

## Problem

The staggered dots loader hardcoded `animation-delay` values with no CSS custom property:

```css
.ease-loader-dot:nth-child(2) { animation-delay: 0.2s; }
.ease-loader-dot:nth-child(3) { animation-delay: 0.4s; }
```

Users who wanted different stagger timing had to override these selectors directly.

## Solution

Expose `--ease-loader-stagger` on `.ease-loader-dots` and use it for delay calculations:

```css
.ease-loader-dots {
  --ease-loader-stagger: 0.2s;
}

.ease-loader-dot:nth-child(2) {
  animation-delay: var(--ease-loader-stagger, 0.2s);
}

.ease-loader-dot:nth-child(3) {
  animation-delay: calc(var(--ease-loader-stagger, 0.2s) * 2);
}
```

## Usage

```html
<!-- Default stagger -->
<div class="ease-loader-dots">
  <div class="ease-loader-dot"></div>
  <div class="ease-loader-dot"></div>
  <div class="ease-loader-dot"></div>
</div>

<!-- Fast stagger -->
<div class="ease-loader-dots" style="--ease-loader-stagger: 0.1s;">
  <div class="ease-loader-dot"></div>
  <div class="ease-loader-dot"></div>
  <div class="ease-loader-dot"></div>
</div>
```

## Why it fits EaseMotion CSS

EaseMotion CSS exposes key values as CSS custom properties for customisation without specificity battles. The dot loader stagger is a key animation parameter that should follow the same token-driven approach as `--ease-loader-size`.

Fixes #10426
