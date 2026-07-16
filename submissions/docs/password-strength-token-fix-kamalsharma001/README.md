# Fix: Password Strength Design Tokens

## 1. What does this do?

Shows that the password-strength component ignores user theme overrides because it uses hardcoded colors instead of CSS variables.

---

## 2. Proposed Fix

```diff
- background:#ef4444;
+ background:var(--ease-color-danger,#ef4444);

- background:#f59e0b;
+ background:var(--ease-color-warning,#f59e0b);

- background:#10b981;
+ background:var(--ease-color-success,#10b981);
```

Apply the same change to the password strength text colors.

---

## 3. Why is it useful?

Restores proper theming support while keeping the existing colors as fallbacks for users who haven't customized the design tokens.