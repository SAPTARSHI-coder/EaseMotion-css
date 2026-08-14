# EaseMotion Motion Engine — Build-Time Optimizer Guide (`motion-engine-optimizer-guide-ik`)

An architecture documentation showcase detailing build-time HTML + CSS tree-shaking and `@keyframes` pruning powered by `easemotion/engine/optimizer.js`.

Submitted by: **@Ishita-Katiyar-06** (`-ik`)

---

## 1. What does this do?

Documents the build-time optimization pipeline (`optimizeHtml`, `pruneKeyframes`, `pruneClasses`, `extractEmAttributes`) that scans HTML files for `em="..."` attributes and `ease-*` class names to strip unused `@keyframes` from the production CSS bundle.

---

## 2. How is it used?

Invoke the optimizer API in Node.js build scripts:

```js
import { optimizeHtml } from 'easemotion-css/engine/optimizer';

const { css, stats } = await optimizeHtml(htmlString, fullCssBundle);

console.log(`Original: ${stats.originalBytes}B -> Optimized: ${stats.optimizedBytes}B (${stats.savings} saved)`);
```

---

## 3. Why does it fit EaseMotion CSS?

EaseMotion CSS provides zero-config motion engine capabilities (`em="..."`). By combining runtime CSS injection with build-time tree-shaking via `optimizer.js`, projects achieve zero-bloat CSS bundles in production environments.
