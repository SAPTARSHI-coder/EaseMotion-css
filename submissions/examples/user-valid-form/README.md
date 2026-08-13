# :user-valid / :user-invalid Form

## What does this do?

Uses the CSS `:user-valid` and `:user-invalid` pseudo-classes to show form validation feedback only after the user has interacted with each field — avoiding the common problem of red error borders appearing on untouched fields at page load.

## How is it used?

```css
input:user-valid {
  border-color: green;
}

input:user-invalid {
  border-color: red;
  animation: shake 0.3s ease;
}
```

## Why is it useful?

Regular `:valid`/`:invalid` fire immediately on page load, which means required empty fields show red before the user has done anything — a poor UX pattern. `:user-valid`/`:user-invalid` only activate after the user has typed, blurred, or submitted, making validation feedback timely and non-intrusive. This improves form UX without any JavaScript, fitting EaseMotion CSS's philosophy of smart, human-readable CSS.
