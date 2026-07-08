# ease-validity — Issue #23963

## What

Utility classes for styling form controls based on their validation state using the `:user-invalid` and `:user-valid` pseudo-classes.

| Class | Effect |
|---|---|
| `.ease-validity-error` | Applies a red border + red box-shadow when the field is `:user-invalid` |
| `.ease-validity-success` | Applies a green border + green box-shadow when the field is `:user-valid` |

Both classes should be applied to the same element — the appropriate one activates based on the user's interaction state.

## How

Add both classes to any `<input>`, `<textarea>`, or `<select>` element with validation attributes:

```html
<input type="email" class="ease-validity-error ease-validity-success" required />
```

The `:user-invalid` pseudo-class differs from `:invalid` in that it only matches after the user has interacted with the field (e.g., tabbed through, submitted, or modified it). This prevents fields from showing an error state before the user has had a chance to fill them in.

## Why

Form validation feedback is essential for usability, but showing errors on untouched fields creates a poor first impression. The `:user-invalid` pseudo-class solves this by deferring validation styling until after user interaction. These utilities provide a ready-to-use, themeable validation appearance that works consistently across modern browsers, reducing the need for custom JavaScript validation styling.
