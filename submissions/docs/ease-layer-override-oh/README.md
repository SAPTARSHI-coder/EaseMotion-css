# Guide: @layer Override Playground for Custom Theming

This submission provides a documentation lab for GSSoC issue **#44492**.

## Description

An interactive playground demonstrating how to customize EaseMotion CSS components using `@layer` overrides without `!important`.

## Problem

EaseMotion CSS uses a cascade layer architecture, but beginners often resort to `!important` when trying to customize component styles. This guide proves that `@layer` overrides win without `!important`.

## EaseMotion Cascade Layers

From lowest to highest priority:
1. `@layer easemotion-utilities` (lowest)
2. `@layer easemotion-components` ⬅️ **Override here!**
3. `@layer easemotion-base` (highest)

## What's Included

### Layer Diagram
Visual representation of EaseMotion's cascade layer architecture

### Default vs Overridden Comparison
- Side-by-side comparison of unlayered CSS (fails) vs @layer override (wins)
- Live component previews

### Interactive Override Editor
- Theme selector with 4 color options (purple, teal, orange, pink)
- Live preview of button and card overrides
- Generated @layer CSS code

### Override Examples
- Button color override
- Card border override
- Badge color override
- Tab underline override

## How @layer Overrides Work

```css
/* ❌ Without @layer - FAILS, needs !important */
.custom-btn {
  background: purple; /* Won't override! */
}

/* ✅ With @layer - WINS, no !important needed */
@layer easemotion-components {
  .custom-btn {
    background: purple; /* Successfully overrides! */
  }
}
```

## Key Takeaways

| Approach | Works? | Recommended? |
|----------|--------|--------------|
| Regular CSS | ❌ No | ❌ No |
| !important | ✅ Yes | ⚠️ Last resort |
| @layer easemotion-components | ✅ Yes | ✅ Yes |

## Best Practices

- Always override inside `@layer easemotion-components`
- Avoid `!important` — use layers instead
- Keep overrides organized in a separate CSS file
- Use CSS custom properties for easy theming
- Test that overrides work after EaseMotion updates
- Group related overrides together

## Acceptance Criteria

- ✅ Live component preview with default styles
- ✅ Custom @layer override editor
- ✅ Side-by-side comparison (default vs overridden)
- ✅ Proof that @layer overrides win without !important
- ✅ Multiple override examples
- ✅ Copy-ready @layer override CSS snippets
- ✅ Educational notes on cascade layers
- ✅ Responsive and accessible design
