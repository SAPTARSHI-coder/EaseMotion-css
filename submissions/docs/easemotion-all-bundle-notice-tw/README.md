# easemotion/all.css — Legacy Bundle Notice

Documents the coverage gap between `easemotion.css` and `easemotion/all.css`, addressing #27879.

## What does this do?

Adds a clear, visual reference page explaining that `easemotion/all.css` is a legacy/partial bundle that does not always include every component shipped through the main `easemotion.css` entrypoint — and lists which newer components may be missing from it.

## How is it used?

```html
<link rel="stylesheet" href="style.css" />

<table class="bundle-table">
  <!-- rows comparing easemotion.css vs easemotion/all.css coverage -->
</table>

<div class="bundle-notice__callout">
  <!-- warns that easemotion/all.css may lag behind newer components -->
</div>
```

The `.bundle-table` and `.bundle-notice__callout` classes are demo-only presentational styles for this reference page — not proposed EaseMotion utility classes.

## Why is it useful?

Issue #27879 reported that `easemotion/all.css` is documented as a full modular bundle but is missing many components that `easemotion.css` imports (e.g. `announce-bar.css`, `avatar.css`, `breadcrumb.css`, `btn-magnetic.css`, `command-palette.css`, `compare-table.css`, `connection-status.css`).

The issue's own "Expected behavior" section proposes two acceptable fixes: either make `easemotion/all.css` match `easemotion.css`'s import surface, or **document it as a legacy/partial bundle** so users aren't misled.

Editing `easemotion/all.css` and `easemotion.css` directly would require changes inside `core/`, which is currently under the repository's temporary contribution freeze (per CONTRIBUTING.md: *"PRs modifying core files, workflows, configs, or shared framework code are temporarily restricted"*). This submission implements the second, freeze-compliant option — clear documentation — so the coverage gap is communicated to users immediately, without needing core write access. It can be superseded once core access reopens and the bundle itself is reconciled.
