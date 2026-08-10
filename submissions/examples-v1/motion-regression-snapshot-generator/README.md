# Motion Regression Snapshot Generator

Relates to feature request **#41376**.

## 1. What does this do?

Introduces a developer utility that automatically captures snapshots of animation states at configurable time intervals using the **Web Animations API (WAAPI)**. The snapshots record computed CSS property values (opacity, transform, box-shadow) at each step, making it easy to visually compare changes after updates and detect regressions in animation behavior.

## 2. Why is this useful for EaseMotion CSS?

Animation regressions are difficult to identify through code review alone. When a developer updates a keyframe or changes an easing function, the visual change may be subtle and hard to spot. Automated motion snapshots:
- Create a data trail of animation states over time.
- Help maintain visual consistency when updating utilities.
- Improve confidence when extending animation utilities.

## 3. How it Works

The utility leverages the **Web Animations API**:
1. **Attach Animation**: Applies the specified EaseMotion classes to a target element.
2. **Pause & Scrub**: Uses `anim.pause()` and then sets `anim.currentTime` to specific timestamps.
3. **Read Computed Styles**: At each timestamp, it calls `window.getComputedStyle()` to read the current values of tracked properties.
4. **Render Timeline**: Displays the collected snapshots as a horizontal scrollable timeline.

## 4. Example Snapshot Output (matching the issue's snippet)

```
0ms
Opacity: 0.00

100ms
Opacity: 0.25
transform: active (matrix)

200ms
Opacity: 0.50

400ms
Opacity: 1.00
```

## 5. Configuration Options

| Option | Default | Description |
|---|---|---|
| **EaseMotion Classes** | `ease-slide-up ease-fade` | The space-separated class string to test. |
| **Animation Duration** | `400ms` | The total duration of the animation to sample. |
| **Interval Step** | `100ms` | How frequently to take a snapshot. |

## 6. Browser Support

Uses the **Web Animations API** (`element.getAnimations()`, `anim.currentTime`).

| Browser | Support |
|---|---|
| Chrome | 84+ ✅ |
| Firefox | 75+ ✅ |
| Safari | 14+ ✅ |
| Edge | 84+ ✅ |
