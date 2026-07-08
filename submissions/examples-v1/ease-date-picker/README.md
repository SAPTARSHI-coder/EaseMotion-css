# ease-date-picker — Simple Calendar Date Picker

## What does this do?

A calendar date picker component with a styled input trigger and popover calendar grid. Supports month navigation, date selection, sizes, inline mode, and dark mode.

## Variants

| Variant | Class | Description |
|---------|-------|-------------|
| Popover (default) | *(none)* | Click input to open calendar dropdown |
| Inline | `.ease-date-picker--inline` | Calendar always visible |
| Small | `.ease-date-picker--sm` | 28px day cells |
| Medium (default) | *(none)* | 36px day cells |
| Large | `.ease-date-picker--lg` | 44px day cells |

## How is it used?

```html
<div class="ease-date-picker" id="my-date-picker">
  <div class="ease-date-picker__input">
    <span class="ease-date-picker__input-text">Select a date</span>
    <span class="ease-date-picker__input-icon">&#128197;</span>
  </div>
  <div class="ease-date-picker__popover">
    <div class="ease-date-picker__header">
      <span class="ease-date-picker__month"></span>
      <div class="ease-date-picker__nav">
        <button class="ease-date-picker__nav-btn--prev">&#8249;</button>
        <button class="ease-date-picker__nav-btn--next">&#8250;</button>
      </div>
    </div>
    <div class="ease-date-picker__dow">
      <span>Su</span><span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span>
    </div>
    <div class="ease-date-picker__grid"></div>
  </div>
</div>
```

```js
initDatePicker(document.getElementById('my-date-picker'));
```

## Behaviour

- **Click input** to open/close the calendar popover
- **Click a day** to select it (fills with primary colour)
- **Today** is outlined with primary colour
- **Prev/next month** buttons navigate months
- **Other month days** are muted
- **Click outside** closes the popover
- **Inline variant** shows calendar without input

## Why is it useful?

Date pickers are a fundamental form input pattern needed for date-of-birth, appointment scheduling, and deadline selection. This component provides a clean, lightweight implementation.

## Tech Stack

- HTML
- CSS (CSS Grid, custom properties)
- JavaScript (calendar rendering, month navigation, date selection, popover toggle)

## Preview

Open `demo.html` directly in your browser to see the popover and inline variants in action.

## Contribution Notes

- Class naming follows EaseMotion BEM convention (`ease-date-picker__*`)
- Uses `var(--ease-primary)` for selected/today colours
- Maintainer may adjust naming before merging
