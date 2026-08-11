# CSS Modal: 3D Perspective Tilt

A smooth, accessible, and performant **3D Perspective Tilt Modal** built entirely with **HTML and Vanilla CSS**.

The component uses CSS perspective, 3D transforms, transitions, and layered effects to create a modern modal entrance animation without JavaScript.

## ✨ Features

* 🎯 Pure HTML and Vanilla CSS
* 🧊 3D perspective tilt animation
* ⚡ Hardware-accelerated transforms
* 🎨 Modern glass-style appearance
* 🌙 Dark-mode friendly
* 📱 Responsive design
* ♿ Accessible dialog structure
* ⌨️ Keyboard focus indicators
* 🚫 No external JavaScript required
* ♿ `prefers-reduced-motion` support
* 🔄 Smooth open and close transitions
* 🛡️ Backdrop-filter fallback for unsupported browsers

## 📁 Files

```text
3d-perspective-tilt-modal/
├── demo.html
├── style.css
└── README.md
```

## 🚀 Usage

### 1. Add the HTML

Create a modal trigger and modal container:

```html
<a href="#tilt-modal" class="open-modal">
  Open Modal
</a>

<div id="tilt-modal" class="modal">

  <a
    href="#"
    class="modal-overlay"
    aria-label="Close modal"
  ></a>

  <div
    class="modal-card"
    role="dialog"
    aria-modal="true"
    aria-labelledby="modal-title"
  >

    <a
      href="#"
      class="close-button"
      aria-label="Close modal"
    >
      &times;
    </a>

    <h2 id="modal-title">
      Welcome to EaseMotion
    </h2>

    <p>
      This is a pure CSS 3D perspective modal.
    </p>

  </div>

</div>
```

### 2. Add the CSS

Link the stylesheet:

```html
<link rel="stylesheet" href="style.css">
```

The modal uses the `:target` pseudo-class to control its open and closed states:

```css
.modal {
  visibility: hidden;
  opacity: 0;
}

.modal:target {
  visibility: visible;
  opacity: 1;
}
```

## 🎬 3D Animation

The initial modal state uses a perspective tilt:

```css
.modal-card {
  transform:
    rotateX(35deg)
    rotateY(-12deg)
    translateY(80px)
    scale(0.78);

  opacity: 0;
}
```

When the modal opens, it smoothly returns to its natural position:

```css
.modal:target .modal-card {
  transform:
    rotateX(0deg)
    rotateY(0deg)
    translateY(0)
    scale(1);

  opacity: 1;
}
```

The parent modal provides the 3D perspective:

```css
.modal {
  perspective: 1400px;
}
```

## 🎨 Customization

### Change the accent color

Modify the CSS variables:

```css
:root {
  --primary: #6366f1;
  --primary-hover: #818cf8;
}
```

### Change the tilt angle

Adjust the initial transform:

```css
.modal-card {
  transform:
    rotateX(35deg)
    rotateY(-12deg)
    translateY(80px)
    scale(0.78);
}
```

For a stronger effect:

```css
.modal-card {
  transform:
    rotateX(45deg)
    rotateY(-18deg)
    translateY(100px)
    scale(0.75);
}
```

### Change the perspective

```css
.modal {
  perspective: 1400px;
}
```

Lower values create a stronger perspective effect:

```css
.modal {
  perspective: 900px;
}
```

Higher values create a more subtle effect:

```css
.modal {
  perspective: 1800px;
}
```

## ♿ Accessibility

The component includes accessibility considerations such as:

* Semantic `role="dialog"`
* `aria-modal="true"`
* `aria-labelledby`
* Accessible close button labels
* Visible `:focus-visible` states
* Reduced-motion support

Example:

```html
<div
  class="modal-card"
  role="dialog"
  aria-modal="true"
  aria-labelledby="modal-title"
>
```

Users who prefer reduced motion receive a simplified transition:

```css
@media (prefers-reduced-motion: reduce) {
  .modal-card {
    transform: none;
  }
}
```

## 📱 Responsive Design

The modal adapts to smaller screens using a responsive breakpoint:

```css
@media (max-width: 600px) {
  .modal-card {
    padding: 34px 24px 24px;
  }

  .modal-actions {
    flex-direction: column;
  }
}
```

Buttons become full-width on mobile for easier interaction.

## ⚡ Performance

The component is designed to keep animation performance smooth by primarily animating:

* `transform`
* `opacity`

The modal also uses:

```css
will-change: transform, opacity;
```

and:

```css
backface-visibility: hidden;
transform-style: preserve-3d;
```

These properties help browsers efficiently render the 3D animation.

## 🌐 Browser Compatibility

The component works in modern browsers that support:

* CSS transforms
* CSS transitions
* CSS perspective
* CSS `backdrop-filter`

A fallback background is provided for browsers that do not support `backdrop-filter`.

## 🧪 Testing

To test the component:

1. Open `demo.html` in a browser.
2. Click **Open Modal**.
3. Verify the 3D tilt entrance animation.
4. Click the close button or backdrop.
5. Test the component at different viewport sizes.
6. Test keyboard focus states.
7. Enable reduced-motion preferences and verify that the animation is minimized.

## 📌 Design Goals

This component was created to provide a reusable modal pattern that combines:

> Accessibility + Performance + Modern 3D Motion

without requiring JavaScript or external dependencies.

## 🤝 Contribution

This component follows the contribution guidelines of the EaseMotion CSS project.

Before submitting changes:

```bash
git status
```

Test the component in multiple browsers and verify responsive behavior.

## 📄 License

This component is intended for use within the EaseMotion CSS project and follows the repository's license.

## 🔗 Related Issue

**CSS Modal: 3D Perspective Tilt Variation #180**

Closes `#73424`
