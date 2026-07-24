# Heartbeat Stepper

A responsive **Heartbeat Stepper** component built with pure HTML and CSS for the EaseMotion CSS library. The active step features a heartbeat animation to draw attention while maintaining a clean, modern appearance.

## Features

* ❤️ Heartbeat animation for the active step
* 🎨 Pure HTML and CSS (no JavaScript)
* 📱 Fully responsive layout
* ♿ Accessible and easy to customize
* ⚡ Lightweight and reusable
* 🧩 Fits the EaseMotion CSS animation-first philosophy

## Folder Structure

```text
heartbeat-stepper-srujana-manda/
├── demo.html
├── style.css
└── README.md
```

## Usage

Include the stylesheet:

```html
<link rel="stylesheet" href="style.css">
```

Use the component:

```html
<div class="ease-heartbeat-stepper">

  <div class="step completed">
    <div class="circle">✓</div>
    <span>Account</span>
  </div>

  <div class="line"></div>

  <div class="step active">
    <div class="circle">2</div>
    <span>Details</span>
  </div>

  <div class="line"></div>

  <div class="step">
    <div class="circle">3</div>
    <span>Payment</span>
  </div>

  <div class="line"></div>

  <div class="step">
    <div class="circle">4</div>
    <span>Complete</span>
  </div>

</div>
```

## Customization

You can easily customize the component by modifying the CSS variables in `style.css`, including:

* Primary color
* Success color
* Background color
* Text color
* Shadow
* Animation duration

## Browser Support

* ✅ Chrome
* ✅ Firefox
* ✅ Edge
* ⚪ Safari (not tested)

## Accessibility

* Responsive on desktop and mobile devices
* High-contrast colors for readability
* Semantic HTML structure
* Keyboard-friendly markup

## License

This component is contributed to the **EaseMotion CSS** project under the repository's license.
