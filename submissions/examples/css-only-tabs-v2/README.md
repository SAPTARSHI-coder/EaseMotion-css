# CSS-Only Tabs Without JavaScript

A responsive tab component built entirely with HTML and CSS. No JavaScript or external libraries are required.

## ✨ Features

* Pure HTML and CSS
* No JavaScript
* Responsive layout
* Three tab panels
* Animated active-tab indicator
* Keyboard-accessible native controls
* Visible focus state
* Hover interactions
* Reduced-motion support
* Easy to customize

## 📁 Files

```text
css-only-tabs/
├── demo.html
├── style.css
└── README.md
```

## 🚀 How It Works

The component uses native radio inputs as the tab state.

CSS sibling selectors detect the selected radio button and display the corresponding content panel.

For example:

```html
<input type="radio" name="tabs" id="tab-overview" checked>
<input type="radio" name="tabs" id="tab-features">
<input type="radio" name="tabs" id="tab-usage">
```

The checked state is then used by CSS to control which panel is visible.

No JavaScript is required.

## ♿ Accessibility

The component provides:

* Native keyboard-focusable radio controls
* Labels associated with every control
* Semantic `main`, `section`, `header`, and `article` elements
* Visible focus indication
* Reduced-motion support
* Responsive text and controls

## 📱 Responsive Design

The layout adapts to smaller screens using CSS media queries.

It has been designed for:

* Desktop
* Tablet
* Mobile

## 🧪 Testing

Open `demo.html` in a modern browser.

Test:

1. Click each tab.
2. Confirm the correct panel appears.
3. Use the keyboard to reach the tab controls.
4. Verify the focus indicator.
5. Resize the browser window.
6. Test with reduced-motion preferences enabled.

## 📌 Related Issue

EaseMotion CSS issue #68301 — CSS-only Tabs without JS.

## 📄 License

This contribution follows the license and contribution guidelines of the EaseMotion CSS repository.
