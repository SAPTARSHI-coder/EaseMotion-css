# Animation Duration Reference Table

## Overview

This submission provides a quick reference for choosing animation
durations when building interfaces with EaseMotion CSS.

The reference groups common durations by their visual feel and
suggests appropriate use cases.

## Duration Reference

| Duration | Animation Feel | Recommended Use |
|----------|----------------|-----------------|
| 100ms | Very fast | Micro-interactions |
| 150ms | Fast | Small UI transitions |
| 200ms | Quick | Common interface changes |
| 300ms | Balanced | General UI motion |
| 400ms | Smooth | Larger UI transitions |
| 500ms | Relaxed | Prominent visual effects |
| 700ms | Slow | Large visual movement |
| 1000ms+ | Dramatic | Decorative animations |

## How to Choose a Duration

### 100–200ms — Small Interactions

Short durations are useful for small interface changes such as:

- Color changes
- Icon feedback
- Button hover states
- Small transforms
- Tooltips

Example:

```css
.button {
    transition:
        transform 150ms ease,
        background-color 150ms ease;
}