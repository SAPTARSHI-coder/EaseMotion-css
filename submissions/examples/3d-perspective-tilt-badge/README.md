# CSS Badge: 3D Perspective Tilt Variation

A modern, interactive badge component built using **HTML** and **CSS** featuring a smooth **3D perspective tilt** effect. The design is lightweight, responsive, accessible, and requires no JavaScript.

## ✨ Features

- 🎨 Pure HTML & CSS
- 🚀 Smooth 3D perspective hover animation
- ⚡ Hardware-accelerated CSS transforms
- 🌙 Dark mode compatible
- 📱 Responsive layout
- ♿ Supports `prefers-reduced-motion`
- 🔧 Easy to customize

## 📸 Preview

Hover over any badge to see the 3D perspective tilt animation.

## 🛠 Technologies Used

- HTML5
- CSS3
  - `transform`
  - `perspective`
  - `rotateX()`
  - `rotateY()`
  - `transition`
  - `box-shadow`
  - `linear-gradient`

## 📂 Project Structure

```
project/
│── index.html
│── style.css
└── README.md
```

## 🚀 Getting Started

1. Clone the repository:

```bash
git clone https://github.com/<username>/<repository>.git
```

2. Navigate to the project folder:

```bash
cd repository
```

3. Open `index.html` in your browser.

No installation or dependencies are required.

## 🎨 Customization

You can create new badge styles by changing the gradient colors.

Example:

```css
.badge-custom {
    background: linear-gradient(135deg, #06b6d4, #2563eb);
}
```

You can also adjust the tilt intensity:

```css
transform:
    perspective(800px)
    rotateX(18deg)
    rotateY(-18deg);
```

Increase or decrease the rotation values to achieve different 3D effects.

## ♿ Accessibility

- Supports `prefers-reduced-motion`.
- High contrast text for readability.
- Keyboard accessible when used with interactive elements.

## 📄 License

This project is open source and available under the MIT License.
