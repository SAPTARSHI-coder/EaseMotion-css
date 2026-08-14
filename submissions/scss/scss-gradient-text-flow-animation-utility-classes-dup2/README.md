# Gradient Text Flow & Animation Utility Classes

Reusable SCSS utility for creating animated gradient text with customizable colors and animation speed.

## Features

- Reusable SCSS mixins
- Animated flowing gradient text
- Custom gradient colors
- Adjustable animation duration
- Lightweight and reusable

---

## Files

```
_gradient-text-flow-animation-utility-classes.scss
```

---

## Mixins

### gradient-text

```scss
@include gradient-text($start, $end, $angle);
```

Parameters

| Parameter | Default | Description |
|----------|---------|-------------|
| $start | #6a11cb | Start color |
| $end | #2575fc | End color |
| $angle | 90deg | Gradient angle |

---

### gradient-flow

```scss
@include gradient-flow($duration);
```

Parameters

| Parameter | Default |
|----------|---------|
| $duration | 4s |
| $timing | linear |
| $iteration | infinite |

---

## Usage

```scss
.title {
    @include gradient-text(#ff6a00,#ee0979);
    @include gradient-flow(5s);
}
```

or use the utility class

```html
<h1 class="text-gradient-flow">
    EaseMotion CSS
</h1>
```

---

## CSS Compilation Result

The SCSS compiles into utility classes such as:

- `.text-gradient-flow`
- `.text-gradient-flow-slow`
- `.text-gradient-flow-fast`

These classes apply animated gradient text with smooth flowing background animation.

---

## Browser Support

- Chrome
- Firefox
- Edge
- Safari