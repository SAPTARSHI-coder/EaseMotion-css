# Fix: Duplicate dark color tokens

## 1. What does this do?

Demonstrates the bug where the `--ease-color-success-dark`,
`--ease-color-danger-dark`, and `--ease-color-warning-dark`
tokens are identical to their base colors, and shows the corrected
values side by side.

---

## 2. Proposed fix

```diff
- --ease-color-success-dark: #15803d;
+ --ease-color-success-dark: #14532d;

- --ease-color-danger-dark: #b91c1c;
+ --ease-color-danger-dark: #7f1d1d;

- --ease-color-warning-dark: #b45309;
+ --ease-color-warning-dark: #78350f;
```

---

## 3. Why is it useful?

Components using the `-dark` variants currently render exactly the same
as the base colors. Updating these tokens restores the intended darker
state and keeps the design token system consistent with the existing
`primary-dark` and `secondary-dark` tokens.