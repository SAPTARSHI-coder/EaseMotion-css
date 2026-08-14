# Break Inside Avoid Utility

Introduces the layout fragmentation containment utility token (`.ease-break-inside-avoid`) under issue #15181.

## Functional Mechanics

- **The Problem:** When building masonry dashboards, multi-column reading frames, or print layout documentation sheets, long individual components often snap or split right in half at column boundaries or page break indices. This divides headlines from matching bodies and breaks visual order.
- **The Solution:** Locks layout components together. The `.ease-break-inside-avoid` class forces the parsing layout shaper to keep the targeted element block fully unified, pushing the entire card onto the next column panel or print row if room runs out.

## Usage Layout Structure
```html
<div class="ease-break-inside-avoid">
  </div>
```

Closes #15181
