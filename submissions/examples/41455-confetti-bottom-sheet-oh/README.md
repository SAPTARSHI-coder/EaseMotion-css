# Component: ease-confetti-bottom-sheet

This submission implements the `ease-confetti-bottom-sheet` component for GSSOC issue **#41455**.

## Description

A bottom sheet component with confetti animation effect. Features falling confetti particles when the sheet opens, creating a celebratory feel.

## Usage

```html
<div class="ease-confetti-sheet" id="mySheet">
  <div class="sheet-backdrop" onclick="toggleSheet('mySheet')"></div>
  <div class="sheet-content">
    <div class="confetti-container">
      <div class="confetti confetti-1"></div>
      <div class="confetti confetti-2"></div>
      <!-- More confetti pieces -->
    </div>
    <div class="sheet-header">
      <div class="sheet-handle"></div>
    </div>
    <div class="sheet-body">
      <h2>Title</h2>
      <p>Content here</p>
    </div>
  </div>
</div>
```

### JavaScript

```javascript
function toggleSheet(id) {
  document.getElementById(id).classList.toggle('is-open');
}
```

### Color Variants

```html
<div class="ease-confetti-sheet ease-confetti-primary">Primary</div>
<div class="ease-confetti-sheet ease-confetti-success">Success (Green)</div>
<div class="ease-confetti-sheet ease-confetti-warning">Warning (Yellow)</div>
<div class="ease-confetti-sheet ease-confetti-danger">Danger (Red)</div>
```

## CSS Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `--sheet-accent` | `#3b82f6` | Accent color |
| `--sheet-radius` | `24px` | Border radius |
| `--sheet-duration` | `0.4s` | Animation duration |

## Acceptance Criteria

- ✅ Uses EaseMotion CSS variables
- ✅ Confetti animation on open
- ✅ Smooth slide-up transition
- ✅ Backdrop blur effect
- ✅ Live demo in demo.html
- ✅ README.md with usage instructions
- ✅ `prefers-reduced-motion` support
