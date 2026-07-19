# Skeleton Loading States Utility

An isolated styling package that introduces fluid, animated skeleton primitives (`.ease-loading-skeleton`) to construct responsive context placeholder cards while hydrating dynamic application blocks.

## Functional Controls
- **Hardware Shimmer Repaints:** Animates the `background-position` property across an extended 400% gradient strip to leverage hardware compositing directly.
- **Interaction Defenses:** Enforces standard safety flags (`pointer-events: none` and `user-select: none`) to prevent interaction with empty template fields during active load cycles.
- **Inherited Adaptability:** Scales dynamically based on parent height and width definitions, allowing developers to convert standard layout frames into wireframe skeletons by appending a single class.

## Usage Layout Structure
```html

<div class="user-avatar ease-loading-skeleton"></div>


<p class="text-line ease-loading-skeleton" style="width: 75%;"></p>
```

Closes #13478
