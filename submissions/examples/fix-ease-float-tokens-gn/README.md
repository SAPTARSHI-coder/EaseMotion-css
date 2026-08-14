# Fix: .ease-float Hardcodes Duration/Easing (#5757)

> ⚠️ **For Maintainer:** This fix requires editing `core/animations.css` (line 683), which contributors cannot modify directly. This submission documents the proposed patch for review.

1. **What's the bug?** `.ease-float` (line 682-684 in `core/animations.css`) hardcodes `animation: ease-float 3s ease-in-out infinite;`, ignoring the framework's `--ease-speed-*` and `--ease-ease-*` design tokens. Sibling classes like `.ease-bounce` (line 903) correctly use `var(--ease-animation-iterations, infinite)`.
2. **Proposed fix:**
```diff
.ease-float {
-  animation: ease-float 3s ease-in-out infinite;
+  animation: ease-float
+    var(--ease-speed-slow, 3s)
+    var(--ease-ease, ease-in-out)
+    var(--ease-animation-iterations, infinite);
}
```
3. **How is it tested?** `demo.html` shows three floating boxes: the current hardcoded behavior, the token-driven default (visually identical — `--ease-speed-slow` defaults to `3s` and `--ease-ease` to `ease-in-out`), and a third box overriding `--ease-speed-slow: 1s` to prove the animation now responds to design tokens.
4. **Why is this correct?** Using `var(--ease-speed-slow, 3s)`, `var(--ease-ease, ease-in-out)`, and `var(--ease-animation-iterations, infinite)` preserves the exact current default behavior (identical fallback values) while making `.ease-float` themeable and consistent with `.ease-bounce`, `.ease-rotate`, `.ease-pulse`, and other looping animation utilities.