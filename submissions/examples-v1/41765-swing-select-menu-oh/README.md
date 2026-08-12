# Component: ease-swing-select-menu

This submission implements the `ease-swing-select-menu` component for GSSOC issue **#41765**.

## Description

An animated select menu component with a swing opening animation. Uses CSS 3D transforms and keyframes for the swing effect.

## Usage

```html
<div class="ease-swing-select-menu">
  <button class="select-trigger" aria-haspopup="listbox">
    <span class="select-value">Select an option</span>
    <span class="select-arrow"></span>
  </button>
  <ul class="select-options" role="listbox">
    <li class="select-option">Option 1</li>
    <li class="select-option">Option 2</li>
    <li class="select-option">Option 3</li>
  </ul>
</div>
```

### JavaScript (Required)

```javascript
document.querySelectorAll('.ease-swing-select-menu').forEach(menu => {
  const trigger = menu.querySelector('.select-trigger');
  const options = menu.querySelector('.select-options');
  
  trigger.addEventListener('click', () => {
    menu.classList.toggle('is-open');
  });
  
  options.querySelectorAll('.select-option').forEach(option => {
    option.addEventListener('click', () => {
      menu.querySelector('.select-value').textContent = option.textContent;
      menu.classList.remove('is-open');
    });
  });
});
```

### Color Variants

```html
<div class="ease-swing-select-menu ease-swing-primary">
  ...
</div>
```

## CSS Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `--select-bg` | `rgba(255, 255, 255, 0.05)` | Background color |
| `--select-border` | `rgba(255, 255, 255, 0.1)` | Border color |
| `--select-hover` | `rgba(255, 255, 255, 0.1)` | Hover background |

## Acceptance Criteria

- ✅ Uses EaseMotion CSS variables
- ✅ Swing animation using `@keyframes`
- ✅ Live demo in demo.html
- ✅ README.md with usage instructions
- ✅ Responsive design
- ✅ `prefers-reduced-motion` support
- ✅ Accessibility attributes (aria-*)
