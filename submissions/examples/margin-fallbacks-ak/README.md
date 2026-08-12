Margin Fallbacks AK

What does this do?

Demonstrates CSS margin fallback strategies using custom properties with hardcoded fallback values for consistent spacing.

---

How is it used?

.section {
  margin-block: 32px;
  margin-block: var(--section-margin, 32px);
}

Use logical properties with var() fallbacks for progressive enhancement.

---

Why is it useful?

Ensures vertical and horizontal margin spacing works across browsers with varying levels of logical property and custom property support.

Features

- Logical margin properties with fallback
- Custom property based spacing tokens
- Per-component margin defaults
- Legacy browser fallback values
- Consistent vertical rhythm
- Easy global spacing override
- Progressive enhancement pattern
