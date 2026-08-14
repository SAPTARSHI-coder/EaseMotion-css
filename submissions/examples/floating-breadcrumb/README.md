````markdown
# Floating Breadcrumb

A clean and responsive floating breadcrumb navigation component built using pure HTML and CSS.

## ✨ Features

- Floating pill-style design
- Responsive layout
- Modern shadow effect
- Glass-like background
- Hover animations
- Accessible breadcrumb navigation
- No JavaScript required
- No external dependencies

## 🛠️ Technologies

- HTML5
- CSS3

## 📁 Folder Structure

```text
floating-breadcrumb/
├── index.html
├── style.css
└── README.md
````

## 🚀 Usage

1. Open `index.html` in a browser.
2. The breadcrumb navigation will appear at the top of the page.
3. Update the links and text according to your website structure.

## 📌 HTML Structure

```html
<nav class="breadcrumb" aria-label="Breadcrumb">
    <a href="#">Home</a>

    <span class="separator">›</span>

    <a href="#">Products</a>

    <span class="separator">›</span>

    <a href="#">Categories</a>

    <span class="separator">›</span>

    <span class="current" aria-current="page">
        Details
    </span>
</nav>
```

## ♿ Accessibility

The component uses:

* `aria-label="Breadcrumb"` to identify the navigation.
* `aria-current="page"` to identify the current page.

## 📱 Responsive Design

The breadcrumb automatically adapts to smaller screens using CSS media queries.

On mobile devices, the breadcrumb can wrap onto multiple lines while maintaining readability.

## 🎨 Customization

You can easily customize:

* Background color
* Text colors
* Border radius
* Shadow
* Spacing
* Font size
* Hover effects

## 📄 License

This component is contributed to the EaseMotion-css project as part of GSSoC 2026.

```
```
