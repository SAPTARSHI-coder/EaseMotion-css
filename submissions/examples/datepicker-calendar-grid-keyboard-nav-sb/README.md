# Datepicker Calendar Grid Keyboard Navigation

## What does it do?
A calendar grid supporting the WAI-ARIA Date Picker Dialog keyboard pattern:
- ArrowRight / ArrowLeft — next / previous day
- ArrowDown / ArrowUp — next / previous week
- Home / End — first / last day of the week
- PageDown / PageUp — next / previous month (clamps to month length)
- Enter / Space — select the focused day

The grid uses `role="grid"` with `role="row"` + `role="gridcell"`. Each cell carries `aria-selected` reflecting selection and a roving `tabindex` so only the focused cell is in the tab order.

## How is it used?
```html
<div id="datepicker"></div>
```
```javascript
import { DatePicker } from './script.js';
const d = new DatePicker(document.getElementById('datepicker'), { date: new Date(2026, 0, 15) });
d.move('ArrowRight'); d.selectFocused(); d.getFocused(); d.destroy();
```

## Why is it useful?
Date pickers that are mouse-only are unusable for keyboard and screen-reader users. Implementing the documented grid-keyboard pattern (with `aria-selected` and roving tabindex) makes the calendar operable from the keyboard.

## Testing
```bash
npx vitest run --config <inline include> submissions/examples/datepicker-calendar-grid-keyboard-nav-sb/datepicker.test.js
```
- **Happy path**: role=grid; rows + gridcells with data-date; focused cell has roving tabindex; ArrowRight/ArrowDown move.
- **Edge cases**: PageDown moves month + clamps day; Home/End move to week bounds; Enter selects; move() returns false for unmapped keys.
- **Invalid inputs**: throws without root; throws on invalid date.

## Tech Stack
HTML, CSS (grid + selected state), JavaScript (grid keyboard nav), EaseMotion CSS.

## Preview
Open `demo.html`, focus the grid, use arrow keys.

Closes #81908
