# Motion Regression Comparator

Relates to feature request **#41429**.

## 1. What does this do?

Introduces a Motion Regression Comparator that allows developers to compare two versions of the same EaseMotion animation side-by-side. The tool highlights differences in duration, delay, easing functions, and CSS classes, making it easy to catch unintended animation changes before merging pull requests.

## 2. Why is this useful for EaseMotion CSS?

Animation regressions are difficult to detect during development because even small timing changes can significantly alter the user experience. A dedicated comparison tool:
- Simplifies reviewing motion changes in pull requests.
- Improves release confidence by providing a visual regression baseline.
- Helps contributors validate animation updates before merging.

## 3. How is it used?

**HTML** (matches the issue's snippet exactly)
```html
<div class="ease-compare">
  <div class="ease-version-a">
    <div class="ease-fade-up">
      Version A
    </div>
  </div>

  <div class="ease-version-b">
    <div class="ease-fade-up ease-delay-200">
      Version B
    </div>
  </div>
</div>
```

## 4. Example Comparison Report (matches the issue's CSS snippet exactly)

```
/* Example comparison report */

Animation:
ease-fade-up

Difference Summary

Duration
300ms → 400ms

Delay
0ms → 200ms

Timing Function
ease-out → ease-in-out

Transforms
No Change
```

## 5. Features Included

- **Side-by-Side Stage**: Both versions animate simultaneously in separate panels (blue for A, orange for B), so visual regressions are immediately obvious.
- **Configurable Parameters**: Each version has independent inputs for classes, duration (ms), delay (ms), and easing function.
- **Structured Diff Report**: Each parameter is shown as a row. Changed values are highlighted in amber, unchanged values are confirmed in green with "No Change".
- **Regression Badge**: A status badge summarizes whether differences were found (e.g., "⚠️ 3 differences" or "✅ No regressions").
- **One-Click Compare**: Pressing "Compare" re-plays both animations and regenerates the report simultaneously.
