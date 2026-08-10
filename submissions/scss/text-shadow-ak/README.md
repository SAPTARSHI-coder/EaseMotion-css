# Text Shadow Mixin

A reusable SCSS mixin for applying consistent, layered text shadows across EaseMotion CSS components.

## Parameters

`ease-text-shadow($color, $x, $y, $blur)`
- `$color` — shadow color (default: `rgba(0, 0, 0, 0.4)`)
- `$x` — horizontal offset (default: `1px`)
- `$y` — vertical offset (default: `1px`)
- `$blur` — blur radius (default: `3px`)

Also includes three presets:
- `ease-text-shadow-soft($color)` — subtle shadow for body text
- `ease-text-shadow-strong($color)` — bold shadow for headings/emphasis
- `ease-text-shadow-glow($color)` — glowing shadow, useful alongside EaseMotion's entrance/hover animations

## Usage

```scss
@import 'text-shadow';

.hero-title {
  @include ease-text-shadow-strong();
}

.glow-text {
  @include ease-text-shadow-glow(rgba(99, 102, 241, 0.8));
}
```
