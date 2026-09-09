# Range Slider ARIA Valuetext

## What does it do?
Keeps a range input's `aria-valuenow` and `aria-valuetext` in sync with its value. `aria-valuetext` is a human-readable label (e.g. "3 of 5" or "Medium") computed from a formatter, so screen readers announce meaning rather than just a number.

## How is it used?
```javascript
import { RangeAria } from './script.js';
const r = new RangeAria(inputEl, {
  formatter: (v) => ['Off', 'Low', 'Medium', 'High'][v],
});
r.setValue(2); r.getValue(); r.getValuetext(); r.destroy();
```

## Why is it useful?
A native range input announces its numeric value, which is meaningless for stepped/labelled scales (volume levels, font sizes). Setting `aria-valuetext` lets screen readers say "Medium" instead of "2", improving comprehension.

## Testing
```bash
npx vitest run --config <inline include> submissions/examples/range-slider-aria-valuetext-sb/range.test.js
```
- **Happy path**: role=slider + aria-valuemin/max/now; default valuetext "value of max"; custom formatter; input event re-renders.
- **Edge cases**: setValue clamps above max/below min; formatter that throws falls back to raw value; defaults min=0/max=100; getValuetext.
- **Invalid inputs**: setValue rejects non-finite; throws without input.

## Tech Stack
HTML, CSS, JavaScript (ARIA slider + formatter), EaseMotion CSS.

## Preview
Open `demo.html` and drag the slider.

Closes #81913
