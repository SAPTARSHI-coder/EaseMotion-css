# ease-gap-responsive

Automatically adjusts grid/flex gap based on viewport width using `clamp()`.

## Usage

```html
<div class="grid ease-gap-responsive">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

## CSS Output

```css
.ease-gap-responsive {
  gap: clamp(0.5rem, 2vw, 2rem);
}
```

## How it works

- Minimum gap: `0.5rem` on narrow viewports
- Preferred gap: `2vw` — scales with viewport width
- Maximum gap: `2rem` on wide viewports

## Use Case

Responsive grids and flex layouts that need fluid spacing without breakpoints.
