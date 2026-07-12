# Mobile Safe Shake Animation

## What does this do?

This example demonstrates a mobile-safe shake animation that prevents unwanted horizontal scrollbar flashes by wrapping animated elements inside an `overflow-x: hidden` container.

---

## Features

- Pure HTML & CSS
- Mobile-friendly shake animation
- Prevents horizontal scrolling
- Responsive demo
- Lightweight implementation
- No JavaScript required

---

## Usage

```html
<div class="ease-shake-wrapper">
    <div class="ease-shake">
        Invalid Password
    </div>
</div>
```

---

## How it works

The wrapper clips temporary horizontal overflow while the animation uses moderate horizontal translation values.

```css
.ease-shake-wrapper{
    overflow-x:hidden;
    width:100%;
}

.ease-shake{
    animation:shake-fixed .5s ease;
}
```

---

## Why is it useful?

Shake animations are commonly used for validation feedback, alerts, and interactive UI elements. This implementation avoids temporary horizontal overflow on small mobile screens, improving usability while preserving the intended animation effect.

---

## Files

```
demo.html
style.css
README.md
```

---

## Browser Support

- Chrome
- Firefox
- Edge
- Safari

---

## License

Example submission for EaseMotion CSS.