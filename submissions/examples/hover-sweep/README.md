# Hover Sweep Background

A pure CSS hover animation where the entire background sweeps across the element instead of using a shimmer effect.

## Features

- Full background replacement on hover
- Four sweep directions:
  - Left
  - Right
  - Top
  - Bottom
- Uses CSS variables for customization
- Pure CSS (no JavaScript)

## CSS Variables

```css
--ease-sweep-from
--ease-sweep-to
```

## Usage

```html
<button class="sweep-btn sweep-left">Sweep Left</button>

<button class="sweep-btn sweep-right">Sweep Right</button>

<button class="sweep-btn sweep-top">Sweep Top</button>

<button class="sweep-btn sweep-bottom">Sweep Bottom</button>
```

## Customization

```css
:root {
  --ease-sweep-from: #06b6d4;
  --ease-sweep-to: #2563eb;
}
```

## Browser Support

- Chrome ✅
- Firefox ✅
- Safari ✅
- Edge ✅

Built for EaseMotion CSS submissions.
