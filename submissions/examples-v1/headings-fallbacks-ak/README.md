Headings Fallbacks AK

What does this do?

Demonstrates CSS fallback strategies for heading font sizes, weights, and line heights using custom properties with hardcoded fallbacks.

---

How is it used?

h1 {
  font-size: var(--h1-size, 2rem);
  font-weight: var(--h1-weight, 700);
}

Set heading-level custom properties with fallbacks for broader browser support.

---

Why is it useful?

Ensures heading typography degrades gracefully in environments where CSS custom properties or newer font sizing units are unsupported.

Features

- Custom property fallbacks per heading level
- Fluid type size with clamp fallback
- Font weight fallback chain
- Line-height fallback values
- Heading margin fallback strategy
- Progressive enhancement approach
- Consistent visual hierarchy
