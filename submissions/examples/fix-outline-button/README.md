# Button Outline Color Fix

## What does this do?
Fixes a reported UI inconsistency (#2647) where the "Outline" button variant used a colored text (purple) while solid variants used white.

## How is it fixed?
Introduces a standardized hover behavior for the outline variant. While the idle state retains the outline look (colored border/text for distinction), the hover state correctly transitions to a solid background with **white text**, matching the visual pattern of `ease-btn-primary`, `ease-btn-success`, etc.

```html
<!-- Fixed Variant -->
<button class="ease-btn-outline-fixed">Fixed Outline</button>
```

## Why is it useful?
Ensures a predictable and consistent user experience across the button component library. It maintains the distinct "Outline" identity in its idle state while unifying the interaction feedback (hover state) with the rest of the framework's button family.
