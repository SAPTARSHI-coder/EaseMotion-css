# Animation Durations

Animation duration controls how long an animation takes to complete.

Choosing the right duration helps create interfaces that feel responsive without making interactions feel rushed or unnecessarily slow.

## Quick Reference

| Duration | Category | Recommended Use |
|---|---|---|
| 100ms | Very Fast | Small UI feedback and micro-interactions |
| 150ms | Fast | Buttons, hover effects, and subtle state changes |
| 200ms | Short | Common UI transitions |
| 300ms | Medium | Cards, panels, and standard entrance animations |
| 500ms | Long | Noticeable entrance and exit animations |
| 700ms | Very Long | Large visual transitions |
| 1000ms+ | Extended | Decorative or storytelling animations |

## Duration Guidelines

### 100ms — Very Fast

Best for tiny visual changes where the user needs immediate feedback.

**Recommended for:**

- Small hover feedback
- Icon state changes
- Micro-interactions

```css
transition-duration: 100ms;