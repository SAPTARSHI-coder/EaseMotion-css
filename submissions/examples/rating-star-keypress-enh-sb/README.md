# Rating Star Keypress Selection

## What does it do?
A star-rating with `role=slider` (composite) semantics: the group has `role=slider` + `aria-valuemin/max/now/text`, each star is a button with `aria-label`. ArrowLeft/Right (or Up/Down) adjust the value by ±1, Home/End jump. Respects `prefers-reduced-motion`.

## How is it used?
```javascript
import { Rating } from './script.js';
const r = new Rating(document.getElementById('rating'), { max: 5, value: 3 });
r.setValue(4); r.getValue(); r.destroy();
```

## Why is it useful?
Star ratings that are mouse-only are unusable from the keyboard. The composite-slider pattern lets keyboard users set the value with arrows, and `aria-valuetext` announces the current rating ("3 of 5 stars") to screen readers.

## Testing
```bash
npx vitest run --config <inline include> submissions/examples/rating-star-keypress-enh-sb/rating.test.js
```
- **Happy path**: role=slider + aria-valuemin/max; max star buttons with aria-label; starts at value 0.
- **Edge cases**: ArrowRight/Left adjust; Home/End; clamps to [0, max]; click sets value; aria-valuetext format; aria-pressed on stars.
- **Invalid inputs**: throws without root element.

## Tech Stack
HTML, CSS (star styling + reduced motion + forced-colors), JavaScript (composite slider), EaseMotion CSS.

## Preview
Open `demo.html`, focus the rating, use arrow keys.

Closes #81904
