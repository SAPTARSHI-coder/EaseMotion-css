# Flash Loader

A lightweight loading indicator featuring a smooth flashing animation. The loader repeatedly fades in and out to indicate that content is being loaded or processed.

## Features

* ⚡ Smooth looping flash animation
* 🎨 Pure HTML and CSS
* 📱 Responsive and lightweight
* 🚀 No JavaScript required
* 🛠️ Easy to customize using CSS variables

---

## Folder Structure

```text
submissions/
└── examples/
    └── flash-focus-[YOUR_INITIALS]/
        ├── demo.html
        ├── style.css
        └── README.md
```

---

## Installation

Include the stylesheet in your HTML file.

```html
<link rel="stylesheet" href="style.css">
```

---

## Usage

```html
<div class="ease-flash-loader"></div>
```

---

## Customization

Modify the CSS variables to match your design.

| Variable           | Description                      | Default   |
| ------------------ | -------------------------------- | --------- |
| `--loader-size`    | Width and height of the loader   | `48px`    |
| `--loader-color`   | Loader color                     | `#2563eb` |
| `--flash-duration` | Animation duration               | `1.2s`    |
| `--flash-opacity`  | Minimum opacity during animation | `0.2`     |

Example:

```css
:root {
  --loader-size: 56px;
  --loader-color: #7c3aed;
  --flash-duration: 1.5s;
  --flash-opacity: 0.15;
}
```

---

## Animation

The loader continuously transitions between low and full opacity, creating a subtle flashing effect that draws attention without being distracting.

---

## Use Cases

* Page loading screens
* API request indicators
* Dashboard loading states
* Button loading states
* Skeleton screen replacements
* Content placeholders

---

## Browser Support

Supported in all modern browsers that support:

* CSS Animations
* CSS Keyframes
* CSS Variables

---

## License

Released as part of the **EaseMotion CSS** component library.
