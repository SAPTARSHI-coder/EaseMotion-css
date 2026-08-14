# Basic Build Artifact Row

## What it does

This submission adds a simple CSS-only build artifact row for CI/CD dashboards,
release download panels, deployment tools, and developer workflows.

It presents an artifact type icon, artifact name, helper text, file size or
progress metadata, and artifact state in one compact reusable row.

## How to use it

Add the base row class with an artifact icon, copy area, size label, and state
pill:

```html
<article class="basic-build-artifact-row">
  <span class="artifact-icon is-ready" aria-hidden="true">ZIP</span>
  <div class="artifact-copy">
    <strong>frontend-dist.zip</strong>
    <p>Production bundle generated from the latest main build.</p>
  </div>
  <span class="artifact-size">18.4 MB</span>
  <span class="artifact-state is-ready">Ready</span>
</article>
```

## Why it fits EaseMotion CSS

It fits EaseMotion CSS because it is readable, composable, and useful in common
developer and release interfaces. The row can be reused inside build pages,
download drawers, CI artifact lists, and deployment dashboards while staying
lightweight and CSS-only.

## Included features

- Ready, uploading, and expiring artifact examples
- File size and progress metadata
- Artifact state pills
- Long text truncation for artifact descriptions
- Subtle hover slide and side accent
- Responsive wrapping on smaller screens
- Pure HTML and CSS implementation

## Files

- `demo.html` - self-contained browser demo
- `style.css` - raw CSS for the build artifact row
- `README.md` - usage and contribution context
