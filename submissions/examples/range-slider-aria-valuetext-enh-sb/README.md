# Range Slider ARIA Valuetext Labels

## What does it do?
Wraps a native `<input type=range>` so it exposes `role=slider` with `aria-valuemin/max/now/text`, `aria-orientation`, and a human-readable `aria-valuetext` built from a formatter (e.g. "40 dB"). Keeps the native value, ARIA value, and visible label in sync on input/change.

## How is it used?
```javascript
import { RangeSlider } from './script.js';
const s = new RangeSlider(document.getElementById('r'), { label: 'Volume', format: (v) => v + ' dB' });
s.setValue(40); s.getValue(); s.getValueText(); s.destroy();
```

## Why is it useful?
A native range input exposes its value to AT as a raw number; screen-reader users need `aria-valuetext` to hear the human-readable form ("40 dB" not "40"). This wrapper keeps that text in sync as the user drags.

## Testing
```bash
npx vitest run --config <inline include> submissions/examples/range-slider-aria-valuetext-enh-sb/range.test.js
```
- **Happy path**: role=slider + aria-valuemin/max + aria-orientation; aria-valuenow matches initial; default formatter; custom formatter.
- **Edge cases**: setValue updates valuenow + valuetext + native value; clamps to [min,max]; input event syncs; vertical orientation; setLabel; getValue/getValueText.
- **Invalid inputs**: throws without input element.

## Tech Stack
HTML, CSS (thumb styling + forced-colors), JavaScript (ARIA value sync), EaseMotion CSS.

## Preview
Open `demo.html`, drag the slider.

Closes #81916
