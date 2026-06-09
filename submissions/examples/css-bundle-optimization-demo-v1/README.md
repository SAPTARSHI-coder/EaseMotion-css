# CSS Bundle Optimization Demo

## What does this do?

Demonstrates how reusable CSS variables and centralized animation tokens can reduce repetitive declarations and improve maintainability in a growing CSS framework.

---

## How is it used?

Instead of repeating transition values across multiple components:

```css
.button {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.card {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
```

Use shared design tokens:

```css
:root {
  --ease-speed-medium: 0.3s;
  --ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
}

.component {
  transition: all var(--ease-speed-medium) var(--ease-standard);
}
```

---

## Why is it useful?

This approach helps frameworks remain scalable as more animations and components are added.

Benefits include:

- Reduced duplication
- Easier maintenance
- Consistent animation behavior
- Cleaner architecture
- Better preparation for future SCSS mixin adoption
- Simpler framework expansion

---

## Demonstrated Components

- Button
- Card
- Badge
- Modal Preview

All components reuse the same centralized transition tokens instead of repeating hardcoded values.

---

## Concept Demonstrated

Repeated declarations:

```css
transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
```

↓

Shared design tokens:

```css
--ease-speed-medium
--ease-standard
```

↓

More maintainable and scalable CSS architecture.
