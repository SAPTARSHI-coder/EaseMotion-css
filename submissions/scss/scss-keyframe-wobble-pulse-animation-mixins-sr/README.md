# Keyframe Wobble & Pulse Animation Mixins

## Description

This submission provides two reusable SCSS mixins:

- Wobble Animation
- Pulse Animation

These mixins help create smooth micro-interactions for buttons, cards, icons, and UI components.

---

## Parameters

### wobble()

| Parameter | Default |
|-----------|---------|
| duration | 0.8s |
| timing | ease-in-out |

### pulse()

| Parameter | Default |
|-----------|---------|
| duration | 1s |
| scale | 1.05 |

---

## Usage

```scss
.button {
  @include wobble();
}

.card {
  @include pulse(1.5s, 1.1);
}
```

---

## CSS Compilation

Compile this SCSS partial into your project stylesheet using your preferred SCSS compiler.