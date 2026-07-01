# Avatar Fallback Initials

Circular avatar with initials fallback. Hover reveals the full name via `attr()` on a pseudo-element.

## Features

- Initials displayed inside a colored circle
- Full name shown on hover via `::after` pseudo-element using `attr(data-afi-name)`
- Customizable size via `--afi-size` and color via `--afi-color`
- Smooth scale and shadow transition on hover
- Pure CSS, no JS required

## Usage

```html
<div class="afi-avatar" data-afi-name="John Doe" style="--afi-color: #6366f1; --afi-size: 56px;">
  <span class="afi-initials">JD</span>
</div>
```

Set `data-afi-name` on `.afi-avatar` for the pseudo-element tooltip. The initials in the span are the visible fallback.

## Variables

| Variable         | Default   | Description              |
|------------------|-----------|--------------------------|
| `--afi-color`    | `#6366f1` | Avatar background color  |
| `--afi-size`     | `56px`    | Avatar width & height    |
| `--afi-duration` | `0.3s`    | Hover transition duration|
| `--afi-ease`     | `cubic-bezier(…)` | Transition easing  |
