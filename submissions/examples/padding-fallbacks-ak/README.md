Padding Fallbacks AK

What does this do?

Demonstrates CSS padding fallback strategies using custom properties with hardcoded fallback values for broader browser support.

---

How is it used?

.card {
  padding: 16px;
  padding: var(--card-padding, 16px);
}

Define padding values with var() fallbacks for progressive enhancement.

---

Why is it useful?

Ensures spacing integrity in browsers that don't support CSS custom properties, while allowing modern theming flexibility.

Features

- Custom property padding tokens
- Per-element fallback values
- Consistent spacing scale
- Legacy browser fallback
- Easy global theming override
- Responsive padding with fallback
- Progressive enhancement pattern
