Stack Fallbacks AK

What does this do?

Demonstrates CSS stacking layout fallback strategies when using modern vertical rhythm properties like CSS `gap` in flex column layouts.

---

How is it used?

.stack {
  display: flex;
  flex-direction: column;
  gap: var(--stack-gap, 16px);
}
.stack > * + * {
  margin-top: var(--stack-gap, 16px);
}

Use the lobotomized owl selector as a fallback for browsers that don't support flex gap.

---

Why is it useful?

Ensures consistent vertical spacing in stacked layouts across all browsers, with progressive enhancement from margin-based to gap-based spacing.

Features

- Flex column stack layout
- Gap property with owl selector fallback
- Custom property spacing token
- Nested stack support
- Responsive spacing
- Consistent vertical rhythm
- Progressive enhancement approach
