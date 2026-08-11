# CSS Perspective Rotating Cube

A pure CSS 3D rotating cube demonstrating perspective, transforms, and smooth multi-axis animation without JavaScript.

## ✨ Features

* Pure CSS implementation
* Six-sided 3D cube
* CSS perspective depth effect
* Smooth X, Y, and Z axis rotation
* Hover-to-pause interaction
* Responsive design
* No JavaScript required
* No external dependencies
* Supports `prefers-reduced-motion`

## 📁 Files

```text
css-perspective-rotating-cube/
├── demo.html
├── style.css
└── README.md
```

## 🛠️ Technologies Used

* HTML5
* CSS3
* CSS `perspective`
* CSS `transform`
* CSS `transform-style: preserve-3d`
* CSS `@keyframes`

## 🚀 How to Use

1. Open `demo.html` in a modern web browser.
2. The cube will automatically start rotating.
3. Hover over the cube to pause the animation.
4. Move the cursor away to resume the animation.

No installation or build process is required.

## 🎨 How It Works

The cube is created using six HTML elements representing its faces.

CSS 3D transforms position each face:

* `translateZ()` creates the front and back depth.
* `rotateX()` positions the top and bottom faces.
* `rotateY()` positions the left and right faces.
* `perspective` creates the 3D depth effect.
* `transform-style: preserve-3d` keeps the faces in a three-dimensional space.
* `@keyframes` controls the continuous rotation.

## ♿ Accessibility

The demo includes accessibility considerations:

* Semantic HTML structure
* Descriptive `aria-label`
* Decorative cube faces are hidden from screen readers
* `prefers-reduced-motion` is supported
* No interaction requires JavaScript

## 📱 Responsive Design

The cube uses CSS `clamp()` to automatically adjust its size according to the viewport.

The layout also switches to a single-column layout on smaller screens.

## 🎯 Use Cases

This component can be used for:

* Landing pages
* Portfolio websites
* Product showcases
* Loading screens
* Technology websites
* Interactive CSS demonstrations
* Educational CSS examples

## 📄 License

This example follows the licensing and contribution guidelines of the EaseMotion CSS repository.
