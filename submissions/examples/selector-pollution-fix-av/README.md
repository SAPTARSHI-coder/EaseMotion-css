# Global Selector Pollution Architecture

## What does this do?
Proposes a strict CSS linting architecture to enforce "CSS Selector Scoping" across the entire `submissions/examples/` directory. It completely bans the use of raw, global HTML tag selectors (such as `body`, `h1`, `p`, `a`) in favor of strict, namespaced class wrappers.

## How is it used?
Maintainers and core contributors must systematically audit all `style.css` files currently sitting inside the 10+ folders within `submissions/examples/*/`.

Currently, contributors are wildly styling global HTML tags just to make their specific demos look good in isolation:
```css
/* ❌ BAD: Destroys the global application layout */
body { padding: 50px; background: red; }
h1 { font-family: 'Comic Sans MS'; }
```

This must be strictly refactored so that all demo styles are cleanly encapsulated inside a specific wrapper class:
```css
/* ✅ GOOD: Safely scoped and sandboxed */
.ease-demo-wrapper {
  padding: 50px;
  background: white;
}
.ease-demo-wrapper h1 {
  font-family: 'Inter', sans-serif;
}
```

In `demo.html`, the entire demo must then be wrapped in `<div class="ease-demo-wrapper">`.

## Why is it useful?
Currently, the `submissions/examples/` folder suffers from catastrophic CSS pollution. If a maintainer attempts to stitch together two different submissions into a single webpage to test them side-by-side, the raw `body` and `h1` tags from Submission A will violently override and pollute the typography of Submission B. This makes the framework incredibly fragile, completely impossible to test locally, and highly frustrating for reviewers. Furthermore, if these global tag selectors accidentally slip into the main EaseMotion build, they will fatally override the native styles of whatever enterprise application installs EaseMotion. By strictly enforcing a namespaced wrapper approach via Stylelint, we guarantee that all demo code is perfectly sandboxed, preventing any cross-pollution between submissions and keeping the global DOM crystal clean.
