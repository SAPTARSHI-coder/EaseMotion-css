# Smooth Rotate Animation

## What does this do?

This showcase demonstrates a continuous CSS rotation animation that avoids visible jumps between animation loop iterations by using a linear infinite transform rotation.

---

## Features

- Pure HTML & CSS
- Smooth continuous rotation
- No abrupt animation reset
- Suitable for loaders and icons
- Responsive demo
- No JavaScript required

---

## Usage

```html
<div class="ease-rotate-smooth">
    ⚙️
</div>
```

---

## How it works

The animation rotates an element from `0deg` to `360deg` using a linear timing function, ensuring seamless looping.

```css
.ease-rotate-smooth{
    animation:rotate-continuous 2s linear infinite;
}
```

---

## Why is it useful?

Continuous rotation is commonly used for:

- Loading indicators
- Settings icons
- Refresh buttons
- Progress indicators
- Dashboard widgets

This implementation provides a smooth, lightweight animation that aligns with EaseMotion CSS's animation-first philosophy.

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