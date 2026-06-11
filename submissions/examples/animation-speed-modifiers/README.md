# Animation Speed Modifier Utility Classes

Resolves: #4256

## What this adds

Composable utility classes to independently control animation duration and delay on any element — without writing custom CSS.

## Duration Classes
| Class | Duration |
|---|---|
| `.em-duration-fastest` | 100ms |
| `.em-duration-fast` | 300ms |
| `.em-duration-normal` | 500ms |
| `.em-duration-slow` | 800ms |
| `.em-duration-slowest` | 1200ms |

## Delay Classes
| Class | Delay |
|---|---|
| `.em-delay-0` | 0ms |
| `.em-delay-100` | 100ms |
| `.em-delay-200` | 200ms |
| `.em-delay-300` | 300ms |
| `.em-delay-400` | 400ms |
| `.em-delay-500` | 500ms |
| `.em-delay-700` | 700ms |
| `.em-delay-1000` | 1000ms |

## Usage Example
```html
<p class="ease-fade-in em-duration-fast em-delay-200">Fades in fast, after 200ms</p>
```
