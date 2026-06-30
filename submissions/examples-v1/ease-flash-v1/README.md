# Ease Flash

Rapid opacity flashing animation utility for alerts, warnings, and notifications.

## Features

✅ Rapid visibility toggle  
✅ Fast 0.8s timing  
✅ One-shot by default  
✅ `--ease-flash-count` support  
✅ Infinite variant available  
✅ Reduced motion accessibility support

## Usage

```html
<div class="ease-flash"></div>
```

## Flash Count

```css
:root{
  --ease-flash-count:2;
}
```

## Variants

- `.ease-flash` → one-shot flash
- `.ease-flash-infinite` → continuous flashing

## Accessibility

Includes `prefers-reduced-motion` support to respect user motion preferences.

## Included Demo Examples

- Warning Alert
- Notification Badge
- Status Indicator
- Emergency Button