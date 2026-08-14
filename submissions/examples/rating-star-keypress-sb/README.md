# Rating Component Star Keypress Selection

## What does it do?
Adds full keyboard support to a star rating: ArrowRight/Up increases the preview, ArrowLeft/Down decreases it, Enter/Space commits the selection. The container exposes `role="slider"` with `aria-valuenow/min/max`.

## How is it used?
```javascript
import { RatingKeys } from './script.js';
const r = new RatingKeys(document.getElementById('rating'), { stars: 5 });
r.setValue(3); r.getValue(); r.destroy();
```

## Why is it useful?
A mouse-only rating is unusable for keyboard and screen-reader users. Exposing it as a `slider` with arrow-key preview + Enter/Space commit matches the expected interaction model and announces the value via `aria-valuenow`.

## Testing
```bash
npx vitest run --config <inline include> submissions/examples/rating-star-keypress-sb/rating.test.js
```
- **Happy path**: role=slider + aria valuemin/max/now; ArrowRight increases preview; ArrowLeft decreases; Enter commits.
- **Edge cases**: ArrowUp/Down; Space commits; preview clamps at max/0; Enter with no preview keeps value.
- **Invalid inputs**: setValue rejects out-of-range/non-number; throws without container.

## Tech Stack
HTML, CSS, JavaScript (keyboard + ARIA slider), EaseMotion CSS.

## Preview
Open `demo.html`, focus the rating, use arrows + Enter/Space.

Closes #81905
