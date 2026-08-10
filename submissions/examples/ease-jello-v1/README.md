# ease-jello

Jello wobble effect using skewX/skewY keyframes. Zero JavaScript required.

## Usage

```html
<!-- Hover trigger (default) -->
<button class="ease-jello">Hover to jello</button>

<!-- Always looping -->
<span class="ease-jello-loop">Always jello-ing</span>

<!-- Click trigger -->
<button class="ease-jello-click">Click to jello</button>
```

## Intensity Variants

| Class | Skew intensity |
|---|---|
| `ease-jello-subtle` | Light wobble (5deg max) |
| `ease-jello` | Default wobble (10deg max) |
| `ease-jello-hard` | Exaggerated wobble (18deg max) |

## Trigger Variants

| Class | Trigger |
|---|---|
| `ease-jello` | On hover |
| `ease-jello-loop` | Infinite loop |
| `ease-jello-click` | On click/active |

## Speed Variants

| Class | Duration |
|---|---|
| `ease-jello-fast` | 0.4s |
| (default) | 0.8s |
| `ease-jello-slow` | 1.4s |

## Delay Variants (for staggered loops)

| Class | Delay |
|---|---|
| `ease-delay-100` | 100ms |
| `ease-delay-200` | 200ms |
| `ease-delay-300` | 300ms |
| `ease-delay-400` | 400ms |
| `ease-delay-500` | 500ms |

## Combining Variants

```html
<!-- Hard + slow loop with stagger -->
<span class="ease-jello-loop ease-jello-hard ease-jello-slow ease-delay-200">🎯</span>
```

## Submission

- **Author:** sudha09-git
- **Issue:** #3874
- **Files:** `style.css`, `demo.html`
