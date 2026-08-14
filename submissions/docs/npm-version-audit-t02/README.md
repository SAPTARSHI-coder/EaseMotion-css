# npm Version Audit

## What does this do?

This documentation demo records the verified mismatch between the repository package version and the currently published npm package version for EaseMotion CSS.

## How is it used?

Open `demo.html` directly in a browser to view the package release audit summary.

```html
<section class="audit-panel">
  <div class="version-card repository">Repository package.json: 1.2.0</div>
  <div class="version-card registry">npm latest: 1.0.0</div>
</section>
```

To reproduce the registry check, run:

```bash
npm view easemotion-css name version dist-tags versions --json
```

## Why is it useful?

EaseMotion CSS promotes zero-config installation through npm and CDN usage. Keeping the documented release state aligned with the published npm package helps users install the version they expect and gives maintainers a clear audit trail for issue #40040.
