# ease-floating-label

A floating label input component for EaseMotion CSS.

## Usage

```html
<div class="ease-floating-input">
  <input type="text" placeholder=" " id="name" />
  <label for="name">Full Name</label>
</div>
```

## Validation States

```html
<!-- Success -->
<div class="ease-floating-input ease-floating-input-success">
  <input type="email" placeholder=" " />
  <label>Email</label>
  <p class="ease-floating-hint">Looks good!</p>
</div>

<!-- Error -->
<div class="ease-floating-input ease-floating-input-error">
  <input type="password" placeholder=" " />
  <label>Password</label>
  <p class="ease-floating-hint">Too short!</p>
</div>
```

## Classes

| Class | Description |
|---|---|
| `ease-floating-input` | Base wrapper |
| `ease-floating-input-success` | Green success state |
| `ease-floating-input-error` | Red error state |
| `ease-floating-hint` | Helper/error text below input |

## Features
- Label floats on focus or when input has value
- Success and error validation states
- Works with input and textarea
- Respects prefers-reduced-motion
- Uses EaseMotion CSS design tokens