# Progress Bar ARIA Valuenow Compliance

## What does it do?
Keeps a progressbar's `role`, `aria-valuemin`, `aria-valuemax`, and `aria-valuenow` in sync with the visual fill width. Values are clamped into `[min, max]` and the percentage width is computed.

## How is it used?
```javascript
import { ProgressAria } from './script.js';
const p = new ProgressAria(document.getElementById('bar'), { min: 0, max: 100, value: 0 });
p.setValue(60); // clamps + updates aria-valuenow + width
p.getValue(); p.destroy();
```

## Why is it useful?
A progressbar that updates its width without syncing `aria-valuenow` is invisible to screen readers. This keeps the ARIA value always consistent with the visual state, and clamps inputs so the bar can never overflow or report an out-of-range value.

## Testing
```bash
npx vitest run --config <inline include> submissions/examples/progress-bar-aria-valuenow-sb/progress.test.js
```
- **Happy path**: role + aria-valuemin/max/now set; fill width = percent; setValue updates both.
- **Edge cases**: clamps above max / below min; correct percent with non-zero min; defaults; destroy() removes ARIA.
- **Invalid inputs**: setValue rejects non-finite; clamp swaps min>max; throws without element.

## Tech Stack
HTML, CSS (`ease-progress*`), JavaScript (ARIA + clamp), EaseMotion CSS.

## Preview
Open `demo.html` and click +10.

Closes #81903
