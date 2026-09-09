# Basic Model Version Row

## What it does

This submission adds a CSS-only model version row for AI dashboards, release
management tools, evaluation screens, and product admin panels.

It shows a model version marker, model name, helper text, latency, rollout
percentage, and lifecycle state in a compact reusable row.

## How to use it

Add the base row class with a version mark, copy area, metric pills, and a
state pill:

```html
<article class="basic-model-version-row">
  <span class="version-mark is-stable" aria-hidden="true">v4</span>
  <div class="version-copy">
    <strong>summarizer-core-4.2</strong>
    <p>Stable production model serving all default workspaces.</p>
  </div>
  <span class="version-metric">128 ms</span>
  <span class="version-rollout">100%</span>
  <span class="version-state is-stable">Stable</span>
</article>
```

## Why it fits EaseMotion CSS

It fits EaseMotion CSS because it is human-readable, composable, and useful for
modern AI product interfaces. Developers can reuse the same row pattern in
deployment dashboards, model comparison panels, admin tools, and release
tracking pages without JavaScript or external dependencies.

## Included features

- Stable, canary, and legacy model examples
- Version marker badges
- Latency and rollout metadata pills
- Lifecycle state styling
- Long text truncation for compact dashboards
- Subtle hover slide and side accent
- Responsive wrapping on smaller screens
- Pure HTML and CSS implementation

## Files

- `demo.html` - self-contained browser demo
- `style.css` - raw CSS for the model version row
- `README.md` - usage and contribution context
