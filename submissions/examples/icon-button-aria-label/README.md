# Icon Button Aria Labels

## Overview

Icon-only buttons need accessible labels for screen readers. This example demonstrates how to properly add `aria-label` attributes to icon buttons for accessibility.

## Problem

Icon buttons without accessible labels are problematic for:
- Screen reader users who cannot see the icon
- Users who don't recognize the icon meaning
- Accessibility compliance (WCAG guidelines)

## Solution

Add descriptive `aria-label` to every icon-only button:

```html
<button class="ease-btn ease-btn-icon" aria-label="Close menu">
  <svg>...</svg>
</button>
```

## Common Patterns

| Icon | aria-label |
|------|------------|
| X | "Close" or "Close dialog" |
| + | "Add" or "Add new item" |
| ⚙️ | "Settings" |
| 🔍 | "Search" |
| 🗑️ | "Delete" or "Delete item" |
| ✏️ | "Edit" |
| ❤️ | "Like" or "Like this post" |
| 📤 | "Share" or "Share this content" |

## Best Practices

1. **Always add aria-label** to icon-only buttons
2. **Use descriptive labels** that explain the action
3. **Be specific** when needed (e.g., "Delete post" vs "Delete")
4. **Test with screen readers** (NVDA, VoiceOver, JAWS)
5. **Don't use title alone** - it's not reliably announced
6. **Consider aria-pressed** for toggle buttons

## CSS for Icon Buttons

```css
.ease-btn-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  padding: 0;
}

.ease-btn-icon:focus {
  outline: 2px solid var(--ease-color-primary);
  outline-offset: 2px;
}
```

## Files

- `demo.html` - Interactive demonstration
- `style.css` - Component styling
- `README.md` - This documentation
