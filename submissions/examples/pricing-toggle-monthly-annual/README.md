# CSS Pricing Toggle — Monthly / Annual

A responsive pricing section with an animated Monthly/Annual billing toggle built entirely with HTML and CSS.

## ✨ Features

* Pure HTML and CSS
* No JavaScript required
* Animated billing toggle
* Monthly and annual pricing states
* Responsive pricing cards
* Keyboard-accessible radio controls
* Visible focus states
* `prefers-reduced-motion` support
* Responsive on desktop, tablet, and mobile
* Featured pricing plan
* Hover interactions

## 📁 Files

```text
pricing-toggle-monthly-annual/
├── demo.html
├── style.css
└── README.md
```

## 🚀 How It Works

The component uses two radio inputs:

* Monthly
* Annual

CSS sibling selectors detect which option is selected and update the displayed prices without JavaScript.

The toggle slider uses CSS `transform` and `transition` to animate between the two billing states.

## 🎨 Customization

You can customize:

* Plan names
* Prices
* Features
* Colors
* Border radius
* Shadows
* Animation duration
* Responsive breakpoints

All styles are contained in `style.css`.

## ♿ Accessibility

The demo includes:

* Semantic `main`, `section`, `header`, and `article` elements
* Proper heading hierarchy
* Labels associated with radio inputs
* Keyboard-accessible controls
* Visible `:focus-visible` state
* Reduced-motion support

## 🧪 Testing

Open `demo.html` directly in a modern browser.

Test the following:

1. Select Monthly.
2. Select Annual.
3. Verify that prices change.
4. Navigate to the toggle using the keyboard.
5. Use Tab and keyboard controls to switch options.
6. Resize the browser to test responsive behavior.
7. Enable reduced-motion preferences and verify that transitions are reduced.

## 📌 Related Issue

EaseMotion CSS issue #68303 — CSS Pricing Toggle Monthly/Annual.

## 📄 License

This contribution follows the license and contribution guidelines of the EaseMotion CSS repository.
