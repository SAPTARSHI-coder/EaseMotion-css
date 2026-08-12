# Undefined Card Dark Token

This submission demonstrates the CSS issue where cards reference an undefined token (`--ease-color-text-dark`), and showcases the clean remediation by defining it properly.

---

## The Issue

In `components/cards.css`, cards reference `var(--ease-color-text-dark, #f8fafc)`. However, the token `--ease-color-text-dark` is never initialized in `core/variables.css`.

This causes themes attempting to override the text color in dark cards to fail, since there is no centralized root property to target.

## The Solution

To resolve this issue, the token needs to be declared inside the global stylesheet:

```css
:root {
  --ease-color-text-dark: #f8fafc;
}
```

This ensures full customizability of dark card text values across the application.

---

## Verification Steps

1. Open `demo.html` in a browser.
2. Observe the "Before" card where `var(--ease-color-text-dark)` fails to resolve custom overrides.
3. Observe the "After" card where the token has been successfully resolved and styled.
