# CSS Container Query Animation Adapters (ease-container-viidhii19)

## What does this do?
It provides context-aware animation adapters using CSS Container Queries (`@container`), allowing components to automatically switch from wide, translational entrance animations (like sliding) to simple fades when placed inside constrained or narrow containers (e.g., sidebars).

## How is it used?
Wrap the element you want to animate in a container element with the `.ease-container-wrapper` class, and then apply the `.ease-adaptive-slide-viidhii19` animation class to the element itself.

```html
<div class="ease-container-wrapper">
  <div class="ease-adaptive-slide-viidhii19">
    <!-- Component content goes here -->
  </div>
</div>
```

## Why is it useful?
In modular component-based architectures, standard viewport-based `@media` queries often fail because a component doesn't know its immediate context. An animation might look great on a full-width hero section but cause horizontal overflow or layout breakage in a narrow sidebar. 

By shifting from viewport-based media queries to component-level `@container` queries, animations can intelligently adapt their motion profile based on their parent container's inline size. This ensures graceful degradation (e.g., a simple fade) in restricted horizontal spaces while preserving more dynamic motion (e.g., sliding) when adequate space is available, keeping your layouts unbreakable across all scenarios.
