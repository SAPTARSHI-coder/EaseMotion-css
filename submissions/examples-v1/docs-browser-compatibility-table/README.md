# Documentation Update: Browser Compatibility Table

## What does this do?
Proposes an update to the root `README.md` browser compatibility table to accurately reflect when modern features like `backdrop-filter` and `aspect-ratio` were introduced, distinguishing them from the core framework's minimum requirements.

## Proposed Table Update
Maintainers, please replace the current browser compatibility table in the root `README.md` with the following:

| Browser | Core Minimum | `backdrop-filter` | `aspect-ratio` | CSS Variables | Animations | Notes |
| ------- | ------------ | ----------------- | -------------- | ------------- | ---------- | ----- |
| Chrome  | 49+          | 76+               | 88+            | 49+           | 43+        |       |
| Firefox | 31+          | 103+              | 89+            | 31+           | 16+        |       |
| Safari  | 9.1+         | 9.1+ (`-webkit-`) | 15.0+          | 9.1+          | 9.0+       |       |
| Edge    | 15+          | 79+               | 88+            | 15+           | 12+        |       |
| Opera   | 36+          | 63+               | 74+            | 36+           | 30+        |       |

> **Note on Modern Features:** While the core framework supports older browsers, visual effects like `backdrop-filter` and layout properties like `aspect-ratio` require newer browsers. Consult [caniuse.com](https://caniuse.com/) for detailed support history.

## Why is it useful?
Updating outdated compatibility information will improve developer trust and prevent confusion when using modern CSS features alongside the EaseMotion framework.

## Note for Maintainer
Since contributors cannot modify root files due to CI folder protection rules, this documentation update is submitted as an example submission. Please apply the changes directly to `README.md` when reviewing.
