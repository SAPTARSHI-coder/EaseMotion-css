# Import Layer Bug Demonstration

**What does this do?**
This is a minimal demonstration component designed specifically to trigger and reproduce the bundler bug reported in Issue #9622.

**How is it used?**

```html
<div class="ease-import-demo-ai">...</div>
```

**Why is it useful?**
It provides a safe, submission-compliant way for the maintainer to verify the `@import` cascade layer bug (#9622) without requiring contributors to bypass the repository's Core Framework Protection bot.

## Reproduction Steps

1. Open `demo.html` directly in any browser — no server required.
2. Observe the `ease-import-demo-ai` component renders with the cascade layer styles applied correctly.
3. Without the fix from #9622, bundling this component would silently break the `@import` resolution in `easemotion.min.css`.

## Notes

- No changes to `core/` or `components/`
- Relates to Issue #9622
