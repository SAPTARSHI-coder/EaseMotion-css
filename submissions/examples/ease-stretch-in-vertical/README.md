# ease-stretch-in-vertical

A lightweight CSS animation that smoothly stretches an element into view vertically — scaling from 0 to full height with a fade-in effect.

---

## Preview

The element scales in from the top, expanding vertically while fading in.

---

## Usage

1. Link the stylesheet in your HTML:

```html
<link rel="stylesheet" href="style.css">
```

2. Add the class to any element:

```html
<div class="ease-stretch-in-vertical">
  Hello World
</div>
```

---

## Animation Details

| Property         | Value         |
|------------------|---------------|
| Duration         | 0.5s          |
| Easing           | ease          |
| Transform        | scaleY(0 → 1) |
| Opacity          | 0 → 1         |
| Transform Origin | top           |
| Fill Mode        | forwards      |

---

## Files

| File        | Description                       |
|-------------|-----------------------------------|
| `style.css` | Contains the animation keyframes  |
| `demo.html` | Live demo of the animation        |

---

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/my-animation`)
3. Commit your changes (`git commit -m 'Add my animation'`)
4. Push to the branch (`git push origin feature/my-animation`)
5. Open a Pull Request

---

## License

MIT
