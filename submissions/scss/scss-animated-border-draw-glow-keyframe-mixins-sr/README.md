# Animated Border Draw & Glow Keyframe Mixins (SR)

Reusable SCSS mixins for creating animated border draw and glow effects.

---

## Features

- Reusable border draw animation
- Reusable glow animation
- Custom animation names
- Configurable duration
- Configurable colors
- Adjustable border width
- Adjustable border radius

---

## Files

```
_animated-border-draw-glow-keyframe-mixins-sr.scss
README.md
```

---

## Usage

Import the partial.

```scss
@use "animated-border-draw-glow-keyframe-mixins-sr" as border;
```

Generate keyframes.

```scss
@include border.border-draw-keyframes();
@include border.border-glow-keyframes();
```

Apply mixins.

```scss
.button{

@include border.animated-border-draw(
  $color:#06b6d4,
  $duration:2s
);

@include border.animated-border-glow(
  $color:#06b6d4
);

}
```

---

# Parameters

## border-draw-keyframes

| Parameter | Default |
|-----------|---------|
| $name | border-draw-sr |

---

## border-glow-keyframes

| Parameter | Default |
|-----------|---------|
| $name | border-glow-sr |

---

## animated-border-draw

| Parameter | Default |
|-----------|---------|
| $color | #4f46e5 |
| $width | 2px |
| $duration | 1.6s |
| $timing | ease |
| $iteration | infinite |
| $animation | border-draw-sr |

---

## animated-border-glow

| Parameter | Default |
|-----------|---------|
| $color | #4f46e5 |
| $radius | 12px |
| $duration | 2s |
| $timing | ease-in-out |
| $iteration | infinite |
| $animation | border-glow-sr |

---

# CSS Compilation Result

Compiles into:

- @keyframes border-draw-sr
- @keyframes border-glow-sr
- Standard CSS animations
- Standard CSS gradients
- Standard CSS box-shadow glow
- No JavaScript dependency

---

# Browser Support

Works in all modern browsers supporting:

- CSS Animations
- Linear Gradients
- Box Shadow