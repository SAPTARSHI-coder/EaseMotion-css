# stagger-utilities

## What it does
Automatically applies increasing animation-delay to each child element,
creating a sequential stagger effect without manual delay assignment.

## Proposed ease-* class names
- `.ease-stagger` — 100ms steps
- `.ease-stagger-sm` — 50ms steps  
- `.ease-stagger-md` — 150ms steps

## Usage
```html
<div class="ease-stagger">
  <div class="ease-slide-up">Item 1</div>
  <div class="ease-slide-up">Item 2</div>
  <div class="ease-slide-up">Item 3</div>
</div>
```

## Works with
- Flex layouts
- Grid layouts
- Lists and cards

## Closes
Issue #9212