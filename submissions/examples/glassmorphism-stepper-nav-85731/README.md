# Glassmorphism Stepper Nav Responsive Breakpoints Layout

## HTML Example

```html
<nav class="stepper-nav">
  <button class="step active">Account</button>
  <button class="step">Profile</button>
  <button class="step">Verification</button>
  <button class="step">Complete</button>
</nav>
```

## CSS Custom Properties

```css
:root {
  --glass-bg: rgba(255,255,255,0.1);
  --glass-border: rgba(255,255,255,0.2);
  --accent-color: #4f8cff;
}
```

## Modifier Classes

### Compact

```css
.stepper-nav.compact .step {
  padding: 0.5rem;
}
```

## Responsive Breakpoints

```css
@media (max-width: 768px) {
  .stepper-nav {
    flex-direction: column;
  }
}
```

## Accessibility

- Use semantic navigation landmarks.
- Maintain visible keyboard focus states.
- Ensure sufficient contrast ratios.
- Support screen readers with descriptive labels.

## Keyboard Navigation

- `Tab` moves between steps.
- `Shift + Tab` moves backward.
- `Enter` or `Space` activates a step.