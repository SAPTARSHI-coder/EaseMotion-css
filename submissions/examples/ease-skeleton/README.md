# ease-skeleton

## What does this do?
Provides a set of CSS-only skeleton loading components with a smooth shimmer effect to enhance perceived performance during content loading.

## How is it used?
Apply the `.ease-skeleton` base class along with a variant class for the desired shape.

```html
<!-- Text Skeleton -->
<div class="ease-skeleton ease-skeleton--text"></div>

<!-- Avatar Skeleton -->
<div class="ease-skeleton ease-skeleton--avatar"></div>

<!-- Card Skeleton -->
<div class="ease-skeleton ease-skeleton--card"></div>
```

### Available Classes
| Class | Description |
|-------|-------------|
| `.ease-skeleton` | Base skeleton styles and shimmer animation |
| `.ease-skeleton--text` | Placeholder for a line of text |
| `.ease-skeleton--avatar` | Placeholder for profile pictures or circles |
| `.ease-skeleton--card` | Placeholder for large content blocks or images |

## Why is it useful?
Skeleton screens improve user experience by providing immediate visual feedback that content is coming, reducing user frustration during wait times. These utilities are pure CSS, zero-dependency, and automatically adapt to light and dark modes.
