# Context-Aware Motion

## Overview

Context-Aware Motion is a semantic EaseMotion feature that automatically adapts motion to the type and role of an element. Instead of picking fade, slide, or scale, developers can apply a single class and let the system choose the right motion profile based on element context.

## Utilities

- `.ease-contextual`
- `.ease-contextual-subtle`
- `.ease-contextual-balanced`
- `.ease-contextual-expressive`

## How to use it

Add one contextual utility to an element. The system will choose motion patterns appropriate to buttons, cards, modals, alerts, forms, navigation, and tooltips.

```html
<button class="ease-contextual">Save</button>
<div class="card ease-card ease-contextual-balanced">...</div>
<div class="modal ease-contextual-expressive">...</div>
```

## Supported components

- Buttons and action controls
- Cards and content surfaces
- Modals and dialogs
- Alerts and notices
- Form sections and field groups
- Navigation items
- Tooltips and transient UI

## Variants

- `.ease-contextual-subtle` — shortest duration, smallest movement, low intensity
- `.ease-contextual` — default balanced contextual motion
- `.ease-contextual-balanced` — explicit balanced behavior
- `.ease-contextual-expressive` — stronger personality, more pronounced motion

## Accessibility

This feature respects `prefers-reduced-motion: reduce` by disabling animations while preserving visibility and structure.

## Best Practices

- Use `.ease-contextual` for most interface elements.
- Use `.ease-contextual-subtle` for enterprise UIs and low-motion sections.
- Use `.ease-contextual-expressive` for marketing and attention-focused elements.
- Keep markup semantic and let the stylesheet decide the motion.

## Demo

Open `demo.html` directly in a browser to preview buttons, cards, modals, alerts, forms, navigation, and tooltips under subtle, balanced, and expressive variants.
