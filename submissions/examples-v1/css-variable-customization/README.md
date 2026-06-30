# EaseMotion Animation Playground

A comprehensive demonstration of CSS Variable Support for EaseMotion animations.

This example showcases how animation duration, delay, and easing can be customized globally or per component using CSS Custom Properties without modifying animation definitions.

---

## Motivation

EaseMotion currently provides predefined animation behaviors that work well for common use cases. However, many projects require centralized control over animation timing and motion patterns.

CSS Variables provide a scalable solution by allowing animation behavior to be configured globally while still supporting component-level customization.

Benefits include:

- Consistent animation behavior across an application
- Easy theme customization
- Reduced maintenance overhead
- Better design system integration
- Improved accessibility workflows

---

## Project Structure

```text
submissions/examples/animation-playground/
├── demo.html
├── style.css
└── README.md
```

---

## Default Variables

The playground uses the following CSS custom properties:

```css
:root {
  --easemotion-duration: 500ms;
  --easemotion-delay: 100ms;
  --easemotion-easing: ease-in-out;
}
```

These variables control animation timing globally.

---

## Supported Variables

| Variable              | Description        | Default     |
| --------------------- | ------------------ | ----------- |
| --easemotion-duration | Animation duration | 500ms       |
| --easemotion-delay    | Animation delay    | 100ms       |
| --easemotion-easing   | Timing function    | ease-in-out |

---

## Global Configuration

Animation behavior can be configured globally:

```css
:root {
  --easemotion-duration: 800ms;
  --easemotion-delay: 200ms;
  --easemotion-easing: ease;
}
```

All EaseMotion animations automatically inherit these values.

---

## Component-Level Overrides

Individual components can override global values.

Example:

```css
.hero-card {
  --easemotion-duration: 1200ms;
}
```

```html
<div class="hero-card em-fade-in">Hero Content</div>
```

The animation duration for this component becomes 1200ms while all other elements continue using global settings.

---

## Animation Examples

### Fade In

```html
<div class="em-fade-in">Fade In Example</div>
```

### Fade Out

```html
<div class="em-fade-out">Fade Out Example</div>
```

### Slide Up

```html
<div class="em-slide-up">Slide Up Example</div>
```

### Slide Down

```html
<div class="em-slide-down">Slide Down Example</div>
```

### Slide Left

```html
<div class="em-slide-left">Slide Left Example</div>
```

### Slide Right

```html
<div class="em-slide-right">Slide Right Example</div>
```

### Zoom In

```html
<div class="em-zoom-in">Zoom In Example</div>
```

### Zoom Out

```html
<div class="em-zoom-out">Zoom Out Example</div>
```

### Bounce

```html
<div class="em-bounce">Bounce Example</div>
```

### Shake

```html
<div class="em-shake">Shake Example</div>
```

### Pulse

```html
<div class="em-pulse">Pulse Example</div>
```

### Spin

```html
<div class="em-spin">Spin Example</div>
```

### Flip

```html
<div class="em-flip">Flip Example</div>
```

---

## Duration Examples

### Fast

```css
.fast-demo {
  --easemotion-duration: 200ms;
}
```

### Normal

```css
.normal-demo {
  --easemotion-duration: 500ms;
}
```

### Slow

```css
.slow-demo {
  --easemotion-duration: 1500ms;
}
```

### Extra Slow

```css
.extra-slow-demo {
  --easemotion-duration: 2000ms;
}
```

---

## Delay Examples

### No Delay

```css
.no-delay {
  --easemotion-delay: 0ms;
}
```

### Small Delay

```css
.small-delay {
  --easemotion-delay: 100ms;
}
```

### Medium Delay

```css
.medium-delay {
  --easemotion-delay: 300ms;
}
```

### Large Delay

```css
.large-delay {
  --easemotion-delay: 600ms;
}
```

---

## Easing Examples

### Ease

```css
.ease-demo {
  --easemotion-easing: ease;
}
```

### Ease In

```css
.ease-in-demo {
  --easemotion-easing: ease-in;
}
```

### Ease Out

```css
.ease-out-demo {
  --easemotion-easing: ease-out;
}
```

### Ease In Out

```css
.ease-in-out-demo {
  --easemotion-easing: ease-in-out;
}
```

### Bounce Curve

```css
.bounce-demo {
  --easemotion-easing: cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

### Spring Curve

```css
.spring-demo {
  --easemotion-easing: cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
```

---

## Combining Variables

Variables can be combined to create unique motion patterns.

```css
.custom-card {
  --easemotion-duration: 1800ms;
  --easemotion-delay: 400ms;
  --easemotion-easing: ease-out;
}
```

---

## Interactive Playground

The demo includes a playground section that demonstrates:

- Duration customization
- Delay customization
- Easing customization
- Variable combinations
- Animation previews

This allows developers to experiment with values before integrating them into applications.

---

## Accessibility

EaseMotion respects the user's reduced motion preferences.

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
  }
}
```

This helps reduce excessive motion for users who prefer minimal animations.

---

## Browser Support

| Browser | Support |
| ------- | ------- |
| Chrome  | ✅      |
| Edge    | ✅      |
| Firefox | ✅      |
| Safari  | ✅      |
| Opera   | ✅      |

CSS Variables are supported in all modern browsers.

---

## Best Practices

### Use Global Variables

Prefer configuring variables globally whenever possible.

```css
:root {
  --easemotion-duration: 600ms;
}
```

### Override Only When Necessary

Use component-level overrides sparingly.

```css
.special-banner {
  --easemotion-duration: 1200ms;
}
```

### Maintain Consistency

Try to keep duration values consistent throughout a project.

Recommended ranges:

| Type              | Duration   |
| ----------------- | ---------- |
| Fast interactions | 150–300ms  |
| Standard UI       | 300–600ms  |
| Large transitions | 800–1500ms |

### Consider Accessibility

Always test animations with reduced motion enabled.

---

## Troubleshooting

### Animation Not Running

Verify that the animation class is applied correctly.

```html
<div class="em-fade-in"></div>
```

### Variable Not Updating

Check that the variable name matches exactly.

```css
--easemotion-duration
```

Incorrect:

```css
--ease-duration
```

### Delay Not Applied

Confirm that:

```css
--easemotion-delay
```

is defined on the element or inherited from a parent.

### Unexpected Motion

Check for component-level overrides that may be replacing global values.

---

## Future Enhancements

Potential improvements include:

- Direction variables
- Staggered animations
- Motion presets
- Theme-specific animation tokens
- Runtime animation controls

---

## Summary

This playground demonstrates how EaseMotion animations can be controlled using CSS custom properties.

By exposing duration, delay, and easing through variables, developers gain greater flexibility while preserving a clean and maintainable API.
