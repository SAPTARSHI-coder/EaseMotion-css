# ease-miss — Near-Miss Erratic Horizontal Jitter

Erratic horizontal translateX jitter simulating a near-miss reaction — more chaotic and faster than `ease-shake`. Uses irregular distances and non-uniform keyframe timing to feel unpredictable.

## Difference from ease-shake

|              | `ease-shake`  | `ease-miss`             |
| ------------ | ------------- | ----------------------- |
| Duration     | 0.5s          | 0.4s (faster)           |
| Oscillations | 3 regular     | 13 irregular            |
| Timing       | `ease`        | `linear` (erratic feel) |
| Distances    | ±6px uniform  | ±3–9px irregular        |
| Feel         | Urgent, error | Chaotic, near-miss      |

## Acceptance Criteria

- ✅ Horizontal jitter, fast (0.4s default)
- ✅ `translateX` oscillation only
- ✅ Triggered by class add
- ✅ More erratic than `ease-shake` (13 irregular keyframes vs 3 regular)

## Classes

| Class               | Distance | Duration |
| ------------------- | -------- | -------- |
| `.ease-miss`        | 8px      | 0.4s     |
| `+ .ease-miss-sm`   | 3px      | 0.4s     |
| `+ .ease-miss-lg`   | 14px     | 0.4s     |
| `+ .ease-miss-slow` | 8px      | 0.7s     |

## CSS Custom Properties

| Token                  | Default | Description             |
| ---------------------- | ------- | ----------------------- |
| `--ease-miss-duration` | `0.4s`  | Animation duration      |
| `--ease-miss-distance` | `8px`   | Max translateX distance |

## Usage

```html
<!-- Wrong answer feedback -->
<div
  id="answer"
  onclick="
  const el = document.getElementById('answer');
  el.classList.remove('ease-miss');
  void el.offsetWidth;
  el.classList.add('ease-miss');
"
>
  Wrong answer option
</div>

<!-- Custom intensity -->
<div
  class="ease-miss"
  style="--ease-miss-distance: 16px; --ease-miss-duration: 0.3s;"
>
  Violent miss
</div>
```

## Use cases

- Quiz wrong answer feedback
- Game near-miss / dodge reaction
- Failed form submission
- Incorrect PIN/password entry
- "Nope" rejection interaction

## Accessibility

`animation-duration` reduced to `1ms` when `prefers-reduced-motion: reduce` is set.

Closes #11848
