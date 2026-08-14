# Badge Pulse Notify

A notification badge component with pulse animation built using pure HTML, CSS, and JavaScript.

## Features

- Pure CSS pulse animation using `@keyframes`
- Customizable via CSS custom properties (`--badge-pulse-duration`, `--badge-bg`, `--badge-text-color`, `--badge-size`, `--badge-font-size`)
- Interactive notification icons (bell, envelope, chat) with count badges
- Button controls to increment counts and trigger pulse
- Inter font
- Responsive and accessible

## Folder Structure

```
ease-badge-pulse-notify-ij/
├── demo.html
├── style.css
└── README.md
```

## Usage

Include `style.css` in your HTML:

```html
<link rel="stylesheet" href="style.css">
```

### Basic HTML Structure

```html
<div class="icon-wrapper">
  <!-- icon -->
  <span class="badge" data-count="3">3</span>
</div>
```

### Trigger Pulse via JavaScript

```js
const badge = document.querySelector('.badge');
badge.classList.remove('badge-pulse');
void badge.offsetWidth;  // reflow
badge.classList.add('badge-pulse');
```

## Customization

### CSS Custom Properties

| Property                  | Default   | Description              |
|---------------------------|-----------|--------------------------|
| `--badge-pulse-duration`  | `0.4s`    | Duration of pulse animation |
| `--badge-bg`              | `#ef4444` | Badge background color    |
| `--badge-text-color`      | `#ffffff` | Badge text color          |
| `--badge-size`            | `22px`    | Minimum width and height  |
| `--badge-font-size`       | `11px`    | Font size inside badge    |

### Override Example

```css
:root {
  --badge-bg: #8b5cf6;
  --badge-pulse-duration: 0.6s;
}
```

## Animation Details

- **badge-pulse**: Scale keyframes (`1` → `1.2` → `1`) with `ease-in-out` timing
- Controlled via class toggle — remove and re-add `.badge-pulse` to replay

## Browser Support

- ✅ Chrome / Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers

## License

MIT — part of EaseMotion CSS

**Contributor**: ij  
**Status**: Ready for review
