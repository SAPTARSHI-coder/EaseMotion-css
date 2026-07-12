# Clean Code Examples for Documentation

## What does this do?
Demonstrates properly formatted documentation code blocks without stray text artifacts, matching the intended fix for the docs site.

## How is it used?
```html
<!-- Staggered entrance sequence -->
<div class="ease-slide-up ease-delay-100">First</div>
<div class="ease-slide-up ease-delay-200">Second</div>
<div class="ease-slide-up ease-delay-300">Third</div>
```

```html
<div class="ease-padding-6 ease-margin-4"> ... </div>
<div class="ease-px-8 ease-py-4"> ... </div>
```

## Why is it useful?
The documentation at `docs/index.html` had stray literal "main" text appearing inside code blocks at two locations (Spacing section and Delay Helpers section - issue #32150). This text rendered as visible content, breaking code examples and confusing readers. This submission shows how the code blocks should look when properly cleaned.
