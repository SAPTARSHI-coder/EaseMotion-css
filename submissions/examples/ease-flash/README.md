# ease-flash

Rapid visibility flicker animation that mimics a camera flash or warning strobe.

## Features

- Opacity sequence: `1 → 0 → 1 → 0 → 1`
- Fast animation (`0.8s`)
- One-shot by default
- Customizable repetition count with `--ease-flash-count`
- Suitable for alerts and notifications

## Usage

```html
<div class="ease-flash">Alert Message</div>
```

## Customization

```css
:root {
  --ease-flash-count: 3;
}
```

The above repeats the flash cycle three times.

## Animation Timeline

```text
0%    opacity: 1
25%   opacity: 0
50%   opacity: 1
75%   opacity: 0
100%  opacity: 1
```
