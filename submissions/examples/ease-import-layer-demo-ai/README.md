# Import Layer Bug Demonstration

**What does this do?**
This is a minimal demonstration component designed specifically to trigger and reproduce the bundler bug reported in Issue #9622.

**How is it used?**
```html
<div class="ease-import-demo-ai">...</div>
```

**Why is it useful?**
It provides a safe, submission-compliant way for the maintainer to verify the `@import` cascade layer bug (#9622) without requiring contributors to bypass the repository's Core Framework Protection bot.
