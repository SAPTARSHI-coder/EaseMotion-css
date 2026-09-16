# Bugfix: Badge Variable Fallbacks

This submission resolves **Issue 5: Inconsistent Variable Fallback Implementations Across Base and Variants**.

## 🐛 The Bug
The base `.ease-badge` and `.em-badge` classes were written using CSS custom properties (e.g., `padding: 0 var(--ease-space-2)`), but entirely lacked fallback values. This meant that if a developer imported the component CSS *without* correctly importing the root theme variables (or if the theme failed to load), the badges would fail silently. They would lose their padding, background color, font size, and border-radius, essentially collapsing into unstyled spans.

## 🛠️ The Fix
Without modifying the existing library files, this submission provides a `style.css` file that patches the `@layer easemotion-components` to redeclare the base properties with robust fallback defaults.

The injected properties now look like this:
- `padding: 0 var(--ease-space-2, 0.5rem)`
- `font-size: var(--ease-text-xs, 0.75rem)`
- `background-color: var(--ease-color-primary, #6c63ff)`
- `border-radius: var(--ease-radius-full, 9999px)`
- `box-shadow: var(--ease-shadow-sm, 0 1px 2px 0 rgba(0, 0, 0, 0.05))`

By doing this, the CSS variables still take priority when they exist, but the badges now degrade gracefully to their intended design if the variables are missing.

## 📋 Verification
Open `demo.html` to see the fix in action. The HTML document intentionally wipes out the root CSS variables using `:root { --ease-space-2: initial; ... }`. You will observe that the badges still render perfectly with their 0.5rem padding, full border radius, and the default purple `#6c63ff` background color, proving the fallbacks are successfully catching the missing variables.
