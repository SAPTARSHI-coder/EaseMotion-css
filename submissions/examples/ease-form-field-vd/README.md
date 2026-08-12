# Ease Form Field

## What does this do?

A reusable form field wrapper containing a label, input area, helper text, focus state, and error state.

## How is it used?

Open `demo.html` directly in any modern browser.

Example:

```html
<div class="form-field">

    <label for="email">Email address</label>

    <input
        id="email"
        type="email"
        placeholder="you@example.com"
    >

    <p class="helper-text">
        We'll use this email for account notifications.
    </p>

</div>
```

### Error state

Add the `error` class to the form field:

```html
<div class="form-field error">
    <label for="username">Username</label>

    <input
        id="username"
        type="text"
        aria-invalid="true"
    >

    <p class="helper-text">
        This username is already taken.
    </p>
</div>
```

### Features

- Label
- Input area
- Helper text
- Focus state
- Error state
- Hover interaction
- Responsive layout
- Pure CSS
- No JavaScript required

## Why is it useful?

Form fields are used throughout registration forms, login pages, settings panels, checkout interfaces, and other applications.

This component provides a consistent and reusable form field pattern with subtle interaction feedback while following the animation-first philosophy of EaseMotion CSS.