# Bugfix: Badge Pulse Glow Override

This submission resolves **Issue 2: Compound Class Color Overrides Fail When Mixing Legacy and New Classes**.

## 🐛 The Bug
When combining modern badge classes with legacy pulse classes (e.g., `.ease-badge-danger` with `.em-badge-pulse`), the pulse ring color failed to update to the variant color (danger/success). This caused the ring to fall back to the default primary color because the core CSS only provided selectors for strict pairings (`.ease-badge-danger.ease-badge-pulse` or `.em-badge-danger.em-badge-pulse`), but not cross-combinations.

## 🛠️ The Fix
Without modifying the existing `easemotion.css` or `badges.css` files, this submission provides a `style.css` file that injects the missing CSS selectors into the `@layer easemotion-components`. 

The injected selectors explicitly cover the cross-combinations:
- `.ease-badge-danger.em-badge-pulse`
- `.em-badge-danger.ease-badge-pulse`
- `.ease-badge-success.em-badge-pulse`
- `.em-badge-success.ease-badge-pulse`

## 📋 Verification
Open `demo.html` to see the fix in action. It provides examples of all four mixed-class combinations, verifying that the pulse glow colors accurately reflect their respective variants (red for danger, green for success) regardless of whether the legacy or modern prefix was used for the pulse class.
