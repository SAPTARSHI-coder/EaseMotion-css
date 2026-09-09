# Isolation Isolate Utility

Introduces the explicit stack scoping utility token (`.ease-isolation-isolate`) under issue #15183.

## Functional Mechanics

- **The Problem:** When building independent widgets, tooltips, or popup groups, deep nested absolute elements with high `z-index` assignments often leak out and render over global navigation headers, sticky headers, or modals outside their intended template zone.
- **The Solution:** Forces strict layer containment. The `.ease-isolation-isolate` class instantiates a brand new visual stacking context root right at the boundary container element, preventing internal child layer indices from competing with the outer page environment.

## Usage Layout Structure
```html
<div class="ease-isolation-isolate">
  </div>
```

Closes #15183
