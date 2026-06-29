# Overscroll Behavior None Utility

Introduces the scroll boundary isolation containment token (`.ease-overscroll-none`) under issue #15189.

## Functional Mechanics

- **The Problem:** When scrolling inside an absolute overlay modal or a nested chat panel reaches its physical end limits, the remaining scroll track momentum chains directly onto the main page viewport. This causes the background content to scroll unexpectedly ("scroll chaining").
- **The Solution:** Seals boundary tracking loops. The `.ease-overscroll-none` property commands the browser engine to clip contextual momentum propagation right at the container perimeter, leaving the main viewport context fixed.

## Usage Layout Structure
```html
<div class="ease-overscroll-none" style="overflow-y: auto;">
  </div>
```

Closes #15189
