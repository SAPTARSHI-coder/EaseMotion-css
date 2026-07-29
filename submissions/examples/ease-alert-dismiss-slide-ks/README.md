# Alert Dismiss Slide KS

## What does this do?

Creates dismissible alert banners that slide out using CSS custom properties. Supports info, success, warning, and error alerts.

## How is it used?

```html
<div class="eads-alert eads-success">
    <div class="eads-msg">Success alert.</div>
    <button class="eads-close">&times;</button>
</div>
```

Dismiss the alert using:

```js
alert.classList.add("eads-dismiss");
```

Customize slide distance:

```css
:root{
    --eads-slide-distance:120%;
}
```

## Why is this useful?

This component provides smooth dismiss animations with customizable slide distances using CSS variables, making it reusable and easy to integrate into modern interfaces.