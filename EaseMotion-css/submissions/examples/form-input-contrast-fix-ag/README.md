# [BUG FIX] .ease-form-input placeholder text color WCAG contrast ratio

## What does this do?
Improves .ease-form-input placeholder text color contrast to meet WCAG AA contrast ratio of 4.5:1 on light backgrounds.

## How is it used?
```html
input::placeholder { color: #767676; }
```

## Why is it useful?
Ensures accessibility and WCAG AA compliance across form input controls.

## Fixes
Fixes #9853
