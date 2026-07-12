# Spiral Reaction Picker

A glassmorphism-style emoji reaction picker with spiral entrance animation. Zero JavaScript required.

## Usage

```html
<div class="spiral-picker">
  <!-- Toggle checkbox (hidden) -->
  <input class="spiral-picker__toggle" type="checkbox" id="picker1" />

  <!-- Trigger button -->
  <label class="spiral-picker__trigger" for="picker1">😊 React</label>

  <!-- Backdrop (click outside to close) -->
  <label class="spiral-picker__backdrop" for="picker1"></label>

  <!-- Emoji panel -->
  <div class="spiral-picker__panel">
    <div class="spiral-picker__item" data-label="Love">
      <input type="radio" name="reaction" value="love" aria-label="Love" />
      ❤️
    </div>
    <div class="spiral-picker__item" data-label="Haha">
      <input type="radio" name="reaction" value="haha" aria-label="Haha" />
      😂
    </div>
    <!-- add more items... -->
  </div>
</div>
```

## How It Works

- A hidden `<input type="checkbox">` controls open/close via `:checked` + sibling selectors
- Each emoji is a `<div>` containing a hidden `<input type="radio">` for selection
- The spiral animation uses staggered `--spiral-start-deg` CSS custom properties per `nth-child`
- Clicking the backdrop label (full-screen) closes the picker — zero JS
- `:has(input:checked)` highlights the selected emoji with a floating animation

## Variants

| Class on `.spiral-picker` | Description |
|---|---|
| (none) | Dark glassmorphism (default) |
| `spiral-picker--light` | Light frosted glass variant |

## Emoji Item

Each item needs:
- `data-label` — tooltip text shown on hover
- One `<input type="radio">` inside (same `name` per picker group)
- An emoji character as text content

## Stagger

Items animate in spiral sequence via `nth-child` delays (0ms → 50ms → 100ms → ... per item). Up to 6 items are pre-configured. Add more by extending the `nth-child` selectors.

## Accessibility

- Radio inputs are visually hidden but in the accessibility tree
- `aria-label` on each radio input
- `role="group"` on the panel
- `prefers-reduced-motion` disables all animations

## Submission

- **Author:** sudha09-git
- **Issue:** #41509
- **Files:** `style.css`, `demo.html`
