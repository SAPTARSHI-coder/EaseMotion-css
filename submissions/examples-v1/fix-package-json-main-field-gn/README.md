# Fix: package.json "main" Field Points to a CSS File (#2774)

> ⚠️ **For Maintainer:** This fix requires editing `package.json`, a project configuration file which contributors cannot modify directly. This submission documents the proposed patch for review.

1. **What's the bug?** `package.json` line 5 sets `"main": "easemotion.css"`. The `"main"` field is reserved for a Node module's primary **JavaScript** entry point. If a developer runs `require('easemotion-css')` or `import 'easemotion-css'` in a standard Node/JS environment, Node attempts to execute `easemotion.css` as JavaScript, throwing a `SyntaxError` on the first CSS rule.
2. **Proposed fix:** Remove (or replace) `"main"` and add a modern `"exports"` field, while keeping the existing `"style": "easemotion.css"` (which is the correct, framework-standard way — used by Webpack, Vite, etc. — to declare a stylesheet entry point):
```diff
{
  "name": "easemotion-css",
  "version": "1.0.0",
-  "main": "easemotion.css",
   "style": "easemotion.css",
+  "exports": {
+    ".": "./easemotion.css",
+    "./easemotion.css": "./easemotion.css",
+    "./easemotion.min.css": "./easemotion.min.css"
+  },
  ...
}
```
3. **How is it tested?** `demo.html` illustrates the failure mode (`require('easemotion-css')` → `SyntaxError`) and the fixed behavior (CSS imports resolve via `"style"`/`"exports"`, while a bare `import 'easemotion-css'` no longer crashes Node by trying to execute CSS as JS).
4. **Why is this correct?** Per npm/Node module resolution conventions, `"main"` must point to JavaScript; `"style"` (a de facto standard supported by major bundlers) and the standardized `"exports"` field are the correct ways to expose a CSS-only package's stylesheet, without breaking plain Node `require`/`import` of the package itself.