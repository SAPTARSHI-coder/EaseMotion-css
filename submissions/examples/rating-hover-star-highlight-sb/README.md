# Rating Component Mouse Hover Star Highlight

## What does it do?
Highlights stars from 1 up to the hovered index on `mouseenter`, clears the hover highlight on `mouseleave`, and keeps a committed `setRating()` value visible when not hovering.

## How is it used?
```javascript
import { RatingHover } from './script.js';
const r = new RatingHover(document.getElementById('rating'), { stars: 5 });
r.setRating(3); // commits a value
r.destroy();
```

## Why is it useful?
A usable star rating should preview on hover without committing, and fall back to the committed value after hover leaves. This keeps hover and committed state separate so they don't clobber each other, and syncs `aria-checked`.

## Testing
```bash
npx vitest run --config <inline include> submissions/examples/rating-hover-star-highlight-sb/rating.test.js
```
- **Happy path**: builds N stars; mouseenter highlights up to index; mouseleave clears; setRating persists.
- **Edge cases**: hover overrides committed visually; aria-checked only on committed; default 5 stars.
- **Invalid inputs**: setRating rejects out-of-range/non-number; invalid hover index ignored; throws without container.

## Tech Stack
HTML, CSS, JavaScript (mouseenter/leave + ARIA radiogroup), EaseMotion CSS.

## Preview
Open `demo.html` and hover the stars.

Closes #82012
